import React, {Component, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import axios from 'axios';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 33.9806,
            lng: -117.3755
        },
        zoom: 11

        
        };
    formLogin = (e) => {
        e.preventDefault();
        axios
           .post('http://localhost:5000/post', {

               address: document.getElementById("users-address").value,
               city: document.getElementById("users-city").value,
               state: document.getElementById("users-state").value,
               zip: document.getElementById("users-zip").value,
           })
           .then((res) => {
                console.log(res.data)
           });
        }
    
    

    render() {

        return(
            <div className="parent-map">

                <div style={{ height: '50vh', width: '75%' }} className="map-display" >
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyBcNjjKbKT4Fror-w5C8Ch7GoMaEq_YXAE' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <AnyReactComponent
                            lat={33.9806}
                            lng={-117.3755}
                            text="My Marker"
                        />

                        <AnyReactComponent
                            lat={33.9855}
                            lng={-117.3766}
                            text="Second Marker"
                        />
                        </GoogleMapReact>

                        <div className="map-data">
                            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                                <Dropdown.Item href="#/action-1">5 miles</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">10 miles</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">25 miles</Dropdown.Item>
                            </DropdownButton>
                        </div>

                        <div className="users-information">
                            <form onSubmit={this.formLogin} className="patient-form" id="patient-form" name="patient-form" >
                        
                                <label>
                                    Address: 
                                    <input name="Address" id="users-address" />
                                </label>

                                <label>
                                    City: 
                                    <input name="City" id="users-city" />
                                </label>

                                <label>
                                    State: 
                                    <input name="State" id="users-state" />
                                </label>

                                <label >
                                    Zip: 
                                    <input name="Zip" id="users-zip" />
                                </label>

                                <input type='submit' value='Submit'/>     
                             </form>
                        </div>

                </div>
        </div>
        )
    }
};

export default SimpleMap;