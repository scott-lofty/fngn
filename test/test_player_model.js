var mongoose = require('mongoose');
var ps = require('../public/javascripts/schemas/playerschema.js');
mongoose.connect("mongodb://localhost/test");
var db = mongoose.connection;
db.on('error',console.error.bind("Error on connect"));
db.once('open',function() {
  var pl = new ps("Kevin","123 easy street","athens","ga","23334","mee@email.com",null);
  pl.save();
  console.log("Saved player.");
})
