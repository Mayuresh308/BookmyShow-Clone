import React, { useState } from 'react'
import logo from './image/logo.png';
import './NavBar.css'
import { CgSearch } from 'react-icons/cg';
import { BsList } from 'react-icons/bs';
import { BiSolidDownArrow } from 'react-icons/bi';

function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} className="brand-logo" alt="" />
        <div className='input'>
            <CgSearch className='search-icon'/>
            <input className='search' placeholder='Search for Movies, Events, Plays, Sports, and Activities'></input>
        </div>
        <div className="right-container">
            <a href="#" className="location">Kollam</a><BiSolidDownArrow className='location-down'/>
            <button className="signin">Sign in</button>
            <a href="#" className="btn-customized open-menu">
              <BsList className="menu"/>
            </a>
        </div>
    </div>
  )
}

export default Navbar
