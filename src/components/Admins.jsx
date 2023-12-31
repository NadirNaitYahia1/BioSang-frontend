import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import print from '../assets/print.png'

const Admins = () => {
    const [data, setData] = useState({
        id_patient:'',
        name: '',
        prenom:'',
        password:'',
        date_naissance:'',})
    
      const [token, setToken] = useState(localStorage.getItem('token'));
     
      useEffect(() => {
        const fetchDataAdmin = async () => {
          try {
            const response = await fetch(`http://localhost:8000/api/getAdmins`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
    
              },
            });
      
            const content = await response.json();
            console.log(content);
            if (response.status === 200) {
              setData(content);
            }
          } catch (error) {
            console.log(error.message);
          }
        };
      
        fetchDataAdmin(); // Call the fetchData function inside useEffect
      }, []); // Empty dependency array to run the effect once
      
    
  return (
    <div className="container">
    <div className="row">
    <div className="col-12 mt-5">
            <div className="mb-2 bg-light border-right vh-100" id="sidebar-wrapper">
        <div class="list-group list-group-flush overflow-auto h-100 ">
          <table>
            <thead>
              <tr  className='text-center'>
                <th>Id Admin</th>
                <th>Nom</th>
              </tr>
            </thead>
            <tbody>
            {Object.values(data)
            .sort((a, b) => a.id_Admin - b.id_Admin)
            .map((item, index) => (
              <tr key={index}>
                <td>{item.id_Admin}</td>
                <td>{item.name}</td>
              </tr>
            ))}

            </tbody>
          </table>
        </div>
      </div>
            <div className="col-12 d-flex mb-5">
              <button className='mx-auto '><img  src={print}/></button>
            </div>


    </div>
  </div>
  </div>
  )
}

export default Admins