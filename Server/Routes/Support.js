const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Support = require('../Models/Support');

router.get('/', async(req, res)=>{
    const supp = await Support.find()
    return res.send(supp).status(200)
})

router.post('/', async (req, res)=> {
    try{
        const supp= new Support(req.body)
        supp= await supp.save()
        return res.send(supp).status(200)
    }
    catch(error){
        return res.send(error)
    }

})

router.delete('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const supp = await Support.findByIdAndRemove(id);
        res.send('support is deleted');
      } catch (error) {
        res.sendStatus(400);
      }
})

module.exports=router