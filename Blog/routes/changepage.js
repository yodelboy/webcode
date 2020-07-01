var Person=require('../mongodb/persondb');
var postTip=require('../mongodb/postdb');
module.exports = {
	changepage(req,res){
		let type=req.query.whattype;
		var page=req.query.page;
		var lastPage=page;
		var nextPage=page;
		var nowpageNote=[];
		var end;
		let pagesize=9;
		if(type==""){
			postTip.find((err,response)=>{
				let count=response.length;			
				let pageCount=count/pagesize;
				if(page==null){
					page=1;
				}
				if(parseInt(page)-1>0){
					lastPage=parseInt(lastPage)-1;
				}
				if(parseInt(page)+1<=Math.ceil(pageCount)){
					nextPage=parseInt(nextPage)+1;
				}
				if((page-1)*9+9>count){
					end=count;
				}
				else{
					end=(page-1)*9+9;
				}
				for(var i=9*(page-1);i<end;i++){
					nowpageNote.push(response[i]);
				}
				if(req.session.now_user){
					Person.find({name:req.session.now_user.id},(err,response1)=>{
						if(response1[0]['is_admin']==1){
							res.render('adminhome',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:nowpageNote,isTable:true,lastpage:lastPage,nextpage:nextPage,img:response1[0]['headPic'],active_all:"active",whattype:"",is_admin:true});
						}else{
							res.render('home',{is_login:true,id:req.session.now_user.id, is_active1:"active",img:response1[0]['headPic'], resq:nowpageNote,isTable:true,active_all:"active",lastpage:lastPage,nextpage:nextPage,whattype:""});
						}
					})
				}else{
					res.render('home',{is_display:true,active1:"active",resq:nowpageNote,isTable:true,active_all:"active",lastpage:lastPage,nextpage:nextPage,whattype:""});
				}
			})
		}else{
			if(type=="C"){
				postTip.find({part:"C"},(err,response)=>{
					let count=response.length;			
					let pageCount=count/pagesize;
					if(page==null){
						page=1;
					}
					if(parseInt(page)-1>0){
						lastPage=parseInt(lastPage)-1;
					}
					if(parseInt(page)+1<=Math.ceil(pageCount)){
						nextPage=parseInt(nextPage)+1;
					}
					if((page-1)*9+9>count){
						end=count;
					}
					else{
						end=(page-1)*9+9;
					}
					for(var i=9*(page-1);i<end;i++){
						nowpageNote.push(response[i]);
					}
					if(req.session.now_user){
						Person.find({name:req.session.now_user.id},(err,response1)=>{
							if(response1[0]['is_admin']==1){
								res.render('adminhome',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:nowpageNote,isTable:true,lastpage:lastPage,nextpage:nextPage,img:response1[0]['headPic'],active_C:"active",whattype:"C",is_admin:true});
							}else{
								res.render('home',{is_login:true,id:req.session.now_user.id, is_active1:"active",img:response1[0]['headPic'], resq:nowpageNote,isTable:true,active_C:"active",lastpage:lastPage,nextpage:nextPage,whattype:"C"});
							}
						})
					}else{
						res.render('home',{is_display:true,active1:"active",resq:nowpageNote,isTable:true,active_C:"active",lastpage:lastPage,nextpage:nextPage,whattype:"C"});
					}
				})
			}
			if(type=="Java"){
				postTip.find({part:"Java"},(err,response)=>{
					let count=response.length;			
					let pageCount=count/pagesize;
					if(page==null){
						page=1;
					}
					if(parseInt(page)-1>0){
						lastPage=parseInt(lastPage)-1;
					}
					if(parseInt(page)+1<=Math.ceil(pageCount)){
						nextPage=parseInt(nextPage)+1;
					}
					if((page-1)*9+9>count){
						end=count;
					}
					else{
						end=(page-1)*9+9;
					}
					for(var i=9*(page-1);i<end;i++){
						nowpageNote.push(response[i]);
					}
					if(req.session.now_user){
						Person.find({name:req.session.now_user.id},(err,response1)=>{
							if(response1[0]['is_admin']==1){
								res.render('adminhome',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:nowpageNote,isTable:true,lastpage:lastPage,nextpage:nextPage,img:response1[0]['headPic'],active_Java:"active",whattype:"Java",is_admin:true});
							}else{
								res.render('home',{is_login:true,id:req.session.now_user.id, is_active1:"active",img:response1[0]['headPic'], resq:nowpageNote,isTable:true,active_Java:"active",lastpage:lastPage,nextpage:nextPage,whattype:"Java"});
							}
							
						})
					}else{
						res.render('home',{is_display:true,active1:"active",resq:nowpageNote,isTable:true,active_Java:"active",lastpage:lastPage,nextpage:nextPage,whattype:"Java"});
					}
				})
			}
			if(type=="前端开发"){
				postTip.find({part:"前端开发"},(err,response)=>{
					let count=response.length;			
					let pageCount=count/pagesize;
					if(page==null){
						page=1;
					}
					if(parseInt(page)-1>0){
						lastPage=parseInt(lastPage)-1;
					}
					if(parseInt(page)+1<=Math.ceil(pageCount)){
						nextPage=parseInt(nextPage)+1;
					}
					if((page-1)*9+9>count){
						end=count;
					}
					else{
						end=(page-1)*9+9;
					}
					for(var i=9*(page-1);i<end;i++){
						nowpageNote.push(response[i]);
					}
					if(req.session.now_user){
						Person.find({name:req.session.now_user.id},(err,response1)=>{
							if(response1[0]['is_admin']==1){
								res.render('adminhome',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:nowpageNote,isTable:true,lastpage:lastPage,nextpage:nextPage,img:response1[0]['headPic'],active_front:"active",whattype:"前端开发",is_admin:true});
							}else{
								res.render('home',{is_login:true,id:req.session.now_user.id, is_active1:"active",img:response1[0]['headPic'], resq:nowpageNote,isTable:true,active_front:"active",lastpage:lastPage,nextpage:nextPage,whattype:"前端开发"});
							}
							
						})
					}else{
						res.render('home',{is_display:true,active1:"active",resq:nowpageNote,isTable:true,active_front:"active",lastpage:lastPage,nextpage:nextPage,whattype:"前端开发"});
					}
				})
			}
			if(type=="后端开发"){
				postTip.find({part:"后端开发"},(err,response)=>{
					let count=response.length;			
					let pageCount=count/pagesize;
					if(page==null){
						page=1;
					}
					if(parseInt(page)-1>0){
						lastPage=parseInt(lastPage)-1;
					}
					if(parseInt(page)+1<=Math.ceil(pageCount)){
						nextPage=parseInt(nextPage)+1;
					}
					if((page-1)*9+9>count){
						end=count;
					}
					else{
						end=(page-1)*9+9;
					}
					for(var i=9*(page-1);i<end;i++){
						nowpageNote.push(response[i]);
					}
					if(req.session.now_user){
						Person.find({name:req.session.now_user.id},(err,response1)=>{
							if(response1[0]['is_admin']==1){
								res.render('adminhome',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:nowpageNote,isTable:true,lastpage:lastPage,nextpage:nextPage,img:response1[0]['headPic'],active_end:"active",whattype:"后端开发",is_admin:true});
							}else{
								res.render('home',{is_login:true,id:req.session.now_user.id, is_active1:"active",img:response1[0]['headPic'], resq:nowpageNote,isTable:true,active_end:"active",lastpage:lastPage,nextpage:nextPage,whattype:"后端开发"});
							}
							
						})
					}else{
						res.render('home',{is_display:true,active1:"active",resq:nowpageNote,isTable:true,active_end:"active",lastpage:lastPage,nextpage:nextPage,whattype:"后端开发"});
					}
				})
			}
			if(type=="数据库"){
				postTip.find({part:"数据库"},(err,response)=>{
					let count=response.length;			
					let pageCount=count/pagesize;
					if(page==null){
						page=1;
					}
					if(parseInt(page)-1>0){
						lastPage=parseInt(lastPage)-1;
					}
					if(parseInt(page)+1<=Math.ceil(pageCount)){
						nextPage=parseInt(nextPage)+1;
					}
					if((page-1)*9+9>count){
						end=count;
					}
					else{
						end=(page-1)*9+9;
					}
					for(var i=9*(page-1);i<end;i++){
						nowpageNote.push(response[i]);
					}
					if(req.session.now_user){
						Person.find({name:req.session.now_user.id},(err,response1)=>{
							if(response1[0]['is_admin']==1){
								res.render('adminhome',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:nowpageNote,isTable:true,lastpage:lastPage,nextpage:nextPage,img:response1[0]['headPic'],active_data:"active",whattype:"数据库",is_admin:true});
							}else{
								res.render('home',{is_login:true,id:req.session.now_user.id, is_active1:"active",img:response1[0]['headPic'], resq:nowpageNote,isTable:true,active_data:"active",lastpage:lastPage,nextpage:nextPage,whattype:"数据库"});
							}
							
						})
					}else{
						res.render('home',{is_display:true,active1:"active",resq:nowpageNote,isTable:true,active_data:"active",lastpage:lastPage,nextpage:nextPage,whattype:"数据库"});
					}
				})
			}
			if(type=="人工智能"){
				postTip.find({part:"人工智能"},(err,response)=>{
					let count=response.length;			
					let pageCount=count/pagesize;
					if(page==null){
						page=1;
					}
					if(parseInt(page)-1>0){
						lastPage=parseInt(lastPage)-1;
					}
					if(parseInt(page)+1<=Math.ceil(pageCount)){
						nextPage=parseInt(nextPage)+1;
					}
					if((page-1)*9+9>count){
						end=count;
					}
					else{
						end=(page-1)*9+9;
					}
					for(var i=9*(page-1);i<end;i++){
						nowpageNote.push(response[i]);
					}
					if(req.session.now_user){
						Person.find({name:req.session.now_user.id},(err,response1)=>{
							if(response1[0]['is_admin']==1){
								res.render('adminhome',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:nowpageNote,isTable:true,lastpage:lastPage,nextpage:nextPage,img:response1[0]['headPic'],active_Artificial:"active",whattype:"人工智能",is_admin:true});
							}else{
								res.render('home',{is_login:true,id:req.session.now_user.id, is_active1:"active",img:response1[0]['headPic'], resq:nowpageNote,isTable:true,active_Artificial:"active",lastpage:lastPage,nextpage:nextPage,whattype:"人工智能"});
							}
							
						})
					}else{
						res.render('home',{is_display:true,active1:"active",resq:nowpageNote,isTable:true,active_Artificial:"active",lastpage:lastPage,nextpage:nextPage,whattype:"人工智能"});
					}
				})
			}
			if(type=="架构"){
				postTip.find({part:"架构"},(err,response)=>{
					let count=response.length;			
					let pageCount=count/pagesize;
					if(page==null){
						page=1;
					}
					if(parseInt(page)-1>0){
						lastPage=parseInt(lastPage)-1;
					}
					if(parseInt(page)+1<=Math.ceil(pageCount)){
						nextPage=parseInt(nextPage)+1;
					}
					if((page-1)*9+9>count){
						end=count;
					}
					else{
						end=(page-1)*9+9;
					}
					for(var i=9*(page-1);i<end;i++){
						nowpageNote.push(response[i]);
					}
					if(req.session.now_user){
						Person.find({name:req.session.now_user.id},(err,response1)=>{
							if(response1[0]['is_admin']==1){
								res.render('adminhome',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:nowpageNote,isTable:true,lastpage:lastPage,nextpage:nextPage,img:response1[0]['headPic'],active_Frame:"active",whattype:"架构",is_admin:true});
							}else{
								res.render('home',{is_login:true,id:req.session.now_user.id, is_active1:"active",img:response1[0]['headPic'], resq:nowpageNote,isTable:true,active_Frame:"active",lastpage:lastPage,nextpage:nextPage,whattype:"架构"});
							}

						})
					}else{
						res.render('home',{is_display:true,active1:"active",resq:nowpageNote,isTable:true,active_Frame:"active",lastpage:lastPage,nextpage:nextPage,whattype:"架构"});
					}
				})
			}
			if(type=="my"){
				postTip.find({author:req.session.now_user.id},(err,response)=>{
					let count=response.length;			
					let pageCount=count/pagesize;
					if(page==null){
						page=1;
					}
					if(parseInt(page)-1>0){
						lastPage=parseInt(lastPage)-1;
					}
					if(parseInt(page)+1<=Math.ceil(pageCount)){
						nextPage=parseInt(nextPage)+1;
					}
					if((page-1)*9+9>count){
						end=count;
					}
					else{
						end=(page-1)*9+9;
					}
					for(var i=9*(page-1);i<end;i++){
						nowpageNote.push(response[i]);
					}
					Person.find({name:req.session.now_user.id},(err,response1)=>{
						res.render('mypost',{title_post:req.session.now_user.id,resq:nowpageNote,whattype:"my",lastpage:lastPage,nextpage:nextPage});
					})
				})
			}
			if(type=="游戏开发"){
				postTip.find({part:"游戏开发"},(err,response)=>{
					let count=response.length;			
					let pageCount=count/pagesize;
					if(page==null){
						page=1;
					}
					if(parseInt(page)-1>0){
						lastPage=parseInt(lastPage)-1;
					}
					if(parseInt(page)+1<=Math.ceil(pageCount)){
						nextPage=parseInt(nextPage)+1;
					}
					if((page-1)*9+9>count){
						end=count;
					}
					else{
						end=(page-1)*9+9;
					}
					for(var i=9*(page-1);i<end;i++){
						nowpageNote.push(response[i]);
					}
					if(req.session.now_user){
						Person.find({name:req.session.now_user.id},(err,response1)=>{
							if(response1[0]['is_admin']==1){
								res.render('adminhome',{is_login:true,id:req.session.now_user.id,is_active1:"active",resq:nowpageNote,isTable:true,lastpage:lastPage,nextpage:nextPage,img:response1[0]['headPic'],active_game:"active",whattype:"游戏开发",is_admin:true});
							}else{
								res.render('home',{is_login:true,id:req.session.now_user.id, is_active1:"active",img:response1[0]['headPic'], resq:nowpageNote,isTable:true,active_game:"active",lastpage:lastPage,nextpage:nextPage,whattype:"游戏开发"});
							}
							
						})
					}else{
						res.render('home',{is_display:true,active1:"active",resq:nowpageNote,isTable:true,active_game:"active",lastpage:lastPage,nextpage:nextPage,whattype:"游戏开发"});
					}
				})
			}
		}
	}
}