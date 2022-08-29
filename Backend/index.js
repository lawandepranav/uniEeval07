const express = require("express");
const cors = require ("cors")
const connectionToDatabase= require('./Database/index');
const todoRouter = require("./Routes/todo");
const userRouter = require("./Routes/user");



const app = express()
app.use(express.json())
app.use(cors())


 

app.use(todoRouter)
app.use(userRouter)


connectionToDatabase().then(()=>{
    app.listen(3030,()=>{
        console.log("Server is running in 3030 port")
    })
})