import React from 'react';
import "../css/ourcars.css";
import { Link } from "react-router-dom";
import { Carproduct } from "./carproduct"
import minicooper from "../Images/cars/minicooper.png"
import mercedes from "../Images/cars/Mercedes.png"
import clio from "../Images/cars/Clio.png"
import Audi from "../Images/cars/audi.png"
import kia from "../Images/cars/kia.png"
import bmw from "../Images/cars/Bmw.png"


export const Ourcars = () => {
    return (
        <div className='ourcars'>
            <div className='top-ourcars'>
                <div className='ourcars-title'>
                    Les véhicule disponible
                </div>
                <div>
                    <button className="button-getstarted">
                        <Link to="/Boutique">
                            <div className="getstarted-text">Voir plus</div>
                        </Link>
                    </button>
                </div>
            </div>
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