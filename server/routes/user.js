const express = require("express")
const multer= require("multer")
const userModel =require('../model/user')

const router = express.Router();

router.post('/subscribe',(req,res)=>{
    userModel.create(req.body)
    .then(user=>res.json(user))
    .catch(error=>res.json(error))
})

router.get('/get-usersinfo',(req,res)=>{
    userModel.find({}).then(data=>{
      res.send(data)
    })
})

router.get('/delete', async(req,res)=>{
    try{
        const {id} =req.query 

        if(!id){
            return  res.json("it should have the id")
        }
        const blockeduser= await userModel.findByIdAndDelete(id)
        if(blockeduser){
            res.json("the user is succesfully blocked")
        }else{
            res.json("user not found")
        }
    }catch (error){
        res.json(error)
    }
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
            }res.json("no record is existing")
        }
    )
})
module.exports= router
