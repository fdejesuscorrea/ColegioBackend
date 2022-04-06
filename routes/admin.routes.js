const {Router} = require("express")
const router = Router()
const {AuthCalendar,VerifyToken} = require("../middlewares");


const Calendar = require("../models/calendar.model");

router.post("/calendar",VerifyToken,AuthCalendar,async (req, res)=>{
    await Calendar.findOneAndUpdate({active:true},{active:false, status:"terminado"});
    if(!req.body.pre_enroll_start){
        return res.json({response:"Se requiere una fecha de pre matricula"})
    }
    if(!req.body.new_enroll_start){
        return res.json({response:"Se requiere una fecha de matricula para estudiantes nuevos"})
    }
    if(!req.body.classes_start){
        return res.json({response:"Se requiere una fecha de inicio de clases"})
    }
    if(!req.body.classes_end){
        return res.json({response:"Se requiere una fecha de finalizacion de clases"})
    }
    if(!req.body.group_setting){
        return res.status(200).json({response:"Se requiere una fecha de ajustes de grupos"})
    }
    const calendar=new Calendar({
        pre_enroll_start:req.body.pre_enroll_start,
        new_enroll_start:req.body.new_enroll_start,
        classes_start:req.body.classes_start,
        group_setting:req.body.group_setting,
        classes_end:req.body.classes_end,
        active:true,
        status:"En curso"
    });
    try{
        calendar.save()
    }catch(error){
        return res.json({response:"error en la base de datos"})

    }
    return res.json({response:"calendario creado con exito"})
})
router.get("/calendar",async(req,res)=>{
    const act_cal = await Calendar.findOne({active:"true"});
    res.json({act_cal});
}
);
module.exports=router;