const Todo = require('../Database/todos')

async function crateTodo ( req,res ) {
    const { body } = req.body
  console.log(body)
    let tododata = await Post.create(body)
    console.log(a)

    return res.send({
        data:tododata
    })
}

async function updateTodo ( req,res ) {
    const{ id } = req.params;
    const{ todobody:todoData } = req.body;
    console.log(id)
     console.log(todoData)
   let todo = await Todo.find({_id:id})
 console.log(todo)
todo=todoData
console.log(todo)
 
   await todo.save(todo);
 
   return res.send({
     data:todo
   })
 }

 async function deleteTodo ( req,res ){
    const { id }=req.params;

    await Todo.remove({_id:id})

    return res.send({
        message:"Todo Delete Successfully"
    })
}

async function getAllTodo ( req,res ){
  
    const todos = await Todo.find().populate('user');

    return res.send({
        data : todos
    })
}
module.exports = {
    crateTodo,
    updateTodo,
    deleteTodo,
    getAllTodo
}