import React from 'react'
import LoginUser from '../components/LoginUser'
import Apropos from '../components/Apropos'
import '../styles/Home.css'
import Questions from '../components/Questions'
import About from '../components/About'
import NavbarPage from '../components/NavbarPage'
const Home = ({mobileSize,click,setClick}) => {
  return (

  
  <>
  {mobileSize && click ? <NavbarPage  /> : null}
        <LoginUser click={click} setClick={setClick} mobileSize={mobileSize}   />
        <Apropos />
        <Questions />
        <About />
  </>
 
 

 
 
    
    
  )
}

export default Home