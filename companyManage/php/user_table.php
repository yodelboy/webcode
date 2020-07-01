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
	<div class="tables1">
		<h1 id="title2">员工信息</h1>
		<form action="peo_info.php" method="post" enctype="multipart/form-data"  id="add1">
			<table class="table-bordered">
				<tr>
					<td>姓名</td>
					<td>职位</td>
					<td>生日</td>
					<td>电话</td>
					<td>个人页</td>
					<td>操作</td>
				</tr>
				<?php
				header("content-type:text/html;charset=utf-8");
				$currentpage = 1;
				$page=$_GET['page'];
				if($page){
					$currentpage = $page;
				}
				include("conn.php");
				mysqli_query($conn,'set names utf8');
				$sql ="select count(*) as count from user_information";//查询记录的sql语句
				$result = mysqli_query($conn,$sql);
				$arr = mysqli_fetch_array($result);
				$count = $arr['count'];
				$pagesize = 8;
				$pages = ceil($count/$pagesize);//共多少页


				$prepage = $currentpage -1;
				if($prepage<=0)
					$prepage=1;


				$nextpage = $currentpage+1;
				if($nextpage >= $pages){
					$nextpage = $pages;
				}
				$start =($currentpage-1) * $pagesize;//起始位置
				$sql = "select * from user_information limit $start,$pagesize";
				$result1 = mysqli_query($conn,$sql);
				// $sql1="select * from admin_information";
				// $sql2="select * from user_information";
				// $result1=mysqli_query($conn,$sql1);
				// $result2=mysqli_query($conn,$sql2);
				while($row=mysqli_fetch_array($result1)){
					echo "<tr>";
					echo "<td>".$row[4]."</td>";
					echo "<td>".$row[5]."</td>";
					echo "<td>".$row[8]."</td>";
					echo "<td>".$row[7]."</td>";
					echo "<td>";
					echo "<a href='peo_info.php?name=$row[1]'><img src='../img/u.png' alt=''></a>";
					echo "</td>";
				    echo "<td>";
					echo "<a href='edit.php?name=$row[1]'><img src='../img/edit.png' alt='' height='20px' class='img11' id='img13'></a>";
					echo "<a href='power_into.php?name=$row[1]'><img src='../img/key.png' alt='' height='24px' class='img11'></a>";
					echo "<a href='delete.php?name=$row[1]'><img src='../img/del.png' alt='' height='20px' class='img11' id='img12'></a>";
					echo "</td>";
					echo "</tr>";
				}
				?>
			</table>
			<div class="change_page">
				<a href="<?php echo $_SERVER['PHP_SELF'].'?page='.$prepage; ?>">上一页</a>&nbsp;&nbsp;<a href="<?php echo $_SERVER['PHP_SELF'].'?page='.$nextpage; ?>">下一页</a>
			</div>
		</form>
	</div>
</table>
</div>
<script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
<script src="https://cdn.bootcss.com/jquery/3.4.0/jquery.min.js"></script>
<script type="text/javascript" src="../js/updown.js">
</script>
</body>
</html>