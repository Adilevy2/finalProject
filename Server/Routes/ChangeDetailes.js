const express = require('express');
const router = express.Router();
const {Users,validateUsers}=require('../Models/Users');
const bcrypt = require('bcrypt');

router.put('/', async (req, res) => {
  const { email, adress,phoneNumber } = req.body;

  // Validate input
  try{

      if (!email ) {
          return res.status(400).send({ error: 'Email required' });
  }
  if(adress){
    const user=await Users.findOneAndUpdate({email:email},{adress:adress},{new:true})
    return res.send(user.generateToken()).status(200)
}
if(phoneNumber){
    const user=await Users.findOneAndUpdate({email:email},{phoneNumber:phoneNumber},{new:true})
    return res.send(user.generateToken()).status(200)
}

}
 catch (error) {
    return res.sendStatus( error );
  }
});

module.exports = router;
