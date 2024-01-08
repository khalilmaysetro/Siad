const mongoose=require("mongoose")

const salesSchema=new mongoose.Schema({
    id:String,
    idC:String,
    idV:String,                    
})
const salesModel=new mongoose.model("sales", salesSchema)
module.exports=salesModel
