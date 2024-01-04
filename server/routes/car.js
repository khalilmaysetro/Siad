const express = require("express")
const multer= require("multer")
const carModel= require('../model/cars')

const router= express.Router()

const storage= multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'.././src/Images/cars')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({ storage: storage })
router.post('/upload-car', upload.single('image'), async function (req, res, next) {
 try{   
  const {Brand,Model,Motorization,Color}=req.body
  let imageName=null
  console.log(req.body)
  res.send()
  if(req.file){
     imageName=req.file.filename
  }
     const newCar= await carModel.create({image: imageName,Brand,Model,Motorization,Color})
     res.status(201).json(newCar)        

  }catch(error){
      res.send('not working')
      
  }
})
router.get('/get-carsinfo',async (req,res)=>{
    try{
        carModel.find({}).then(data=>{
            res.send(data)
          })
    }catch(error){
        console.log(error)
    }
  
})
router.get('/delete', async(req,res)=>{
    try{
        const {id} =req.query 
        if(!id){
            return  res.json("it should have the id")
        }
        const deletedcar= await carModel.findByIdAndDelete(id)
        if(deletedcar){
            res.json("the car is succesfully deleted")
        }else{
            res.json("car not found")
        }
    }catch (error){
        res.json(error)
    }
})
module.exports= router