import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/navbar.css'
import { useState,useEffect } from 'react'
import NavbarWeb from './NavbarWeb'
import NavbarPage from './NavbarPage'

const Navbar = ({mobileSize,click,setClick}) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check the conditions when the component mounts
    
    const tokenExists = localStorage.getItem('token');
   
    const isLoginPage = window.location.href === 'http://localhost:3000/login/user';
 

    if (tokenExists && isLoginPage) {
      console.log('token exists and is on login page');
      setShouldRender(true);
    }
  }, []);

 

const clicked = ()=>{
  setClick(!click)
}
 
return (
<> 
<nav className='navbar  '>
    <div className='container '>


      <a className='navbar-brand' href='#'><p className={mobileSize ?'logo mx-auto text-center ':'logo ms-1'}>BioSang</p></a>
      
      
      
      <div className="listes  ">
        <ul className='navbar-nav col-12 '>
          {
            mobileSize ?   (  click?     <button type="button" class="btn-close btnNav mx-1 ms-1" aria-label="Close" onClick={clicked}></button>   :<button type="button" class="btn-toggler btnNav " aria-label="Toggler" onClick={clicked} >
            <span class="navbar-toggler-icon"></span>
          </button>)   :   <NavbarWeb shouldRender={shouldRender} setShouldRender={setShouldRender}/> 
          }
       
        </ul>

        
      </div>

      
    </div>

 
  



  </nav>
 
    {click ?<NavbarPage  shouldRender={shouldRender} setShouldRender={setShouldRender} />:null}


</>


    
  )
}

export default Navbar