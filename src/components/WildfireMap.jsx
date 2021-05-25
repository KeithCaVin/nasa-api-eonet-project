import {useState} from 'react'
import GoogleMapReact from 'google-map-react';
import WildfireMarker from './WildfireMarker';
import LocationInfoBox from './LocationInfoBox';

const WildfireMap = ({eventData,center,zoom}) => {
    const [locationInfo, setLocationInfo] = useState("null");
    /// wfev = wildfire event
    const wildfireMapMarkers=eventData.map(wfev => {
        

        if(wfev.categories[0].id === "wildfires"){
            return <WildfireMarker lat={wfev.geometry[0].coordinates[1]} lng={wfev.geometry[0].coordinates[0]} 
            onClick={() =>setLocationInfo({title:wfev.title, x:wfev.geometry[0].coordinates[1], y:wfev.geometry[0].coordinates[0]})}

            />;
        }
    }) ;

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyDd7fzWZR27JlHK5lABLdkpNwxklYE-lHw'}}
                defaultCenter={center}
                defaultZoom ={zoom}
            >
                {wildfireMapMarkers}
                
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo}/>}
        </div>
    )
}
WildfireMap.defaultProps = {
    center: {lat:25.2048 , lng: 55.2708},
    zoom: 8
}
export default WildfireMap
