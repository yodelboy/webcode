var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true,useUnifiedTopology: true });
var replySchema=mongoose.Schema({
	content:String,
	author:String,
	time:String,
	replyid:String
});
module.exports =mongoose.model("replyTip",replySchema);