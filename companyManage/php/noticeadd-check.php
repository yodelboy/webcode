<?php 
include("conn.php");
include("function.php");
mysqli_query($conn,'set names utf8');
$title =$_POST["title"];
$content=$_POST["content"];
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
	$sql="insert into notice(title,content,isuse) value(";
	$sql .= "'".$title."','".$content."','1');";
	echo $sql;
	$check_info=mysqli_query($conn,$sql);
	if(mysqli_affected_rows($conn)>=0){
		show("公告添加成功");
		jump("notice1.php");
	}
}

 ?>
