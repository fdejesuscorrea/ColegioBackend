const jwt =require("jsonwebtoken");
const {SECRETKEY} = require("../config");
function VerifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send("unautorized Request");
    }
    const token = req.headers.authorization;
    if(token === null){
        res.cars={};
        return res.status(401).send("unautorized Request");
    }
    try{
        const payload = jwt.verify(token,SECRETKEY);
        req.userId = payload._id;
        next();
    }catch(JsonWebTokenError){
        console.log(JsonWebTokenError.message)
        return res.status(401).send("Invalid Token");
    }
    
}
module.exports=VerifyToken;