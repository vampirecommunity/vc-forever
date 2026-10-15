/*
 * vc-search-page.js — обвязка страницы search.html: читает ?q=, зовёт VCSearch, рисует результаты.
 *
 * Две ступени: сразу работают совпадения по названиям страниц (лёгкий индекс vc-search-meta.js),
 * а когда в фоне подгрузится полнотекстовый индекс (vc-search-index.js) — результаты заменяются
 * результатами поиска по текстам всех страниц.
 */
(function () {
  'use strict';

  var q, info, results, fullLoaded = false, fullFailed = false, lastQuery = '';

  function param(name) {
    var m = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : '';
  }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) { node.className = cls; }
    if (text) { node.appendChild(document.createTextNode(text)); }
    return node;
  }

  function clear(node) {
    while (node.firstChild) { node.removeChild(node.firstChild); }
  }

  function line(text) {
    info.appendChild(el('p', null, text));
  }

  function draw(res) {
    clear(results);
    clear(info);
    var i, hit, item, link, snip;
    if (!res.total) {
      line('По запросу «' + res.query + '» ничего не найдено.' +
           (fullLoaded || fullFailed ? '' : ' Полнотекстовый поиск по текстам статей ещё загружается — попробуйте через минуту.'));
      return;
    }
    if (res.mode === 'text') {
      line('Найдено страниц: ' + res.total + (res.total > res.shown ? ' — показаны первые ' + res.shown : '') +
           (res.matchedAll === false ? ' (не все слова запроса найдены)' : ''));
    } else {
      line('Найдено по названиям: ' + res.total + (res.total > res.shown ? ' — показаны первые ' + res.shown : '') +
           '. ' + (fullFailed
             ? 'Полнотекстовый поиск недоступен — показаны совпадения по названиям страниц.'
             : 'Полнотекстовый поиск по текстам статей загружается — результаты уточнятся автоматически.'));
    }
    var list = el('ol');
    for (i = 0; i < res.hits.length; i++) {
      hit = res.hits[i];
      item = el('li');
      link = el('a');
      link.href = hit.url;
      link.appendChild(document.createTextNode(hit.title));
      item.appendChild(link);
      item.appendChild(document.createTextNode(' — ' + hit.cat));
      if (hit.text) {
        snip = el('div', 'searchsnip');
        snip.innerHTML = hit.text;          // разметка построена в VCSearch, текст экранирован
        item.appendChild(snip);
      }
      list.appendChild(item);
    }
    results.appendChild(list);
  }

  function render(query) {
    lastQuery = query;
    if (!window.VCSearch || !window.VCSearch.ready) {
      clear(info);
      line('Индекс поиска не загрузился: проверьте, что рядом со страницей лежат vc-search-meta.js и vc-search-index.js.');
      return;
    }
    draw(window.VCSearch.search(query, 100));
  }

  function onIdle() {
    clear(info);
    if (window.VCSearch && window.VCSearch.ready) {
      line('Поиск идёт по названиям и текстам всех страниц сайта, прямо в браузере, без внешних сервисов.');
      line('Страниц в индексе: ' + window.VCSearch.count + '. Введите запрос.');
    } else {
      line('Индекс поиска не загрузился.');
    }
  }

  function onSubmit(event) {
    if (event && event.preventDefault) { event.preventDefault(); }
    if (event && event.stopPropagation) { event.stopPropagation(); }
    var query = q.value;
    try { window.history.replaceState(null, '', query ? '?q=' + encodeURIComponent(query) : 'search.html'); }
    catch (err) { /* file:// — адрес не меняем, поиск всё равно работает */ }
    render(query);
    return false;
  }

  function init() {
    q = document.getElementById('q');
    info = document.getElementById('searchinfo');
    results = document.getElementById('searchresults');
    var form = document.getElementById('searchform');
    if (form) {
      form.onsubmit = onSubmit;
      if (form.addEventListener) { form.addEventListener('submit', onSubmit, false); }
    }
    var initial = param('q');
    if (initial) { q.value = initial; }
    if (initial) { render(initial); } else { onIdle(); }

    window.VCSearch.loadFull(function (ok) {
      fullLoaded = !!ok;
      fullFailed = !ok;
      clear(info);
      if (fullFailed) {
        line('Полнотекстовый индекс не загрузился — поиск работает только по названиям страниц.');
        return;
      }
      if (lastQuery) { render(lastQuery); } else { onIdle(); }
    });
  }

  if (document.addEventListener) { document.addEventListener('DOMContentLoaded', init, false); }
  else { window.onload = init; }
}());
