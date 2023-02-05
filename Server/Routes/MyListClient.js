const express = require('express')
const {ClientLists} = require('../Models/ClientLists')
const router = express.Router()

router.post('/',async (req, res)=>{
    const list= await ClientLists.find({email:req.body.email});
    if(list.length==0)
       return res.status(400).send('you have no lists')
    return res.send(list)
});




module.exports = router