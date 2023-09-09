import React from 'react';
import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import admin from '../assets/admin.png';
import pdf from '../assets/pdf.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginAdmin = ({mobileSize,click,setClick}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [data, setData] = useState({
    id_Admin: '',
    password: ''
  });
  const history = useNavigate(); // Initialize the history object

  const createNote = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const content = await response.json();
      if (content.jwt !== undefined || content.jwt !== null){
        localStorage.setItem('token', content.jwt);
        setIsAuth(true);
      }
      else{
        setIsAuth(false);
      }
      
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createNote(); // Call the API request function
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    if (isAuth === true) {
      history("/login/admin"); // Programmatically navigate to the desired route
    }
  }, [isAuth]);

  return (
    <div className="container admin-page  ">
      <div className="row  col-12  ">

        <div className={mobileSize ?"login-card  login-card-admin col-12  ":"login-card  login-card-admin col-12  d-flex  mx-auto "}>

        <div className="   col-md-4 col-12 d-flex align-items-center ">
        <p className='login-text1 mt-2 text-center '>Espace pour les administrateurs:</p>
          </div>

          <div className={mobileSize?"login-parts col-md-8 col-12 ":"login-parts col-md-8 col-12 ms-4 "}>
  
<form onSubmit={handleSubmit} className='col-6  mx-auto mt-4' > 
              
           
              <label htmlFor="exampleInputEmail1"  ><p className='login-text2 '>UTILISATEUR</p></label>
              <input 
 
                className=" form-control form-control-lg"
                id="id_Admin"
       
                value={data.id_Admin}
                onChange={handleChange}
  
                placeholder="Nom d'utilisateur"
              />

            <label htmlFor="exampleInputEmail1" className='mt-3'><p className='login-text2 '>Mot De Passe</p></label>
              <input
                type="password"
                className=" form-control form-control-lg"
                id="password"
                placeholder="********"
                value={data.password}
                onChange={handleChange}
     
              />
            <div>

       
                
            <button type="submit" className="btn btn-primary my-3 d-flex mx-auto"onClick={handleChange}>
            Se Connecter
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
