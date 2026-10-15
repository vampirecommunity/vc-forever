/*
 * vc-search.js — поиск по статике сайта «Сообщество Вампиров» (ES5, без внешних зависимостей).
 *
 * Данные (файлы лежат рядом со страницей поиска, собираются _tools/vc-search-build.py):
 *   vc-search-meta.js  → window.VC_IDX_META  — адрес, заголовок, категория и лид страницы
 *                                              плюс индекс по словам заголовков (лёгкий, грузится сразу);
 *   vc-search-index.js → window.VC_IDX_WORDS — полнотекстовый индекс по началам слов
 *                                              (тяжёлый, подгружается по требованию: VCSearch.loadFull()).
 *
 * Поиск идёт целиком в браузере: работает и по http(s), и при открытии файлов с диска (file://),
 * без обращения к внешним сервисам. Морфология — по первым 6 буквам слова
 * («вампир» находит «вампиры», «вампирами», «вампиризм»).
 */
(function (root) {
  'use strict';

  var INDEX_FILE = 'vc-search-index.js';
  var TOKEN_RE = /[0-9a-z\u0430-\u044f\u0451]{2,}/g;
  var PREFIX = 6;

  var meta = root.VC_IDX_META || null;
  var words = root.VC_IDX_WORDS || null;
  var loading = false;
  var waiters = [];

  function has(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }

  function tokens(query) {
    var out = [], m;
    TOKEN_RE.lastIndex = 0;
    while ((m = TOKEN_RE.exec(String(query).toLowerCase())) !== null) { out.push(m[0]); }
    return out;
  }

  function fresh(url) {
    var m = /^\/articles\/a(\d+)_/.exec(url);
    return m ? +m[1] : 0;
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* Сниппет: лид страницы с подсветкой найденных слов; разметка экранирована. */
  function snippet(index_, words_) {
    var text = (meta && meta.leads[index_]) || '';
    if (!text) { return ''; }
    var out = '', pos = 0, hits = [], i, re, m;
    for (i = 0; i < words_.length; i++) {
      re = new RegExp(words_[i].substring(0, Math.min(PREFIX, words_[i].length)) + '[0-9a-z\\u0430-\\u044f\\u0451]*', 'gi');
      while ((m = re.exec(text)) !== null) {
        hits.push([m.index, m.index + m[0].length]);
        if (m.index === re.lastIndex) { re.lastIndex++; }
      }
    }
    if (!hits.length) { return escapeHtml(text); }
    hits.sort(function (a, b) { return a[0] - b[0]; });
    for (i = 0; i < hits.length; i++) {
      if (hits[i][0] < pos) { continue; }
      out += escapeHtml(text.substring(pos, hits[i][0])) +
             '<mark>' + escapeHtml(text.substring(hits[i][0], hits[i][1])) + '</mark>';
      pos = hits[i][1];
    }
    return out + escapeHtml(text.substring(pos));
  }

  function addPostings(acc, str) {
    var parts = str.split(','), i, p, dot, id, w;
    for (i = 0; i < parts.length; i++) {
      p = parts[i];
      dot = p.indexOf('.');
      if (dot < 0) { id = +p; w = 1; } else { id = +p.substring(0, dot); w = +p.substring(dot + 1); }
      acc[id] = (acc[id] || 0) + w;
    }
  }

  /* posting-list одного слова: indexName = 'w' (полный текст) или 'ti' (заголовки). */
  function postings(indexName, word) {
    var table = indexName === 'w' ? (words && words.w) : (meta && meta.ti);
    if (!table) { return null; }
    var acc = {}, found = false, i, all, stem;
    if (table[word.substring(0, PREFIX)] !== undefined) {
      addPostings(acc, table[word.substring(0, PREFIX)]);
      return acc;
    }
    /* такой формы в текстах нет (или слово короче 6 букв) — берём все ключи с общим началом:
       «вампиров» → «вампир*», «кров» → «кровь», «кровав», … */
    all = [];
    for (i in table) { if (has(table, i)) { all.push(i); } }
    stem = word.substring(0, Math.min(PREFIX - 1, word.length));
    for (i = 0; i < all.length; i++) {
      if (all[i].indexOf(stem) === 0) { addPostings(acc, table[all[i]]); found = true; }
    }
    return found ? acc : null;
  }

  function pageOf(id) {
    var p = (meta && meta.pages[id]) || ['', '', 'страница'];
    return { url: p[0], title: p[1], cat: p[2] };
  }

  function sortHits(hits) {
    hits.sort(function (a, b) {
      return b.score - a.score || fresh(b.url) - fresh(a.url) || (a.url < b.url ? -1 : 1);
    });
    return hits;
  }

  function packResult(query, mode, tokens_, hits, limit) {
    var shown = hits.slice(0, limit);
    return { query: query, tokens: tokens_, mode: mode, total: hits.length, shown: shown.length, hits: shown };
  }


  /* Поиск по заголовкам страниц — работает сразу после загрузки vc-search-meta.js. */
  function searchTitles(query, limit) {
    limit = limit || 50;
    var tokens_ = tokens(query);
    if (!meta || !tokens_.length) { return packResult(query, 'titles', tokens_, [], limit); }
    var i, j, w, acc, score = {}, page, hits = [];
    for (i = 0; i < tokens_.length; i++) {
      w = tokens_[i];
      acc = postings('ti', w);
      if (acc) { for (j in acc) { if (has(acc, j)) { score[j] = (score[j] || 0) + 4; } } }
      /* точное вхождение слова в заголовок — сильнее префиксного совпадения */
      for (j = 0; j < meta.pages.length; j++) {
        if (String(meta.pages[j][1]).toLowerCase().indexOf(w) >= 0) { score[j] = (score[j] || 0) + 3; }
      }
    }
    for (j in score) {
      if (!has(score, j)) { continue; }
      page = pageOf(+j);
      hits.push({ url: page.url, title: page.title, cat: page.cat, score: score[j], text: snippet(+j, tokens_) });
    }
    return packResult(query, 'titles', tokens_, sortHits(hits), limit);
  }

  /* Полнотекстовый поиск — нужен загруженный vc-search-index.js. */
  function searchText(query, limit) {
    limit = limit || 50;
    var tokens_ = tokens(query);
    if (!words || !tokens_.length) { return packResult(query, 'text', tokens_, [], limit); }
    var i, j, id, n, score = {}, titleIds = {}, matchedAll = true, acc, ranked, tacc, hits = [], page;
    for (i = 0; i < tokens_.length; i++) {
      acc = postings('w', tokens_[i]);
      if (!acc) { matchedAll = false; }
      else {
        ranked = [];
        for (id in acc) { if (has(acc, id)) { ranked.push([+id, acc[id]]); } }
        ranked.sort(function (a, b) { return b[1] - a[1]; });
        for (j = 0; j < ranked.length && j < 3000; j++) {
          score[ranked[j][0]] = (score[ranked[j][0]] || 0) + Math.min(ranked[j][1], 9);
        }
      }
      tacc = postings('ti', tokens_[i]);
      if (tacc) { for (j in tacc) { if (has(tacc, j)) { titleIds[j] = 1; } } }
    }
    for (j in score) {
      if (!has(score, j)) { continue; }
      n = +j;
      page = pageOf(n);
      hits.push({ url: page.url, title: page.title, cat: page.cat,
                  score: score[j] + (titleIds[n] ? 4 : 0), text: snippet(n, tokens_) });
    }
    var res = packResult(query, 'text', tokens_, sortHits(hits), limit);
    res.matchedAll = matchedAll;
    return res;
  }

  /* Подгрузка полнотекстового индекса: <script src> — работает и при открытии файлов с диска. */
  function loadFull(cb) {
    if (words || root.VC_IDX_WORDS) { words = root.VC_IDX_WORDS; if (cb) { cb(true); } return; }
    if (cb) { waiters.push(cb); }
    if (loading) { return; }
    loading = true;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = INDEX_FILE;
    script.onload = function () { words = root.VC_IDX_WORDS || null; done(!!words); };
    script.onerror = function () { done(false); };
    (document.getElementsByTagName('head')[0] || document.body).appendChild(script);
  }

  function done(ok) {
    loading = false;
    var list = waiters;
    waiters = [];
    for (var i = 0; i < list.length; i++) { list[i](ok); }
  }

  root.VCSearch = {
    ready: !!meta,                       // лёгкий индекс загружен
    fullReady: function () { return !!(words || root.VC_IDX_WORDS); },
    loadFull: loadFull,
    search: function (query, limit) {
      return (words || root.VC_IDX_WORDS) ? searchText(query, limit) : searchTitles(query, limit);
    },
    searchTitles: searchTitles,
    searchText: searchText,
    setIndexFile: function (name) { INDEX_FILE = name; },
    count: meta ? meta.pages.length : 0
  };
}(typeof window !== 'undefined' ? window : this));
