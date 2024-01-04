import React, { useEffect, useState } from 'react'
import Header from './Header';
import Search from './Search'
import "../css/Boutique.css"
import { Carproduct } from "./carproduct"
import minicooper from "../Images/cars/minicooper.png"
import mercedes from "../Images/cars/Mercedes.png"
import clio from "../Images/cars/Clio.png"
import Audi from "../Images/cars/audi.png"
import kia from "../Images/cars/kia.png"
import bmw from "../Images/cars/Bmw.png"
import axios from 'axios';

const Boutique = () => {
    const [cars,setCars]=useState([])
    const get_cars= async()=>{
        try{
            const res= await axios.get("http://localhost:3002/car/get-carsinfo")
            console.log(res.data)
            setCars(res.data)

        }catch(e){
            console.log(e)
        }

    }
    useEffect(()=>{
        get_cars()
    },[])
    useEffect(() => {
        console.log(cars); // Log the updated state here
    }, [cars]);
    const carsImage = require.context('../Images/cars',false,/\.png$/) 
    return (
        <div>
            <Header />
            <div className='big-title-boutique'>Une large sélection de véhicules</div>
            <div className='card-ourcars'>
                {cars.map((car)=>(
                     carsImage.keys().includes(`./${car.Brand}.png`)?
                     (
                        <Carproduct 
                        Imgsrc= {carsImage(`./${car.Brand}.png`)}
                        titre={car.name} couleur={car.color} prix="190.000 DA" />
                     ):

                     (<Carproduct 
                     Imgsrc= {null}
                     titre={car.name} couleur={car.color} prix="190.000 DA" />)
                    
                   
                ))}
               
                <Carproduct Imgsrc={mercedes} titre="Mercedes" couleur="Noire" prix="360.000 DA" />
                <Carproduct Imgsrc={clio} titre="Clio 3" couleur="Noire" prix="140.000 DA" />
                <Carproduct Imgsrc={Audi} titre="Audi" couleur="BLue" prix="360.000 DA" />
                <Carproduct Imgsrc={kia} titre="Kia" couleur="Noire" prix="360.000 DA" />
                <Carproduct Imgsrc={bmw} titre="Bmw" couleur="BLue" prix="560.000 DA" />
            </div>
        </div>

    )
}
export default Boutique;