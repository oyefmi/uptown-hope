import React from "react";
import GoogleMapReact from 'google-map-react';
import './Map.css';

const LocationPin = ({ text }) => {
    return (
      <div className="pin">
        <h3>{text}</h3>
        <div className="marker"
            style={{cursor: 'pointer'}}></div>
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
                    latitude={location.lat}
                    longitude={location.lng}
                    text={location.address} /> 
            </GoogleMapReact>
            </div>
        </div>
      );
}
    
export default Map;