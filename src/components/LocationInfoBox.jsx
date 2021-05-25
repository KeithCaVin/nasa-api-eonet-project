import React from 'react'

const LocationInfoBox = ({info}) => {
    return (
        <div className="location-info">
            <h2>Event: {info.title}</h2>
            <p>Coordinates: X: {info.x} Y: {info.y}</p>
        </div>
    )
}

export default LocationInfoBox
