const mongoose = require('mongoose');
const {Schema} = mongoose;
const MySchema = new Schema({
    name:{
        type:String,
        requried:true
    },
    email:{
        type:String,
        requried:true,
        unique:true
    },
    phone:{
        type:Number,
        requried:true,

    },
    address:{
        type:String,
        requried:true
    }

})
module.exports=mongoose.model("table",MySchema)