const mongoose = require('mongoose')
TaskSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    _listId:{ type :mongoose.Types.ObjectId,
    required: true
}
})