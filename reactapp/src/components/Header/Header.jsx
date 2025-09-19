import React, { useState, useContext } from 'react';
import logo from '../../assets/images/logo.png';
import "../Header/Header.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, login, logout } = useContext(AuthContext);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <nav>
          <NavLink to="/" end onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/shop" onClick={() => setIsOpen(false)}>Shop</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <NavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink>

        </nav>
      </div>

      <div className="account">
        <NavLink to="/account">My Account</NavLink>
      </div>


      <div className={`burger ${isOpen ? "toggle" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="controls">
        <button onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>

        {user ? (
          <>
            <span>Hi, {user.name}</span>
            <button className='login' onClick={logout}>Logout</button>
          </>
        ) : (
          <button className='login' onClick={() => login("Guest")}>Login</button>
        )}
      </div>
    </header>
  );
};

export default Header;
