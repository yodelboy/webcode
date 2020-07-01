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
		<a href="notice.php" id="noticeview-a">返回</a>
		<div>
			<?php 
			$id = $_GET["id"];
			include("conn.php");
			mysqli_query($conn,'set names utf8');
			$sql = "select * from notice where id = $id;";
			$check_info=mysqli_query($conn,$sql);
			$row=mysqli_fetch_array($check_info);
			echo "<div id='noticeview1'>";
			echo $row[1];
			echo "</div><div id='noticeview2'>";
			echo $row[2];
			echo "</div>";
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