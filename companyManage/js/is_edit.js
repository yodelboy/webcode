var flag1=0,flag2=0;
$("#button_goon").click(function(e){
	var name=$("#c_name").val();
	var phone=$("#c_phone").val();
	var address=$("#c_address").val();
	var job=$("#jobs option:selected").text();
	if(phone==''||address==''||job=='请选择职位'){
		alert("请不要有空余的部分");
	}
	else{
		$.post("is_edit.php",{flag1:flag1,flag2:flag2,name:name,phone:phone,address:address,job:job},function(data){
			if(data==0){
				alert("请填写正确的内容！");
			}
			else{
				alert("编辑成功！");
				window.location="admin.php";
			}
		});
	}
	return false;
});
$("#c_phone").blur(function(e){
	e.preventDefault();
	var sname=$("#c_phone").val();
	if(isCorrectPhone(sname)){
		$("#mobilewarning").html("手机号码输入正常！").css("color","green");
		flag1=1;
	}
	else{
		$(this).focus();
		$("#mobilewarning").html("手机号码输入不规范!").css("color","red");
		flag1=0;
	}
});	
$("#c_address").blur(function(e){
	e.preventDefault();
	var sname=$("#c_address").val();
	if(sname!=''){
		$("#addresswarning").html("家庭住址输入正常！").css("color","green");
		flag2=1;
	}
	else{
		$(this).focus();
		$("#addresswarning").html("家庭住址不要为空!").css("color","red");
		flag2=0;
	}
});		
function isCorrectPhone(s){
	var en=/^[1]{1}[3,4,5,7,8]{1}[0-9]{9}$/;
	if(!en.test(s))
		return false;
	return true;
}