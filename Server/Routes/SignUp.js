const {Users}=require('../Models/Users');
const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');



//getAll
router.get('/',async(req,res)=>{
    const users=await Users.find();
    return res.send(users).status(200)
})


//sighUp
router.post('/',async(req,res)=>{
    try{
   
    let users=await Users.findOne({email:req.body.email});
    if(users){
        return res.send('email exist').status(400)
    }
     users=await Users.findOne({name:req.body.name,isCompany:true});
    if(users && req.body.isCompany==true){
        return res.send('company name is taken').status(400)
    }
    users=await new Users(req.body);
    const salt =await bcrypt.genSalt(10);
    users.password=await bcrypt.hash(users.password,salt);
        users=await users.save();
        return res.send(users.generateToken()).status(200);
    }
    catch(error){
        return res.send(error)  
  }
});


module.exports=router;