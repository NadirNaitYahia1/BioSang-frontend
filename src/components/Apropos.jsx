import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import labo1 from '../assets/labo1.png'
import labo2 from '../assets/labo2.png'
import '../styles/apropos.css'
const Apropos = () => {
  return (
 <div className='container-fluid mt-5 apropos'>
    <div className="row">
        <div className="col-12 text-center">
          <p className='apropos-text1 mt-3'>Le laboratoire d'analyses médicales BioSang </p>
          <p className='apropos-text2'>Nous sommes situés en plein centre-ville de ........
              , notre adresse est le ........ . La justesse du résultat des examens pratiqués engage la santé de chaque 
              patient par conséquent, nous métant à votre service une équipe de technicien spécialiste en biologie, microbiologie et
              hémobiologie pour réaliser et traiter tous vos prélèvements biologiques (sang, urine...) afin de mieux prévenir ou 
              soigner les maladies par vos médecins traitants.</p>
        </div>


        <div className='col-12'>
         
            <div className='d-flex justify-content-center align-items-center mt-2'>
              <img src={labo1} alt="" />
              <p className='apropos-text1'> Horraires de travail</p>
            </div>
            <div className='text-center'>
              <p className='apropos-text2 ms-2'>Le laboratoire d’analyses médicales est ouvert du Samedi au Jeudi de 07h00 à 17h00</p>
            </div>
 
            <div className='d-flex justify-content-center align-items-center mt-4'>
              <img src={labo2} alt="" />
              <p className='apropos-text1 ms-2'>  Compte rendue et résultats d'analyses</p>
            </div>
            <div className='text-center'>
              <p className='apropos-text2'>Les résultats de vos analyses médicales peuvent être récupérer en ligne ou transfert à votre médecin traitant selon votre demande.</p>
            </div>



        </div>
    </div>
 </div>
  )
}

export default Apropos