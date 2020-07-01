
var arrErrorInfos=["长度应为 6~18 个字符",
"需由字母、数字或下划线组成",
"密码长度应为 6~16 个字符",
"密码过于简单，请尝试“字母+数字”的组合",
"两次填写的密码不一致",
"请填写正确的手机号",
"验证码输入错误"];
var arrCorrectInfos=["用户名可用",
"密码可用",
"密码一致",
"手机号码可用",
"验证通过"];
var objUserName=document.getElementById("username");
var objCNsee=document.getElementById("cansee");
var aVerity=["YSBQM","STRW3K","5DBCP","DGTDPC"];	
var objNwarning=document.getElementById("namewarning");
var objpassword=document.getElementById("Password");
var objpasswaring=document.getElementById("passwaring");
var objpassword=document.getElementById("Password");
var objconfirm=document.getElementById("confirmpass");
var objCnWarning=document.getElementById("confirmwarning");
var objMobile=document.getElementById("mobile");
var objMbWarning=document.getElementById("mobilewarning");
var objVerify=document.getElementById("verify");
var objVRwarning=document.getElementById("verifywarning");
var objCheck=document.getElementById("checked");
var objBtnCLK=document.getElementById("btnClk");
var iRnd=1;
var irepeat=1;
var flag0 = 0;
var flag3 = 0;
//注册事件
objUserName.onblur=function()
{
	judgename();
}
//检查用户名是否正确
function judgename()
{
	//定义变量
	var flag1=0;//用户名是否符合要求
	var flag2=0;//位数是否符合要求
	var reg=/^[a-zA-Z]{1}[\w,\-]{5,17}$/;
	var sUserName=document.getElementById("username").value;
	var ilenth=sUserName.length;
	//检验用户名是否符合要求
	//不符合要求的话
	if(!reg.exec(sUserName))
	{
		//在下方的位置提示错误
		objNwarning.innerHTML="×"+arrErrorInfos[1];
		//颜色为红色
		objNwarning.style.color="red";
		//高亮显示
		objUserName.style.backgroundColor="#A69D86";
		flag1=1;
	}
	else
	{
		flag1=0;
	}
	//检测位数是否符合要求
	if(ilenth<6 || ilenth>18)
	{
		//在下方位置提示错误
		objNwarning.innerHTML="×"+arrErrorInfos[0];
		//颜色为红
		objNwarning.style.color="red";
		//高亮显示
		objUserName.style.backgroundColor="#A69D86";
		flag2=1;
	}
	else
	{
		flag2=0;
	}
	//两个都符合要求
	if(flag1==0&&flag2==0)
	{
		//提示用户名可用
		var sname=$("#username").val();
		$.post("register_again.php",{name:sname},function(data){
			if(data == 0){
				objNwarning.innerHTML="√"+arrCorrectInfos[0];
				objNwarning.style.color="green";
				objUserName.style.backgroundColor="white";
				flag3 =1;
			}
			else{
				objNwarning.innerHTML="×"+"用户名重复";
		//颜色为红
		objNwarning.style.color="red";
		//高亮显示
		objUserName.style.backgroundColor="#A69D86";
		flag2=1;
		return false;
	}
});
	}
	else
	{
		return false;
	}
}
// 注册事件
objpassword.onblur=function()
{
	judgepassword();
}
//检查密码是否正确
function judgepassword()
{
	//定义变量
	var sPassword=objpassword.value;
	var iPassword=sPassword.length;
	var flag1=0;
	var flag2=0;
	// var reg=/^[a-zA-Z0-9]*([a-zA-Z][0-9]|[0-9][a-zA-Z])[a-zA-Z0-9]*$/
	var regnumber=/^[0-9]{6,18}$///检测密码是否为纯数字
	var regab=/^[a-zA-Z]{6,18}$///检测密码是否为纯字母
	//密码是否过于简单
	if(regnumber.exec(sPassword)||regab.exec(sPassword))
	{
		flag1=1;
		//提示错误
		objpasswaring.innerHTML="×"+arrErrorInfos[3];
		objpasswaring.style.color="red";
		//高亮显示
		objpassword.style.backgroundColor="#A69D86";
	}
	else
	{
		flag1=0;
	}
	//检测密码位数是否符合要求
	if(iPassword<6 ||iPassword>16)
	{
		flag2=1;
		//提示错误
		objpasswaring.innerHTML="×"+arrErrorInfos[2];
		objpasswaring.style.color="red";
		//高亮显示
		objpassword.style.backgroundColor="#A69D86";
	}
	else
	{

		flag=0;
	}
	//如果密码符合要求
	if(flag1==0 && flag2==0)
	{
		//显示密码可用
		objpasswaring.innerHTML="√"+arrCorrectInfos[1];
		objpassword.style.backgroundColor="white";
		objpasswaring.style.color="green";
		return true;
	}
	else
	{
		return false;
	}
}
//注册事件
objconfirm.onblur=function()
{
	judgeconfirm();
}
//判断两次密码是否一致
function judgeconfirm()
{
	//定义变量
	var spassword=objpassword.value;
	var sconfirm=objconfirm.value;
	//检测密码是否和第一次输入一致
	//不一致
	if(spassword!=sconfirm)
	{
		//显示错误
		objCnWarning.innerHTML="×"+arrErrorInfos[4];
		objCnWarning.style.color="red";
		objconfirm.style.backgroundColor="#A69D86";
		return false;
	}
	//一致
	else
	{
		//显示密码一致
		objCnWarning.innerHTML="√"+arrCorrectInfos[2];
		objCnWarning.style.color="green";
		objconfirm.style.backgroundColor="white";
		return true;
	}
}
// 注册事件
objMobile.onblur=function()
{
	judgemobile();
}
//判断手机号
function judgemobile()
{
	var sMobile=objMobile.value;
	var iMobile=sMobile.length;
	//手机号的正则表达式
	var reg=/^((\+?86\-))?[1][3,4,5,7,8][0-9]{9}$/;
	//如果手机号错误
	if(!reg.exec(sMobile) || iMobile!=15)
	{
		//提示错误
		objMbWarning.innerHTML="×"+arrErrorInfos[5];
		objMbWarning.style.color="red";
		objMobile.style.backgroundColor="#A69D86";
		return false;
	}
	//手机号正确
	else
	{
		//提示手机号正确
		objMbWarning.innerHTML="√"+arrCorrectInfos[3];
		objMbWarning.style.color="green";
		objMobile.style.backgroundColor="white";
		return true;
	}
}
//验证码换图片
objCNsee.onclick=function(event) {
	event.preventDefault();
	//while循环直到找到iRnd和前一个不一样确保图片一定会换掉
	while(iRnd==irepeat)
		iRnd=parseInt(Math.random()*(4)+1);
	//记录当前iRnd值
	irepeat=iRnd;
	//换图片的src
	document.getElementById("checkimg").src="../img/check"+iRnd+".jpeg";
	//input文本消失
	objVerify.value="";
	objVRwarning.innerHTML="请填写图片中的字符，不区分大小写";
	objVRwarning.style.color="black";
	objVerify.style.backgroundColor="white";
	//焦点
	objVerify.select();
}
// 注册事件
objVerify.onblur=function()
{
	isCorrectVR();
}
//验证码检验
function isCorrectVR()
{
	var sVerify=objVerify.value;
	//验证码和设定的数组进行比较
	//验证码不正确
	if(sVerify.toUpperCase()!=aVerity[iRnd-1])
	{
		//按回车键显示验证码不正确
		objVRwarning.innerHTML="×"+arrErrorInfos[6];
		objVRwarning.style.color="red";
		//高亮
		objVerify.style.backgroundColor="#A69D86";
		return false;
	}
	else
	{
		objVRwarning.innerHTML="√"+arrCorrectInfos[4];
		objVRwarning.style.color="green";
		objVerify.style.backgroundColor="white";
		return true;
	}
}
//判断注册页所有信息
//按回车键判断是否进入下一页面
function judgeVerificationCode()
{
	//如果按回车键
	if(event.keyCode==13)
	{
		//先判断验证码是否正确
		if(isCorrectVR())
			Submit();
	}
}
//按注册按钮判断信息

$("#btnClk").click(function(){
	var sname=$("#username").val();
	var user_pwd =$("#Password").val();
	var phono_no =$("#mobile").val();
	if(!objCheck.checked)
		alert("请同意\"服务条款\"和\"隐私权相关政策\"");
	else if(flag3&&judgepassword()&&judgeconfirm()&&judgemobile()&&isCorrectVR())
		{
			$.post("register_db.php",{name:sname,user_pwd:user_pwd,phono_no:phono_no},function(data){
				if(data == 1){
					alert("注册成功");
					window.location="../index.php";
				}
			});
		}
		else{
			alert("注册信息有误");
		}
		return false;
	});