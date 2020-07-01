

<?php
//处理编辑操作的页面 
include("conn.php"); 
mysqli_query($conn,'set names utf8');
session_start();
//获取修改的信息
// $id = $_POST['id'];
$user_name = $_POST['name'];
$user_pwd = $_POST['user_pwd'];
$real_name = NULL;
$business = NULL;
$Card_no = NULL;
$address = NULL;
$enter_year = NULL;
$phono_no = $_POST['phono_no'];
$image="../img/icon2.png";
// if(isset($_SESSION["userimage"]))
// 	{
// 		$image=$_SESSION["userimage"];
// 	}
// 	else{
// 		$sql="select image from students where id=$id;";
// 		$rs=mysqli_query($conn,$sql);
// 		if(mysqli_affected_rows($conn)>0){
// 			$row=mysqli_fetch_array($rs);
// 			$image=$row[0];
// 		}
// 	}
// if($user_name==''){
// 	echo "1";
// }
// else{
// 	echo "2";
// } 

$sql="insert into user_information(user_name,user_pwd,phone_no,image,is_use) VALUES ('$user_name','$user_pwd','$phono_no','$image','1')";
$rs=mysqli_query($conn,$sql);
$sql="insert into user(user_name,user_pwd,is_use) VALUES ('$user_name','$user_pwd','1')";
$rs=mysqli_query($conn,$sql);
echo 1;

?>