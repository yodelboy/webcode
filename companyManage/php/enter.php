<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<div class="enterUI">
		<a href="php/register.php" id="zhuce">注册用户>></a>
		<a href="php/admin_enter.php" id="admin_enter">管理员登陆>></a>
		<form action="php/isco_enter.php" method="post">
			<p id="title">欢迎使用芸艺信息管理系统</p>
			<?php include("enter_1.php")?>
		</form>	
		<img src="img/bg.jpg" alt="" id="bg">
	</div>
	<a href="doc/final.pdf" id="final">设计书</a>
</body>
</html>