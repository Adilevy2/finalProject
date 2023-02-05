const express = require('express');
const router = express.Router();
const {vaidateList,List} = require('../Models/List')
const Todo = require('../Models/Todo')


router.get('/', async(req, res)=>{
    const todo = await Todo.find()
    return res.send(todo).status(200)
})

router.post('/', async (req, res)=> {
    try{
        let todo= new Todo(req.body)
        todo= await todo.save()
        const email=todo.email;
        const listName=todo.listName;
        let todoFind= await Todo.find({email:email,listName:listName});
        todoFind= todoFind.map(ev=>ev=ev._id);
        let list=await List.findOneAndUpdate({email:email,listName:listName},{content:todoFind},{new:true})
        return res.send(list).status(200)
    }
    catch(error){
        return res.send(error)
    }

})

module.exports=router