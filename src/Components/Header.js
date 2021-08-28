import React from 'react';
import './header.css';
import logo from '/Users/justinfulkerson/dev/VaccineSite/vaccine/src/assets/c0481846-wuhan_novel_coronavirus_illustration-spl.jpeg'

function Header() 
{

    
        return (
                <div className="header">
                    <div>
                        <img className='header-img' src={logo}></img>
                    </div>

                    <div>
                        <h1 className="header-text">VACCINE INFORMATION</h1>
                    </div>

                    <div className="login-div">
                        <button className="login-button">
                            LOGIN
                        </button>

                        <button className="logout-button">
                            LOGOUT
                        </button>
                    </div>
                </div>
        );
    
}

export default Header;