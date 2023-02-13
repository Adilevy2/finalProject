const express = require('express')
const {ClientLists,vaidateClientList} = require('../Models/ClientLists')
const {vaidateList,List} = require('../Models/List')
const router = express.Router()


router.post('/',async(req,res)=>{

    try{
        let myList= await ClientLists.find({email:req.body.email})
        if(!myList)
        return res.send('email dosnt exis').status(400)
        let searchList= await List.find({_id:req.body.id})
        if(searchList.length==0){
            return res.send('list not existing').status(400)
        }
        if(myList.length==0){
            let list=new ClientLists({email:req.body.email,content:[req.body.id]})
            list= await list.save()
            return res.send(list).status(201)
        }
        if(myList[0].content.includes(req.body.id)){
            return res.send('you allready added this list').status(400)
        }
        let list2= await ClientLists.updateOne({email:req.body.email},{content:[...myList[0].content,req.body.id]});
         myList= await ClientLists.find({email:req.body.email})
         return res.send(myList).status(201)
         
    }
    catch(error){
       return res.sendStatus(error)
    }
})

module.exports = router