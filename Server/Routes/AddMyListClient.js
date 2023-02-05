const express = require('express')
const {ClientLists,vaidateClientList} = require('../Models/ClientLists')
const {vaidateList,List} = require('../Models/List')
const router = express.Router()


router.post('/',async(req,res)=>{
let {error}=vaidateClientList(req.body);
if(error)
    return res.send(error.details[0].message).status(400)
    try{
        let myList= await ClientLists.find({email:req.body.email})
        if(myList.length==0){
           let list=new ClientLists({email:req.body.email,content:[req.body.listId]})
           list= await list.save()
           return res.send(list)
        }
        let list= await ClientLists.updateOne({email:req.body.email},{content:[...myList.content,req.body.listId]});
        list=await list.save();
    }
    catch(error){
       return res.sendStatus(error)
    }
})

module.exports = router