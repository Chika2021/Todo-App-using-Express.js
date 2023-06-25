const express = require("express");
const router = express.Router()
const {createTodo, getTodo, search, updateTodo, findTodo, deleteTodo} = require('../controller/todoController')


router.get('/' , getTodo);

router.post('/create' , createTodo);

router.get('/search' , search);

router.put('/update' , updateTodo);

router.get('/find' , findTodo);

router.delete('/delete' , deleteTodo);



module.exports = router

