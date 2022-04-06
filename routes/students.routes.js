const {Router} = require("express")
const router = Router();

const {VerifyToken} = require("../middlewares")

const Student = require("../models/student.model");
const Enroll = require("../models/enroll.model");

router.get("/students",VerifyToken,async (req,res)=>{
    const stud = await Student.find();
    res.status(200).json(stud)
})
router.post("/enroll/:id",VerifyToken,async(req,res)=>{
        const stud = await Student.findOne({id_number:req.params.id});
        const enroll = new Enroll({
            student_doc:stud.id_number,
            grade:req.body.grade,
            status:"Activa",
            validated_grades:true,
            peace_and_safe:true,
            vaccination_card:true
        });
        await Enroll.findOneAndUpdate({student_doc:stud.id_number,status:"Activ"},{status:""});
        try{
            enroll.save();
        }catch{
            res.json({response:"error en la insersion"});
            return
        }
        res.json({response:"matricula antiguo exitosa"});
        
}
);
router.post("/newenroll/:id",VerifyToken,async (req,res)=>{

    const student = new Student({
        id_type:req.body.id_type,
        id_number:req.params.id,
        names:req.body.names,
        lastnames: req.body.lastnames,
        phone_number:req.body.phone_number,
        address: req.body.address,
        grade: req.body.grade,
        enroll_status:req.body.enroll_status,
        grade_status:req.body.grade_status,
        attendant_name:req.body.attendant_name,
        attendant_PN: req.body.attendant_PN,
        attendant_add:req.body.attendant_add,
        attendant_rel:req.body.attendant_rel
    }
    );
    const enroll = new Enroll(
        {
            student_doc:req.params.id,
            grade: req.body.grade,
            status: "Activa",
            validated_grades:req.body.validated_grades,
            peace_and_safe:req.body.peace_and_safe,
            vaccination_card:req.body.vaccination_card
        }
    );
    try{
        student.save()
        enroll.save();
    }catch{
        return res.json({response:"error en la insersion"});
        
    }
    return res.json({response:"oldStudent's enroll"});
})
router.delete("/student/:id",VerifyToken,async (req,res)=>{
    res.json({response:`delete student ${req.params.id}`})
})
module.exports=router