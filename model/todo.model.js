const express = require('express');
const mongoose = require('mongoose');




const TodoSchema =  mongoose.Schema({
    // id:Number,
    name:String,
    day:String,
    task:String
}, 
{
    timestamps:true
}
);

const Todo = mongoose.model('Todo' , TodoSchema );



module.exports = Todo;


