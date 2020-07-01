var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true,useUnifiedTopology: true });
var focusSchema=mongoose.Schema({
	focusname:String,
	username:String
});
module.exports =mongoose.model("focusTip",focusSchema);