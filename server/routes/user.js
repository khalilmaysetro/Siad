const express = require("express")
const userModel =require('../model/user')

const router = express.Router()

router.post('/subscribe',(req,res)=>{
    userModel.create(req.body)
    .then(user=>res.json(user))
    .catch(error=>res.json(error))
})

router.post('/Login',(req,res)=>{
    const {email,password}=req.body
    userModel.findOne({email:email})
    .then(
        user=>{
            console.log(user)
            if(user){
                if(user.password===password){
                    res.json({
                        success:true,
                        userType:user.userType
                    })
                    return
                }else{
                    res.json("password incorect")
                    return
                }
            }res.json("no record is existinf")
        }
    )
})
module.exports= router
