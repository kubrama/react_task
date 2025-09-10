import React from 'react'
import logo from '../../assets/images/logo.png'
import "../Header/Header.css"
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar">
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>

      <div className="account">
        <NavLink to="/account">My Account</NavLink>
      </div>
    </header>
  );
};

export default Header
