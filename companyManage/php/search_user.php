<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Document</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="../css/bootstrap.min.css">
	<link rel="stylesheet" href="../css/font-awesome.min.css">
	<link rel="stylesheet" href="../css/personal.css">
</head>
<body>
	<?php include("nav.php")?>
	<?php include("sidebar.php")?>
	<div class="mainbar">
		<form action="" method="post">		
			<div class="input-group input-group-lg">
				<input type="text" class="form-control" name="tip" placeholder="请输入查询条件" aria-describedby="sizing-addon1" id="search_tip">
			</div>
			<div class="tip1">			
				<input type="radio" name="searchtip" value="真实姓名" checked id='check'>真实姓名
				<input type="radio" name="searchtip" value="职位" id='check'>职位
				<input type="radio" name="searchtip" value="入职年份" id='check'>入职年份
			</div>
			<div class="tip2">
				<input type="radio" name="search" value="管理员" checked id='check'>管理员
				<input type="radio" name="search" value="员工" id='check'>员工
			</div>
			<input type="submit" name="submit" value="查询" id='submit_search'>
		</form>	
	</div>
	<div class="mainbar1">
		<table>
		<tr>
		<td>姓名</td>
		<td>身份证号</td>
		<td>入职年月</td>
		<td>职位</td>
		<td>手机</td>
		</tr>
		<?php
		if($_SERVER["REQUEST_METHOD"] == "POST"){				
			header("content-type:text/html;charset=utf-8");
			session_start();
			$value1=$_POST["searchtip"];
			$value2=$_POST['search'];
			$tip=$_POST["tip"];
			include("conn.php");
			if($value1=="真实姓名"){
				$value1='real_name';
			}
			if($value1=="职位"){
				$value1='business';
			}
			if($value1=="入职年份"){
				$value1='enter_year';
			}
			if($value2=="管理员"){
				$value2='admin_information';
			}
			if($value2=="员工"){
				$value2="user_information";
			}
			include("conn.php");
			mysqli_query($conn,'set names utf8');
			$sql="select real_name,Card_no,enter_year,business,phone_no from $value2 where $value1='$tip'";
			$check=mysqli_query($conn,$sql) or die(mysqli_error($conn));
			while($row=mysqli_fetch_array($check)){
				echo '<tr>';
				echo '<td>'.$row['real_name'].'</td>';
				echo '<td>'.$row['Card_no'].'</td>';
				echo '<td>'.$row['enter_year'].'</td>';
				echo '<td>'.$row['business'].'</td>';
				echo '<td>'.$row['phone_no'].'</td>';
				echo '</tr>';
			}
		}
		?>
	</table>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
	<script src="https://cdn.bootcss.com/jquery/3.4.0/jquery.min.js"></script>
	<script type="text/javascript" src="../js/updown.js">
	</script>
</body>
</html>