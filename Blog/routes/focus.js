var replyTip = require('../mongodb/replydb');
var Person = require('../mongodb/persondb');
var postTip = require('../mongodb/postdb');
var collectTip = require('../mongodb/collectdb');
var focusTip = require('../mongodb/focusdb');

module.exports = {
	focus(req,res,msg){
		let postid = msg;
		var collect_is = true;
		var focusname = '';
		
		postTip.find({_id:msg},(err,response)=>{
			focusname = response[0]['author'];
			var newfocusTip=new focusTip({
				focusname:focusname,
				username:req.session.now_user.id
			})
			newfocusTip.save(function(err,focusTip){
				if(err)
					res.render("isCorrectRegister",{fail:"数据库连接失败"});
			});	
		})
		
		
		// 判断是否收藏
		collectTip.find({postid:msg,username:req.session.now_user.id},(err,response2)=>{
			if(response2.length == 0){
				collect_is = false;
			}
		})

		postTip.find({_id:postid},(err,response)=>{
			replyTip.find({replyid:postid},(err,response1)=>{
				Person.find({name:req.session.now_user.id},(err,response2)=>{
				if(collect_is){
					res.render("postContent",{is_collect:true,id:req.session.now_user.id,
						is_login:true,atid:postid,re:response,re1:response1,img:response2[0]['headPic']});
				}else{
					res.render("postContent",{not_collect:true,id:req.session.now_user.id,
						is_login:true,atid:postid,re:response,re1:response1,img:response2[0]['headPic']});
				}
			})
			})
		})
	}
}