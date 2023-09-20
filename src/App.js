import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import LoginAdmin from './components/LoginAdmin';
import LogedAdmin from './components/LogedAdmin';
import PrivateRoutes from './utils/PrivateRotes';
import Patients from './components/Patients';
import Admins from './components/Admins';

import Home from './pages/Home';
import LogedUser from './pages/LogedUser';
import  Admin from './pages/Admin';
import AddPatientPage from './pages/AddPatientPage'


const App = () => {
 
  const [mobileSize, setMobileSize] = useState(window.innerWidth < 992);
  const [click, setClick] = useState(false)

  const handleResize = () => {
    setMobileSize(window.innerWidth < 900);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])


  const clicked = () => {
    setClick(!click)
  }

  const [isAdmin, setIsAdmin] =useState(false)


  useEffect (()=>{
    if (window.location.href === 'http://localhost:3000/login/admin' || window.location.href === 'http://localhost:3000/addPatient' ){
      setIsAdmin(true)
    }

  },[])
  

  
  return (
    <div className="App">
      <Router>
        {isAdmin ? null :<Navbar click={click} setClick={setClick} mobileSize={mobileSize} setMobileSize={setMobileSize}/>}
        <Routes>

          <Route element={<PrivateRoutes    />}>
            <Route path="/login/user" element={<LogedUser click={click} setClick={setClick} mobileSize={mobileSize} setMobileSize={setMobileSize} />} exact />
            <Route path="login/patients" element={<Patients />} exact/>
            
            <Route path="addPatient" element={<AddPatientPage />} exact/>
            <Route path="/login/admin" element={<Admin />} exact/>
            <Route path="login/admins" element={<Admins />} exact/>
          </Route>
 
          <Route path="/" element={<Home  click={click} setClick={setClick} mobileSize={mobileSize} setMobileSize={setMobileSize}/>} />
          <Route path="/admin" element={<LoginAdmin  click={click} setClick={setClick} mobileSize={mobileSize} setMobileSize={setMobileSize} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>} />
      
        </Routes>
      </Router>
    </div>
  );
};

export default App;