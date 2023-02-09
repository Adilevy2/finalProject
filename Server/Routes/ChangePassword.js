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
      return res.status(404).send({ error: 'User not found' });
    }

    const compare=await bcrypt.compare(req.body.prevPass,user.password)
    console.log(compare);
    if(compare==false)
         return res.send('invalid password').status(400)
    else{
    // Hash the new password
    const hash = await bcrypt.hash(password, 10);
    // Update the password
    await Users.findOneAndUpdate({ email }, { password: hash });
    return res.status(200).send({ message: 'Password updated successfully' });}
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: 'Error updating password' });
  }
});

module.exports = router;
