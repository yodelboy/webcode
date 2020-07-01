<?php
$name=$_GET['name'];
include("conn.php");
mysqli_query($conn,'set names utf8');
$sql="delete from user_information where user_name='$name'";
mysqli_query($conn,$sql);
$sql="delete from user where user_name='$name'";
mysqli_query($conn,$sql);
echo "<script language=\"JavaScript\">alert(\"删除成功！\");</script>";
header("Refresh:0;url=user_table.php");
?>