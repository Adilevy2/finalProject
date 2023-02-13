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
    phoneNumber:{
        type:String,
    },
    adress:{
        type:String,
    },
    
});

schema.methods.generateToken=function(){
    const token=jwt.sign({email:this.email, name:this.name, password:this.password,isCompany:this.isCompany,phoneNumber:this.phoneNumber,adress:this.adress},'tokenWord')
    return token;
}
const Users=mongoose.model('users',schema);



module.exports={Users}