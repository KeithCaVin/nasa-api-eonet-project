import React from 'react'
import VolcanicEruptionIcon from '../assets/volcanic_eruption_icon.png';

const VolcanicEruptionMarker = ({lat , lng , onClick}) => {
    return (
        <div className="volcanic-eruption-marker" onClick={onClick}>
             <img src={VolcanicEruptionIcon} alt="Volcanic Eruption" className="volcanic-eruption-icon"/>
        </div>
    )
}

export default VolcanicEruptionMarker
