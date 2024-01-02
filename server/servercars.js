const express = require('express');
const mongoose = require('mongoose')
const cors =require('cors')
const app = express();
const userRouter= require('./routes/user')
const carRouter= require('./routes/car')

const url='mongodb+srv://salasmerzouk54:bazouzox@cluster0.zt9u591.mongodb.net/SIAD'

app.use(express.json())

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

//mongoose.connect("mongodb://localhost:27017/user")
mongoose.connect(url).then(()=>{
    console.log('its working')
}).catch((e)=>{
    console.log(e)
})

app.use('/user',userRouter)
app.use('/car',carRouter)


app.listen(3002,()=>{
    console.log("server is runing")
})