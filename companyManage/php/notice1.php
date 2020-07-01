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
	<?php include("sidebar.php")?>
	<div class="mainbar-title">
		<legend>公告管理</legend>
		<a href="notice-add.php" id="notice1-a">新增公告</a>
		<form action="" id="notice-search" method="post">
			<input type="text"  placeholder="查询公告" id="notice-search1" name="noticesearch" style="outline:none">
			<input type="submit" id="searchBtn" value="查询">
		</form>
		<br><br>
		<div>
			<?php
			include("conn.php");
			mysqli_query($conn,'set names utf8');
			$search = $_POST["noticesearch"];
			$sql = "select * from notice where isuse = 1 and title like '%$search%' order by id desc;";
			$check_info=mysqli_query($conn,$sql);
			if(mysqli_affected_rows($conn)==0){
				echo "<div>";
				echo "当前没有公告";
				echo "</div>"; 
			}
			else{
				while($row=mysqli_fetch_array($check_info)){

					echo "<div id= 'notice-title'>";
					echo "<a href='notice1-view.php?id=$row[0]' id='notice-a'>";
					echo $row[1];
					echo "</a>";
					echo "</div>";
					echo "<img src='../img/ding.png' alt='' id='notice-img' height='30'>";
					echo"<br><br><br>";
				}
			}
			?>
		</div>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
	<script src="https://cdn.bootcss.com/jquery/3.4.0/jquery.min.js"></script>
	<script type="text/javascript" src="../js/updown.js">
	</script>
</body>
</html>