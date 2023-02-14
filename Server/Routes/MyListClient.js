const express = require('express')
const {ClientLists} = require('../Models/ClientLists') 
const {List}=require('../Models/List')
const router = express.Router()

router.post('/',async (req, res)=>{
    try{

        const list= await ClientLists.find({email:req.body.email});
        if(list.length==0)
        return res.send('you have no lists')
        const listsId=list[0].content;
        let arr=[];
        for(let i=0;i<listsId.length;i++){
            let result=await List.findById(listsId[i]).populate('content')
            arr=[...arr,result]
        }
        return res.send(arr)
    }
    catch(error){
       return res.sendStatus(error)
    }
});




module.exports = router