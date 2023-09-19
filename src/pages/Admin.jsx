import React from 'react'
import SideNav from '../components/SideNav'
import LogedAdmin from '../components/LogedAdmin'
const Admin = () => {
  return (
    <div className="container-fluid  align-items-center   ">
        <div className="row col-12 justify-content-center ">
            <SideNav />
            <LogedAdmin />



        </div>
    </div>
     
  )
}

export default Admin