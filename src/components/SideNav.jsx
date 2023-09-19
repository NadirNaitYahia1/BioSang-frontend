import React from 'react'
import { useState,useEffect } from 'react';
import '../styles/logedAdmin.css'

import profil from '../assets/profil.png';


const SideNav = () => {
    const [data, setData] = useState({
        name: '',
        img: '',});



        useEffect(() => {
            const fetchDataAdmin = async () => {
              try {
                const response = await fetch(`http://localhost:8000/api/getAdmin`, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                 
                  },
                });
          
                const content = await response.json();
                console.log(content);
                if (response.status === 200) {
                  setData({
                    name: content.name,
                  });
        
                }
                else{
                  if (!response.ok) {
                    // Handle the case where the request was not successful
                    if(response.status === 400){
                      console.log('Bad request');
                      window.location.href = '/';
                      return;
                    }
                }
              }} catch (error) {
                console.log(error.message);
              }
            };
          
            fetchDataAdmin(); // Call the fetchData function inside useEffect
          }, []); // Empty dependency array to run the effect once
          

          const clicked = (e) => {
            window.location.href =e
          }

        const redirectToAddPatient = () => {
        window.location.href = '/addPatient'
        }
        
  return (
    <div className="col-3 nav-side">
    <div className="profile d-flex flex-column align-items-center">
      <img src={profil} alt="profil" className="img-profil" />
      <p className="name text-center">{data.name}</p>
    </div>
  
  
      <table>
        <h5>Ajout</h5>
        <tr className='nav'><button class='btn  btn-warning col-12 align-self-center'>Ajouter un document</button></tr>
        <tr className='nav'><button className='btn btn-warning col-12 align-self-center' onClick={redirectToAddPatient}>Ajouter un Patient</button></tr>
        
        {/* a supprimer */}
        <div className='mt-5'></div>
        
        
        
        <h5> Information</h5>
        <tr className='nav '> <button className='btn btn-blue  col-12 align-self-center' onClick={()=>clicked('patients')}>Patients</button></tr>
        <tr className='nav'><button className='btn btn-blue  col-12 align-self-center' onClick={()=>clicked('admins')}>Admin</button></tr>
        <tr className='nav'><button className='btn btn-blue  col-12 align-self-center'>Questions</button></tr>
      </table>
      </div>
  )
}

export default SideNav