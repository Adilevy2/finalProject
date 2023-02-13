const express = require('express')
const {vaidateList,List} = require('../Models/List')
const Todo = require('../Models/Todo')
const router = express.Router()


router.post('/',async(req,res)=>{
let {error}=vaidateList(req.body);
if(error)
    return res.send(error.details[0].message).status(400)
    try{
        const findList=await List.findOne({listName:req.body.listName,email:req.body.email})
        if(findList)
        return res.send('you allready have a list with this name')
        let todo= await Todo.find({email:req.body.email,listName:req.body.listName});
        todo= todo.map(ev=>ev=ev._id)
        let list=new List({public:req.body.public,email:req.body.email,listName:req.body.listName,companyName:req.body.companyName,content:todo,listBackgroundColor:req.body.listBackgroundColor,listFontSize:req.body.listFontSize,listFontColor:req.body.listFontColor,listFont:req.body.listFont})
        list=await list.save();
        return res.send(list)
    }
    catch(error){
       return res.sendStatus(error)
    }
})

module.exports = router