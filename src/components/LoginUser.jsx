import React, { useState, useEffect } from 'react';
import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import admin from '../assets/admin.png';
import pdf from '../assets/pdf.png';
import { Link, useNavigate } from 'react-router-dom';

const LoginUser = ({mobileSize,click,setClick}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [data, setData] = useState({
    id_Patient: '',
    password: ''
  });
  const history = useNavigate(); // Initialize the history object

  const createNote = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/user/login`, {
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
      <div className="row    ">


        <div className={mobileSize?"text d-flex justify-content-center":"text mt-3 d-flex justify-content-center"}>
          <p className='d-flex justify-content login-text1 mt-1'> Résultats en ligne</p>
        </div>
       
        <div className={mobileSize  ?"login-card ":"login-card col-12 mx-auto  d-flex"}>

          <div className="pdf  col-md-6  col-8 d-flex  mx-auto">
             <img src={pdf} alt="" className='pdf-img' />
          </div>

          <div className={mobileSize ?" login-parts col-md-5 col-12 ":" login-parts col-md-5 col-12 ms-4"}>

           <p className={mobileSize?'login-text1 mt-1':'login-text1 mt-2'}> Résultats des analyses</p>
            <form onSubmit={handleSubmit} className={mobileSize ?'col-10 mx-auto':'col-10 ms-5'} > 
              
           
                <label htmlFor="exampleInputEmail1"  ><p className='login-text2 '>Id Patient</p></label>
                <input 
                  type="text"
                  className=" form-control form-control-lg"
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

         
                  
              <button type="submit" className={mobileSize?"submit btn btn-success d-flex mx-auto mt-3 ":"submit btn btn-success text mt-3 d-flex mx-auto"} onClick={handleChange}>
                Télecharger vos résultats 
              </button>
             

              <div className="admin d-flex justify-content-end mt-3 mb-3 ">
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
