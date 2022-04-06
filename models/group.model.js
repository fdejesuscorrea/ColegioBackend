const mongoose = require("mongoose")

const GroupSchema=new mongoose.Schema({
    max_stud:Number,
    group_number:Number,
    grade:Number,
    classroom:String,
    group_director:String,
});

module.exports=mongoose.model("Group",GroupSchema)