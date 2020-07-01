var flag1=0,flag2=0,flag3=0,flag4=0,flag5=0,flag6=0;
$("#button_goon").click(function(e){
	var username=$("#username").val();
	var realname=$("#realname").val();
	var cardno=$("#cardno").val();
	var birth=$("#c_birth").val();
	var phone=$("#c_phone").val();
	var address=$("#c_address").val();
	var enteryear=$("#enyear option:selected").text();
	var job=$("#jobs option:selected").text();
	if(username==''||realname==''||cardno==''||birth==''||phone==''||address==''||enteryear=='请选择入职年份'||job=='请选择职位'){
		alert("请不要有空余的部分");
	}
	else{
		$.post("is_add.php",{flag1:flag1,flag2:flag2,flag3:flag3,flag4:flag4,flag5:flag5,flag6:flag6,
			username:username,realname:realname,cardno:cardno,birth:birth,phone:phone,address:address,
			enteryear:enteryear,job:job},function(data){
			if(data==0){
				alert("请填写正确的内容！");
			}
			else{
				alert("增加成功！");
				window.location="admin.php";
			}
		});
	}
	return false;
});
$("#username").blur(function(e){
	e.preventDefault();
	var sname=$("#username").val();
	if(isCorrectUser(sname)){
		// $("#userwaring").html("用户名输入正常！").css("color","green");
		$.post("isuser_again.php",{sname:sname},function(data){
			if(data==0){
				$("#userwaring").html("用户名输入正常！").css("color","green");
				flag1=1;
			}
			else{
				$(this).focus();
				$("#userwaring").html("用户名已被他人使用!").css("color","red");
				flag1=0;
			}
		});
	}
	else{
		$(this).focus();
		$("#userwaring").html("用户名输入不规范!").css("color","red");
		flag1=0;
	}
});
$("#realname").blur(function(e){
	e.preventDefault();
	var sname=$("#realname").val();
	if(sname!=''){
		$("#realnamewaring").html("真实姓名输入正常！").css("color","green");
		flag2=1;
	}
	else{
		$(this).focus();
		$("#realnamewaring").html("真实姓名不要为空!").css("color","red");
		flag2=0;
	}
});
$("#cardno").blur(function(e){
	e.preventDefault();
	var sname=$("#cardno").val();
	if(isCorrectID(sname)){
		$("#cardnowarning").html("身份证号输入正常！").css("color","green");
		flag3=1;
	}
	else{
		$(this).focus();
		$("#cardnowarning").html("身份证号输入不规范!").css("color","red");
		flag3=0;
	}
});	
$("#c_birth").blur(function(e){
	e.preventDefault();
	var sname=$("#c_birth").val();
	if(isCorrectBirth(sname)){
		$("#birthwaring").html("出生年月输入正常！").css("color","green");
		flag4=1;
	}
	else{
		$(this).focus();
		$("#birthwaring").html("出生年月输入不规范!").css("color","red");
		flag4=0;
	}
});	
$("#c_phone").blur(function(e){
	e.preventDefault();
	var sname=$("#c_phone").val();
	if(isCorrectPhone(sname)){
		$("#mobilewarning").html("手机号码输入正常！").css("color","green");
		flag5=1;
	}
	else{
		$(this).focus();
		$("#mobilewarning").html("手机号码输入不规范!").css("color","red");
		flag5=0;
	}
});	
$("#c_address").blur(function(e){
	e.preventDefault();
	var sname=$("#c_address").val();
	if(sname!=''){
		$("#addresswarning").html("家庭住址输入正常！").css("color","green");
		flag6=1;
	}
	else{
		$(this).focus();
		$("#addresswarning").html("家庭住址不要为空!").css("color","red");
		flag6=0;
	}
});			
function isCorrectUser(s){
	var en=/^[\w,\-]{6,18}$/;
	if(!en.test(s))
		return false;
	return true;
}
function isCorrectID(s){
	var en=/^[0-9]{18}$/;
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