import React from 'react'
import GlacierIcon from '../assets/glacier_icon.png';
const GlacierMelt = ({lat , lng , onClick}) => {
    return (
        
        <div className="glacier-marker" onClick={onClick}>
            <img src={GlacierIcon} alt="Glacier" className="glacier-icon"/>
        </div>
        
    )
}

export default GlacierMelt
