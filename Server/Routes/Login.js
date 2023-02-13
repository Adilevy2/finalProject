const {Users}=require('../Models/Users');
const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');


router.post('/',async(req,res)=>{
    
    const users=await Users.findOne({email:req.body.email});
    if(!users){
        return res.send('invalid email or password').status(400)
    }
    if(users){
        const compare=await bcrypt.compare(req.body.password,users.password)
        if(!compare)
             return res.send('invalid password').status(400)
        else{
            return res.send(users.generateToken()).status(201)
        }
    }
});




module.exports=router;