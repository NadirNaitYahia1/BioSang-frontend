import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profil from '../assets/profil.png';
import '../styles/LogedPatient.css';
import download from '../assets/download.png';
import print from '../assets/print.png';
import { useState } from 'react';
const LogedPatient = () => {
  
  
  const [data, setData] = useState([]);

 

  const getAnalyses = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/getAnalyses');
        let data = await response.json();
        console.log("data", data);
        setData(data);
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

  
    useEffect(() => {
      getAnalyses();
    }, []);
  





 

  return (
    <div className="container-fluid  align-items-center logedPatient mt-4 ">
      <div className="row col-12 justify-content-center ">
            <p className='apropos-text1 text-center mt-1 mb-4'>Vos Resultats</p>
        <div className="col-9 LogedPatient-container d-flex">
          <table >
            <tr className='table-text1'>
              <td >Nom du fichier</td>
              <td>Date</td>
              <td>Heure</td>
              <td>Téléchargement</td>
            </tr>
 
            <tr  className='table-text2 tr-notReaded'>
                <td> Analyse de sang </td>
                <td>31/07/2023</td>
                <td>01:00</td>
                <td className='d-flex justify-content-center'>
                    <button className='btn col-3 mx-1'> 
                      <img src={download} alt="download" className="img-download" />
                    </button>

                    <button className='btn col-3'> 
                    <img src={print} alt="download" className="img-download" />
                    </button>

        
                </td>
            </tr>   

            <tr >
                <td> Analyse de sang g2</td>
                <td>31/07/2023</td>
                <td>01:00</td> 
                                <td className='d-flex justify-content-center'>
                    <button className='btn col-3 mx-1'> 
                      <img src={download} alt="download" className="img-download" />
                    </button>

                    <button className='btn col-3'> 
                    <img src={print} alt="download" className="img-download" />
                    </button>

             
                </td>
            </tr>   

            <tr >
                <td> Analyse de sang g2</td>
                <td>31/07/2023</td>
                <td>01:00</td> 
                                <td className='d-flex justify-content-center'>
                    <button className='btn col-3 mx-1'> 
                      <img src={download} alt="download" className="img-download" />
                    </button>

                    <button className='btn col-3'> 
                    <img src={print} alt="download" className="img-download" />
                    </button>
              
                </td>
            </tr> 

            <tr >
                <td> Analyse de sang g2</td>
                <td>31/07/2023</td>
                <td>01:00</td> 
                                <td className='d-flex justify-content-center'>
                    <button className='btn col-3 mx-1'> 
                      <img src={download} alt="download" className="img-download" />
                    </button>

                    <button className='btn col-3'> 
                    <img src={print} alt="download" className="img-download" />
                    </button>
              
                </td>
            </tr> 

            <tr >
                <td> Analyse de sang g2</td>
                <td>31/07/2023</td>
                <td>01:00</td> 
                                <td className='d-flex justify-content-center'>
                    <button className='btn col-3 mx-1'> 
                      <img src={download} alt="download" className="img-download" />
                    </button>

                    <button className='btn col-3'> 
                    <img src={print} alt="download" className="img-download" />
                    </button>

         
                </td>
            </tr>   
 
  

          </table>
        </div>
      </div>
    </div>
  );
};

export default LogedPatient;
