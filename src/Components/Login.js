import React from 'react'
import './login.css'

function Login(props)
{

    return (props.trigger) ? (
        <div className="Login">
            <div className="Login-inner">
                <form className="login-form">
                    <label>
                        UserName:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Password:
                        <input type="text" text="text" />
                    </label>
                </form>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>

    ) : "";
}

export default Login;