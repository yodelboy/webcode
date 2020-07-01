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
	<?php include("sidebar.php") ?>
	<div class="mainbar-title">
		<legend>公告编辑</legend>
		<a href="notice1.php" id="noticeedit-a">返回</a>
		<form action="noticeedit-check.php" class="notice-add" method="post">
			<?php 
			include("conn.php");
			mysqli_query($conn,'set names utf8');
			$id = $_GET["id"];
			$sql =  "select * from notice where id = ".$id.";";
			$check_info = mysqli_query($conn,$sql);
			if(mysqli_affected_rows($conn)>0){
			$row=mysqli_fetch_array($check_info);
		}
			else{
				echo $sql;
			}
			echo "<input type='hidden' name='noticeID' value='"; echo $id; echo"'>";
			echo "<textarea  name='title' id='noticeadd-title'  class='add1' placeholder='标题(必填)，不多于50个字'' cols='30' rows='10'  style='resize:none;' >";
			echo $row[1]; 
			echo"</textarea>";
			echo"<br>";
			echo"<textarea name='content' id='noticeadd-content' class='add1' cols='30' rows='10' placeholder='正文(必填)'  style='resize:none;'>";
			echo $row[2];
			echo "</textarea>";
			echo"<br>";
			echo"<input type='submit' name='' id='noticeadd-submit' value='确认修改'>";
			?>
		</form>
	</div>


	<script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
	<script src="https://cdn.bootcss.com/jquery/3.4.0/jquery.min.js"></script>
	<script type="text/javascript" src="../js/updown.js">
	</script>
</body>
</html>