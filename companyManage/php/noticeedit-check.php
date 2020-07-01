<?php 
include("conn.php");
include("function.php");
mysqli_query($conn,'set names utf8');
$title =$_POST["title"];
$content=$_POST["content"];
$id = $_POST["noticeID"];
if($title==''||$content==''){
	show("请填写完整的公告信息");
	echo "<script>";
	echo "window.history.go(-1);";
	echo "</script>";
}
else if(strlen($title)>50){
	show("标题过长");
	echo "<script>";
	echo "window.history.go(-1);";
	echo "</script>";
}
else{
	$sql = "update notice set title = '$title',content = '$content' where id = $id;";
	echo $sql;
	$check_info=mysqli_query($conn,$sql);
	if(mysqli_affected_rows($conn)>=0){
		show("公告修改成功");
		jump("notice1.php");
	}
}

 ?>
