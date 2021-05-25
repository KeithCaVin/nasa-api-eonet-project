import {useState} from 'react'
import GoogleMapReact from 'google-map-react';
import VolcanicEruptionMarker from './VolcanicEruptionMarker';
import LocationInfoBox from './LocationInfoBox';

const VolcanoesMap = ({eventData,center,zoom}) => {
    const [locationInfo, setLocationInfo] = useState("null");

    /// veev = volcanic eruption event
    const volcanicEruptionMapMarkers = eventData.map(veev =>{
        if(veev.categories[0].id === "volcanoes"){

            if(veev.geometry[0].type === "Polygon"){
                
                return <VolcanicEruptionMarker lat={veev.geometry[0].coordinates[0][0][1]} lng={veev.geometry[0].coordinates[0][0][0]} 
                onClick={() =>setLocationInfo({title:veev.title, x:veev.geometry[0].coordinates[0][0][1], y:veev.geometry[0].coordinates[0][0][0]})}

                />;
            }
            else
            {

                return <VolcanicEruptionMarker lat={veev.geometry[0].coordinates[1]} lng={veev.geometry[0].coordinates[0]}
                onClick={() =>setLocationInfo({title:veev.title, x:veev.geometry[0].coordinates[1], y:veev.geometry[0].coordinates[0]})}

                />;
            }
           
        }
    });

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyDd7fzWZR27JlHK5lABLdkpNwxklYE-lHw'}}
                defaultCenter={center}
                defaultZoom ={zoom}
            >
                
                {volcanicEruptionMapMarkers}
                
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo}/>}
        </div>
    )
}

VolcanoesMap.defaultProps = {
    center: {lat:25.2048 , lng: 55.2708},
    zoom: 8
}

export default VolcanoesMap
