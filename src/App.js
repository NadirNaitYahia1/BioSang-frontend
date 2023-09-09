import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';
import LoginAdmin from './components/LoginAdmin';
import LogedUser from './pages/LogedUser';
import LogedAdmin from './components/LogedAdmin';
import AddPatient from './components/AddPatient';
import PrivateRoutes from './utils/PrivateRotes';
import Patients from './components/Patients';
import Admins from './components/Admins';



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


  
  return (
    <div className="App">
      <Router>
        <Navbar click={click} setClick={setClick} mobileSize={mobileSize} setMobileSize={setMobileSize}/>
        <Routes>

          <Route element={<PrivateRoutes    />}>
            <Route path="/login/user" element={<LogedUser click={click} setClick={setClick} mobileSize={mobileSize} setMobileSize={setMobileSize} />} exact />
            <Route path="/login/admin" element={<LogedAdmin />} exact/>
            <Route path="login/patients" element={<Patients />} exact/>
            <Route path="login/admins" element={<Admins />} exact/>
            <Route path="/addPatient" element={<AddPatient />} exact/>
          </Route>
 
          <Route path="/" element={<Home  click={click} setClick={setClick} mobileSize={mobileSize} setMobileSize={setMobileSize}/>} />
          <Route path="/admin" element={<LoginAdmin  click={click} setClick={setClick} mobileSize={mobileSize} setMobileSize={setMobileSize} />} />
      
        </Routes>
      </Router>
    </div>
  );
};

export default App;