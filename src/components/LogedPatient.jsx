import React, {useState , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profil from '../assets/profil.png';
import '../styles/LogedPatient.css';
import download from '../assets/download.png';
import print from '../assets/print.png';
 
const LogedPatient = ({mobileSize,click,setClick}) => {
  const [token, setToken] = useState(null);
  const [files, setFiles] = useState([]);
  
  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
  
      if (!token) {
        // Handle the case where the token is missing or not available
        console.log('Token is missing or not available.');
        return;
      }
  
      const response = await fetch('http://localhost:8000/api/getAnalyses', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
       
        },
      });
  
      if (!response.ok) {
        // Handle the case where the request was not successful
        console.error('Request failed with status:', response.status);
        return;
      }
  
      const content = await response.json();
      console.log('content', files);
      setFiles(content);
    } catch (error) {
      console.log(error.message);
    }
  };
  


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      fetchData();
     
    
    }


  }, []);

  const onButtonClick = (url) => {
    // Create a new anchor element to trigger the download
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'downloaded.pdf'; // You can customize the file name here


    // Trigger a click event on the anchor element
    document.body.appendChild(anchor);
    anchor.click();

    // Clean up after the click event
    document.body.removeChild(anchor);
  };

  const PrintDocumentButton = ({ documentUrl }) => {
 
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = documentUrl;

      document.body.appendChild(iframe);
      iframe.onload = () => {
        iframe.contentWindow.print();
   
    };
  }
  



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

              {
                files.map((item) => (
                  <tr className='table-text3 '>
                    <td> {item.id_analyse}</td>
                    <td>{item.date}</td>
                    <td>01:00</td>
                    <td className='d-flex justify-content-center'>
                      <button className='btn  mx-1'>
                        <img src={download} alt="Download" className="img-download" onClick={()=> onButtonClick(item.fichier)} />
                      </button>
                      <button className='btn '>
                        <img src={print} alt="Print" className="img-download" onClick={()=>PrintDocumentButton(item.fichier)} />
                      </button>
                    </td>
                  </tr>
                ))
              }

 

            </tbody>
          </table>
         
      {/* </div> */}
    </div>
  );
};

export default LogedPatient;
