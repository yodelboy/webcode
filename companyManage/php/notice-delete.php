<?php 
include("conn.php");
$id = $_GET["id"];
$sql = "update notice set isuse = '0' where id = $id;";
include("function.php");
mysqli_query($conn,'set names utf8');
echo $id;
echo $sql;
$check_info=mysqli_query($conn,$sql);
if(mysqli_affected_rows($conn)>=0){
		show("删除成功");
		jump("notice1.php");
	}
 ?>