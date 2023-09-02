// 
import React, { useState } from 'react';
import question from '../assets/question.png';
import down from '../assets/down.png';
import up from '../assets/up.png';
import '../styles/questions.css';

const Questions = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5 mb-5">
        <p className='qst-text1 text-center'>Vos Questions</p>

        <div className="col-md-8 d-flex align-items-center questions-liste mt-3">
          <img src={question} alt="" />
          <button className='bttn  ' onClick={() => toggleItem(1)}>
            <p className={(openItem === 1) ? 'ms-3 qst-text2-clicked':'ms-3 qst-text2'}>Faut-il prendre RDV pour une prise de sang ?</p>
          { (openItem === 1) ? <img src={up}  className=' img-down  '/>  : <img src={down} className=' img-down  ' /> }
          </button>
        </div>
        <div className="col-md-8 d-flex align-items-center">
          {(openItem === 1) ? <p>Etre à jeun signifie ne rien manger, ni boire (sauf de l'eau, toujours autorisée avant une prise de sang) depuis 8H à 12H. Il est conseillé de ne pas fumer pendant cette période..</p> : null}
        </div>

        <div className="col-md-8 d-flex align-items-center questions-liste mt-3">
          <img src={question} alt="" />
          <button className='bttn d-flex ' onClick={() => toggleItem(2)}>
         <p className={(openItem === 2) ? 'ms-3 qst-text2-clicked':'ms-3 qst-text2'}>Faut-il prendre RDV pour une prise de sang ?</p>
               { (openItem === 2) ? <img src={up}  className=' img-down ms-5'/>  : <img src={down} className=' img-down ms-5' /> }
          </button>
        </div>
        <div className="col-md-8 d-flex align-items-center">
          {(openItem === 2) ? <p>D'une manière générale, il n'est pas nécessaire de prendre rendez-vous pour venir faire votre prise de sang. Néanmoins, pour quelques cas particuliers, il est nécessaire d'appeler le laboratoire avant votre venue afin de convenir d'un rendez-vous.</p> : null}
        </div>


        <div className="col-md-8 d-flex align-items-center questions-liste mt-3">
          <img src={question} alt="" />
          <button className='bttn d-flex ' onClick={() => toggleItem(3)}>
         <p className={(openItem === 3) ? 'ms-3 qst-text2-clicked':'ms-3 qst-text2'}>Quel prise de sang pour un bilan complet ? </p>
               { (openItem === 3) ? <img src={up}  className=' img-down ms-5'/>  : <img src={down} className=' img-down ms-5' /> }
          </button>
        </div>
        <div className="col-md-8 d-flex align-items-center">
          {(openItem === 3) ? <p>Le bilan classique que je préconise est la numération avec le dosage des globules blancs, des globules rouges, des plaquettes afin de savoir s'il n'y a pas d'anémie, s'il n'y a pas de petite infection qui traine ; une vitesse de sédimentation qui permet de voir s'il y a une inflammation.</p> : null}
        </div>

        <div className="col-md-8 d-flex align-items-center questions-liste mt-3">
          <img src={question} alt="" />
          <button className='bttn d-flex ' onClick={() => toggleItem(4)}>
         <p className={(openItem === 4) ? 'ms-3 qst-text2-clicked':'ms-3 qst-text2'}>Quel délai pour résultat prise de sang ?</p>
               { (openItem === 4) ? <img src={up}  className=' img-down ms-5'/>  : <img src={down} className=' img-down ms-5' /> }
          </button>
        </div>
        <div className="col-md-8 d-flex align-items-center">
          {(openItem === 4) ? <p> Dans la plupart des cas, les résultats sont disponibles dans la journée ou 24-48 heures plus tard. Dans d'autres, il faudra attendre plusieurs jours. La personne reçoit les résultats, et une copie est envoyée au médecin prescripteur si nécessaire.</p> : null}
        </div>


        <div className="col-md-8 d-flex align-items-center questions-liste mt-3">
          <img src={question} alt="" />
          <button className='bttn d-flex ' onClick={() => toggleItem(5)}>
         <p className={(openItem === 5) ? 'ms-3 qst-text2-clicked':'ms-3 qst-text2'}>Est-ce qu'on peut faire une prise de sang sans ordonnance ?</p>
               { (openItem === 5) ? <img src={up}  className=' img-down ms-5'/>  : <img src={down} className=' img-down ms-5' /> }
          </button>
        </div>
        <div className="col-md-8 d-flex align-items-center">
          {(openItem === 5) ? <p>La plupart des analyses médicales peuvent être réalisés sans ordonnance à votre demande. Il vous sera alors demandé de signer un formulaire précisant votre demande. Ces examens ne seront pas pris en charge, ni par l'Assurance Maladie ni par votre mutuelle, et resteront financièrement à votre charge.</p> : null}
        </div>
        
      </div>
    </div>
  );
}

export default Questions;
