<?php
$flag1=$_POST["flag1"];
$flag2=$_POST["flag2"];
$flag3=$_POST["flag3"];
$flag4=$_POST["flag4"];
$flag5=$_POST["flag5"];
$flag6=1;
$pwd1=$_POST["pwd1"];
$birth=$_POST["birth"];
$mobile=$_POST["phone"];
$address=$_POST["address"];
session_start();
 if(isset($_SESSION["userImage"]))
 {
 	$img=$_SESSION["userImage"];
 }
 else{
 	$flag6=0;
 }
 if(isset($_SESSION["username"]))
 {
 	$name=$_SESSION["username"];
 }
 include("conn.php");
 mysqli_query($conn,'set names utf8');
 if($flag1==0||$flag2==0||$flag3==0||$flag4==0||$flag5==0||$flag6==0){
 	echo 0;
 }
 else{
 	$sql1="update admin_information set admin_pwd='$pwd1',birth='$birth',phone_no='$mobile',address='$address',image='$img' where admin_name='$name'";
 	$sql2="update admin set admin_pwd='$pwd1' where admin_name='$name'";
 	mysqli_query($conn,$sql1);
 	mysqli_query($conn,$sql2);
 	echo 1;
}
?>