import React from 'react'
import '../styles/navbar.css'
import logOut from '../assets/icons/logOut.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const NavbarPage = ({shouldRender,setShouldRender}) => {

  const logout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }
  return (
    <div className="container-fluid navbarPage">
        <diV className="row">
        
                <ul className="navbar-nav ">
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">A propos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Questions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>

                    
    
  {shouldRender && (
    <li className='li-item ms-4 '>
      <Link className='nav-link' onClick={logOut}>
        <img src={logOut} alt="logOut" className='logOut' />
      </Link>
    </li>
  )}  

                </ul>
          
         
        </diV>
    </div>
  )
}

export default NavbarPage