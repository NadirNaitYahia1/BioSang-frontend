import React from 'react'
import LoginUser from '../components/LoginUser'
import Apropos from '../components/Apropos'
import '../styles/Home.css'
import Questions from '../components/Questions'
import About from '../components/About'
const Home = () => {
  return (
 <div>

   <LoginUser />
   <Apropos />
   <Questions />
   <About />

 </div>
 
    
    
  )
}

export default Home