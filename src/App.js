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

const App = () => {
 

  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          
          <Route element={<PrivateRoutes  />}>
            <Route path="/login/user" element={<LogedUser />} exact />
            <Route path="/login/admin" element={<LogedAdmin />} exact/>
            <Route path="/addPatient" element={<AddPatient />} exact/>
          </Route>
 
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<LoginAdmin />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
