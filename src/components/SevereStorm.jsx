import React from 'react'
import SevereStormIcon from '../assets/severe_storm_icon.png';
function SevereStorm({lat,lng,onClick}) {
    return (
        <div className="severe-storm-marker" onClick={onClick}>
            <img src={SevereStormIcon} alt=" Severe Storm" className="severe-storm-icon"/>
        </div>
    )
}

export default SevereStorm
