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

Всего в репозитории **1880 файлов** (статистика на 15.10.2026, включает статью №383):

| Что | Файлов | Назначение |
|---|---|---|
| `*.html` в корне | 78 | страницы сайта, кроме статей, страниц разделов, исследования, творчества, «основных» и «прочих» страниц |
| `primary/` | 15 | «основные» страницы сайта: `about_vc`, `archive`, `banner_ex`, `community`, `contact`, `copyright`, `download`, `enter`, `glossary`, `links`, `responsibility`, `sigil`, `society`, `support`, `understanding_vc` |
| `other/` | 14 | «прочие» страницы: `calendarium`, `discord-tests`, `enter_chat`, `example`, `forum`, `jabber`, `load_banners`, `load_radio`, `mainmenu`, `photogallery`, `testpage`, `translator`, `vampshop`, `vc_jabber_faq` |
| `articles/` | 552 | статьи `a<номер>_<имя>.html` (385), страницы авторов в `articles/authors/` (117), страницы редакторов в `articles/editors/` (32), индекс-страницы раздела в `articles/control/` (3) и страницы разделов «Статьи / сортировка» в `articles/sections/` (15) |
| `research/` | 26 | страницы исследования: `research.html`, `research_results.html`, волны результатов `r1_*`–`r3_*`, описания `research_faq` и типов личности (`research_enfj`, `research_enfp`, `research_infp`, `research_intj`) |
| `art/` | 97 | раздел «Творчество»: `art.html`, персональные подборки `art<N>_<автор>*.html`, сборники `compilation*` |
| `images/` | 958 | картинки: баннеры, иконки разделов, иллюстрации статей, результаты тестов |
| `photos/` | 95 | галерея: фотографии и работы художников |
| `smiles/` | 24 | смайлы для страниц |
| `css/` | 10 | стили: исторические `1.css`…`6.css` + `vc.css`, `rd.css`, `rt.css`, `test_css.css` |
| `files/` | 6 | вложения: методики и опросники (VEWRS, WBD, FMBA…) в PDF/DOC/ZIP |
| служебное | 5 | `favicon.ico`, `robots.txt`, `.htaccess`, `vc_search.php`, `README.md` |

## Структура

Иерархия почти плоская: страницы сайта лежат в одном каталоге, статьи вынесены в `articles/`,
страницы исследования — в `research/`, «основные» страницы — в `primary/`, «прочие» — в `other/`,
по папкам разложены ресурсы.

```
vc-forever/
├── index.html        — входная страница: подтверждение 18+ и ссылка «Войти на Сайт» → home.html
├── home.html         — главная сайта: боковое меню (#sidebar > ol#nav) + контент, стиль css/5.css
├── primary/          — 15 «основных» страниц сайта: `about_vc.html`, `archive.html`, `banner_ex.html`,
│                       `community.html`, `contact.html`, `copyright.html`, `download.html`,
│                       `enter.html`, `glossary.html`, `links.html`, `responsibility.html`,
│                       `sigil.html`, `society.html`, `support.html`, `understanding_vc.html`
├── other/            — 14 «прочих» страниц: `calendarium.html`, `discord-tests.html`,
│                       `enter_chat.html`, `example.html`, `forum.html` (meta-refresh на
│                       `community.html`), `jabber.html`, `load_banners.html`, `load_radio.html`,
│                       `mainmenu.html` (фрагмент меню, css/6.css), `photogallery.html`,
│                       `testpage.html`, `translator.html`, `vampshop.html`, `vc_jabber_faq.html`
├── articles/         — 385 статей `a<номер>_<имя>.html` (ссылки на них — `articles/…`)
│   ├── authors/      — 118 страниц авторов раздела «Статьи / сортировка» (бывшие
│   │                   `articles_<автор>.html` из корня), ссылки на них — из `articles/control/sort.html`;
│   │                   состав каждой страницы синхронизируется с атрибуцией статей
│   │                   (`_tools/vc-authors-content.py --apply`)
│   ├── editors/      — 32 страницы редакторов раздела «Статьи / сортировка» (бывшие
│   │                   `redactor_<ник>.html` из корня), ссылки на них — из `articles/control/sort.html`;
│   │                   состав каждой страницы синхронизируется с атрибуцией статей
│   │                   (`_tools/vc-editors-content.py --apply`); страницы Tadozumoru и Dark Iron
│   │                   (один человек) объединены в одну — `articles/editors/darkiron.html`
│   ├── control/      — 3 индекс-страницы раздела «Статьи»: `list.html` (бывший
│   │                   `articles_LIST.html`), `sort.html` (бывший `articles_SORT.html`),
│   │                   `update.html` (бывший `articles_UPDATES.html`)
│   └── sections/     — 15 страниц разделов «Статьи / сортировка» (бывшие `section_*.html`
│                       из корня): `section_main.html`, `section_some.html`,
│                       `section_sangs.html`, `section_energy.html`, `section_blood.html`, …;
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
├── .htaccess         — правила Apache для каталога: `.html` отдаются через PHP и 808 правил
│                       301-редиректа со старых адресов на актуальные (перенос статей в `articles/`,
│                       перенос страниц авторов в `articles/authors/`, объединение страниц авторов
│                       (Zero/Zerochan), перенос страниц редакторов в `articles/editors/`
│                       с объединением страниц редакторов (Tadozumoru/Dark Iron), перенос индекс-страниц
│                       раздела «Статьи» в `articles/control/` и страниц
│                       разделов в `articles/sections/`, перенос страниц
│                       исследования в `research/`, перенос страниц творчества в `art/`, перенос
│                       «основных» страниц в `primary/` и «прочих» в `other/`,
│                       приведение имён к lowercase, переименования по никам); для локального просмотра
│                       файлов в браузере не требуется
├── vc_search.php     — страница поиска (форма отправляет запрос во внешний поисковик), нужен PHP
└── README.md         — этот файл
```

### Группы страниц (по префиксу имени файла)

Именование историческое, но устойчивое: по префиксу видно, к какому разделу относится страница.
В корне **78 `.html`**, ещё **385 статей** — в каталоге `articles/` (страницы авторов — в
`articles/authors/`, страницы редакторов — в `articles/editors/`, индекс-страницы раздела — в
`articles/control/`, страницы разделов «Статьи / сортировка» — в `articles/sections/`),
**26 страниц исследования** — в `research/`,
**97 страниц творчества** — в `art/`, **15 «основных» страниц** — в `primary/`
и **14 «прочих»** — в `other/`:

| Префикс | Кол-во | Что это |
|---|---|---|
| `articles/a<номер>_*.html` | 385 | статьи, сквозная нумерация `a1_` … `a383_` (без пропусков) + тестовые `a999_test5.html`, `a999_test6.html` |
| `articles/control/*.html` | 3 | индекс-страницы раздела «Статьи», вынесены в каталог `articles/control/` и переименованы: `list.html` (бывший `articles_LIST.html`), `sort.html` (`articles_SORT.html`), `update.html` (`articles_UPDATES.html`) |
| `articles/sections/*.html` | 15 | «Статьи / сортировка» по разделам (бывшие `section_*.html` из корня), вынесены в каталог `articles/sections/` с теми же именами: `main`, `some`, `sangs`, `energy`, `donors`, `seekers`, `blood`, `socio`, `style`, `otherkins`, `sleep`, `meditation`, `other`, `somn`, `archive`; ссылки на них — из `articles/control/sort.html` |
| `research/*.html` | 26 | раздел «Исследование», вынесен в каталог `research/`: входные `research.html`, `research_results.html`, волны результатов (`r1_*` — первые, `r2_*` — вторые, `r3_*` — третьи) и описания `research_faq` + типов личности (`research_enfj`, `research_enfp`, `research_infp`, `research_intj`) |
| `art/*.html` | 97 | раздел «Творчество», вынесен в каталог `art/`: страница `art.html`, 35 персональных подборок авторов `art<N>_<автор>*.html` (суффиксы `_poetry` 11, `_prose` 7, `_photo`, `_pictures`) и 61 файл сборников конкурсных работ `compilation*` (`compilationN_<тема>.html` — 11 оглавлений, `compilationN_workM.html` — 50 работ) |
| `primary/*.html` | 15 | «основные» страницы сайта, вынесены в каталог `primary/`: `about_vc`, `archive`, `banner_ex`, `community`, `contact`, `copyright`, `download`, `enter`, `glossary`, `links`, `responsibility`, `sigil`, `society`, `support`, `understanding_vc` |
| `other/*.html` | 14 | «прочие» страницы, вынесены в каталог `other/`: `calendarium`, `discord-tests`, `enter_chat`, `example`, `forum`, `jabber`, `load_banners`, `load_radio`, `mainmenu`, `photogallery`, `testpage`, `translator`, `vampshop`, `vc_jabber_faq` |
| `articles/authors/*.html` | 117 | раздел «Статьи»: страницы по авторам и подборки их материалов — вынесены в каталог `articles/authors/`, из имён убран исторический префикс `articles_` (`articles_abyah.html` → `articles/authors/abyah.html`); 101 прежняя страница + 17 новых авторов, из которых две (Zero и Zerochan — один человек) объединены в одну |
| `articles/editors/*.html` | 32 | раздел «Статьи»: страницы по редакторам — вынесены в каталог `articles/editors/`, из имён убран исторический префикс `redactor_` (`redactor_abyah.html` → `articles/editors/abyah.html`); 24 прежние страницы + 9 новых редакторов, из которых две (Tadozumoru и Dark Iron — один человек) объединены в одну |
| `translate_*.html` | 60 | «Статьи / сортировка» по переводчикам |
| `source_*.html` | 16 | «Статьи / сортировка» по источникам (внешние сайты и сообщества) |
| прочее | 2 | оставшиеся в корне отдельные страницы: `home`, `index` |

Совпадение по сумме: 385 (`articles/`) + 117 (`articles/authors/`) + 32 (`articles/editors/`) + 3 (`articles/control/`) + 15 (`articles/sections/`) + 26 (`research/`) + 97 (`art/`) + 15 (`primary/`) + 14 (`other/`) + 78 (корень) = 782.

### Как устроены страницы

- Шаблон: XHTML 1.1 (`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" …>`), кодировка `utf-8`,
  у каждой страницы свой подключаемый стиль — `<link rel="stylesheet" href="css/N.css">`.
- Разметка историческая: `<center>`, `<font>`, inline-стили. Рефакторить только осознанно,
  чтобы не поехала вёрстка остальных страниц.
- Навигация — боковое меню `ol#nav` в `#sidebar` (пример: `home.html`), плюс фрагмент `other/mainmenu.html`.
- Раздел «Статьи» держится на перекрёстных индексах-«сортировках»: по авторам
  (`articles/authors/*.html`), редакторам (`articles/editors/*.html`), переводчикам (`translate_*`),
  источникам (`source_*`) и разделам (`articles/sections/section_*.html`).
- Страницы разделов (`articles/sections/section_*.html`, ссылки на них — из `articles/control/sort.html`)
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
- Новая статья = файл `a<следующий номер>_<краткое_имя>.html` в каталоге `articles/` (последняя на 25.09.2026 —
  `articles/a383_vc_history_origins.html`), плюс ссылка в листинге `articles/control/list.html` (блок «Новинки»
  и сводный список раздела) и запись в журнале обновлений `articles/control/update.html`. Листинг
  `articles/control/sort.html` при добавлении статей не обновляется.
- Имена страниц — в нижнем регистре (`home.html`, `primary/about_vc.html`, `translate_marcus.html`); исключений нет:
  три индекс-страницы раздела «Статьи» тоже переехали в `articles/control/` и названы в нижнем регистре —
  `list.html`, `sort.html`, `update.html`.

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
- `vc_search.php` — единственная страница на PHP: без веб-сервера с PHP она не откроется,
  всё остальное — статика и работает прямо из файлов.