import React from 'react';
import './footer.css'

function Footer()
{

    return (
        <div className="Footer">
            <div className="container">
                <div className="row">

                    <div className="col">
                        <h4 className="block ">About Us</h4>
                    </div>

                    <div className="col">
                        <h4 className="block">Contact</h4>
                    </div>

                    <div className="col">
                        <h4 className="block"><a className="block" href={"https://www.cdc.gov/coronavirus/2019-ncov/faq.html"}>COVID-19 FAQ</a></h4>
                    </div>

                    <div className="col">
                        <h4 className="block"><a className="block" href={"https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html"}>CDC Guidelines</a></h4>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;