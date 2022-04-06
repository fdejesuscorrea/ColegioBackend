const Router = require("express");
const router = Router()
const {VerifyToken} =require("../middlewares")


const Student = require("../models/student.model")
const Group = require("../models/group.model");

router.get("/getAll",VerifyToken,async(req, res)=>{
    res.json({response:`get groups`})
})
router.post("/generate/:grade/:amount",async(req,res)=>{
    const students = await Student.find({grade:req.params.grade});
    const numstudents = students.length;
    var amount = req.params.amount;
    if(numstudents==0){
        res.json({response:"Aun no hay estudiantes"});
        return res.status(204)
    }
    if(amount > numstudents){
        amount=numstudents;
    }
    const numofgroups = Math.ceil(numstudents/amount);

    for(i=1;i<=numofgroups+1;i++){
        var min = (i-1)*amount;
        var max = (i)*amount;
        if(max>=numstudents){max=numstudents} 
        var g = students.slice(min,max)
        for(j=min; j<max;j++){
            id=students[j]._id.toString();
            await Student.findOneAndUpdate({_id:id},{group:i})
        }
        try{
            const ng = new Group({
                max_stud:amount,
                group_number:i,
                grade:req.params.grade,
            });
        }catch{
            res.json({response:"problema en la base de datos"})
        }

    }
    res.status(200).json({response:"grupos generados con exito"})


})

router.post("/edit",VerifyToken,async(req,res)=>{
    res.json({response:"edit groups endpoint"})
})

module.exports=router