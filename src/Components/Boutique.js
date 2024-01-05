import React from 'react'
import Header from './Header';
import HeaderClient from "./HeaderClient";
import HeaderVendeur from "./HeaderVendeur";
import Search from './Search'
import "../css/Boutique.css"
import { Carproduct } from "./carproduct"
import minicooper from "../Images/cars/minicooper.png"
import mercedes from "../Images/cars/Mercedes.png"
import clio from "../Images/cars/Clio.png"
import Audi from "../Images/cars/audi.png"
import kia from "../Images/cars/kia.png"
import bmw from "../Images/cars/Bmw.png"
import { useAuth } from '../AuthContext';

const Boutique = () => {
	const { user, logoutUser } = useAuth();
	const userType = user?.userType || "visiteur";
    return (
    
        <div>
            {userType === "client" ? <HeaderClient /> : (userType === "seller" ? <HeaderVendeur /> : <Header />)}
            <div className='big-title-boutique'>Une large sélection de véhicules</div>
            <div className='card-ourcars'>
                <Carproduct Imgsrc={minicooper} titre="Mini cooper" couleur="Gris" prix="190.000 DA" />
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
