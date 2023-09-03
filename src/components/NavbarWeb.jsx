import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import logOut from '../assets/icons/logOut.png'


const NavbarWeb = ({shouldRender}) => {

  const logout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

 
    const [isClicked, setIsClicked] = useState([true, false, false,false])

    const navClick = (index) => {
        if (index === 0) {
          setIsClicked([true, false, false,false])
        }
        if (index === 1) {
          setIsClicked([false, true, false,false])
        }
        if (index === 2) {
          setIsClicked([false, false, true,false])
        }
      
        if (index === 3) {
          setIsClicked([false, false, false,true])
        }
      }
      
  return (
    <div className='navbar-expand-lg d-flex'>


        
        <li className='li-item  ms-4'  >
          
          <Link className='nav-link' to="/" onClick={()=> navClick(0)}>
        <span className={isClicked[0] ? 'p-clicked mb-1' :''}>Résultats</span>   

          </Link>
        
        </li>

        <li className='li-item ms-4  '>

          <Link className='nav-link' to="/A-propos" onClick={()=> navClick(1)}>
          <p className={isClicked[1] ? 'p-clicked mb-1' :''}>A propos</p>
          </Link>

        </li>

        <li className='li-item ms-4 '>

          <Link className='nav-link' to="/Question" onClick={()=> navClick(2)}>
          <p className={isClicked[2] ? 'p-clicked mb-1' :''}>Vos Questions</p>
          </Link>

        </li>

        <li className='li-item ms-4 '>
          <Link className='nav-link' to="/Contact-Us"  onClick={()=> navClick(3)}>
          <p className={isClicked[3] ? 'p-clicked mb-1' :''}> Contact Us</p>
          </Link>
        </li>

        {  shouldRender && (
        <li className='li-item ms-4 'onClick={logout}>
          <Link className='nav-link' >
            <img src={logOut} alt="logOut" className='logOut' />
          </Link>
        </li>
      )}

    </div>
  )
}

export default NavbarWeb