const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
    
    id_type: {
        required:true,
        type:String},
    id_number: {
        required:true,
        type:String,
        unique : true
    },
    enroll_number: Number
    ,
    names: {
        required:true,
        type: String
    },
    lastnames: {
        required:true,
        type: String
    },
    phone_number: {
        required:true,
        type: String
    },
    address: {
        required:true,
        type: String
    },
    grade:String,
    group:String,
    enroll_status:String,
    grade_status: String,
    attendant_Name: String,
    attendant_PN:{
        required:true,
        type: String
    },
    attendant_add:String,
    attendant_rel:String,
    blood_type:String

})
module.exports=mongoose.model("Student",studentSchema)
