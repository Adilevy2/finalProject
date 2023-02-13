const express = require('express');
const router = express.Router();
const Contact = require('../Models/ContactUs');

router.get('/', async(req, res)=>{
    const contact = await Contact.find()
    return res.send(contact).status(200)
})

router.post('/', async (req, res)=> {
    try{
        const contact= new Contact(req.body)
        contact= await contact.save()
        return res.send(contact).status(200)
    }
    catch(error){
        return res.send(error)
    }

})

router.delete('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const con = await Contact.findByIdAndRemove(id);
        res.send('contact is deleted');
      } catch (error) {
        res.sendStatus(400);
      }
})

module.exports=router