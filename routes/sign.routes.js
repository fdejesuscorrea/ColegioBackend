const {Router} = require("express");
const router = Router();
const User = require("../models/user.model");
const {SECRETKEY} =require("../config");
const jwt = require("jsonwebtoken");

router.post("/login", async (req,res)=>{
    const {email,password} = req.body;
    if(email==""){
        res.status(401).json({message:"ingrese un correo electronico"});
    }
    if(password==""){
        res.status(401).json({message:"ingrese una contraseña"});
    }
    const user = await User.find({email:email});
    if(user.length===0){
        return res.status(401).json({message:"El email ingresado no tiene una cuenta asociada"});
    }
    if(password==user[0].password){
        const token = jwt.sign({__id:req.body.email},SECRETKEY);
        return res.status(200).json({token:token});
    }else{
        return res.status(401).json({message:"contraseña incorrecta"});
    }
});
router.post("/signup",async(req,res)=>{
    const user = new User({
        email:req.body.email,
        password:req.body.password
    })
    try{
        user.save()
    }catch{
        return res.status(400).json({response:"error on signup"})
    }
    return res.status(200).json({response:"usuario creado con exito"});
});
module.exports = router