<?php
$flag1=$_POST["flag1"];
$flag2=$_POST["flag2"];
$flag3=1;
$mobile=$_POST["phone"];
$address=$_POST["address"];
$job=$_POST["job"];
$name=$_POST['name'];
session_start();
 if(isset($_SESSION["userImage"]))
 {
 	$img=$_SESSION["userImage"];
 }
 else{
 	$flag3=0;
 }
 include("conn.php");
 mysqli_query($conn,'set names utf8');
 if($flag1==0||$flag2==0||$flag3==0){
 	echo 0;
 }
 else{
 	$sql="update user_information set phone_no='$mobile',address='$address',image='$img' where user_name='$name'";
 	mysqli_query($conn,$sql);
 	echo 1;
}
?>