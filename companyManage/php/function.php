<?php 
function show($str){
	echo "<script>";
	echo "alert('".$str."');";
	echo "</script>";
}
function jump($page){
	echo "<script>";
	echo "window.location='".$page."';";
	echo "</script>";
}
?>