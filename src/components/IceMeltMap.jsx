import {useState} from 'react'
import GoogleMapReact from 'google-map-react';
import GlacierMeltMarker from './GlacierMelt';
import LocationInfoBox from './LocationInfoBox';

const IceMeltMap = ({eventData,center,zoom}) => {
    const [locationInfo, setLocationInfo] = useState("null");

    /// gmev = glacier melt event
    const glacierMeltMapMarkers = eventData.map(gmev =>{
        if(gmev.categories[0].id === "seaLakeIce"){
            return <GlacierMeltMarker lat={gmev.geometry[0].coordinates[1]} lng={gmev.geometry[0].coordinates[0]}
            onClick={() =>setLocationInfo({title:gmev.title, x:gmev.geometry[0].coordinates[1], y:gmev.geometry[0].coordinates[0]})}

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
             
                {glacierMeltMapMarkers}
               
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo}/>}
        </div>
    )
}

IceMeltMap.defaultProps = {
    center: {lat:25.2048 , lng: 55.2708},
    zoom: 8
}
export default IceMeltMap
