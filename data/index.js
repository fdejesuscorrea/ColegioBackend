const {MONGO_URI_1,MONGO_URI_2,MONGO_URI_3,MONGO_DB_NAME,MONGO_PWD,MONGO_USR} = require("../config");
const MONGO_URI=`${MONGO_URI_1}${MONGO_USR}:${MONGO_PWD}${MONGO_URI_2}${MONGO_DB_NAME}${MONGO_URI_3}`;
const mongoose = require("mongoose")

mongoose.connect(MONGO_URI);
const database = mongoose.connection;
database.on('error',()=>{
    console.log("error de conexion con la base de datos");
}
);
database.once('connected', ()=>{
    console.log("database connected succasfully");
}

);

module.exports={
    database:database
}