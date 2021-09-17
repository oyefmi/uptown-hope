import React from "react";
import GoogleMapReact from 'google-map-react';
import './Map.css';

const LocationPin = ({ text }) => {
    return (
        <div className="marker">
            <p className="title">{text}</p>
        </div>
    );
}

const Map = ({ location, zoomLevel }) => {
    return (
        <div className="map">
            <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCwNXLxVSXuq_2Gy3pUY6XZWxNjuVbkmYs' }}
                defaultCenter={location}
                defaultZoom={zoomLevel}>
                <LocationPin 
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address} /> 
            </GoogleMapReact>
            </div>
        </div>
      );
}
    
export default Map;