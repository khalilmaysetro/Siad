import React, { useState, useEffect } from 'react';
import "../css/ourcars.css";
import { Link } from "react-router-dom";
import axios from 'axios'

const storedUser = JSON.parse(localStorage.getItem('user'));
const storedId = storedUser?.userId;
const storedUserType = storedUser?.userType || "visiteur";

export function Carproduct(props) {
	console.log(props);
	const [voiture, setIdV] = useState("");
	const [client, setIdC] = useState("");
	const commander = async (idVoiture, idVendeur) => {
		
		const response = await axios.post(`http://localhost:3002/sales/commander?id=${idVoiture}` , idVendeur) 
		console.log(response.data);
		console.log(props.Id)
		console.log(props.Idv)
	}
	
    return (
        <div className='car-card-01'>
            <img className='image-minicooper' src={props.Imgsrc}></img>
            <div className='title-car'>{props.Brand}</div>
            <div className='couleur-car'>{props.couleur}</div>
            <div className='model-car'>{props.model}</div>
            <div className='motorization-car'>{props.motorization}</div>
            <div className='prix-car'>{props.prix}</div>
            <div>
            {storedUserType==="client"?(
				<button className="voir-annonce" onclick={commander(props.Id, props.Idv)}>                   
                        <div className="getstarted-text">Commander</div>                   
                </button>
				):(
				<button className="voir-annonce">
                    <Link to="/Boutique">
                        <div className="getstarted-text">Voir l'annonce</div>
                    </Link>
                </button>			
				)}
                
            </div>
        </div>
    )
}
