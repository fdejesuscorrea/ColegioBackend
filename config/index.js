if(process.env.NODE_ENV!=="production"){
    require("dotenv").config()
}
module.exports={
    PORT:process.env.PORT,
    MONGO_URI_1:process.env.MONGO_URI_1,
    MONGO_URI_2:process.env.MONGO_URI_2,
    MONGO_URI_3:process.env.MONGO_URI_3,
    MONGO_USR:process.env.MONGO_USR,
    MONGO_PWD:process.env.MONGO_PWD,
    MONGO_DB_NAME:process.env.MONGO_DB_NAME,
    SECRETKEY:process.env.SECRETKEY
}