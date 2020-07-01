<?php
$flag1=$_POST["flag1"];
$flag2=$_POST["flag2"];
$flag3=$_POST["flag3"];
$flag4=$_POST["flag4"];
$flag5=$_POST["flag5"];
$flag6=$_POST["flag6"];
$flag7=1;
$username=$_POST["username"];
$realname=$_POST["realname"];
$cardno=$_POST["cardno"];
$birth=$_POST["birth"];
$mobile=$_POST["phone"];
$address=$_POST["address"];
$enteryear=$_POST["enteryear"];
$job=$_POST["job"];
session_start();
 if(isset($_SESSION["userImage"]))
 {
 	$img=$_SESSION["userImage"];
 }
 else{
 	$flag7=0;
 }
 include("conn.php");
 mysqli_query($conn,'set names utf8');
 if($flag1==0||$flag2==0||$flag3==0||$flag4==0||$flag5==0||$flag6==0||$flag7==0){
 	echo 0;
 }
 else{
 	$sql="insert into user_information(user_name,user_pwd,real_name,image,business,Card_no,phone_no,birth,enter_year,address,is_use)values('$username','a123456','$realname','$img','$job','$cardno','$mobile','$birth','$enteryear','$address','1')";
 	$r=mysqli_query($conn,$sql);
 	$sql="insert into user(user_name,user_pwd,is_use)values('$username','a123456','1')";
 	$r=mysqli_query($conn,$sql);
 	echo 1;
}
?>