var mongoose = require('mongoose');
var TagSchema = require('./tagschema.js');
var PlayerSchema = new mongoose.Schema({
    _id:String,
    name: String,
    address : String,
    city : String,
    state: String,
    zip: String,
    email:String,
    tags: [TagSchema]
});

module.exports =  mongoose.model("Player",PlayerSchema);
