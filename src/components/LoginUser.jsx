import React from 'react';
import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import admin from '../assets/admin.png'
import pdf from '../assets/pdf.png'
import { Link } from 'react-router-dom';

const LoginAdmin = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Handle your form submission logic here
  };

  return (
    <div className="container ">
      <div className="row col-12  ">


        <div className="text mt-3 d-flex justify-content-center">
          <p className='d-flex justify-content login-text1'> Résultats en ligne</p>
        </div>
       
        <div className="login-card col-12 mx-auto  d-flex">

          <div className="pdf  col-md-6    ">
             <img src={pdf} alt="" className='pdf-img' />
          </div>

          <div className=" login-parts col-5 ms-4">

           <p className='login-text1 mt-2'> Résultats des analyses : </p>
            <form onSubmit={handleSubmit} className='col-10 ms-5' > 
              
           
                <label htmlFor="exampleInputEmail1" ><p className='login-text2 '>Id Patient</p></label>
                <input
                  type="text"
                  className=" form-control form-control-lg "
                  id="exampleInputEmail1"
       
                  placeholder="Id Patient"
                />

              <label htmlFor="exampleInputEmail1" className='mt-3'><p className='login-text2 '>Mot De Passe</p></label>
                <input
                  type="text"
                  className=" form-control form-control-lg"
                  id="exampleInputEmail1"
      
                  placeholder="********"
                />
              <div>

         
                  
              <button type="submit" className="submit btn col-10  d-flex mx-auto mt-3    ">
                <p className='mx-auto'>Télecharger vos résultats</p>
              </button>
             

              <div className="admin d-flex justify-content-end mt-2 mb-4 ">
                <img src={admin} alt="" />
                <Link to='/admin' className='mx-2 link-admin'>Accès partenaire</Link>
              </div>  

              </div>

            </form>
            
          
  
          </div>


        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
