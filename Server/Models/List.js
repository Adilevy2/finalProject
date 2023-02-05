const mongoose = require('mongoose')
const Joi = require('joi')


const List = mongoose.model('list', new mongoose.Schema({
    
    content:{
        type: [mongoose.Schema.Types.ObjectId],
        ref:'Todo',
    },
    email:{
        type: String,
        required : true
    },
    listName:{
        type: String,
        required : true
            
        }
    }
) ) 


function vaidateList(user){
    const schema=Joi.object({
        listName:Joi.string().required(),
        email:Joi.string().required().email(), 
        Content:Joi.string(), 
    });
    return schema.validate(user)
};

module.exports= {List,vaidateList};
