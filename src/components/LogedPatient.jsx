import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profil from '../assets/profil.png';
import '../styles/LogedPatient.css';
import download from '../assets/download.png';
import print from '../assets/print.png';

const LogedPatient = ({mobileSize,click,setClick}) => {
  return (
    <div className="container-fluid   mt-4">
      {/* <div className="row   justify-content-center"> */}
        <p className='apropos-text1 text-center mt-1 mb-3'>Vos Resultats</p>
        
          <table className='col-9 mx-auto'>
            <tbody>
              <tr className='table-text4'>
                <td>Nom du fichier</td>
                <td>Date</td>
                <td>Heure</td>
                <td>Téléchargement</td>
              </tr>
              <tr className='table-text3 tr-notReaded'>
                <td> Analyse de sang </td>
                <td>31/07/2023</td>
                <td>01:00</td>
                <td className='d-flex justify-content-center'>
                  <button className='btn  mx-1'>
                    <img src={download} alt="Download" className="img-download" />
                  </button>
                  <button className='btn '>
                    <img src={print} alt="Print" className="img-download" />
                  </button>
                </td>
              </tr>


              <tr className='table-text3 '>
                <td> Analyse de sang </td>
                <td>31/07/2023</td>
                <td>01:00</td>
                <td className='d-flex justify-content-center'>
                  <button className='btn  mx-1'>
                    <img src={download} alt="Download" className="img-download" />
                  </button>
                  <button className='btn '>
                    <img src={print} alt="Print" className="img-download" />
                  </button>
                </td>
              </tr>

              <tr className='table-text3 '>
                <td> Analyse de sang </td>
                <td>31/07/2023</td>
                <td>01:00</td>
                <td className='d-flex justify-content-center'>
                  <button className='btn   mx-1'>
                    <img src={download} alt="Download" className="img-download" />
                  </button>
                  <button className='btn  '>
                    <img src={print} alt="Print" className="img-download" />
                  </button>
                </td>
              </tr>

              <tr className='table-text3 '>
                <td> Analyse de sang </td>
                <td>31/07/2023</td>
                <td>01:00</td>
                <td className='d-flex justify-content-center'>
                  <button className='btn  mx-1'>
                    <img src={download} alt="Download" className="img-download" />
                  </button>
                  <button className='btn  '>
                    <img src={print} alt="Print" className="img-download" />
                  </button>
                </td>
              </tr>

              <tr className='table-text3 '>
                <td> Analyse de sang </td>
                <td>31/07/2023</td>
                <td>01:00</td>
                <td className='d-flex justify-content-center'>
                  <button className='btn   mx-1'>
                    <img src={download} alt="Download" className="img-download" />
                  </button>
                  <button className='btn  '>
                    <img src={print} alt="Print" className="img-download" />
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
         
      {/* </div> */}
    </div>
  );
};

export default LogedPatient;
