import React, { useEffect } from 'react'
import { useState } from 'react'
import genererMotDePasse from '../utils/GenererMotDePasse'

const AddPatient = () => {
  const [msg , setMsg] = useState(false)
  const [name, setName] = useState('')

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
        if (response.status === 200) {
          setMsg(true);
          // Clear the input fields after successful addition
          setName(content.name)
          setData({
            id_Patient: 100,
            name: '',
            prenom: '',
            date_naissance: '',
            password: genererMotDePasse(8)
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    
  

    const handleSubmit = (event) => {
      event.preventDefault();
      createNote(); // Call the API request function
    };


    useEffect(() => {
      if (msg === true) {
        setTimeout(() => {
          setMsg(false);
        }, 3000);
      }
    }, [msg]);




  return (
 
 
  <div className="col-7 mt-5  mx-auto">



    <p className='text-center apropos-text1 mt-3'>Ajouter un Patient</p>
    <div className="col-12 mt-3">

    {msg && <div class="alert alert-success  " role="alert"><p className='text-center'>le Patient <b>{name} </b>est ajouter avec success</p></div>}
        <form className="form-group" onClick={handleSubmit}>
                <label htmlFor="exampleInputEmail1" className='ms-2'
               >Nom</label>
                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Entrer le Nom" 
                 value={data.name}
                 onChange={handleChange}

                />
                
                <label htmlFor="exampleInputEmail1" className='mt-3 ms-2'
      
                >Prenom</label>
                <input type="text" className="form-control" id="prenom" aria-describedby="emailHelp" placeholder="Entrer le Prenom" 
                          value={data.prenom}
                          onChange={handleChange} />

<label htmlFor="exampleInputEmail1" className='mt-3 ms-2'
      
      >Date de naissance</label>
      <input type="date" className="form-control" id="date_naissance" aria-describedby="emailHelp" placeholder="Entrer la date de naissance" 
                value={data.date_naissance}
                onChange={handleChange} />

              <div className='d-flex justify-content-end mx-4 mt-3 ms-2'>
                <button type="button" class="btn btn-primary" onClick={handleChange}>Valider</button>
              </div>
        </form>
    </div>
 
    </div>
  )
}

export default AddPatient