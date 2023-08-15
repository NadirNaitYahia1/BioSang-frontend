import React from 'react';
// import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import '../styles/about.css';
import email from '../assets/icons/email.png';
import phone from '../assets/icons/phone-call.png';
import github_sign from '../assets/icons/github-sign.png';
import linkedin from '../assets/icons/linkedin.png';
import instagram from '../assets/icons/instagram.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container-fluid about mt-5 mb-4">
      <div className="row col-12 d-flex  ">
        <div className="col-12 d-flex justify-content-center">
          <p className='p1_about'>About Us</p>
        </div>

        <div className="col-12  d-flex  mt-3 justify-content-center mb-2 ">
   

          <div className='d-flex'>
            <a href='nadirnaityahiapro@gmail.com' className='links'
            
            target="_blank"   // C'est ici que vous spécifiez de s'ouvrir dans une nouvelle page
            rel="noreferrer"   // Assurez-vous d'inclure cela pour des raisons de sécurité

            >
              <img src={email} alt="email" className='icons ms-3' />
              
            </a>

            <a href='tel:+1234567890'
              target="_blank"   // C'est ici que vous spécifiez de s'ouvrir dans une nouvelle page
              rel="noreferrer"   // Assurez-vous d'inclure cela pour des raisons de sécurité
            >
              <img src={phone} alt="phone" className='icons ms-3' />
            </a>

            <a href='https://github.com/NadirNaitYahia1' className='links'
              target="_blank"   // C'est ici que vous spécifiez de s'ouvrir dans une nouvelle page
              rel="noreferrer"   // Assurez-vous d'inclure cela pour des raisons de sécurité
            >
              <img src={github_sign} alt="" className='icons ms-3' />
            </a>

            <a href='https://www.linkedin.com/in/nadir-nait-yahia/' className='links'
              target="_blank"   // C'est ici que vous spécifiez de s'ouvrir dans une nouvelle page
              rel="noreferrer"   // Assurez-vous d'inclure cela pour des raisons de sécurité
            >
              <img src={linkedin} alt="" className='icons ms-3' />
            </a>

            <a href='https://www.instagram.com/nadirnaityahia/' className='links'
              target="_blank"   // C'est ici que vous spécifiez de s'ouvrir dans une nouvelle page
              rel="noreferrer"   // Assurez-vous d'inclure cela pour des raisons de sécurité
            >
              <img src={instagram} alt="" className='icons ms-3' />
            </a>
          </div>

 
        </div>
      </div>
    </div>
  );
};

export default About;
