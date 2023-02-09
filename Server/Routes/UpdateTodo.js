const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Todo = require('../Models/Todo')


router.put('/', async (req,res)=>{
    try {
        const id = req.body.id;
         const todo = await Todo.findOneAndUpdate({_id:id},{body:req.body.body})
         return res.send(todo).status(200)
    } catch (error) {
        return res.sendStatus(400)
    }
});


module.exports=router;