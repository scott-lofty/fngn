var mongoose = require('mongoose');
var p = require('../public/javascripts/schemas/playerschema.js');
mongoose.connect("mongodb://localhost/test");
var db = mongoose.connection;
db.on('error',console.error.bind("Error on connect"));
db.once('open',function() {
  var p = new Player();
  p.name = "Kevin";
  p.save()
})
