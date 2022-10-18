var mongoose = require('mongoose');

var schema=new mongoose.Schema({
    audiId:{
        type:String,
        required:true,
        unique:true
    },
    
    rows:{
        type:Number,
        required:true,
    } ,
    coloumns :{
        type:Number,
        required:true,
    },
    price :
    {
        type:Number,
        required:true,
    }
});

var seat = new mongoose.model('seat',schema);

module.exports = seat