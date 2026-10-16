# VC-forever

Исходный код сайта https://vampirecommunity.ru
<br/>
Можно скачать и запустить локально. База данных не требуется.

## Инструкция по запуску (git клон)

1) Выполните `git clone` данного проекта.
2) Запустите `index.html` с помощью браузера.

## Инструкция по запуску (zip архив)

1) Нажмите справа в углу синюю кнопку `Code`, потом листайте ниже до `Download source code`, выберите `zip` (или любой другой тип архива). Архив скачается.
2) Распакуйте архив.
3) Запустите `index.html` с помощью браузера.

## Что входит в проект

Это публичная копия сайта — **только статическая часть**: готовые страницы и ресурсы к ним.
Сборщиков, CMS и баз данных нет, форум и серверная обвязка в эту копию не входят.

Всего в репозитории **1894 файлов** (статистика на 15.10.2026, включает статью №383 и локальный поиск по сайту):

| Что | Файлов | Назначение |
|---|---|---|
| `*.html` в корне | 2 | страницы в корне — `home.html` и `index.html`; статьи, страницы разделов, исследования, творчества, авторов, редакторов, переводчиков и источников, «основные» и «прочие» страницы вынесены в подкаталоги |
| `search/` | 5 | страница поиска `index.html` (открывается и как `/search/`) и файлы поиска: `vc-search.js` (поиск и ранжирование), `vc-search-page.js` (форма, `?q=`, вывод), `vc-search-meta.js` (лёгкий индекс) и `vc-search-index.js` (полнотекстовый индекс; оба индекса собирает `_tools/vc-search-build.py`) |
| `primary/` | 15 | «основные» страницы сайта: `about_vc`, `archive`, `banner_ex`, `community`, `contact`, `copyright`, `download`, `enter`, `glossary`, `links`, `responsibility`, `sigil`, `society`, `support`, `understanding_vc` |
| `other/` | 15 | «прочие» страницы: `calendarium`, `discord-tests`, `enter_chat`, `example`, `forum`, `jabber`, `load_banners`, `load_radio`, `mainmenu`, `photogallery`, `testpage`, `translator`, `vampshop`, `vc_jabber_faq`, плюс убранная из корня прежняя страница поиска `vc_search.php` (не используется) |
| `articles/` | 637 | статьи `a<номер>_<имя>.html` (385), страницы авторов в `articles/authors/` (117), страницы редакторов в `articles/editors/` (32), страницы переводчиков в `articles/translators/` (66), страницы источников в `articles/sources/` (19), индекс-страницы раздела в `articles/control/` (3) и страницы разделов «Статьи / сортировка» в `articles/sections/` (15) |
| `research/` | 26 | страницы исследования: `research.html`, `research_results.html`, волны результатов `r1_*`–`r3_*`, описания `research_faq` и типов личности (`research_enfj`, `research_enfp`, `research_infp`, `research_intj`) |
| `art/` | 97 | раздел «Творчество»: `art.html`, персональные подборки `art<N>_<автор>*.html`, сборники `compilation*` |
| `images/` | 958 | картинки: баннеры, иконки разделов, иллюстрации статей, результаты тестов |
| `photos/` | 95 | галерея: фотографии и работы художников |
| `smiles/` | 24 | смайлы для страниц |
| `css/` | 10 | стили: исторические `1.css`…`6.css` + `vc.css`, `rd.css`, `rt.css`, `test_css.css` |
| `files/` | 6 | вложения: методики и опросники (VEWRS, WBD, FMBA…) в PDF/DOC/ZIP |
| служебное | 4 | `favicon.ico`, `robots.txt`, `.htaccess`, `README.md` |

## Структура

Иерархия почти плоская: страницы сайта лежат в одном каталоге, статьи вынесены в `articles/`,
страницы исследования — в `research/`, «основные» страницы — в `primary/`, «прочие» — в `other/`,
по папкам разложены ресурсы.

```
vc-forever/
├── index.html        — входная страница: подтверждение 18+ и ссылка «Войти на Сайт» → home.html
├── home.html         — главная сайта: боковое меню (#sidebar > ol#nav) + контент, стиль css/5.css
├── search/           — страница поиска и её файлы: `index.html` (сама страница, на сервере
│                       открывается и как `/search/`), `vc-search.js` (поиск и ранжирование),
│                       `vc-search-page.js` (форма, `?q=`, вывод результатов), `vc-search-meta.js`
│                       (лёгкий индекс) и `vc-search-index.js` (полнотекстовый индекс; оба индекса
│                       собирает `_tools/vc-search-build.py`)
├── primary/          — 15 «основных» страниц сайта: `about_vc.html`, `archive.html`, `banner_ex.html`,
│                       `community.html`, `contact.html`, `copyright.html`, `download.html`,
│                       `enter.html`, `glossary.html`, `links.html`, `responsibility.html`,
│                       `sigil.html`, `society.html`, `support.html`, `understanding_vc.html`
├── other/            — 14 «прочих» страниц: `calendarium.html`, `discord-tests.html`,
│                       `enter_chat.html`, `example.html`, `forum.html` (meta-refresh на
│                       `community.html`), `jabber.html`, `load_banners.html`, `load_radio.html`,
│                       `mainmenu.html` (фрагмент меню, css/6.css), `photogallery.html`,
│                       `testpage.html`, `translator.html`, `vampshop.html`, `vc_jabber_faq.html`,
│                       `vc_search.php` (прежняя страница поиска, убрана из корня)
├── articles/         — 385 статей `a<номер>_<имя>.html` (ссылки на них — `articles/…`)
│   ├── authors/      — 117 страниц авторов раздела «Статьи / сортировка» (бывшие
│   │                   `articles_<автор>.html` из корня), ссылки на них — из `articles/control/sort.html`;
│   │                   состав каждой страницы синхронизируется с атрибуцией статей
│   │                   (`_tools/vc-authors-content.py --apply`)
│   ├── editors/      — 32 страницы редакторов раздела «Статьи / сортировка» (бывшие
│   │                   `redactor_<ник>.html` из корня), ссылки на них — из `articles/control/sort.html`;
│   │                   состав каждой страницы синхронизируется с атрибуцией статей
│   │                   (`_tools/vc-editors-content.py --apply`); страницы Tadozumoru и Dark Iron
│   │                   (один человек) объединены в одну — `articles/editors/darkiron.html`
│   ├── sources/      — 19 страниц источников раздела «Статьи / сортировка» (бывшие
│   │                   `source_<имя>.html` из корня), ссылки на них — из `articles/control/sort.html`;
│   │                   состав каждой страницы синхронизируется с меткой `<b>Источник:</b>` статей
│   │                   (`_tools/vc-sources-content.py --apply`); 16 прежних страниц + 3 новых
│   │                   источника — `VCMB.org`, `RealVampireNews.com`, `EverydayHealth.com`
│   ├── translators/  — 66 страниц переводчиков раздела «Статьи / сортировка» (бывшие
│   │                   `translate_<ник>.html` из корня), ссылки на них — из `articles/control/sort.html`;
│   │                   состав каждой страницы синхронизируется с меткой `<b>Перевод:</b>` статей
│   │                   (`_tools/vc-translators-content.py --apply`); 60 прежних страниц + 6 новых
│   │                   переводчиков — `Адальмунд`, `Andali`, `Эмильяна`, `IALima.M.OR.`, `Ksenia Led`, `u1035`
│   ├── control/      — 3 индекс-страницы раздела «Статьи»: `list.html` (бывший
│   │                   `articles_LIST.html`), `sort.html` (бывший `articles_SORT.html`),
│   │                   `update.html` (бывший `articles_UPDATES.html`)
│   └── sections/     — 15 страниц разделов «Статьи / сортировка» (бывшие `section_*.html`
│                       из корня, префикс `section_` убран из имён): `main.html`, `some.html`,
│                       `sangs.html`, `energy.html`, `blood.html`, …;
│                       состав каждой страницы повторяет одноимённый блок `<h3>` листинга
│                       `articles/control/list.html`
├── research/         — 26 страниц исследования: `research.html`, `research_results.html`,
│                       волны результатов `r1_*`–`r3_*` и описания `research_faq` + типов личности
│                       (`research_enfj`, `research_enfp`, `research_infp`, `research_intj`)
│                       (ссылки на них — `research/…`)
├── art/              — 97 страниц раздела «Творчество»: `art.html`, персональные подборки
│                       `art<N>_<автор>*.html` и сборники конкурсных работ `compilation*`
│                       (ссылки на них — `art/…`)
├── css/              — 10 файлов стилей, подключаются как css/N.css
├── images/           — 958 картинок
├── photos/           — 95 фото (галерея)
├── smiles/           — 24 смайла
├── files/            — 6 вложений: alcal254.zip, fmba_method.pdf, Questionnaire.pdf,
│                       VEWRS.doc, VEWRS-Survey-Russian.pdf, WBD.pdf
├── favicon.ico       — иконка сайта
├── robots.txt        — правила обхода для поисковиков
├── .htaccess         — правила Apache для каталога: `.html` отдаются через PHP и 910 правил
│                       301-редиректа со старых адресов на актуальные (перенос статей в `articles/`,
│                       перенос страниц авторов в `articles/authors/`, объединение страниц авторов
│                       (Zero/Zerochan), перенос страниц редакторов в `articles/editors/`
│                       с объединением страниц редакторов (Tadozumoru/Dark Iron), перенос страниц
│                       источников в `articles/sources/` и переводчиков в `articles/translators/`,
│                       перенос индекс-страниц
│                       раздела «Статьи» в `articles/control/` и страниц
│                       разделов в `articles/sections/` (с уборкой префикса `section_`), перенос страниц
│                       исследования в `research/`, перенос страниц творчества в `art/`, перенос
│                       «основных» страниц в `primary/` и «прочих» в `other/`,
│                       приведение имён к lowercase, переименования по никам); для локального просмотра
│                       файлов в браузере не требуется
└── README.md         — этот файл
```

### Группы страниц (по префиксу имени файла)

Именование историческое, но устойчивое: по префиксу видно, к какому разделу относится страница.
В корне **2 `.html`** (`home`, `index`), страница поиска — в каталоге `search/`, ещё **385 статей** — в каталоге `articles/` (страницы авторов — в
`articles/authors/`, страницы редакторов — в `articles/editors/`, страницы переводчиков — в
`articles/translators/`, страницы источников — в
`articles/sources/`, индекс-страницы раздела — в
`articles/control/`, страницы разделов «Статьи / сортировка» — в `articles/sections/`),
**26 страниц исследования** — в `research/`,
**97 страниц творчества** — в `art/`, **15 «основных» страниц** — в `primary/`
и **14 «прочих»** — в `other/` (там же лежит убранный из корня `vc_search.php`):

| Префикс | Кол-во | Что это |
|---|---|---|
| `articles/a<номер>_*.html` | 385 | статьи, сквозная нумерация `a1_` … `a383_` (без пропусков) + тестовые `a999_test5.html`, `a999_test6.html` |
| `articles/control/*.html` | 3 | индекс-страницы раздела «Статьи», вынесены в каталог `articles/control/` и переименованы: `list.html` (бывший `articles_LIST.html`), `sort.html` (`articles_SORT.html`), `update.html` (`articles_UPDATES.html`) |
| `articles/sections/*.html` | 15 | «Статьи / сортировка» по разделам (бывшие `section_*.html` из корня), вынесены в каталог `articles/sections/`, исторический префикс `section_` убран из имён (`section_main.html` → `articles/sections/main.html`): `main`, `some`, `sangs`, `energy`, `donors`, `seekers`, `blood`, `socio`, `style`, `otherkins`, `sleep`, `meditation`, `other`, `somn`, `archive`; ссылки на них — из `articles/control/sort.html` |
| `research/*.html` | 26 | раздел «Исследование», вынесен в каталог `research/`: входные `research.html`, `research_results.html`, волны результатов (`r1_*` — первые, `r2_*` — вторые, `r3_*` — третьи) и описания `research_faq` + типов личности (`research_enfj`, `research_enfp`, `research_infp`, `research_intj`) |
| `art/*.html` | 97 | раздел «Творчество», вынесен в каталог `art/`: страница `art.html`, 35 персональных подборок авторов `art<N>_<автор>*.html` (суффиксы `_poetry` 11, `_prose` 7, `_photo`, `_pictures`) и 61 файл сборников конкурсных работ `compilation*` (`compilationN_<тема>.html` — 11 оглавлений, `compilationN_workM.html` — 50 работ) |
| `primary/*.html` | 15 | «основные» страницы сайта, вынесены в каталог `primary/`: `about_vc`, `archive`, `banner_ex`, `community`, `contact`, `copyright`, `download`, `enter`, `glossary`, `links`, `responsibility`, `sigil`, `society`, `support`, `understanding_vc` |
| `other/*.html` | 14 | «прочие» страницы, вынесены в каталог `other/`: `calendarium`, `discord-tests`, `enter_chat`, `example`, `forum`, `jabber`, `load_banners`, `load_radio`, `mainmenu`, `photogallery`, `testpage`, `translator`, `vampshop`, `vc_jabber_faq` |
| `articles/authors/*.html` | 117 | раздел «Статьи»: страницы по авторам и подборки их материалов — вынесены в каталог `articles/authors/`, из имён убран исторический префикс `articles_` (`articles_abyah.html` → `articles/authors/abyah.html`); 101 прежняя страница + 17 новых авторов, из которых две (Zero и Zerochan — один человек) объединены в одну |
| `articles/editors/*.html` | 32 | раздел «Статьи»: страницы по редакторам — вынесены в каталог `articles/editors/`, из имён убран исторический префикс `redactor_` (`redactor_abyah.html` → `articles/editors/abyah.html`); 24 прежние страницы + 9 новых редакторов, из которых две (Tadozumoru и Dark Iron — один человек) объединены в одну |
| `articles/translators/*.html` | 66 | раздел «Статьи»: страницы по переводчикам — вынесены в каталог `articles/translators/`, из имён убран исторический префикс `translate_` (`translate_abyah.html` → `articles/translators/abyah.html`); 60 прежних страниц + 6 новых переводчиков (`Адальмунд`, `Andali`, `Эмильяна`, `IALima.M.OR.`, `Ksenia Led`, `u1035`); состав синхронизируется с меткой `<b>Перевод:</b>` статей, ссылки — из раздела «По переводчикам» листинга `articles/control/sort.html` |
| `articles/sources/*.html` | 19 | раздел «Статьи»: страницы по источникам материала (внешние сайты и сообщества) — вынесены в каталог `articles/sources/`, из имён убран исторический префикс `source_` (`source_kheperu.html` → `articles/sources/kheperu.html`); 16 прежних страниц + 3 новых источника (`VCMB.org`, `RealVampireNews.com`, `EverydayHealth.com`); состав синхронизируется с меткой `<b>Источник:</b>` статей, ссылки — из раздела «По источникам» листинга `articles/control/sort.html` |
| прочее | 2 | отдельные страницы в корне: `home`, `index` |
| `search/index.html` | 1 | страница поиска: поиск идёт в браузере по индексу из того же каталога, без внешних сервисов |

Совпадение по сумме: 385 (`articles/`) + 117 (`articles/authors/`) + 32 (`articles/editors/`) + 66 (`articles/translators/`) + 19 (`articles/sources/`) + 3 (`articles/control/`) + 15 (`articles/sections/`) + 26 (`research/`) + 97 (`art/`) + 15 (`primary/`) + 14 (`other/`) + 2 (прочее) + 1 (`search/`) = 792.

### Как устроены страницы

- Шаблон: XHTML 1.1 (`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" …>`), кодировка `utf-8`,
  у каждой страницы свой подключаемый стиль — `<link rel="stylesheet" href="css/N.css">`.
- Разметка историческая: `<center>`, `<font>`, inline-стили. Рефакторить только осознанно,
  чтобы не поехала вёрстка остальных страниц.
- Навигация — боковое меню `ol#nav` в `#sidebar` (пример: `home.html`), плюс фрагмент `other/mainmenu.html`.
- Раздел «Статьи» держится на перекрёстных индексах-«сортировках»: по авторам
  (`articles/authors/*.html`), редакторам (`articles/editors/*.html`), переводчикам (`articles/translators/*.html`),
  источникам (`articles/sources/*.html`) и разделам (`articles/sections/*.html`).
- Страницы разделов (`articles/sections/*.html`, ссылки на них — из `articles/control/sort.html`)
  содержат те же списки, что и блоки `<h3>Раздел</h3>` листинга `articles/control/list.html`;
  при добавлении статьи их состав обновляют из листинга.
- Страницы авторов (`articles/authors/*.html`, ссылки — из раздела «По авторам» листинга `sort.html`)
  собираются по атрибуции самих статей: ник берётся из блока `<b>Автор:</b>`/`<b>Авторы:</b>`
  в конце статьи, текст ссылки и подпись (` / <i>перевод с …</i>`) — из листинга `list.html`;
  синхронизация — `_tools/vc-authors-content.py --apply` (новый автор из статей получает
  страницу и запись в `sort.html` автоматически). Если один человек фигурирует под двумя никами
  (Zero и Zerochan), материалы сведены на одну страницу, а второй ник ведёт на неё 301-редиректом
  (`MERGED_AUTHORS` в `_tools/vc-authors-content.py`, `AUTHOR_MERGES` в `_tools/vc-redirects.py`).
- Страницы редакторов (`articles/editors/*.html`, ссылки — из раздела «По редакторам» листинга
  `sort.html`) собираются тем же способом, но по полю редактирования: ник берётся из жирной метки
  со словом «Редактирование» (`<b>Редактирование:</b>`, `<b>Редакторы:</b>`, составная
  `<b>Перевод, комментарий, редактирование:</b>`; сокращение `ред.`) в конце статьи, текст ссылки
  и подпись — из листинга `list.html`; синхронизация — `_tools/vc-editors-content.py --apply`
  (новый редактор из статей получает страницу и запись в `sort.html` автоматически). Если один
  человек фигурирует под двумя никами, материалы сводятся на одну страницу, а второй ник ведёт на
  неё 301-редиректом (`MERGED_EDITORS` в `_tools/vc-editors-content.py`; сейчас так объединены
  Tadozumoru и Dark Iron — один человек, оставшаяся страница `articles/editors/darkiron.html`,
  `EDITOR_MERGES` в `_tools/vc-redirects.py`).
- Страницы источников (`articles/sources/*.html`, ссылки — из раздела «По источникам» листинга
  `sort.html`) собираются по метке источника: значение берётся из жирной метки
  `<b>Источник:</b> …` (форма `<b>Источники:</b>` тоже понимается) в конце статьи, текст ссылки и
  подпись — из листинга `list.html`; синхронизация — `_tools/vc-sources-content.py --apply`
  (новый источник из статей получает страницу и запись в `sort.html` автоматически). Разовые
  источники (1–2 статьи: медицинские справочники, новостные сайты) собраны на странице «Прочие»
  (`articles/sources/other.html`, список `MINOR_LABELS` в инструменте). Историческое «соседство»
  сохраняется: инструмент только дополняет списки, ничего не удаляя (например, 14 статей с меткой
  `vcmb.org` остались и на странице Sanguinarius, где они лежали изначально).
- Страницы переводчиков (`articles/translators/*.html`, ссылки — из раздела «По переводчикам»
  листинга `articles/control/sort.html`) собираются по полю перевода: ник берётся из жирной метки,
  начинающейся со слова «Перевод», в блоке атрибуции в конце статьи (`<b>Перевод:</b>`,
  `<b>Перевод и комментарий by:</b>`, `<b>Перевод и дополнение by</b>`, `<b>Перевод</b> by …`,
  составная `<b>Перевод, комментарий, редактирование:</b>`; несколько ников — через запятую или «и»),
  текст ссылки и подпись — из листинга `articles/control/list.html`; синхронизация —
  `_tools/vc-translators-content.py --apply` (новый переводчик из статей получает страницу и запись
  в `sort.html` автоматически). Значение `© [BDSM-HowTo.ru]` (статья a104 — перевод с сайта, а не
  человек) страницы переводчика не получает.
- Блок атрибуции в конце статьи (`<b>Автор:</b>`/`<b>Авторы:</b>`, метка со словом «Редактирование»,
  `<b>Источник:</b>`, метка со словом «Перевод») оформлен активными ссылками на страницы разделов:
  автор — `articles/authors/<файл>.html`, редактор — `articles/editors/<файл>.html`, источник —
  `articles/sources/<файл>.html` (разовые источники — `articles/sources/other.html`), переводчик —
  `articles/translators/<файл>.html`. Ссылкой становится ровно текст атрибуции, поэтому видимая
  строка не меняется; ники берутся из тех же карт, что у content-инструментов; синхронизация —
  `_tools/vc-credits-links.py --apply` (идемпотентно, проверка — `--verify --baseline origin/main`).
- Новая статья = файл `a<следующий номер>_<краткое_имя>.html` в каталоге `articles/` (последняя на 25.09.2026 —
  `articles/a383_vc_history_origins.html`), плюс ссылка в листинге `articles/control/list.html` (блок «Новинки»
  и сводный список раздела) и запись в журнале обновлений `articles/control/update.html`. Листинг
  `articles/control/sort.html` при добавлении статей не обновляется. После публикации статьи (и после
  любой правки текстов страниц) пересобирают индекс поиска — `python3 _tools/vc-search-build.py .`.
- Имена страниц — в нижнем регистре (`home.html`, `primary/about_vc.html`, `articles/translators/marcus.html`); исключений нет:
  три индекс-страницы раздела «Статьи» тоже переехали в `articles/control/` и названы в нижнем регистре —
  `list.html`, `sort.html`, `update.html`.

### Поиск по сайту

- Страница поиска — `search/index.html` (такой же статический XHTML, как остальные страницы; на сервере
  каталог открывается и как `/search/`): поиск идёт **в браузере**, без внешних сервисов. Работает и на
  сайте, и при открытии файла с диска (`file://`).
- Все файлы поиска лежат рядом, в каталоге `search/`: `index.html`, `vc-search.js`, `vc-search-page.js`,
  `vc-search-meta.js`, `vc-search-index.js`.
- Две ступени загрузки: сразу подключается `vc-search-meta.js` — адреса, заголовки, категории и лиды
  **786 страниц** (≈0,1 МБ gzip), по ним мгновенно работает поиск по названиям; затем фоном
  подгружается `vc-search-index.js` — полнотекстовый индекс по началам слов (≈0,6 МБ gzip), после
  чего результаты уточняются автоматически.
- Логика: `vc-search.js` (разбор индекса, поиск, ранжирование, подсветка; ES5, без библиотек)
  и `vc-search-page.js` (форма, `?q=`, вывод результатов). Сниппет — начало текста страницы
  с подсветкой найденных слов.
- Морфология — по первым 6 буквам слова: «вампир» находит «вампиры», «вампирами», «вампиризм».
  Ранжирование — по встречаемости слова на странице с бонусом за попадание в заголовок; при равном
  весе выше свежие статьи (`articles/a<номер>_…`). Полнотекстовый поиск идёт по статьям, творчеству,
  исследованию и справочным страницам; форум SMF в индекс не входит (у него свой поиск) — ссылка на него
  есть на странице поиска.
- Индекс собирается `_tools/vc-search-build.py` (только stdlib, детерминированно: в рабочей и публичной
  копиях файлы получаются побайтово одинаковыми; сама страница поиска в индекс не попадает). Служебные
  и черновые страницы (`index.html`, `a999_test*`, `testpage`, `example`) тоже вне индекса — как и в `robots.txt`.
- Прежняя страница `vc_search.php` (форма уходила во внешний поисковик) убрана из корня в `other/`
  и не используется; адреса `/vc_search.php` и `/search.html` отдают 301 на `/search/index.html`.

### Чего в этой копии нет

- **Форума** — он живёт отдельно (PHP + база данных) и в публичную копию не входит. На живой форум
  ссылаются **8 страниц** абсолютными адресами вида `https://vampirecommunity.ru/forum/index.php…`
  (`articles/a353_batenka_transformer.html`, `articles/a364_ria_news.html`, `art/art.html`, `primary/community.html`,
  `research/research.html`, `research/research_results.html`, `home.html`, а также `primary/archive.html` — на старый
  `vampirecommunity.forumbb.ru`), поэтому локально такие ссылки ведут на живой сайт, а не в
  локальную папку. Ещё `other/mainmenu.html` ведёт на локальный `other/forum.html` (meta-refresh на
  `primary/community.html`), а `articles/a18_blood_und.html` и `articles/a374_ovc_history_sangs_vs_energo.html` — на чужие
  форумы (torrents.ru, atlantavampirealliance.com), это внешние источники.
- **Админки, серверных конфигов и docker-обвязки** — только файлы самого сайта.
- `other/vc_search.php` — прежняя (не используемая) страница поиска на PHP: она убрана из корня
  «про запас», работала через внешний поисковик и больше не нужна. Актуальный поиск — `search/index.html`,
  он статический и работает прямо из файлов, как и остальные страницы сайта.