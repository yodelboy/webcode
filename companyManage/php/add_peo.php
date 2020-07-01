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
		<h1 id="title1">新增员工信息</h1>
		<form action="" method="post" enctype="multipart/form-data"  id="add1">
			<div class="input-group input-group-lg">
				<input type="text" class="form-control" name="username" placeholder="请输入用户名" aria-describedby="sizing-addon1" id="username">
				<p class="m1" id="userwaring">6~16个字符，区分大小写</p>
			</div>
			<div class="input-group input-group-lg">
				<input type="text" class="form-control" name="real_name" placeholder="请输入真实姓名" aria-describedby="sizing-addon1" id="realname">
				<p class="m1" id="realnamewaring">输入正确的姓名</p>
			</div>
			<div class="input-group input-group-lg">
				<input type="text" class="form-control" name="card_no" placeholder="请输入身份证号" aria-describedby="sizing-addon1" id="cardno">
				<p class="m1" id="cardnowarning">请输入18位数字</p>
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
			<div class="choose">
				<select name="enterYear" id="enyear">
					<?php 
					echo "<option value='' selected hidden>请选择入职年份</option>";
					for($i=2010;$i<2020;$i++){
						echo "<option value=''>$i</option>";
					}
					?>
				</select>
				<br>
				<select name="job" id="jobs">
					<?php 
					echo "<option value='' selected hidden>请选择职位</option>";
					echo "<option value=''>总经理</option>";
					echo "<option value=''>副经理</option>";
					echo "<option value=''>部门经理</option>";
					echo "<option value=''>普通员工</option>";
					?>
				</select>
				<a href="" id="button_goon">提交</a>
				<div class="picto1">
					<img src="../img/icon2.png" alt="image" id="userImage">
					<br>
					<iframe src="picgoon.php"></iframe>
				</div>
			</div>
		</form>	
	</div>
	<script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
	<script src="https://cdn.bootcss.com/jquery/3.4.0/jquery.min.js"></script>
	<script type="text/javascript" src="../js/updown.js">
	</script>
	<script type="text/javascript" src="../js/is_add.js"></script>
</body>
</html>