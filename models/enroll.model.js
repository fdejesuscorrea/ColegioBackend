const mongoose = require("mongoose");

const EnrollSchema = mongoose.Schema({
    
    student_doc:{
        type:String,
        required:true
    },
    grade:{
        type:Number,
        required:true
    },
    status:String,
    validated_grades:Boolean,
    peace_and_safe:Boolean,
    vaccination_card:Boolean
});

module.exports = mongoose.model("Enroll", EnrollSchema);