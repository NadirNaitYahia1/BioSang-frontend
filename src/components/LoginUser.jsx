import React, { useState, useEffect } from 'react';
import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import admin from '../assets/admin.png';
import pdf from '../assets/pdf.png';
import { Link, useNavigate } from 'react-router-dom';

const LoginUser = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [data, setData] = useState({
    id_Patient: '',
    password: ''
  });
  const history = useNavigate(); // Initialize the history object

  const createNote = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/login`, {
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
      history("/login/user"); // Programmatically navigate to the desired route
    }
  }, [isAuth]);
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
                  id="id_Patient"
         
                  value={data.id_Patient}
                  onChange={handleChange}
    
                  placeholder="Id Patient"
                />

              <label htmlFor="exampleInputEmail1" className='mt-3'><p className='login-text2 '>Mot De Passe</p></label>
                <input
                  type="text"
                  className=" form-control form-control-lg"
                  id="password"
                  placeholder="********"
                  value={data.password}
                  onChange={handleChange}
       
                />
              <div>

         
                  
              <button type="submit" className="submit btn col-10  d-flex mx-auto mt-3    " onClick={handleChange}>
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

export default LoginUser;
