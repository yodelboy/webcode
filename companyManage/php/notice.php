<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="../css/bootstrap.min.css">
	<link rel="stylesheet" href="../css/font-awesome.min.css">
	<link rel="stylesheet" href="../css/personal.css">
	<link rel="stylesheet" href="../css/notice.css">
</head>
<body>
	<?php include("nav.php")?>
	<?php include("sidebar1.php") ?>
	<div class="mainbar-title">
		<legend>公告</legend>
		<div>
			<?php
			include("conn.php");
			mysqli_query($conn,'set names utf8');
			$sql = "select * from notice where isuse = 1 order by id desc;";
			$check_info=mysqli_query($conn,$sql);
			if(mysqli_affected_rows($conn)==0){
			echo "<div>";
			echo "当前没有公告";
			echo "</div>"; 
		}
		while($row=mysqli_fetch_array($check_info)){
			echo "<div id= 'notice-title'>";
			echo "<a href='notice-view.php?id=$row[0]' id='notice-a'>";
			echo $row[1];
			echo "</a>";
			echo "</div>";
			echo "<img src='../img/ding.png' alt='' id='notice-img' height='30'>";
			echo"<br><br><br>";
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