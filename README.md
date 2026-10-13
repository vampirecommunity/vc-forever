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

Всего в репозитории **1856 файлов** (статистика на 13.10.2026, включает статью №383):

| Что | Файлов | Назначение |
|---|---|---|
| `*.html` в корне | 252 | страницы сайта, кроме статей, страниц исследования и страниц творчества |
| `articles/` | 388 | статьи `a<номер>_<имя>.html` (385) и индекс-страницы раздела в `articles/control/` (3) |
| `research/` | 21 | страницы исследования: `research.html`, `research_results.html`, волны результатов `r1_*`–`r3_*` |
| `art/` | 97 | раздел «Творчество»: `art.html`, персональные подборки `art<N>_<автор>*.html`, сборники `compilation*` |
| `images/` | 958 | картинки: баннеры, иконки разделов, иллюстрации статей, результаты тестов |
| `photos/` | 95 | галерея: фотографии и работы художников |
| `smiles/` | 24 | смайлы для страниц |
| `css/` | 10 | стили: исторические `1.css`…`6.css` + `vc.css`, `rd.css`, `rt.css`, `test_css.css` |
| `files/` | 6 | вложения: методики и опросники (VEWRS, WBD, FMBA…) в PDF/DOC/ZIP |
| служебное | 5 | `favicon.ico`, `robots.txt`, `.htaccess`, `vc_search.php`, `README.md` |

## Структура

Иерархия почти плоская: страницы сайта лежат в одном каталоге, статьи вынесены в `articles/`,
страницы исследования — в `research/`, по папкам разложены ресурсы.

```
vc-forever/
├── index.html        — входная страница: подтверждение 18+ и ссылка «Войти на Сайт» → home.html
├── home.html         — главная сайта: боковое меню (#sidebar > ol#nav) + контент, стиль css/5.css
├── mainmenu.html     — фрагмент меню (css/6.css), используется как вставка
├── forum.html        — страница-переход: meta-refresh на community.html
├── articles/         — 385 статей `a<номер>_<имя>.html` (ссылки на них — `articles/…`)
│   └── control/      — 3 индекс-страницы раздела «Статьи»: `list.html` (бывший
│                       `articles_LIST.html`), `sort.html` (бывший `articles_SORT.html`),
│                       `update.html` (бывший `articles_UPDATES.html`)
├── research/         — 21 страница исследования: `research.html`, `research_results.html`
│                       и волны результатов `r1_*`–`r3_*` (ссылки на них — `research/…`)
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
├── .htaccess         — правила Apache для каталога: `.html` отдаются через PHP и 606 правил
│                       301-редиректа со старых адресов на актуальные (перенос статей в `articles/`,
│                       перенос индекс-страниц раздела «Статьи» в `articles/control/`, перенос страниц
│                       исследования в `research/`, перенос страниц творчества в `art/`,
│                       приведение имён к lowercase, переименования по никам); для локального просмотра
│                       файлов в браузере не требуется
├── vc_search.php     — страница поиска (форма отправляет запрос во внешний поисковик), нужен PHP
└── README.md         — этот файл
```

### Группы страниц (по префиксу имени файла)

Именование историческое, но устойчивое: по префиксу видно, к какому разделу относится страница.
В корне **252 `.html`**, ещё **385 статей** и **3 индекс-страницы раздела** — в каталоге `articles/`
(индекс-страницы — в `articles/control/`), **21 страница исследования** — в `research/`
и **97 страниц творчества** — в `art/`:

| Префикс | Кол-во | Что это |
|---|---|---|
| `articles/a<номер>_*.html` | 385 | статьи, сквозная нумерация `a1_` … `a383_` (без пропусков) + тестовые `a999_test5.html`, `a999_test6.html` |
| `articles/control/*.html` | 3 | индекс-страницы раздела «Статьи», вынесены в каталог `articles/control/` и переименованы: `list.html` (бывший `articles_LIST.html`), `sort.html` (`articles_SORT.html`), `update.html` (`articles_UPDATES.html`) |
| `research/rN_*.html` | 21 | раздел «Исследование»: входные `research.html`, `research_results.html` и волны результатов (`r1_*` — первые, `r2_*` — вторые, `r3_*` — третьи), вынесены в каталог `research/` |
| `art/*.html` | 97 | раздел «Творчество», вынесен в каталог `art/`: страница `art.html`, 35 персональных подборок авторов `art<N>_<автор>*.html` (суффиксы `_poetry` 11, `_prose` 7, `_photo`, `_pictures`) и 61 файл сборников конкурсных работ `compilation*` (`compilationN_<тема>.html` — 11 оглавлений, `compilationN_workM.html` — 50 работ) |
| `articles_*.html` | 101 | раздел «Статьи»: страницы по авторам и подборки их материалов (листинги вынесены в `articles/control/`) |
| `translate_*.html` | 60 | «Статьи / сортировка» по переводчикам |
| `redactor_*.html` | 24 | «Статьи / сортировка» по редакторам |
| `source_*.html` | 16 | «Статьи / сортировка» по источникам (внешние сайты и сообщества) |
| `section_*.html` | 15 | «Статьи / сортировка» по разделам: `blood`, `donors`, `energy`, `sangs`, `somn`, `sleep`, `style`, `socio`, `seekers`… |
| `research_*.html` | 5 | описание исследования: `research_faq` и типы личности (`research_enfj`, `research_enfp`, `research_infp`, `research_intj`), остались в корне |
| прочее | 31 | отдельные страницы: `about_vc`, `archive`, `banner_ex`, `calendarium`, `community`, `contact`, `copyright`, `discord-tests`, `download`, `enter`, `enter_chat`, `example`, `forum`, `glossary`, `home`, `index`, `jabber`, `links`, `load_banners`, `load_radio`, `mainmenu`, `photogallery`, `responsibility`, `sigil`, `society`, `support`, `testpage`, `translator`, `understanding_vc`, `vampshop`, `vc_jabber_faq` |

Совпадение по сумме: 385 (`articles/`) + 3 (`articles/control/`) + 21 (`research/`) + 97 (`art/`) + 252 (корень) = 758.

### Как устроены страницы

- Шаблон: XHTML 1.1 (`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" …>`), кодировка `utf-8`,
  у каждой страницы свой подключаемый стиль — `<link rel="stylesheet" href="css/N.css">`.
- Разметка историческая: `<center>`, `<font>`, inline-стили. Рефакторить только осознанно,
  чтобы не поехала вёрстка остальных страниц.
- Навигация — боковое меню `ol#nav` в `#sidebar` (пример: `home.html`), плюс фрагмент `mainmenu.html`.
- Раздел «Статьи» держится на перекрёстных индексах-«сортировках»: по авторам (`articles_*`),
  редакторам (`redactor_*`), переводчикам (`translate_*`), источникам (`source_*`) и разделам (`section_*`).
- Новая статья = файл `a<следующий номер>_<краткое_имя>.html` в каталоге `articles/` (последняя на 25.09.2026 —
  `articles/a383_vc_history_origins.html`), плюс ссылка в листинге `articles/control/list.html` (блок «Новинки»
  и сводный список раздела) и запись в журнале обновлений `articles/control/update.html`. Листинг
  `articles/control/sort.html` при добавлении статей не обновляется.
- Имена страниц — в нижнем регистре (`home.html`, `about_vc.html`, `translate_marcus.html`); исключений нет:
  три индекс-страницы раздела «Статьи» тоже переехали в `articles/control/` и названы в нижнем регистре —
  `list.html`, `sort.html`, `update.html`.

### Чего в этой копии нет

- **Форума** — он живёт отдельно (PHP + база данных) и в публичную копию не входит. На живой форум
  ссылаются **8 страниц** абсолютными адресами вида `https://vampirecommunity.ru/forum/index.php…`
  (`articles/a353_batenka_transformer.html`, `articles/a364_ria_news.html`, `art/art.html`, `community.html`,
  `research/research.html`, `research/research_results.html`, `home.html`, а также `archive.html` — на старый
  `vampirecommunity.forumbb.ru`), поэтому локально такие ссылки ведут на живой сайт, а не в
  локальную папку. Ещё `mainmenu.html` ведёт на локальный `forum.html` (meta-refresh на
  `community.html`), а `articles/a18_blood_und.html` и `articles/a374_ovc_history_sangs_vs_energo.html` — на чужие
  форумы (torrents.ru, atlantavampirealliance.com), это внешние источники.
- **Админки, серверных конфигов и docker-обвязки** — только файлы самого сайта.
- `vc_search.php` — единственная страница на PHP: без веб-сервера с PHP она не откроется,
  всё остальное — статика и работает прямо из файлов.