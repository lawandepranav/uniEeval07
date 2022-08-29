const express = require("express");
const cors = require ("cors")
const connectionToDatabase= require('./Database/index');
const postRouter = require("./Routes/todo");
const userRouter = require("./Routes/user");



const app = express()
app.use(express.json())
app.use(cors())


function logger (res,req,next){
    console.log("Applied logger Middleware")
      next()
  }
 
app.get('/',(req,res)=>{
    console.log("request resolved")

    return res.send({
        message:"request resolved"
    })
})
app.use(postRouter)
app.use(userRouter)


connectionToDatabase().then(()=>{

    app.listen(3030,()=>{
        console.log("Server is running in 3030 port")
    })
})