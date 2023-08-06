import React from 'react'
import logo from './image/logo.png';
import './NavBar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} className="brand-logo" alt="" />
        <div className='input'>
            <ion-icon name="search"></ion-icon>
            <input className='search' placeholder='Search for Movies, Events, Plays, Sports, and Activities'></input>
        </div>
        <div className="right-container">
            <a href="#" className="location">Kollam<ion-icon name="caret-down-sharp"></ion-icon></a>
            <button className="signin">Sign in</button>

            <a href="#" className="btn-customized open-menu">
                <ion-icon name="menu-outline"></ion-icon>
            </a>
        </div>
    </div>
  )
}

export default Navbar
