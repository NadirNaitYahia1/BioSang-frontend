import React from 'react';
import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import admin from '../assets/admin.png'
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Handle your form submission logic here
  };

  return (
    <div className="container mt-5">
      <div className="row col-12 mt-5">


        <div className="text mt-4 d-flex justify-content-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
       
        <div className="login-card col-12    mx-auto mt-5 d-flex">

          <div className="pdf  col-5 mx-5">
            <h1>nadir</h1>
          </div>

          <div className=" login-parts col-6 ms-4">

           <p className='login-text1 mt-4'> Résultats des analyses : </p>
            <form onSubmit={handleSubmit} className='col-10 ms-5' > 
              
           
                <label htmlFor="exampleInputEmail1" ><p className='login-text2 ms-1'>Id Patient</p></label>
                <input
                  type="text"
                  className=" form-control form-control-lg "
                  id="exampleInputEmail1"
       
                  placeholder="ID PATIENT"
                />

              <label htmlFor="exampleInputEmail1" className='mt-4'><p className='login-text2 ms-1'>Mot De Passe</p></label>
                <input
                  type="text"
                  className=" form-control form-control-lg"
                  id="exampleInputEmail1"
      
                  placeholder="Mot De Passe"
                />
      
              <button type="submit" className="submit btn col-6  d-flex mx-auto mt-4   ">
                <p className='mx-auto'>Télecharger vos résultats</p>
              </button>
            </form>

          <div className="admin col-12 d-flex justify-content-end ">
            
            <Link to='/admin' className='link-admin d-flex mx-5'>
              <img src={admin} alt="" className='mx-2' />
              <p className='admin-text '>Admin</p>
            </Link>
            
            <p></p>
          </div>
  
          </div>


        </div>
      </div>
    </div>
  );
};

export default Login;
