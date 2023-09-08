import React from 'react'
import { useState } from 'react'
import genererMotDePasse from '../utils/GenererMotDePasse'

const AddPatient = () => {

    const [data, setData] = useState({
        id_Patient: '',
        name: '',
        prenom: '',
        date_naissance: '',
        password: genererMotDePasse(8)
    
    });

    const handleChange = (e) => {
      setData({ ...data, [e.target.id]: e.target.value });
    };

    const createNote = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/registerUser`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(data),
        });
        
        const content = await response.json();
        console.log(content);
        console.log(data); 
      } catch (error) {
        console.log(error.message);
      }
    };
  

    const handleSubmit = (event) => {
      event.preventDefault();
      createNote(); // Call the API request function
    };

  return (
<div className="container">
<div className="row col-12">
 

    <p className='text-center apropos-text1 mt-3'>Ajouter un Patient</p>
    <div className="col-12 mt-3">
        <form className="form-group" onClick={handleSubmit}>
                <label htmlFor="exampleInputEmail1" className='ms-2'
               >Nom</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nom" 
                 value={data.name}
                 onChange={handleChange}

                />
                
                <label htmlFor="exampleInputEmail1" className='mt-3 ms-2'
      
                >Prenom</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nom" 
                          value={data.prenom}
                          onChange={handleChange} />
                
                <label htmlFor="exampleInputEmail1"  className='mt-3 ms-2'                 >Date de naissance </label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nom"  
value={data.date_naissance}
onChange={handleChange}
                />
              

              <div className='d-flex justify-content-end mx-4 mt-3 ms-2'>
                <button type="button" class="btn btn-primary" onClick={handleChange}>Next</button>
              </div>
        </form>
    </div>
</div>
</div>
  )
}

export default AddPatient