const express = require('express')
const {ClientLists,vaidateClientList} = require('../Models/ClientLists')
const {vaidateList,List} = require('../Models/List')
const router = express.Router()


router.post('/',async(req,res)=>{
let {error}=vaidateClientList(req.body);
if(error)
    return res.send(error.details[0].message).status(400)
    try{
        let list= await ClientLists.find({email:req.body.email})

        return res.send(list)
        let todo= await List.find({email:req.body.email,listName:req.body.listName});
        //let list= ClientLists.updateOne({email:req.body.email},{content:[todo]})
        list=await list.save();
    }
    catch(error){
       return res.sendStatus(error)
    }
})

module.exports = router