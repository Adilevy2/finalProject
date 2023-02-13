const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
  });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact