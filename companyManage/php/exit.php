<?php
session_start();
header("Refresh:0;url=../index.php");
unset($_SESSION["username"]);
unset($_SESSION["userImage"]);
?>