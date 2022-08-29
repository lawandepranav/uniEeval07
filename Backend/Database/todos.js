const mongoose = require ("mongoose")
const user = require("./user")

const postSchema = new mongoose.Schema({
title : String,
status: Boolean,
lable:String,
user:{
    type:mongoose.Types.ObjectId,
    ref:user
}
},{
    timestamps:true
})

const todo = mongoose.model("post",postSchema)

module.exports = todo