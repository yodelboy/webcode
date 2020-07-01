<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Document</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="../css/bootstrap.min.css">
	<link rel="stylesheet" href="../css/font-awesome.min.css">
	<link rel="stylesheet" href="../css/personal.css">
</head>
<body>
	<?php include("nav.php")?>
	<?php include("sidebar.php")?>
	<div class="mainbar">
		<h1 id="title1">个人信息修改</h1>
		<form action="ischange.php" method="post" enctype="multipart/form-data"  id="add1">
			<div class="input-group input-group-lg">
				<input type="password" class="form-control" name="pwd" placeholder="请输入密码" aria-describedby="sizing-addon1" id="pwd1">
				<p class="m1" id="passwaring">6~16个字符，区分大小写</p>
			</div>
			<div class="input-group input-group-lg">
				<input type="password" class="form-control" name="pwd1" placeholder="请再次输入密码" aria-describedby="sizing-addon1" id="pwd2">
				<p class="m1" id="confirmwarning">请再次填写密码</p>
			</div>
			<div class="input-group input-group-lg">
				<input type="text" class="form-control" name="birthday" placeholder="请输入出生年月" aria-describedby="sizing-addon1" id="c_birth">
				<p class="m1" id="birthwaring">请以2000-01-01格式填写</p>
			</div>
			<div class="input-group input-group-lg">
				<input type="text" class="form-control" name="phone" placeholder="请输入联系电话" aria-describedby="sizing-addon1" id="c_phone">
				<p class="m1" id="mobilewarning">可以通过该手机号码快速找回密码</p>
			</div>
			<div class="input-group input-group-lg">
				<input type="text" class="form-control" name="address" placeholder="请输入家庭地址" aria-describedby="sizing-addon1" id="c_address">
				<p class="m1" id="addresswarning">家庭地址填写</p>
			</div>
			<a href="" id="button_goon">提交</a>
			<div class="picto">
				<img src="../img/icon2.png" alt="image" id="userImage">
				<br>
				<iframe src="picgoon.php"></iframe>
			</div>
		</form>	
	</div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
	<script src="https://cdn.bootcss.com/jquery/3.4.0/jquery.min.js"></script>
	<script type="text/javascript" src="../js/updown.js"></script>
	<script type="text/javascript" src="../js/ischange.js">	</script>
</body>
</html>