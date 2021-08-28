import React from 'react';
import './contact.css'


function Contact(props){

    return (props.trigger) ? (
        <div className="Contact">
            <div className="Contact-inner">
                <form className="contact-form">
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Email:
                        <input type="text" text="text" />
                    </label>
                    <label>
                        Message: 
                        <textarea />
                    </label>

                </form>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";


}

export default Contact;