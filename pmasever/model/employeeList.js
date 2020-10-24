const mongoose = require('mongoose')

const empdetail =  mongoose.Schema({
    empId :{  type: Number,
              required:true} ,
    empName:{ type:String,
              required:true},
    empEmail:{ type:String},         
    DeadLine:{ type:Date },
    task:{
        type:String,
        minlength:1,
        trim:true
    },
    note:{ type:String },

    
})
const Empdetail =  module.exports = mongoose.model('Empdetail',empdetail)