const express = require("express");
const server = express();
const {PORT} = require("./config");
const { StudentsRouter, EnrollmentRouter, GroupsRouter,AdminRouter,SignRouter} = require("./routes");
const {database} = require("./data");

server.use(express.json());
server.use("/students",StudentsRouter);
server.use("/enrollment",EnrollmentRouter);
server.use("/groups",GroupsRouter);
server.use("/admin",AdminRouter);
server.use("/users",SignRouter);

server.listen(PORT,()=>{
    console.log(`backend Colegio running on port ${PORT}`);
});

