// src/components/Header.js

import React from "react";
import Avatar from "./AvatarPlaceholder";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../css/Header.css"
import { useAuth } from '../AuthContext';


const Header = () => {
const { user, logoutUser } = useAuth();
const userType = user?.userType || "visiteur";
    console.log(userType)
	const handleLogout = () => {
    
    logoutUser();
    
};	

  return (
    <header>
      <Link to="/">
        <div className="logo">Carshop</div>
      </Link>
      <nav>
        <ul className="nav-ul">
          <li>
            <a href="/Boutique">Boutique</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/Vendeur">Dashboard</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
      </nav>
      <div className="Actionbuttons">
        <Avatar />
        
        <Link to="/">
           <button onClick={handleLogout}>Logout</button>
        </Link>
      </div>
    </header >
  );
};

export default Header;
