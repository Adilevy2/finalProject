const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    body:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    listName: {
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
  });

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo
