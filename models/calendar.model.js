const mongoose = require("mongoose");

const CalendarSchema = mongoose.Schema(
    {
        pre_enroll_start: {
            type:Date,
            required:true
        },
        new_enroll_start:{
            type: Date,
            required:true
        },
        group_setting:{
            type:Date,
            required:true
        },
        classes_start:{
            type:Date,
            required:true
        },
        classes_end:{
            type:Date,
            required:true
        },
        status:String,
        active:Boolean
    }
);

module.exports = mongoose.model("Calendar", CalendarSchema);