import { useState , useEffect } from 'react'
import Map from '../components/Map';
import {motion} from 'framer-motion';



const TrackerPage = () => {
    const [eventData, setEventData] = useState([]);


  useEffect(() => {
    const fetchWildfireEvent= async () => {
     
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/events');
      const {events} = await res.json();

      setEventData(events);
      
    }
    fetchWildfireEvent();
  }, [])
 
    return (
        <div className="tracker-page">
            <div className="tracker-activate-buttons">
                <button>All</button>
                <button className="wildfire-btn">Wildfires</button>
                <button className="storm-btn">Storms</button>
                <button className="volcano-btn">Volcanoes</button>
                <button className="icemelt-btn">Ice Melt</button>
            </div>
            <motion.div className="tracker-details"
            initial={{y:1000}}
            animate={{y:0}}
            transition={{duration:2}}
            >
                {eventData && eventData.map(allData =>{
                  
                  return(
                    <motion.div className="tracker-details-content"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1.5}}
                    >
                        <h2>Event: {allData.title}</h2>
                        <p>Coordinates : X: <strong>{allData.geometry[0].coordinates[0]}</strong> Y: <strong>{allData.geometry[0].coordinates[1]}</strong> </p>
                    </motion.div>
                  )
                    

                })}
                

                
                
            </motion.div>
            <motion.div className="tracker-map" 
                initial={{x:1000}}
                animate={{x:0}}
                transition={{duration:2}}
                
            >
                <Map eventData={eventData} /> 
            </motion.div>
        </div>
    )
}

export default TrackerPage
