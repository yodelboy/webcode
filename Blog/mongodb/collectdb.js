var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true,useUnifiedTopology: true });
var collectSchema=mongoose.Schema({
	postid:String,
	username:String
});
module.exports =mongoose.model("collectTip",collectSchema);