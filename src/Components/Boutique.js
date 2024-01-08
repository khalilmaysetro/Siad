import React, { useEffect, useState } from 'react';
import Header from './Header';
import HeaderClient from "./HeaderClient";
import HeaderVendeur from "./HeaderVendeur";
import Search from './Search'
import "../css/Boutique.css"
import { Carproduct } from "./carproduct"
import axios from 'axios';

const Boutique = () => {
	//const { user, logoutUser } = useAuth();
		const storedUser = JSON.parse(localStorage.getItem('user'));
		const storedName = storedUser?.name;
		const storedId = storedUser?.userId;
		const storedUserType = storedUser?.userType || "visiteur";
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
        console.log(cars); 
    }, [cars]);
    const carsImage = require.context('../Images/cars',false,/\.png$/) 
	
    return (
    
        <div>
            {storedUserType === "client" ? <HeaderClient /> : (storedUserType === "seller" ? <HeaderVendeur /> : <Header />)}
            <div className='big-title-boutique'>Une large sélection de véhicules</div>
            <div className='card-ourcars'>
                {cars.map((car)=>(
                     carsImage.keys().includes(`./${car.Brand}.png`)?
                     (
                        <Carproduct 
                        Imgsrc= {carsImage(`./${car.Brand}.png`)}
                        Id = {car._id}
                        Idv = {car.idV}
                        Brand={car.Brand} 
                        couleur={car.Color} 
                        model = {car.Model}
                        motorization = {car.Motorization}                     
                        prix="190.000 DA" />
                        
                     ):

                     (<Carproduct 
                     Imgsrc= {null}
                     Id = {car._id}
                     Idv = {car.idV}
                     Brand={car.Brand} 
                     couleur={car.Color} 
                     model = {car.Model}
                     motorization = {car.Motorization}
                     prix="190.000 DA" />)
                    
                   
                ))}
               
        
            </div>
        </div>

    )
}
export default Boutique;
