import React, { useEffect } from 'react'
import '../styles/logedAdmin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import profil from '../assets/profil.png';
import '../styles/LogedPatient.css';
import upload from '../assets/upload.png';
import yes from '../assets/yes.png';
import { useState } from 'react';
  

const LogedAdmin = () => {
  const [data, setData] = useState({
    name: '',
    img: '',});


  const [analyses, setAnalyses] = useState({id_analyse:'', admin_id:'' ,patient_id:'', date: '',  fichier:'' })


  const redirectToAddPatient = () => {
    window.location.href = '/addPatient'
  }

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
      } catch (error) {
        console.log(error.message);
      }
    };
  
    fetchDataAdmin(); // Call the fetchData function inside useEffect
  }, []); // Empty dependency array to run the effect once
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/getAnalysesForAdmin`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
         
          },
        });
  
        const contents = await response.json();
        console.log('analyses',contents);
        if (response.status === 200) {
          
      
          setAnalyses(contents);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
  
    fetchData(); // Call the fetchData function inside useEffect
  }, []); //
  const clicked = (e) => {
    window.location.href =e}

  return (
    <div className="container-fluid  align-items-center   ">
    <div className="row col-12 justify-content-center ">

      
    <div className="col-3 nav-side">
  <div className="profile d-flex flex-column align-items-center">
    <img src={profil} alt="profil" className="img-profil" />
    <p className="name text-center">{data.name}</p>
  </div>


    <table>
      <tr className='nav'><button class='btn  btn-warning col-12 align-self-center'>Ajouter un document</button></tr>
      <tr className='nav'><button className='btn btn-warning col-12 align-self-center' onClick={redirectToAddPatient}>Ajouter un Patient</button></tr>
      <tr className='nav mt-4'> <button className='btn btn-blue  col-12 align-self-center' onClick={()=>clicked('patients')}>Patients</button></tr>
      <tr className='nav'><button className='btn btn-blue  col-12 align-self-center' onClick={()=>clicked('admins')}>Admin</button></tr>
      <tr className='nav'><button className='btn btn-blue  col-12 align-self-center'>Questions</button></tr>
 

    
    </table>
    </div>
<div className="col-9 justify-content-center">
<p className='apropos-text1 text-center mt-1 mb-4'>Ajouter les Analyses</p>
      <div className="justify-content-center LogedPatient-container d-flex">
        <table >
          <thead>

          <tr className='table-text1'>
            <td >Id Patient</td>
            <td>Nom et Prenom du patient</td>
            <td>Heure</td>
            <td>Ajouter</td>
            <td>Cheak</td>
          </tr>

          </thead>
          <tbody>

          {/* <tr  className='table-text2 tr-notReaded'>
              <td>3322324</td>
              <td>PABLO EMILIO</td>
              <td>01:00</td>
              <td className='d-flex justify-content-center'>
                  <button className=' col- mx-1'> 
                    <img src={upload} alt="upload" className="img-download" />
                  </button>      
              </td>

 
          </tr>    */}



 
          {Object.values(analyses).map((analyse, index) => (
            <tr key={index} className='table-text2'>
                    <td>{analyse.id_analyse}</td>
                <td>{analyse.patient_id}</td>
                    <td>{analyse.date}</td>
                    <td className='d-flex justify-content-center'>
                      <button className='col-3 mx-1'>
                        <img src={upload} alt="upload" className="img-download" />
                      </button>
                      <td className='d-flex justify-content-center'>
                        {/* <button>
                          <img src={yes} alt="upload" className="img-download" />
                        </button> */}
                      </td>
                    </td>
                  </tr>
                ))}


                </tbody>
        </table>
      </div>
</div>

    </div>
  </div>
  )
}

export default LogedAdmin