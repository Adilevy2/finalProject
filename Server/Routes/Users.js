const express = require('express');
const router = express.Router();
const {Users} = require('../Models/Users')

router.get('/:name',async (req, res) => {
    try {
        const user = await Users.find({name:req.params.name,isCompany:true})
        return res.send(user[0])
    } catch (error) {
        return res.send(error)
    }
})

module.exports=router