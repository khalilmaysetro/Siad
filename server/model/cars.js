const mongoose=require("mongoose")

const carsSchema=new mongoose.Schema({
    id:String,
    Brand:String,
    Model:String,
    Motorization:String,
    Color:String,
    image:String
    
})
const carsModel=new mongoose.model("car",carsSchema)
module.exports=carsModel