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
	<a href="user_table.php" id='back'>返回</a>
	<div class="mainbar3">
		<h1 id="title1">编辑员工信息</h1>
		<form action="is_edit.php" method="post" enctype="multipart/form-data"  id="add1">
			<div class="input-group input-group-lg">
				<input type="text" class="form-control" name="IDname" value="<?php echo $_GET['name']?>" aria-describedby="sizing-addon1"  id="c_name" disabled>
			</div>
			<div class="input-group input-group-lg">
				<input type="text" class="form-control" name="phone" placeholder="请输入联系电话" aria-describedby="sizing-addon1" id="c_phone">
				<p class="m1" id="mobilewarning">可以通过该手机号码快速找回密码</p>
			</div>
			<div class="input-group input-group-lg">
				<input type="text" class="form-control" name="address" placeholder="请输入家庭地址" aria-describedby="sizing-addon1" id="c_address">
				<p class="m1" id="addresswarning">家庭地址填写</p>
			</div>
			<div class="choose1">
				<select name="job" id="jobs">
					<?php 
					echo "<option value='' selected hidden>请选择职位</option>";
					echo "<option value=''>总经理</option>";
					echo "<option value=''>副经理</option>";
					echo "<option value=''>部门经理</option>";
					echo "<option value=''>普通员工</option>";
					?>
				</select>

			</div>
			<a href="" id="button_goon">提交</a>				
			<div class="picto2">
				<img src="../img/icon2.png" alt="image" id="userImage">
				<br>
				<iframe src="picgoon.php"></iframe>
			</div>
		</form>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
	<script src="https://cdn.bootcss.com/jquery/3.4.0/jquery.min.js"></script>
	<script type="text/javascript" src="../js/updown.js">
	</script>
	<script type="text/javascript" src="../js/is_edit.js"></script>
</body>
</html>