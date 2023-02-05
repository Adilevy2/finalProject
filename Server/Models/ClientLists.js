const mongoose = require('mongoose')
const Joi = require('joi')


const ClientLists = mongoose.model('clientLists', new mongoose.Schema({
    
    content:{
        type: [mongoose.Schema.Types.ObjectId],
        ref:'List',
    },
    email:{
        type: String,
        required : true
    },
    }
) ) 


function vaidateClientList(value){
    const schema=Joi.object({
        email:Joi.string().required().email(), 
        Content:Joi.string(), 
    });
    return schema.validate(value)
};

module.exports= {ClientLists,vaidateClientList};
