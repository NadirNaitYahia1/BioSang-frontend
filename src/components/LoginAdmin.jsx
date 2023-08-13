import React from 'react';
import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import admin from '../assets/admin.png';
import pdf from '../assets/pdf.png';
import { Link } from 'react-router-dom';

const LoginAdmin = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Handle your form submission logic here
  };

  return (
    <div className="container admin-page  ">
      <div className="row  col-12  ">

        <div className="login-card  login-card-admin col-12  d-flex  mx-auto  ">

        <div className="   col-md-4 col-12 d-flex align-items-center ">
        <p className='login-text1 mt-2 text-center '>Espace pour les administrateurs:</p>
          </div>

          <div className="login-parts col-md-8 col-12 ms-4  ">
  
            <form onSubmit={handleSubmit} className='col-6  mx-auto '>
              <label htmlFor="exampleInputEmail1"><p className='login-text2'>UTILISATEUR</p></label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleInputEmail1"
                placeholder="Nom d'utilisateur"
              />

              <label htmlFor="exampleInputPassword1" className='mt-3'><p className='login-text2'>Mot De Passe</p></label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="exampleInputPassword1"
                placeholder="********"
              />

              <div>
                <button type="submit" className="submit btn col-10 d-flex mx-auto mt-3 mb-4">
                  <p className='mx-auto'>Se Connecter</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;