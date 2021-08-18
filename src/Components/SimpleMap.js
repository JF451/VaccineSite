import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

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
            <div style={{ height: '50vh', width: '50%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBcNjjKbKT4Fror-w5C8Ch7GoMaEq_YXAE' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={33.9806}
                        lng={117.3755}
                        text="My Marker"
                    />
                    </GoogleMapReact>
            </div>
        )
    }
}

export default SimpleMap;