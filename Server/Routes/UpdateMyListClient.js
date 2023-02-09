const express = require('express')
const {ClientLists,vaidateClientList} = require('../Models/ClientLists')
const {vaidateList,List} = require('../Models/List')
const router = express.Router()


router.post('/',async(req,res)=>{
    try{
        let myList= await ClientLists.find({email:req.body.email})
        let searchList= await List.findById(req.body.id)
        if(searchList.length==0){
            return res.send('list not existing').status(400)
        }
        if(myList[0].content.length==1){
            let listOne= await ClientLists.updateOne({email:req.body.email},{content:[]});
            return res.send(listOne)
        }

        if(myList.length==0){
            return res.send('you havnt added any lists').status(201)
        }
       // return res.send(myList[0].content)
        if(!myList[0].content.includes(req.body.id)){
            return res.send('you dont have this list in your collection').status(400)
        }
        let moddified=myList[0].content.filter(ev=>ev!=req.body.id)
        let list2= await ClientLists.updateOne({email:req.body.email},{content:[moddified]});
        myList= await ClientLists.find({email:req.body.email})
        return res.send(myList).status(201)
         
    }
    catch(error){
       return res.sendStatus(error)
    }
})

module.exports = router