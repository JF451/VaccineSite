import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 33.9806,
            lng: -117.3755
        },
        zoom: 11
    };

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
                        </GoogleMapReact>

                        <div className="map-data">
                            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                                <Dropdown.Item href="#/action-1">5 miles</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">10 miles</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">25 miles</Dropdown.Item>
                            </DropdownButton>

                        </div>
                </div>
        </div>
        )
    }
}

export default SimpleMap;