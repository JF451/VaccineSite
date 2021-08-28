import React from 'react';
import './contact.css'


function Contact(props){

    return (props.trigger) ? (
        <div className="Contact">
            <div className="Contact-inner">
                <h1>My Popup</h1>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";


}

export default Contact;