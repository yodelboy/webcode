var Person=require('../mongodb/persondb');
var postTip=require('../mongodb/postdb');
module.exports = {
	Login(req,res,postTip,Person){
		let username=req.body.username;
		let pwd=req.body.pwd;
		Person.find({name:username},(err,response)=>{
			if(response.length==0){
				res.render("Signin",{check_user:"没有该用户，请重新输入用户名"});
			}else{
				if(pwd==response[0]['pwd']){
					var newUser = {id: req.body.username, password: req.body.pwd};
					req.session.now_user = newUser;
					postTip.find(function(err,response){
						Person.find({name:req.session.now_user.id},function(err,response1){
							var arr = [];
							if(response.length>9){
								for(var i=0;i<9;i++){
									arr.push(response[i]);
								}				
							}else{
								for(var i=0;i<response.length;i++){
									arr.push(response[i]);
								}
							}
							if(response1[0]['is_admin']==1){
								res.render('adminhome',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,img:response1[0]['headPic'],active_all:"active",whattype:"",is_admin:true});
							}else{
								res.render('home',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,img:response1[0]['headPic'],active_all:"active",whattype:""});
							}
						})
					})
				}else{
					res.render("Signin",{check_pwd:"密码输入错误，请重新输入密码"});
				}
			}
		})
	}
}
