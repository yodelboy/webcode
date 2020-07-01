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
		<legend>新增公告</legend>
		<a href="notice1.php" id="noticeadd-a">返回</a>
		<form action="noticeadd-check.php" class="notice-add" method="post">
			<textarea  name="title" id="noticeadd-title"  class="add1" placeholder="标题(必填)，不多于50个字" cols="30" rows="10"  style="resize:none;"></textarea>
			<br>
			<textarea name="content" id="noticeadd-content" class="add1" cols="30" rows="10" placeholder="正文(必填)"  style="resize:none;"></textarea>
			<br>
			<input type="submit" name="" id="noticeadd-submit" value="提交">
		</form>
	</div>
<script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
<script src="https://cdn.bootcss.com/jquery/3.4.0/jquery.min.js"></script>
<script type="text/javascript" src="../js/updown.js">
</script>
</body>
</html>