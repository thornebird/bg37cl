const mongoose = require('mongoose');

const userModel =  mongoose.Schema({
   name:{
    type : String,
    required: true
   },
   email :{
     type : String,
     required : true
   },
   password:{
       type: String,
       required : true
   },
   approved :{
     type: Boolean,
     required : true,
     default : false
   }
     
});

module.exports =  mongoose.model('User', userModel);