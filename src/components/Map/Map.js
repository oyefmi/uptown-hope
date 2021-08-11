import React from "react";
import GoogleMapReact from 'google-map-react';
// import LocationPin from './LocationPin';
import './Map.css';

const Map = ({ location, zoomLevel }) => {
    return (
        <div className="map">
            <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCwNXLxVSXuq_2Gy3pUY6XZWxNjuVbkmYs' }}
                defaultCenter={location}
                defaultZoom={zoomLevel}>
                {/* <LocationPin>
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                </LocationPin> */}
            </GoogleMapReact>
            </div>
        </div>
      );
}
    
export default Map;