import {useState} from 'react'
import GoogleMapReact from 'google-map-react';
import SevereStormMarker from './SevereStorm';
import LocationInfoBox from './LocationInfoBox';

const SevereStormMap = ({eventData,center,zoom}) => {
    const [locationInfo, setLocationInfo] = useState("null");
     /// stev = severe storm event
     const severeStormMapMarkers = eventData.map(stev =>{
        if(stev.categories[0].id === "severeStorms"){
            return <SevereStormMarker lat={stev.geometry[0].coordinates[1]} lng={stev.geometry[0].coordinates[0]}
            onClick={() =>setLocationInfo({title:stev.title, x:stev.geometry[0].coordinates[1], y:stev.geometry[0].coordinates[0]})}

            />;
        }
    });

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyDd7fzWZR27JlHK5lABLdkpNwxklYE-lHw'}}
                defaultCenter={center}
                defaultZoom ={zoom}
            >
                {severeStormMapMarkers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo}/>}
        </div>
    )
}

SevereStormMap.defaultProps = {
    center: {lat:25.2048 , lng: 55.2708},
    zoom: 8
}
export default SevereStormMap
