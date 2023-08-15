import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route,useLocation  } from "react-router-dom";
import Navbar from './components/Navbar'
 import Home from './pages/Home'
import './App.css'
import LoginAdmin from './components/LoginAdmin';
import LogedUser from './pages/LogedUser'; 
 const App = () => {
   return ( 
  <>
  <div className="App">
    <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<LoginAdmin />} />
            <Route path="/logedPatient" element={<LogedUser />} />
      
          </Routes>
      </Router>
         
  </div>
  
  </>

 
   )
 }
 
 export default App
