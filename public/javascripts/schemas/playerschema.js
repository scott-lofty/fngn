var mongoose = require("mongoose");

var PlayerSchema = mongoose.Schema({
    _id:String,
    name: String,
    address : String,
    city : String,
    state: String,
    zip: String,
    email:String,
    tags: [TagSchema]
});

var Player = mongoose.model("Player",PlayerSchema);
