import React from 'react'
import '../styles/navbar.css'
const NavbarPage = () => {
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
                </ul>
          
         
        </diV>
    </div>
  )
}

export default NavbarPage