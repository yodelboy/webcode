var flag1=0,flag2=0,flag3=0,flag4=0,flag5=0;
$("#button_goon").click(function(e){
	var pwd1=$("#pwd1").val();
	var pwd2=$("#pwd2").val();
	var birth=$("#c_birth").val();
	var phone=$("#c_phone").val();
	var address=$("#c_address").val();
	if(pwd1==''||pwd2==''||birth==''||phone==''||address==''){
		alert("请不要有空余的部分");
	}
	else{
		$.post("ischange_user.php",{flag1:flag1,flag2:flag2,flag3:flag3,flag4:flag4,flag5:flag5,pwd1:pwd1,birth:birth,phone:phone,address:address},function(data){
			if(data==0){
				alert("请输入正确的信息");
			}
			else{
				alert("修改成功");
				window.location="personal.php";
			}
		});
	}
	return false;
});
$("#pwd1").blur(function(e){
	e.preventDefault();
	var sname=$("#pwd1").val();
	if(isCorrectPwd(sname)){
		$("#passwaring").html("密码输入正常！").css("color","green");
		flag1=1;
	}
	else{
		$(this).focus();
		$("#passwaring").html("密码输入不规范!").css("color","red");
		flag1=0;
	}
});
$("#pwd2").blur(function(e){
	e.preventDefault();
	var sname=$("#pwd1").val();
	var spass=$("#pwd2").val();
	if(sname==spass){
		$("#confirmwarning").html("密码一致！").css("color","green");
		flag2=1;
	}
	else{
		$(this).focus();
		$("#confirmwarning").html("密码不一致!").css("color","red");
		flag2=0;
	}
});	
$("#c_birth").blur(function(e){
	e.preventDefault();
	var sname=$("#c_birth").val();
	if(isCorrectBirth(sname)){
		$("#birthwaring").html("出生年月输入正常！").css("color","green");
		flag3=1;
	}
	else{
		$(this).focus();
		$("#birthwaring").html("出生年月输入不规范!").css("color","red");
		flag3=0;
	}
});	
$("#c_phone").blur(function(e){
	e.preventDefault();
	var sname=$("#c_phone").val();
	if(isCorrectPhone(sname)){
		$("#mobilewarning").html("手机号码输入正常！").css("color","green");
		flag4=1;
	}
	else{
		$(this).focus();
		$("#mobilewarning").html("手机号码输入不规范!").css("color","red");
		flag4=0;
	}
});	
$("#c_address").blur(function(e){
	e.preventDefault();
	var sname=$("#c_address").val();
	if(sname!=''){
		$("#addresswarning").html("家庭住址输入正常！").css("color","green");
		flag5=1;
	}
	else{
		$(this).focus();
		$("#addresswarning").html("请填写家庭住址!").css("color","red");
		flag5=0;
	}
});			
function isCorrectPwd(s){
	var en=/^[a-z0-9_-]{6,18}$/;
	if(!en.test(s))
		return false;
	return true;
}
function isCorrectBirth(s){
	var en=/^[0-9]{4}[-]{1}[0-9]{1,2}[-]{1}[0-9]{1,2}$/;
	if(!en.test(s))
		return false;
	return true;
}
function isCorrectPhone(s){
	var en=/^[1]{1}[3,4,5,7,8]{1}[0-9]{9}$/;
	if(!en.test(s))
		return false;
	return true;
}