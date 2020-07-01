<?php 
$name = $_POST["name"];
$flag = 0;
include("conn.php");
mysqli_query($conn,'set names utf8');
$sql="select user_name from user_information";
$result=mysqli_query($conn,$sql);
while($row=mysqli_fetch_array($result)){
	if($name==$row[0]){
		$flag=1;
	}
}
echo $flag;
 ?>