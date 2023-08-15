import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from '../assets/profile.png'

const LogedPatient = () => {
  return (
   <div className="container-fluid">
    <div className="row col-12">
        <div className=" d-flex justify-content-end mt-3">
             <h5>Nadir Nait Yahia</h5>
             <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className=""/>
        </div>
    </div>
   </div>
  )
}

export default LogedPatient