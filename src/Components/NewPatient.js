import React from 'react'
import './newPatient.css'

function NewPatient({setButtonPopupPatient})
{

    return (

        <div className="new-patient-form">

            <button className="button" onClick={() => setButtonPopupPatient(true)}>NEW PATIENT</button>

        </div>
    );

}

export default NewPatient;
