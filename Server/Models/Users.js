const mongoose=require('mongoose')
const Joi=require('joi');
const jwt=require('jsonwebtoken')


const schema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isCompany:{
        type:Boolean,
        required:true
    },
});

schema.methods.generateToken=function(){
    const token=jwt.sign({email:this.email, name:this.name, password:this.password,isCompany:this.isCompany},'tokenWord')
    return token;
}
const Users=mongoose.model('users',schema);

function validateUsers(user){
    const schema=Joi.object({
        name:Joi.string().required(),
        email:Joi.string().required().email(), 
        password:Joi.string().required(), 
        isCompany:Joi.boolean().required(), 
    });
    return schema.validate(user)
};

module.exports={Users,validateUsers}