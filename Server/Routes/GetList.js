const express = require('express')
const {List} = require('../Models/List')
const router = express.Router()

router.post('/',async (req, res)=>{
    const list= await List.find({email:req.body.email,listName:req.body.listName}).populate('content');
    if(!list)
       return res.status(400).send('this email is not valid ')
    return res.send(list)
});




module.exports = router