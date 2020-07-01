var multer  = require('multer');
var replyTip = require('../mongodb/replydb');
var Person = require('../mongodb/persondb');
var postTip = require('../mongodb/postdb');
var collectTip = require('../mongodb/collectdb');
var focusTip = require('../mongodb/focusdb');
module.exports = {
	replyview(req,res,content){
		let postid = content;
		let replyMsg = req.body.replyPost;

		var not_focus;
		var focusname = '';
		var collect_is = true;
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth()+1;
		var strdate = date.getDate();
		var hour = date.getHours();
		var min = date.getMinutes();
		var sec = date.getSeconds();
		if(month >= 1&&month <= 9){
			month="0"+month;
		}
		if(strdate>=1&&strdate<=9){
			strdate="0"+strdate;
		}
		if(hour>=1&&hour<=9){
			hour="0"+hour;
		}
		if(min>=1&&min<=9){
			min="0"+min;
		}
		if(sec == 0){
			sec = "00";
		}
		if(sec>=1&&sec<=9){
			sec="0"+sec;
		}
		var time=year+"-"+month+"-"+strdate+" "+hour+":"+min+":"+sec;

		var newreplyTip=new replyTip({
			content:replyMsg,
			author:req.session.now_user.id,
			time:time,
			replyid:postid
		})
		// 判断是否收藏
		if(req.session.now_user){
			collectTip.find({postid:postid,username:req.session.now_user.id},(err,response2)=>{
				if(response2.length == 0){
					collect_is = false;
				}
			})
		}
		
//是否关注
if(req.session.now_user){
	postTip.find({_id:postid},(err,response)=>{
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


newreplyTip.save(function(err,replyTip){
	if(err)
		res.render("isCorrectRegister",{fail:"数据库连接失败"});
});	
postTip.find({_id:postid},(err,response)=>{
	replyTip.find({replyid:postid},(err,response1)=>{
		Person.find({name:req.session.now_user.id},(err,response2)=>{
		if(req.session.now_user){


			if(collect_is){
				res.render("postContent",{is_focus:not_focus,
					is_collect:true,is_login:true,id:req.session.now_user.id,
					atid:postid,re:response,re1:response1,img:response2[0]['headPic']});
			}else{
				res.render("postContent",{is_focus:not_focus,
					not_collect:true,is_login:true,id:req.session.now_user.id,
					atid:postid,re:response,re1:response1,img:response2[0]['headPic']});
			}
		}else{
			res.render("postContent",{is_display:true,atid:postid,
				re:response,re1:response1});
		}
	})
	})
})
}
}