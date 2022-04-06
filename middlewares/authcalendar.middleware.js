function AuthCalendar(req, res, next){
    const CALENDAR_AUTH = process.env.CALENDAR_AUTH
    if(CALENDAR_AUTH==="true"){
        next()
    }else{
        return res.status(403).send("No hay autorización para crear calendarios nuevos en este momento");
}
    }
    
module.exports=AuthCalendar