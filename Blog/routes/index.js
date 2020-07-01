var nodemailer=require("nodemailer");
var express = require('express');
var app=express();
var bodyParser=require("body-parser");
var fs=require('fs');
var path = require('path')
var multer  = require('multer')
var formidable=require("formidable")
var router = express.Router();
var multipart=require('connect-multiparty');
var multipartMidd=multipart(); 
var code="";

//文件连接
var send = require('./sendEmails');
var checkRegister = require('./checkRegister');
var uploadFile = require('./uploadfile');
var login=require('./login');
var reply = require('./reply');
var focus = require('./focus');
var collect = require('./collect');
var changepic=require('./changepic');
var changePage=require('./changepage');
var Person=require('../mongodb/persondb');
var postTip=require('../mongodb/postdb');
var Personinfo=require('../mongodb/person_info');
var replyTip = require('../mongodb/replydb');
var collectTip = require('../mongodb/collectdb');
var focusTip = require('../mongodb/focusdb');
var a="";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//主页面
router.get('/', function(req, res,next) {
	if(req.session.now_user){
		postTip.find(function(err, response){
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
		});
	}else{
		postTip.find(function(err, response){
			var arr = [];
			if(response.length>9){
				for(var i=0;i<9;i++){
					arr.push(response[i]);
				}				
			}
			else{
				for(var i=0;i<response.length;i++){
					arr.push(response[i]);
				}
			}
			res.render('home',{is_display:true,active1:"active",resq:arr,isTable:true,active_all:"active",lastpage:1,nextpage:2,whattype:""});
		});
	}
});

//登录页面
router.get('/Signin', function(req, res,next) {
	res.render('Signin',{is_display:false});
});

//注册页面
router.get('/register', function(req, res,next) {
	res.render('register',{is_display:false});
});

//注册单项检错，提交注册表单
router.post('/isCorrectRegister', function(req, res,next) {
	checkRegister.checkReg(req,res,Person,code);
});

//发送邮件
router.get('/sendEmail',(req,res,next)=>{
	code=1000 + Math.round(Math.random() * 10000 - 1000);
	send.sendEmails(req,res,code);
});

//用户登录以及session建立
router.post('/isCorrectLogin', function(req, res,next) {
	login.Login(req,res,postTip,Person);
});

//用户登出，摧毁session
router.get('/logout', function(req, res){
	req.session.destroy(()=>{ console.log("user logged out.") });
	res.redirect('/');
});

//用户点击发帖事件，判断是否登录
router.get('/postinfo', function(req, res,next) {
	if(req.session.now_user){
		Person.find({name:req.session.now_user.id},function(err,response){
			res.render('postinfo',{is_login:true,id:req.session.now_user.id,is_active2:"active",img:response[0]['headPic']});
		})
	}else{
		res.render('home',{is_display:true,noLogin:"请先登录再进行发帖操作！",active2:"active",active_all:"active"})
	}
});

//发帖
router.post('/upload',function(req, res, next) {
	uploadFile.uploadfile(req,res,postTip);
})

//个人主页
router.get('/Personal_homepage',function(req,res,next){
	Person.find({name:req.session.now_user.id},function(err,response){
		var headimg=response[0]['headPic'];
		Personinfo.find({name:req.session.now_user.id},function(err,response1){
			res.render('Per_homepage',{id:req.session.now_user.id,img:headimg,realname:response1[0]['realname'],sex:response1[0]['sex'],birth:response1[0]['birth'],place:response1[0]['place'],job:response1[0]['job'],info:response1[0]['info']});
		})
	})
})
//修改资料
router.post('/change_info',function(req,res,next){
	var realname=req.body.realname;
	var sex=req.body.sex;
	var birth=req.body.birth;
	var place=req.body.place;
	var job=req.body.job;
	var info=req.body.info;
	Person.find({name:req.session.now_user.id},function(err,response){
		Personinfo.update({name:req.session.now_user.id}, {realname:realname,sex:sex,birth:birth,place:place,job:job,info:info}, function(err, response1) {
			if(err){
				res.render("isCorrectRegister",{fail:"数据库连接失败"});
			}else{
				Personinfo.find({name:req.session.now_user.id},function(err,response2){
					res.render('Per_homepage',{id:req.session.now_user.id,img:response[0]['headPic'],realname:response2[0]['realname'], sex:response2[0]['sex'],birth:response2[0]['birth'],place:response2[0]['place'],job:response2[0]['job'],info:response2[0]['info']});
				});
			}
		});
	});
})

//C分类
router.get('/isC',function(req,res,next){
	postTip.find({part:"C"},function(err,response){
		if(req.session.now_user){
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
					res.render('adminhome',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,img:response1[0]['headPic'],active_C:"active",whattype:"C",is_admin:true});
				}else{
					res.render('home',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,img:response1[0]['headPic'],active_C:"active",whattype:"C"});
				}
			})
		}else{
			var arr = [];
			if(response.length>9){
				for(var i=0;i<9;i++){
					arr.push(response[i]);
				}				
			}
			else{
				for(var i=0;i<response.length;i++){
					arr.push(response[i]);
				}
			}
			res.render('home',{is_display:true,active1:"active",resq:arr,isTable:true,active_C:"active",lastpage:1,nextpage:2,whattype:"C"});
		}
	})
})

//Java分类
router.get('/isJava',function(req,res,next){
	postTip.find({part:"Java"},function(err,response){
		if(req.session.now_user){
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
					res.render('adminhome',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,img:response1[0]['headPic'],active_Java:"active",whattype:"Java",is_admin:true});
				}else{
					res.render('home',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,img:response1[0]['headPic'],active_Java:"active",whattype:"Java"});
				}
			})
		}else{
			var arr = [];
			if(response.length>9){
				for(var i=0;i<9;i++){
					arr.push(response[i]);
				}				
			}
			else{
				for(var i=0;i<response.length;i++){
					arr.push(response[i]);
				}
			}
			res.render('home',{is_display:true,active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,active_Java:"active",whattype:"Java"});
		}
	})
})

//前端分类
router.get('/isfront',function(req,res,next){
	postTip.find({part:"前端开发"},function(err,response){
		if(req.session.now_user){
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
					res.render('adminhome',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,img:response1[0]['headPic'],active_front:"active",whattype:"前端开发",is_admin:true});
				}else{
					res.render('home',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,img:response1[0]['headPic'],active_front:"active",whattype:"前端开发"});
				}
			})
		}else{
			var arr = [];
			if(response.length>9){
				for(var i=0;i<9;i++){
					arr.push(response[i]);
				}				
			}
			else{
				for(var i=0;i<response.length;i++){
					arr.push(response[i]);
				}
			}
			res.render('home',{is_display:true,active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,active_front:"active",whattype:"前端开发"});
		}
	})
})

//后端分类
router.get('/isend',function(req,res,next){
	postTip.find({part:"后端开发"},function(err,response){
		if(req.session.now_user){
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
					res.render('adminhome',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,img:response1[0]['headPic'],active_end:"active",whattype:"后端开发",is_admin:true});
				}else{
					res.render('home',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,img:response1[0]['headPic'],active_end:"active",whattype:"后端开发"});
				}
			})
		}else{
			var arr = [];
			if(response.length>9){
				for(var i=0;i<9;i++){
					arr.push(response[i]);
				}				
			}
			else{
				for(var i=0;i<response.length;i++){
					arr.push(response[i]);
				}
			}
			res.render('home',{is_display:true,active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,active_end:"active",whattype:"后端开发"});
		}
	})
})

//数据库分类
router.get('/isdata',function(req,res,next){
	postTip.find({part:"数据库"},function(err,response){
		if(req.session.now_user){
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
					res.render('adminhome',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,img:response1[0]['headPic'],active_data:"active",whattype:"数据库",is_admin:true});
				}else{
					res.render('home',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,img:response1[0]['headPic'],active_data:"active",whattype:"数据库"});
				}
			})
		}else{
			var arr = [];
			if(response.length>9){
				for(var i=0;i<9;i++){
					arr.push(response[i]);
				}				
			}
			else{
				for(var i=0;i<response.length;i++){
					arr.push(response[i]);
				}
			}
			res.render('home',{is_display:true,active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,active_data:"active",whattype:"数据库"});
		}
	})
})

//人工智能分类
router.get('/isArtificial',function(req,res,next){
	postTip.find({part:"人工智能"},function(err,response){
		if(req.session.now_user){
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
					res.render('adminhome',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,img:response1[0]['headPic'],active_Artificial:"active",whattype:"人工智能",is_admin:true});
				}else{
					res.render('home',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,img:response1[0]['headPic'],active_Artificial:"active",whattype:"人工智能"});
				}
			})
		}else{
			var arr = [];
			if(response.length>9){
				for(var i=0;i<9;i++){
					arr.push(response[i]);
				}				
			}
			else{
				for(var i=0;i<response.length;i++){
					arr.push(response[i]);
				}
			}
			res.render('home',{is_display:true,active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,active_Artificial:"active",whattype:"人工智能"});
		}
	})
})

//架构分类
router.get('/isFrame',function(req,res,next){
	postTip.find({part:"架构"},function(err,response){
		if(req.session.now_user){
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
					res.render('adminhome',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,img:response1[0]['headPic'],active_Frame:"active",whattype:"架构",is_admin:true});
				}else{
					res.render('home',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,img:response1[0]['headPic'],active_Frame:"active",whattype:"架构"});
				}
			})
		}else{
			var arr = [];
			if(response.length>9){
				for(var i=0;i<9;i++){
					arr.push(response[i]);
				}				
			}
			else{
				for(var i=0;i<response.length;i++){
					arr.push(response[i]);
				}
			}
			res.render('home',{is_display:true,active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,active_Frame:"active",whattype:"架构"});
		}
	})
})

//游戏开发分类
router.get('/isgame',function(req,res,next){
	postTip.find({part:"游戏开发"},function(err,response){
		if(req.session.now_user){
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
					res.render('adminhome',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,img:response1[0]['headPic'],active_game:"active",whattype:"游戏开发",is_admin:true});
				}else{
					res.render('home',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,img:response1[0]['headPic'],active_game:"active",whattype:"游戏开发"});
				}
			})
		}else{
			var arr = [];
			if(response.length>9){
				for(var i=0;i<9;i++){
					arr.push(response[i]);
				}				
			}
			else{
				for(var i=0;i<response.length;i++){
					arr.push(response[i]);
				}
			}
			res.render('home',{is_display:true,active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,active_game:"active",whattype:"游戏开发"});
		}
	})
})

//搜索
router.post('/search',function(req,res,next){
	var query={};
	let msg=req.body.search;
	if(msg){
		query['name']=new RegExp(msg);
	}
	postTip.find({title:query['name']},function(err,response){
		if(req.session.now_user){
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
		}else{
			postTip.find(function(err, response){
			var arr = [];
			if(response.length>9){
				for(var i=0;i<9;i++){
					arr.push(response[i]);
				}				
			}
			else{
				for(var i=0;i<response.length;i++){
					arr.push(response[i]);
				}
			}
			res.render('home',{is_display:true,active1:"active",resq:arr,isTable:true,active_all:"active",lastpage:1,nextpage:2,whattype:""});
		});
		}
	})
})

//分页
router.get('/changepage',function(req,res,next){
	changePage.changepage(req,res);
})

//修改头像
router.post('/changepic',function(req,res,next){
	changepic.changepic(req,res);
})

// 我的关注
router.get('/per_focus',function(req,res,next){
	var username = req.session.now_user.id;
	var arr=[];
	var img;
	focusTip.find({username:username},(err,response)=>{
		for(var i = 0;i < response.length ;i++){
			Person.find({name:response[i]['focusname']},(err,response1)=>{

				for(var j = 0;j < response1.length;j++){
					arr.push(response1[j]);
				}

			})
		}
		Person.find({name:username},(err,response2)=>{
		res.render('perFocus',{is_login:true,id:username,post:arr,
			img:response2[0]['headPic']});			
				})
		
	})
})
//我的收藏
router.get('/per_collect',function(req,res,next){
	var username = req.session.now_user.id;
	var arr=[];
	
	collectTip.find({username:req.session.now_user.id},(err,response)=>{
		
		for(var i = 0;i < response.length ;i++){
			postTip.find({_id:response[i]['postid']},(err,response1)=>{
				
				for(var j = 0;j < response1.length;j++){
					arr.push(response1[j]);
					
				}
			})
		}
		Person.find({name:username},(err,response2)=>{
		res.render('perCollect',{is_login:true,id:username,post:arr,img:response2[0]['headPic']});
	})
	})
});
//打开帖子
router.get('/openPost',function(req,res,next){
	var msg = req.query.temp;
	var collect_is = true;
	var not_focus;
	var focusname = '';
	//是否收藏
	if(req.session.now_user){
		collectTip.find({postid:msg,username:req.session.now_user.id},(err,response2)=>{
			if(response2.length == 0){
				collect_is = false;
			}
		})
	}
	//是否关注
	if(req.session.now_user){
		postTip.find({_id:msg},(err,response)=>{
			focusname = response[0]['author'];
			if(focusname == req.session.now_user.id){
				not_focus=false;
				return;
			}else{
				focusTip.find({focusname:focusname,username:req.session.now_user.id},(err,response1)=>{
					if(response1.length == 0){
						not_focus =true;
					}else{
						not_focus = false;
					}
				})
			}
		})
	}
	postTip.find({_id:msg},(err,response)=>{
		replyTip.find({replyid:msg},(err,response1)=>{
			postTip.update({_id:msg},{look_count:response[0]['look_count']+1},function(err,response2){
			});

			if(req.session.now_user){
Person.find({name:req.session.now_user.id},(err,response2)=>{
				if(collect_is){
					res.render("postContent",{is_focus:not_focus,
						id:req.session.now_user.id,is_collect:true,
						is_login:true,atid:msg,re:response,re1:response1,img:response2[0]['headPic']});
				}else{
					res.render("postContent",{is_focus:not_focus,
						id:req.session.now_user.id,not_collect:true,
						is_login:true,atid:msg,re:response,re1:response1,img:response2[0]['headPic']});
				}
			})
			}else{
				res.render("postContent",{not_collect:true,is_display:true,atid:msg,re:response,re1:response1});
			}
		})
	})
});

//回复帖子
router.post('/reply',function(req,res,next){
	var content = req.query.mend;
	reply.replyview(req, res,content);
});

//点赞帖子
router.get('/good',function(req,res,next){
	var msg = req.query.meg;
	var collect_is = true;
	var not_focus;
	var focusname = '';
	//是否收藏
	if(req.session.now_user){
		collectTip.find({postid:msg,username:req.session.now_user.id},(err,response2)=>{
			if(response2.length == 0){
				collect_is = false;
			}
		})
	}
	//是否关注
	if(req.session.now_user){
		postTip.find({_id:msg},(err,response)=>{
			focusname = response[0]['author'];
			if(focusname == req.session.now_user.id){
				not_focus=false;
				return;
			}else{
				focusTip.find({focusname:focusname,username:req.session.now_user.id},(err,response1)=>{
					if(response1.length == 0){
						not_focus =true;
					}else{
						not_focus = false;
					}
				})
			}
		})
	}
	postTip.update({_id:msg},{$inc:{good_count:1}},function(err,response){
	});
	postTip.find({_id:msg},(err,response)=>{
		replyTip.find({replyid:msg},(err,response1)=>{
			Person.find({name:req.session.now_user.id},(err,response2)=>{
			if(collect_is){
				res.render("postContent",{is_focus:not_focus,id:req.session.now_user.id,
					is_collect:true,is_login:true,atid:msg,
					re:response,re1:response1,img:response2[0]['headPic']});
			}else{
				res.render("postContent",{is_focus:not_focus,id:req.session.now_user.id,
					not_collect:true,is_login:true,atid:msg,
					re:response,re1:response1,img:response2[0]['headPic']});
			}
		})
		})
	})
});

//我的帖子
router.get('/mypost',(req,res,next)=>{
	postTip.find({author:req.session.now_user.id},(err,response)=>{
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
		res.render('mypost',{title_post:req.session.now_user.id,resq:arr,whattype:"my",lastpage:1,nextpage:2});
	})
})

//点开的我的帖子
router.get('/openPost_my',function(req,res,next){
	var msg = req.query.temp;
	postTip.find({_id:msg},(err,response)=>{
		replyTip.find({replyid:msg},(err,response1)=>{
			if(req.session.now_user){
				res.render("mypostContent",{id:req.session.now_user.id,atid:msg,re:response,re1:response1});
			}
		})
	})
});
//收藏帖子
router.get('/collect',function(req,res,next){
	var msg = req.query.meg;
	collect.collect(req,res,msg);
});
//关注用户
router.get('/focus',function(req,res,next){
	var msg = req.query.meg;
	focus.focus(req,res,msg);
})
//查看用户内容
router.get('/admin0', function(req, res,next){
	Person.find(function(err, response){
		res.json(response);
	});
});
//查看用户表内容
router.get('/admin', function(req, res,next){
	postTip.find(function(err, response){
		res.json(response);
	});
});
//查看回复内容
router.get('/admin1', function(req, res,next){
	replyTip.find(function(err, response){
		res.json(response);
	});
});
//查看收藏内容
router.get('/admin2', function(req, res,next){
	collectTip.find(function(err, response){
		res.json(response);
	});
});
//查看关注内容
router.get('/admin3', function(req, res,next){
	focusTip.find(function(err, response){
		res.json(response);
	});
});
//查看用户表内容
router.get('/admin4', function(req, res,next){
	postTip.find(function(err, response){
		res.json(response);
	});
});

//删除路由
router.delete('/people/:id', function(req, res,next){
	postTip.findByIdAndRemove(req.params.id, function(err, response){
		if(err) res.json({message: "Error in deleting record id " + req.params.id});
		else res.json({message: "Person with id " + req.params.id + " removed."});
	});
});

router.get('/delete',function(req,res,next){
	var data=req.query.data;
	postTip.findByIdAndRemove(data, function(err, response){
		postTip.find(function(err, response){
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
				res.render('adminhome',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:arr,isTable:true,lastpage:1,nextpage:2,img:response1[0]['headPic'],active_all:"active",whattype:"",is_admin:true});
			})
		});
	});
})
module.exports = router;