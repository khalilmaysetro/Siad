const express = require("express")
const multer= require("multer")
const userModel =require('../model/user')

const router = express.Router();

router.post('/subscribe',(req,res)=>{
    userModel.create(req.body)
    .then(user=>res.json(user))
    .catch(error=>res.json(error))
})

router.get('/get-active-users', (req, res) => {
  userModel.find({ active: 'active' }).then(data => {
    res.send(data);
  });
});

router.get('/get-notactive-users', (req, res) => {
  userModel.find({ active: 'not_active' }).then(data => {
    res.send(data);
  });
});

router.get('/block', async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.json("It should have the id");
    }

    const blockedUser = await userModel.findByIdAndUpdate(
      id,
      { active: 'not_active', },
      { new: true }
    );

    if (blockedUser) {
      res.json("The user is successfully blocked");
    } else {
      res.json("User not found");
    }
  } catch (error) {
    res.json(error);
  }
});


router.get('/unblock', async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.json("It should have the id");
    }

    const blockedUser = await userModel.findByIdAndUpdate(
      id,
      { active: 'active' },
      { new: true }
    );

    if (blockedUser) {
      res.json("The user is successfully unblocked");
    } else {
      res.json("User not found");
    }
  } catch (error) {
    res.json(error);
  }
});

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
            }res.json("noooo record is existing")
        }
    )
})
module.exports= router
