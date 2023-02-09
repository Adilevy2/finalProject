const express = require('express');
const router = express.Router();
const {vaidateList,List} = require('../Models/List')
const Todo = require('../Models/Todo')


router.delete('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const list = await List.findByIdAndRemove(id);
      const email=list.email;
      const listName=list.listName;
      let todoFind= await Todo.deleteMany({email:email,listName:listName});
      return res.send('done').status(200);
    } catch (error) {
      return res.sendStatus(400);
    }
  });


module.exports=router;