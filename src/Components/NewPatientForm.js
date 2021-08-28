import React from 'react'
import './newpatientform.css'


function NewPatientForm(props)
{
    return (props.trigger) ? (
        <div className="Patient">
            <div className="Patient-inner">
                <form className="patient-form">
                    <label>
                        First Name:
                        <input type="text" />
                    </label>
                    <label>
                        Last Name: 
                        <input type="text" />
                    </label>
                    <label>
                        Full Adress: 
                        <input type="text" />
                    </label>
                    <label>
                        Insurance Card: 
                        <input type="file" />
                    </label>
                    <label>
                        User Name: 
                        <input type="text" />
                    </label>
                    <label>
                        New Password: 
                        <input type="text" />
                    </label>
                    <label>
                        Repeat Password: 
                        <input type="text" />
                    </label>
                </form>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";

}

export default NewPatientForm;