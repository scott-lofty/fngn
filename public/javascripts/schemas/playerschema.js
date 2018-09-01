var mongoose = require('mongoose');
var PlayerSchema = new mongoose.Schema({
    _id:String,
    screenName: { type: String, required : true},
	firstName: {type: String, required:true},
	lastName : {type: String, required:true},
    address : String,
    city : String,
    state: String,
    zip: String,
    email: {type: String, required : true},
	aboutMe: String
});

PlayerSchema.methods.checkForExistingScreenName = function (ifScreenNameExists) {
	this.model("Player").findOne( {screenName : this.screenName}, function(err,foundScreenName) {
			ifScreenNameExists(!!foundScreenName);
		});
}

PlayerSchema.methods.checkForExistingEmail = function (ifEmailExists) {
	this.model("Player").findOne( {email : this.email}, function(err,foundEmail) {
			ifEmailExists(!!foundEmail);
		});
}

module.exports =  mongoose.model("Player",PlayerSchema);
