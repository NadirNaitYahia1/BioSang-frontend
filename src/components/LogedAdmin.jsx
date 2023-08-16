import React from 'react'
import '../styles/logedAdmin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import profil from '../assets/profil.png';
import '../styles/LogedPatient.css';
import upload from '../assets/upload.png';
import yes from '../assets/yes.png';
 ;
const LogedAdmin = () => {
  return (
    <div className="container-fluid  align-items-center   ">
    <div className="row col-12 justify-content-center ">

      
    <div className="col-3 nav-side">
  <div className="profile d-flex flex-column align-items-center">
    <img src={profil} alt="profil" className="img-profil" />
    <p className="name text-center">Dr. Pablo Emilio</p>
  </div>


    <table>
      <tr className='nav'><button class='btn  btn-warning col-12 align-self-center'>Ajouter un document</button></tr>
      <tr className='nav'><button className='btn btn-warning col-12 align-self-center'>Ajouter un Patient</button></tr>
      <tr className='nav mt-4'> <button className='btn btn-blue  col-12 align-self-center'>Patients</button></tr>
      <tr className='nav'><button className='btn btn-blue  col-12 align-self-center'>Admin</button></tr>
      <tr className='nav'><button className='btn btn-blue  col-12 align-self-center'>Questions</button></tr>
 

    
    </table>
    </div>
<div className="col-9 justify-content-center">
<p className='apropos-text1 text-center mt-1 mb-4'>Ajouter les Analyses</p>
      <div className="justify-content-center LogedPatient-container d-flex">
        <table >
          <tr className='table-text1'>
            <td >Id Patient</td>
            <td>Nom et Prenom du patient</td>
            <td>Heure</td>
            <td>Ajouter</td>
            <td>Cheak</td>
          </tr>

          <tr  className='table-text2 tr-notReaded'>
              <td>3322324</td>
              <td>PABLO EMILIO</td>
              <td>01:00</td>
              <td className='d-flex justify-content-center'>
                  <button className=' col- mx-1'> 
                    <img src={upload} alt="upload" className="img-download" />
                  </button>      
              </td>

 
          </tr>   

          <tr >
              <td>3322324g2</td>
              <td>PABLO EMILIO</td>
              <td>01:00</td> 
                              <td className='d-flex justify-content-center'>
                  <button className=' col-3 mx-1'> 
                    <img src={upload} alt="upload" className="img-download" />
                  </button>
                  <td className='d-flex justify-content-center'>
                  <button > 
                    <img src={yes} alt="upload" className="img-download" />
                  </button>      
              </td>
          

           
              </td>
          </tr>   

          <tr >
              <td>3322324g2</td>
              <td>PABLO EMILIO</td>
              <td>01:00</td> 
                              <td className='d-flex justify-content-center'>
                  <button className=' col-3 mx-1'> 
                    <img src={upload} alt="upload" className="img-download" />
                  </button>

          
            
              </td>
          </tr> 

          <tr >
              <td>3322324g2</td>
              <td>PABLO EMILIO</td>
              <td>01:00</td> 
                              <td className='d-flex justify-content-center'>
                  <button className=' col-3 mx-1'> 
                    <img src={upload} alt="upload" className="img-download" />
                  </button>

          
            
              </td>
          </tr> 

          <tr >
              <td>3322324g2</td>
              <td>PABLO EMILIO</td>
              <td>01:00</td> 
                              <td className='d-flex justify-content-center'>
                  <button className=' col-3 mx-1'> 
                    <img src={upload} alt="upload" className="img-download" />
                  </button>

          

       
              </td>
          </tr>   



        </table>
      </div>
</div>

    </div>
  </div>
  )
}

export default LogedAdmin