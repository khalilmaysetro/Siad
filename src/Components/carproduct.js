import React from 'react';
import "../css/ourcars.css";
import { Link } from "react-router-dom";

export function Carproduct(props) {
    return (
        <div className='car-card-01'>
            <img className='image-minicooper' src={props.Imgsrc}></img>
            <div className='title-car'>{props.titre}</div>
            <div className='couleur-car'>{props.couleur}</div>
            <div className='prix-car'>{props.prix}</div>
            <div>
                <button className="voir-annonce">
                    <Link to="/Boutique">
                        <div className="getstarted-text">Voi l'annance</div>
                    </Link>
                </button>
            </div>
        </div>
    )
}