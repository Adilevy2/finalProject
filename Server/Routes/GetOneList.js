const express = require('express');
const { isValidObjectId } = require('mongoose');
const {List} = require('../Models/List')
const router = express.Router()

router.post('/',async (req, res)=>{
    try{
       if(!isValidObjectId(req.body.id))
       return res.status(400).send('this id is not valid ')
        const list= await List.findById(req.body.id).populate('content');
        if(!list)
        return res.status(400).send('this id is not valid ')
        return res.send(list)
    }
    catch(error){
        return res.send(error)
    }
});




module.exports = router