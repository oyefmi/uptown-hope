import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import './Map.css';

const LocationPin = ({ text }) => {
    return (
      <div className="pin">
        <h3 className="pin-text">{text}</h3>
        <Icon icon={locationIcon} className="pin-icon" />
      </div>
    );
}

export default LocationPin;