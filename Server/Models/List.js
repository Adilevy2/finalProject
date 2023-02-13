const mongoose = require('mongoose')
const Joi = require('joi');
const { boolean } = require('joi');


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
            
        },
        companyName:{
            type: String,
            required : true
        },
        listFont:{
            type: String,
            required : true
        },
        listFontColor:{
            type: String,
            required : true
        },
        listFontSize:{
            type: String,
            required : true
        },
        listBackgroundColor:{
            type: String,
            required : true
        },
      
    }
) ) 


function vaidateList(user){
    const schema=Joi.object({
        listName:Joi.string().required(),
        companyName:Joi.string().required(),
        email:Joi.string().required().email(), 
        content:Joi.string(), 
        listBackgroundColor:Joi.string().required(), 
        listFontSize:Joi.string().required(), 
        listFontColor:Joi.string().required(), 
        listFont:Joi.string().required(), 
    });
    return schema.validate(user)
};

module.exports= {List,vaidateList};
