import React from 'react'
import WildFireIcon from '../assets/wildfire_icon.png';

const WildfireMarker = ({lat , lng , onClick}) => {
    return (
        <div className="wildfire-marker" onClick={onClick}>
            <img src={WildFireIcon} alt="Wildfire" className="wildfire-icon"/>
        </div>
    )
}

export default WildfireMarker
