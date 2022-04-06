const {Router} = require("express")
const router = Router()
const Enroll = require("../models/enroll.model")

router.get("/AllEnrolls",async(req,res)=>{
    const enrolls = await Enroll.find();
    res.status(200).json(enrolls);
});



router.patch("/enroll/:stud_id/:new_status",async(req,res)=>{
    const enroll = await Enroll.findOneAndUpdate({student_doc:req.params.stud_id},{status:req.params.new_status});
    res.status(200).json({response:`delete enroll ${req.params.id}`});
});

module.exports=router