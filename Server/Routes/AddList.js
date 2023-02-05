const express = require('express')
const {vaidateList,List} = require('../Models/List')
const Todo = require('../Models/Todo')
const router = express.Router()


router.post('/',async(req,res)=>{
let {error}=vaidateList(req.body);
if(error)
    return res.send(error.details[0].message).status(400)
    try{
        let todo= await Todo.find({email:req.body.email,listName:req.body.listName});
        todo= todo.map(ev=>ev=ev._id)
        let list=new List({email:req.body.email,listName:req.body.listName,companyName:req.body.companyName,content:todo})
        list=await list.save();
        return res.send(list)
    }
    catch(error){
       return res.sendStatus(error)
    }
})

module.exports = router