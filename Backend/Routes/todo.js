const express = require('express');
const {
    crateTodo,
    updateTodo,
    deleteTodo,
    getAllTodo,
    showTodo
}  = require('../Handlers/todo')



const todoRouter = express.Router();

todoRouter.get('/todos',getAllTodo)
todoRouter.post('/todos',crateTodo)
todoRouter.patch('/todos/:id',updateTodo)
todoRouter.delete('/todos/:id',deleteTodo)
todoRouter.get('/todos/alltodos',showTodo)

module.exports = todoRouter