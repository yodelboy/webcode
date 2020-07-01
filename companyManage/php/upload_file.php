<?php 
   session_start();
   //判断文件的类型
	$bool=(
		   $_FILES['file']['type']=='image/png'||
		   $_FILES['file']['type']=='image/jpg'||
		   $_FILES['file']['type']=='image/jpeg');
	if(!$bool){
		die("类型不对<a href='javascript:window.history.back();'>返回</a>");
	}

	$bool=$_FILES['file']['size'] <100000000;
	//判断文件的大小
	if(!$bool){
		die("大小不对<a href='javascript:window.history.back();'>返回</a>");
	}

	if($_FILES['file']['error']>0){
		die("Return Code".$_FILES['file']['error']."<br />");
	}
	//用上传的时间作为文件名称
	$today=date("YmdHis");	//按照YmdHis的格式封装成字符串

	$fileArray=explode(".",$_FILES["file"]["name"]);  //将上传文件的格式名提取出来和上传的时间字符串组合成文件名
	$filename=$today.".".$fileArray[1];
	
	move_uploaded_file($_FILES["file"]["tmp_name"],"../upload/$filename");

	$filePath="../upload/$filename";	//将上传的文件放置的地址封装成字符串
	$_SESSION["userImage"]=$filePath;	//将要上传的文件放置的地址赋给$_SESSION["userimage"]，在页面能够显示但是还未保存到数据库中
	echo "<script>";
    echo "alert('上传成功');";
    echo "window.parent.document.getElementById('userImage').src='".$_SESSION['userImage']."';";
    //父页面的图片链接放置的地址$_SESSION["userimage"]，在页面能够显示图片但是还未保存到数据库中
    echo "window.location.href='picgoon.php'";
	echo "</script>";
 ?>