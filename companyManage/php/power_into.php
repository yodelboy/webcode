<?php
$name=$_GET['name'];
include("conn.php");
mysqli_query($conn,'set names utf8');
$sql="select * from user_information where user_name='$name'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_array($result);
$sql="insert into admin_information(admin_name,admin_pwd,image,real_name,business,Card_no,phone_no,birth,enter_year,address,is_use)values('$row[1]','$row[2]','$row[3]','$row[4]','$row[5]','$row[6]','$row[7]','$row[8]','$row[9]','$row[10]','1')";
mysqli_query($conn,$sql);
$sql="insert into admin(admin_name,admin_pwd,is_use) value('$row[1]','$row[2]','1')";
mysqli_query($conn,$sql);
$sql="delete from user_information where user_name='$name'";
mysqli_query($conn,$sql);
$sql="delete from user where user_name='$name'";
mysqli_query($conn,$sql);
echo "<script language=\"JavaScript\">alert(\"已将该用户升级为管理员！\");</script>";
header("Refresh:0;url=user_table.php");
?>