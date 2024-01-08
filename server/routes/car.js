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
	console.log('Received request to add car:', req.body); 
  try {
	const idVe  = req.query;
	const idVendeur = JSON.stringify(idVe);
    const { Brand, Model, Motorization, Color } = req.body;
    let imageName = null;

    if (req.file) {
      imageName = req.file.filename;
    }

    const newCar = await carModel.create({
      image: imageName,
      Brand,
      Model,
      Motorization,
      Color,
      idV: idVendeur,
    });

    res.status(201).json(newCar);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.post('/update-car', upload.single('image'), async function (req, res, next) {
	console.log('Received request to add car:', req.body); 
  const {id}= req.query
  try {
    const { Brand, Model, Motorization, Color } = req.body;
    let imageName = null;

    if (req.file) {
      imageName = req.file.filename;
    }

    const newCar = await carModel.findByIdAndUpdate(id,{
      image: imageName,
      Brand:Brand,
      Model:Model,
      Motorization: Motorization,
      Color:Color,
    },
    {new:true}
    );
    if(newCar){
      res.status(201).json(newCar);
    }else{
      res.send('nope')
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.get('/getCarById',async(req,res)=>{
  try{
    const {id}= req.query
    carModel.find({_id:id}).then(data=>{
      res.send(data)
    })
  }catch(e){
    console.log(e,'id is not working')
  }

})

router.get('/get-carsinfo',(req,res)=>{
    carModel.find({}).then(data=>{
      res.send(data)
    })
})

router.get('/get-carsinfoVendeur',(req,res)=>{
	const idV  = req.query;	
	const id = JSON.stringify(idV);
	console.log(id);
	
    carModel.find({ idV: id }).then(data=>{
      res.send(data)
    })
})

router.get('/delete', async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: 'Car ID is required' });
    }

    const deletedCar = await carModel.findByIdAndDelete(id);

    if (deletedCar) {
      res.json({ message: 'Car deleted successfully' });
    } else {
      res.status(404).json({ error: 'Car not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports= router
