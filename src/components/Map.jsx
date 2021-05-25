import React from 'react';
import GoogleMapReact from 'google-map-react';
import WildfireMarker from './WildfireMarker';
import VolcanicEruptionMarker from './VolcanicEruptionMarker';
import GlacierMeltMarker from './GlacierMelt';
import SevereStormMarker from './SevereStorm';

const Map = ({eventData,center,zoom}) => {

    /// wfev = wildfire event
    const wildfireMapMarkers=eventData.map(wfev => {
        if(wfev.categories[0].id === "wildfires"){
            return <WildfireMarker lat={wfev.geometry[0].coordinates[1]} lng={wfev.geometry[0].coordinates[0]} />;
        }
    }) ;

    /// veev = volcanic eruption event
    const volcanicEruptionMapMarkers = eventData.map(veev =>{
        if(veev.categories[0].id === "volcanoes"){

            if(veev.geometry[0].type === "Polygon"){
                
                return <VolcanicEruptionMarker lat={veev.geometry[0].coordinates[0][0][1]} lng={veev.geometry[0].coordinates[0][0][0]} />;
            }
            else
            {

                return <VolcanicEruptionMarker lat={veev.geometry[0].coordinates[1]} lng={veev.geometry[0].coordinates[0]}/>;
            }
           
        }
    });

    /// gmev = glacier melt event
    const glacierMeltMapMarkers = eventData.map(gmev =>{
        if(gmev.categories[0].id === "seaLakeIce"){
            return <GlacierMeltMarker lat={gmev.geometry[0].coordinates[1]} lng={gmev.geometry[0].coordinates[0]}/>;
        }
    });

      /// stev = severe storm event
      const severeStormMapMarkers = eventData.map(stev =>{
        if(stev.categories[0].id === "severeStorms"){
            return <SevereStormMarker lat={stev.geometry[0].coordinates[1]} lng={stev.geometry[0].coordinates[0]}/>;
        }
    });

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyDd7fzWZR27JlHK5lABLdkpNwxklYE-lHw'}}
                defaultCenter={center}
                defaultZoom ={zoom}
            >
                {wildfireMapMarkers}
                {volcanicEruptionMapMarkers}
                {glacierMeltMapMarkers}
                {severeStormMapMarkers}
            </GoogleMapReact>
        </div>
    )
}
Map.defaultProps = {
    center: {lat:25.2048 , lng: 55.2708},
    zoom: 8
}
export default Map
