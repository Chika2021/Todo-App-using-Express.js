let Todo = require('../model/todo.model');
let express = require('express');
let router = express.Router()

exports.createTodo =  ((req , res) => {

    const newTodo = new Todo({
        name:req.body.name,
        day:req.body.day,
        task:req.body.task
    })
    
    newTodo.save()

    // console.log(newTodo);
    
    res.send({status:200, message:'Create Todo',  newTodo});
})


exports.getTodo = async (req , res ) => {

    let newTodo = await Todo.find();
    

    res.send({status:200 , message:'All Todos' , newTodo});
}


exports.findTodo = async (req, res) => {

    let id = req.query.id;
    
    let newTodo = await Todo.findById(id);

    res.send({status:200 , message:'Todo Found', newTodo});
} 


exports.updateTodo = async (req , res) => {

    let id = req.query.id;

    let name = req.query.name;

    let day = req.query.day;

    let task = req.query.task;

    let newTodo = await Todo.findByIdAndUpdate(id, {name, day , task });

    res.send({status:200 , message:'Found', newTodo});
}


exports.search = async (req, res) => {

    const name = req.query.name;

    let newTodo = await Todo.find({name:name})

    res.send({status:200 , message:'Found' , Todo:newTodo.length ,  newTodo});
}

exports.deleteTodo = async (req , res ) => {
    const id= req.query.id;

    const newTodo = await Todo.findByIdAndDelete(id);

    res.send({status:200 , message:'Message Deleted' , Todo:newTodo});
}


