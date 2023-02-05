const express = require('express');
const router = express.Router();
const {vaidateList,List} = require('../Models/List')
const Todo = require('../Models/Todo')


router.delete('/', async (req, res) => {
    try {
      const id = req.body.id;
      const todo = await Todo.findByIdAndRemove(id);
      const email=todo.email;
      const listName=todo.listName;
      let todoFind= await Todo.find({email:email,listName:listName});
      todoFind= todoFind.map(ev=>ev=ev._id);
      let list=await List.findOneAndUpdate({email:email,listName:listName},{content:todoFind},{new:true})
      return res.send(list).status(200);
    } catch (error) {
      return res.sendStatus(400);
    }
  });


module.exports=router;