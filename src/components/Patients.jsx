import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import print from '../assets/print.png'
const Patients = () => {

  const [data, setData] = useState({
    id_patient:'',
    name: '',
    prenom:'',
    password:'',
    date_naissance:'',})


    const [constData, setconstData] = useState({
      id_patient:'',
      name: '',
      prenom:'',
      password:'',
      date_naissance:'',})

  
  const [searchData, setSearchData] = useState(false);

  const [token, setToken] = useState(localStorage.getItem('token'));
 
  useEffect(() => {
    const fetchDataAdmin = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/getPatients`, {
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
          setconstData(content);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
  
    fetchDataAdmin(); // Call the fetchData function inside useEffect
  }, []); // Empty dependency array to run the effect once
  

  const search = (e) => {
    e.preventDefault();
    const searchById = document.getElementById('searchById').value;
    const searchByName = document.getElementById('searchByName').value;
    const searchByPrénom = document.getElementById('searchByPrénom').value;
  
    console.log('searchById', searchById);
  
 
  
    // Check if any of the search fields are not empty
    if (searchById !== '' || searchByName !== '' || searchByPrénom !== '') {
      const filteredData = Object.values(data).filter((item) => {
        return (
          (searchById === '' || item.id_Patient === parseInt(searchById)) &&
          (searchByPrénom === '' || item.prenom === searchByPrénom) &&
          (searchByName === '' || item.name === searchByName)
        );
      });
      setData(filteredData);
    } 
  };


  return (
    <div className="container">
    <div className="row"> 
    
    <div className="col-12 d-flex mt-5 mb-5">
    <form class="form-inline my-2 my-lg-0 d-flex mx-auto">
  <input class="form-control ms-2" type="search" placeholder="Id Patient" aria-label="Search by id" id="searchById" />
  <input class="form-control ms-2" type="search" placeholder="Nom" aria-label="Search by Name" id="searchByName" />
  <input class="form-control ms-2" type="search" placeholder="Prénom" aria-label="Search by Prénom" id="searchByPrénom" />
  <button class="btn btn-outline-success ms-2" type="submit" onClick={search}>Search</button>
</form>
    



      {/* <button className='mx-auto '><img  src={print}/></button>
     */}
    </div>


    <div className="col-12 ">
            <div className="mb-2 bg-light border-right vh-100" id="sidebar-wrapper">
        <div class="list-group list-group-flush overflow-auto h-100 ">
          <table>
            <thead>
              <tr  className='text-center'>
                <th>Id Patient</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Date De Naissance</th>
              </tr>
            </thead>
            <tbody>
              {/* {Object.values(data).map((item,index) => (
                <tr key={index} >
                  <td>{item.id_Patient}</td>
                  <td>{item.name}</td>
                  <td>{item.prenom}</td>
                  <td>{item.date_naissance}</td>
                </tr>
              ))} */}


{Object.values(data)
  .sort((a, b) => a.id_Patient - b.id_Patient)
  .map((item, index) => (
    <tr key={index}>
      <td>{item.id_Patient}</td>
      <td>{item.name}</td>
      <td>{item.prenom}</td>
      <td>{item.date_naissance}</td>
    </tr>
  ))}



            </tbody>
          </table>
        </div>
      </div>
           
    </div>
  </div>
  </div>
  
  )
}

export default Patients