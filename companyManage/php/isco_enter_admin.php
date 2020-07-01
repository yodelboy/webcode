<?php
$username=$_POST["user"];
$password=$_POST["pass"];
$flag=0;
$a=0;
if($username==''||$password==''){
	echo "<script language=\"JavaScript\">alert(\"用户名和密码不要为空\");</script>";
    header("Refresh:0;url=admin_enter.php");
    exit;
}
include("conn.php");
mysqli_query($conn,'set names utf8');
$sql = "select * from admin";
$check_info=mysqli_query($conn,$sql);
while($result = mysqli_fetch_array($check_info)){  
    session_start();  
    $_SESSION['username'] = $username;
    if($result[1]==$username&&$result[2]==$password){
        $flag=1;
        session_start();  
        $_SESSION['username'] = $username;
        echo "<script language=\"JavaScript\">alert(\"登录成功！\");</script>";
        header("Refresh:1;url=admin.php");
        exit;
    }   
    if($result[1]==$username&&$result[2]!=$password){
        $a=1;
    }
    if($result[1]!=$username&&$result[2]==$password){
        $a=2;
    }
}
if($flag==0){
    if($a==2){
        echo "<script language=\"JavaScript\">alert(\"用户名错误！\");</script>";
        header("Refresh:0;url=admin_enter.php");
        exit;
    }
    else if($a==1){
        echo "<script language=\"JavaScript\">alert(\"密码错误！\");</script>";
        header("Refresh:0;url=admin_enter.php");
        exit;
    }
    else{
        exit('登录失败！点击此处 <a href="javascript:history.back(-1);">返回</a> 重试');
    } 
} 
mysqli_close($conn);
?>