<div class="sidebar">   
    <div class="img1" >    
    <?php session_start();echo "<p id='top_name'>欢迎你！用户"; echo $_SESSION['username'];echo"</p>"?> 
    <a href="exit.php" id="exit1">
      <!-- <img src="" height="100" id="top-img"> -->
      退出
    </a>
  </div> 
    <ul class="menu">

      <li class="list"><a href="#">通知管理</a> 
       <ul class="items">
        <li><a href="notice.php">公告栏</a></li>
      </ul>
    </li>
    <li class="list"><a href="#">个人中心</a> 
     <ul class="items">
      <li> <a href="notice_person_info.php" > 个人信息 </a></li>
      <li> <a href="change_info_user.php" > 修改信息 </a></li>
    </ul>
  </li>
</ul>
</div>