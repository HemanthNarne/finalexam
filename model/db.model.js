var mongoose =require('mongoose');




var userSchema =mongoose.Schema({

Make : String,
Model : String,
Year : Number,
Type : String,
Features : String,
PurchaseDate : Date

});

 

module.exports =mongoose.model('Consumer',userSchema);
