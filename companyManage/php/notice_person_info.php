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
	<link rel="stylesheet" href="../css/notice.css">
</head>
<body>
	<?php include("nav.php")?>
	<?php include("sidebar1.php")?>
	<div class="mainbar">
		<h1 id="title1">个人信息</h1>
		<?php
		session_start();
		include("conn.php");
		mysqli_query($conn,'set names utf8');
		if(isset($_SESSION["username"]))
		{
			$name=$_SESSION["username"];
		}
		$sql="select * from user_information where user_name='$name'";
		$result=mysqli_query($conn,$sql);
		$row=mysqli_fetch_array($result);
		if($row[3]==''){
			$row[3]="../img/icon2.png";
		}
		for($i=0;$i<11;$i++){
			if($row[$i]==''){
				$row[$i]="尚未登记";
			}
		}
		echo "<div class='info'>";
		echo "<p id='info1'>用户名：".$row[1]."</p>";
		echo "<p id='info1'>真实姓名：".$row[4]."</p>";
		echo "<p id='info1'>职位：".$row[5]."</p>";
		echo "<p id='info1'>手机号码：".$row[7]."</p>";
		echo "<p id='info1'>出生年月：".$row[8]."</p>";
		echo "<p id='info1'>入职年份：".$row[9]."</p>";
		echo "<p id='info1'>家庭地址：".$row[10]."</p>";
		echo '<img src="'.$row[3].'"alt="" id="p_pic">';
		echo '</div>';
		?>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
	<script src="https://cdn.bootcss.com/jquery/3.4.0/jquery.min.js"></script>
	<script type="text/javascript" src="../js/updown.js"></script>
</body>
</html>