const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email:{
        type:String,
        index:{unique:true},              
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("User",UserSchema)