const express = require('express');
const router = express.Router();
const {Users,validateUsers}=require('../Models/Users');
const bcrypt = require('bcrypt');

router.put('/', async (req, res) => {
  const { email, password,prevPass } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).send({ error: 'Email and password are required' });
  }

  try {
    const user = await Users.findOne({ email });

    // Check if the email exists
    if (!user) {
      return res.send( 'User not found').status(400);
    }

    const compare=await bcrypt.compare(prevPass,user.password)
    console.log(compare);
    if(compare==false)
         return res.send('invalid password').status(400)
    else{
    // Hash the new password
    const hash = await bcrypt.hash(password, 10);
    // Update the password
    await Users.findOneAndUpdate({ email }, { password: hash });
    return res.status(200).send( 'Password updated successfully' );}
  } catch (error) {
    return res.sendStatus( error );
  }
});

module.exports = router;
