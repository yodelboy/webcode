<div id="all">
	<header id="header"> 
	</header>
	<main>
		<header>
			<a href="../index.php" id="register-a">返回</a>
	    </header>
		<aside>
			<form action="register_db.php" method="post" id='zhuce1'>  
			<div class="mode">
				<dd>
					<span class="register">*用户名</span>
				</dd>
				<dt>
					<input type="text" name="user_name1" id="username" class="r1">

				</dt>
				<p class="m1" id="namewarning">6~18个字符，需以字母开头</p>
			</div>

			<div class="mode">
				<dd>
					<span class="register">*密码</span>
				</dd>
				<dt>
					<input type="password" id="Password" name="user_pwd">
				</dt>
				<p class="m1" id="passwaring">					
				6~16个字符，区分大小写</p>
			</div>

			<div class="mode">
				<dd>
					<span class="register">*确认密码</span>
				</dd>
				<dt>
					<input type="password" id="confirmpass">
				</dt>
				<p class="m1" id="confirmwarning">请再次填写密码</p>
			</div>

			<!-- 手机号码 -->
			<div class='mode'>
				<dd>
					<span  class="register">*手机号码</span>
				</dd>
				<dt>
					<input type="text" class="flag" value="+86-" id="mobile" name="phone_no">
				</dt>
				<p class="m1" id="mobilewarning">可以通过该手机号码快速找回密码</p>
			</div>

			<!-- 验证码 -->
			<div class='mode'>
				<dd>
					<span  class="register">*验证码</span>
				</dd>
				<dt>
					<input type="text" id="verify" onkeydown="judgeVerificationCode()">
				</dt>
				<img src="../img/check1.jpeg" alt="" id="checkimg">
				<br>
				<p class="m1" id="verifywarning">请填写图片中的字符，不区分大小写</p>
				<a href="#" id="cansee">看不清楚？换一张</a>
			
			</div>

			<!-- 服务条款 -->
				<div id="SVR">
					<input type="checkbox" name="" value="" placeholder="" id="checked" >
					<span>同意</span><a href="#">"服务条款"</a>和<a href="#">"隐私权相关政策"
				</div>
				<!-- 立即注册 -->
				<p class='btn'><a href="" id="btnClk" >注册</a></p>
			</form>
		</aside>


		<section>
			<img src="../img/icon2.png" alt="" id='icon'>
			<img src="../img/welcome.png" alt="" id='welcome'>
		</section>	
	</main>
