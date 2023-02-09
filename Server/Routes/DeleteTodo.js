const express = require('express');
const router = express.Router();
const {vaidateList,List} = require('../Models/List')
const Todo = require('../Models/Todo')


router.delete('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const todo = await Todo.findByIdAndRemove(id);
      return res.send('yea').status(200);
    } catch (error) {
      return res.sendStatus(400);
    }
  });


module.exports=router;