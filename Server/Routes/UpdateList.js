const express = require('express')
const {vaidateList,List} = require('../Models/List')
const router = express.Router()


router.put('/',async(req,res)=>{

    try{
        const list=await List.findOneAndUpdate({_id:req.body.id},{listBackgroundColor:req.body.listBackgroundColor,
            listFontSize:req.body.listFontSize,
            listFontColor:req.body.listFontColor,
            listFont:req.body.listFont,
            public:req.body.public
        },{new:true})
        return res.send(list)
    }
    catch(error){
       return res.sendStatus(error)
    }
})

module.exports = router