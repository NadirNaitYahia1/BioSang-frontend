import React from 'react'
import SideNav from '../components/SideNav'
import AddPatient from '../components/AddPatient'
const AddPatientPage = () => {
  return (
    <div className="container-fluid">
        <div className="row ">
            <SideNav />
            <AddPatient />
        </div>
    </div>

 
  )
}

export default AddPatientPage