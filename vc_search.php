<?php
$site_id = "vcsearch";
$default_enc = "UTF-8";

$q = $_GET['q'];
$enc = $_GET['enc'];
if( !preg_match( "/^(?i)(UTF-8|windows-1251|KOI8-R)$/", $enc ) ) {
    $enc = $default_enc;
}
header("Content-Type: text/html; charset=" . $enc);
?>


<html>
<title>Поиск | Сообщество Вампиров</title>
<META HTTP-equiv="content-type" content="text/html; charset=utf-8" />
<META NAME="KEYWORDS" CONTENT="Сообщество Вампиров, Вампиры, Настоящие Вампиры, Реальные Вампиры, Сообщество, Сангвинары, Санги, Энерго, Правда о Настоящих Вампирах, Общество Вампиров, Вампиры в наше время, современный Вампир, узнать правду о Вампирах, Информация о Настоящих Вампирах" />
<META NAME="DESCRIPTION" CONTENT="Сообщество Вампиров, русскоязычное отделение." />
<META NAME="REVISIT-AFTER" CONTENT="1 DAYS" />
<link rel="stylesheet" href="css/vc.css" type="text/css" media="screen,projection" />
<link rel="shortcut icon" href="favicon.ico" />
</head>

<body>

<div id="sidebar">
	
<h4><a href="start.html" title="Сообщество Вампиров">Vampire Community</a></h4>
<center><img src="images/razd-15-years.png" style="width: 95%;"/></center>

			
					<ol id="nav">
						<a href="enter.html"><b>Intro</b>Введение</a>
						<a href="about_VC.html"><b>About VC</b>О нас</a>
						<a href="sigil.html"><b>Sigil</b>Наш символ</a>
						<a href="society.html">Для общественности</a>
						<a href="responsibility.html"><b>!!!</b>Ответственность</a>
						<br />
						<a href="contact.html"><b>Contacts</b>Контакты</a>
						<a href="links.html"><b>Links</b>Ссылки</a>
						<a href="banner_ex.html"><b>EX</b>Баннеры</a>
						<a href="art.html"><b>VC Art</b>Творчество</a>
						<br />
						<a href="research.html"><b>R-ch</b>Исследование</a>
						<a href="research_results.html"><b>Results</b>Результаты</a>
						<a href="archive.html"><b>VC Archive</b>Архив</a>
						<br />
						<a href="support.html"><b>Support</b>Поддержать</a>
						<a href="download.html"><b>Download</b>Скачать</a>
						<br />		
						<a href="glossary.html"><b>Glossary</b>Глоссарий</a>
						<a href="articles_LIST.html"><b>Articles</b>Статьи</a>
						<br />
						<b><a href="community.html"><b>VC</b>Авторизация</a></b>
						<a href="start.html"><b>Main</b>На главную</a>
						<br />
						<i><a href="vc_search.php"><b>Search</b>Поиск</a></i>
					</ol>
					
					<br />
					



					<br /><br />
					

				

					
	</div>


<div id="content">
	
					
			
			<br /><br />

			<h2>Поиск</h2>
			

								
			<p>

			<br/>
<form action="https://duckduckgo.com/" method="get" target="_blank">
    <input type="text" name="q" placeholder="Найти" />
    <input type="hidden" name="q" value="site:vampirecommunity.ru" />
    <button type="submit">Найти</button>
</form>






</body>
</html>
