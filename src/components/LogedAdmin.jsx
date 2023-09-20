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


    const [selectedRows, setSelectedRows] = useState([]);


    
  const [analyses, setAnalyses] = useState({id_analyse:'', admin_id:'' ,patient_id:'', date: '',  fichier:'' })
  
  
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
        else{
          if (!response.ok) {
            
            if(response.status === 400){
              console.log('Bad request');
              window.location.href = '/';
              return;
            }
        }
      }}catch (error) {
        console.log(error.message);
      }
    };
    
    fetchData();  
  }, []);  
  
  
const formData = new FormData();
const [state,setState] = useState({
  selectedFile: null,
  id_analyse: '',
  admin_id: '',
  patient_id: '',
  date: '',
});
  


const onFileChange = (event) => {

  console.log('event.target.files[0]',event.target.files[0]);


  setState(
    { selectedFile: event.target.files[0] }
  );
};


const fetchUpload = async () => {
  try {
    const response = await fetch(`http://localhost:8000/api/uploadFile`, {
      method: 'POST',  
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: formData,  
    });

    if (response.status === 200) {
      alert('File uploaded successfully');
      alert('File uploaded successfully');
    } else {
      if (!response.ok) {
        if (response.status === 400) {
          alert('Bad request');
        }
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};


const onFileUpload = (analyse) => {

   
  setSelectedRows([...selectedRows, analyse.patient_id]);
  try{
 
    formData.append("file", state.selectedFile);
    formData.append("id_analyse", analyse.id_analyse);
    formData.append("patient_id", analyse.patient_id);
    formData.append("date", analyse.date);

    console.log('analyses.id_analyse',analyse.patient_id);

  }  
  catch (error) {
    console.log(error.message);
  }

    console.log( "formatData :", formData );
    console.log('im here')
    
    fetchUpload() ;
     
};


const fileData = (id_patient) => {
  console.log('id:', id_patient);

  if (state.selectedFile && selectedRows.includes(id_patient)) {
    return (
      <div>
        <h5>File Details:</h5>
        <p>File Name: {state.selectedFile.name}</p>
        <p>File Type: {state.selectedFile.type}</p>
        <p>
          Last Modified:{" "}
          {state.selectedFile.lastModifiedDate.toDateString()}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <br />
        <h4>Choose before Pressing the Upload button</h4>
      </div>
    );
  }
};

   

  return (
 

      
    <div className="col-9 justify-content-center mt-5">
    <p className='apropos-text1 text-center mt-1 mb-4'>Ajouter les Analyses</p>
    <div className="justify-content-center LogedPatient-container d-flex">
      <table>
        <thead>
          <tr className='table-text1'>
            <td>Id Analyse</td>
            <td>Nom et Prenom du patient</td>
            <td>Heure</td>
            <td>Ajouter</td>
          </tr>
        </thead>
        <tbody>
          {Object.values(analyses).map((analyse, index) => (
            <tr key={index} className='table-text2'>
              <td>{analyse.id_analyse}</td>
              <td>{analyse.patient_id}</td>
              <td>{analyse.date}</td>
              <td className='d-flex justify-content-center'>
                <input type="file" onChange={onFileChange} />
                <button className='btn btn-blue' onClick={()=>onFileUpload(analyse)}>Upload!</button>
                { fileData(analyse.patient_id)}  
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

 
  )
}

export default LogedAdmin