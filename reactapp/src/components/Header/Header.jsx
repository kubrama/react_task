import React from 'react'
import logo from '../../assets/images/logo.png'
import "../Header/Header.css"

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navbar">
        <nav>
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </nav>
      </div>
      <div className="account">
       <a href="">My account</a>
      </div>
    </header>
  )
}

export default Header
