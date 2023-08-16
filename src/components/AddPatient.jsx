import React from 'react'

const AddPatient = () => {
  return (
<div className="container">
<div className="row col-12">

    {/* <div className="recherche col-12">
        <div className="input-group mb-3">
            <input type="text" className="form-control mt-3" placeholder="Entrer le nom du Patient" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Recherche</button>
        </div>


    </div> */}


    <p className='text-center apropos-text1 mt-3'>Ajouter un Patient</p>
    <div className="col-12 mt-3">
        <form className="form-group">
                <label htmlFor="exampleInputEmail1" className='ms-2'>Nom</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nom"  />
                
                <label htmlFor="exampleInputEmail1" className='mt-3 ms-2'>Prenom</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nom"  />
                
                <label htmlFor="exampleInputEmail1"  className='mt-3 ms-2'>Date de naissance </label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nom"  />
                
                <label htmlFor="exampleInputEmail1" className='mt-3 ms-2'>Adresse</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nom"  />

              <div className='d-flex justify-content-end mx-4 mt-3 ms-2'>
                <button type="button" class="btn btn-primary">Next</button>
              </div>
        </form>
    </div>
</div>
</div>
  )
}

export default AddPatient