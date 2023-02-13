const express = require('express')
const {List} = require('../Models/List')
const router = express.Router()

router.post('/',async (req, res)=>{
    try{

        const list= await List.find({email:req.body.email}).populate('content');
        if(!list)
        return res.status(400).send('this email is not valid ')
        return res.send(list)
    }
    catch(error){
        return res.send(error)
    }
});




module.exports = router