import React from 'react'
import LoginUser from '../components/LoginUser'
import Apropos from '../components/Apropos'
import '../styles/Home.css'
import Questions from '../components/Questions'
const Home = () => {
  return (
 <div>

   <LoginUser />
   <Apropos />
   <Questions />

 </div>
 
    
    
  )
}

export default Home