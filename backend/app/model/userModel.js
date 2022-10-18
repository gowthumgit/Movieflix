var mongoose = require('mongoose');

var schema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        unique:true
    },
    userLocation:{
        type:String,
        required:true,
    },
    userLanguage :{
        type:String,
        required:true,
    },
    userBalance :{
        type:Number,
        required:true, 
    }
  
});

var user = new mongoose.model('user',schema);

module.exports = user