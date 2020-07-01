var replyTip = require('../mongodb/replydb');
var Person = require('../mongodb/persondb');
var postTip = require('../mongodb/postdb');
var collectTip = require('../mongodb/collectdb');
var focusTip = require('../mongodb/focusdb');
module.exports = {
	collect(req,res,msg){
		let postid = msg;
		var not_focus;
//是否关注
if(req.session.now_user){
	postTip.find({_id:msg},(err,response)=>{
		focusname = response[0]['author'];
		console.log(focusname);
		if(focusname == req.session.now_user.id){
			not_focus=false;
			console.log(not_focus+"1");
			return;
		}else{
			focusTip.find({focusname:focusname,username:req.session.now_user.id},(err,response1)=>{
				if(response1.length == 0){
					not_focus =true;
					console.log(focusname+"1");
				}else{
					not_focus = false;
				}
			})
		}
	})
}

var newcollectTip=new collectTip({
	postid:msg,
	username:req.session.now_user.id
})
newcollectTip.save(function(err,replyTip){
	if(err)
		res.render("isCorrectRegister",{fail:"数据库连接失败"});
});	
postTip.find({_id:postid},(err,response)=>{
	replyTip.find({replyid:postid},(err,response1)=>{
		Person.find({name:req.session.now_user.id},(err,response2)=>{
			res.render("postContent",{is_focus:not_focus,is_collect:true,
				is_login:true,id:req.session.now_user.id,atid:postid,re:response,
				re1:response1,img:response2[0]['headPic']});
		})
	})
})
}
}