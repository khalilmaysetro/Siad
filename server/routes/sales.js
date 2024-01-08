const express = require("express")
const salesModel= require('../model/sales')
const router= express.Router()


router.post('/commander',async (req,res)=>{
	const { idV } = req.query;
	const idC = req.body;
	const idVoiture = JSON.stringify(idV);
	const idClient = JSON.stringify(idC);
	
	console.log(idVoiture);
	console.log(idClient);
	
	
	const newSale = await salesModel.create({                             
      idV: idVoiture,
      idC: idClient,
    });
	
	res.status(201).json(newSale);
    
})

module.exports= router
