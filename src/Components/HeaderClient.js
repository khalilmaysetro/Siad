// src/components/Header.js

import React from "react";
import Avatar from "./AvatarPlaceholder";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../css/Header.css"
import { useAuth } from '../AuthContext';



const Header = () => {
	const { user, logoutUser } = useAuth();
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
            <a href="#">About us</a>
          </li>
        </ul>
      </nav>
      <div className="Actionbuttons">
        <Avatar />
        
        <Link to="/">
          <div className="login-text">Log Out</div>
        </Link>
      </div>
    </header >
  );
};

export default Header;
