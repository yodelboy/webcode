var multer  = require('multer')
var formidable=require("formidable")
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
    //设置保存文件的路径
    cb(null, 'uploads/'+ req.body.type)
},
filename: function (req, file, cb) {
    //修改上传文件名称
    cb(null, file.fieldname + '-' + Date.now() + '.' + file.mimetype.split('/')[1])
}
})
var upload = multer({ storage: storage });
var Person=require('../mongodb/persondb');
var Personinfo=require('../mongodb/person_info');
module.exports = {
	changepic(req,res){
		var uploadFile = "";
		var form = new formidable.IncomingForm();
		form.encoding = 'utf-8';                  //上传文件编码格式
		form.uploadDir = "upload";                //上传文件保存路径
		form.keepExtensions = true;               //保持上传文件后缀
		form.maxFieldsSize = 300 * 1024 * 1024;  
		form.parse(req);

		form
		.on('file', function(field, file) {
		        uploadFile = file.path;               //上传的文件数据
		    })
		.on('end', function() {
			Person.update({name:req.session.now_user.id},{headPic:uploadFile},function(err,response){
				Personinfo.find({name:req.session.now_user.id},function(err,response1){
					Person.find({name:req.session.now_user.id},function(err,response2){
						res.render('Per_homepage',{id:req.session.now_user.id,img:response2[0]['headPic'],realname:response1[0]['realname'],sex:response1[0]['sex'],birth:response1[0]['birth'],place:response1[0]['place'],job:response1[0]['job'],info:response1[0]['info']});
					})
				})
			})
		});
	}
}