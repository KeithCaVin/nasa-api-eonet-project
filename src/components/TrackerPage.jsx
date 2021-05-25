import { useState , useEffect } from 'react'
import Map from '../components/Map';
import {motion} from 'framer-motion';
import WildfireMap from './WildfireMap';
import StormMap from './SevereStormMap';
import VolcanoesMap from './VolcanoesMap';
import IceMeltMap from './IceMeltMap';


const TrackerPage = () => {
    const [eventData, setEventData] = useState([]);
    const [active,setActive] = useState("show_all");

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
                <button onClick={() => setActive("show_all")}>All</button>
                <button onClick={() => setActive("show_wildfire")} className="wildfire-btn">Wildfires</button>
                <button onClick={() => setActive("show_storm")} className="storm-btn">Storms</button>
                <button onClick={() => setActive("show_volcano")} className="volcano-btn">Volcanoes</button>
                <button onClick={() => setActive("show_icemelt")} className="icemelt-btn">Ice Melt</button>
            </div>

            <motion.div className="tracker-details"
            initial={{y:1000}}
            animate={{y:0}}
            transition={{duration:2}}
            >
              {/* if the ALL button is pressed, the code below will execute*/}
              {active==="show_all" &&
                eventData.map(allData =>{
                  if (allData.categories[0].id === "volcanoes") {
                    if(allData.geometry[0].type === "Polygon"){
                        return (
                          <motion.div className="tracker-details-content"
                          initial={{opacity:0}}
                          animate={{opacity:1}}
                          exit={{opacity:0}}
                          transition={{duration:1.5}}
                          
                          
                          >
                            
                            <h2>Event: {allData.title}</h2>
                            <p>Coordinates : X: <strong>{allData.geometry[0].coordinates[0][0][1]}</strong> Y: <strong>{allData.geometry[0].coordinates[0][0][0]}</strong> </p>
                          </motion.div>
                        );
                    }
                  }
                  return(
                    <motion.div className="tracker-details-content"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    transition={{duration:1.5}}
                    
                    
                    >
                      
                      <h2>Event: {allData.title}</h2>
                      <p>Coordinates : X: <strong>{allData.geometry[0].coordinates[1]}</strong> Y: <strong>{allData.geometry[0].coordinates[0]}</strong> </p>
                    </motion.div>
                  )
                })
              }

              {/* if the Wildfire button is pressed, the code below will execute*/}
              {active==="show_wildfire" &&
                eventData.map(allData =>{
                    
                  if(allData.categories[0].id === "wildfires"){
                    return(
                      <motion.div className="tracker-details-content"
                      initial={{opacity:0}}
                      animate={{opacity:1}}
                      exit={{opacity:0}}
                      transition={{duration:1.5}}
                    
                      >
                        <h2>Event: {allData.title}</h2>
                        <p>Coordinates : X: <strong>{allData.geometry[0].coordinates[1]}</strong> Y: <strong>{allData.geometry[0].coordinates[0]}</strong> </p>
                      </motion.div>
                    )
                  }
                  
                })
              }

               {/* if the Storm button is pressed, the code below will execute*/}
               {active==="show_storm" &&
                eventData.map(allData =>{
                    
                  if(allData.categories[0].id === "severeStorms"){
                    return(
                      <motion.div className="tracker-details-content"
                      initial={{opacity:0}}
                      animate={{opacity:1}}
                      exit={{opacity:0}}
                      transition={{duration:1.5}}
                    
                      >
                        <h2>Event: {allData.title}</h2>
                        <p>Coordinates : X: <strong>{allData.geometry[0].coordinates[1]}</strong> Y: <strong>{allData.geometry[0].coordinates[0]}</strong> </p>
                      </motion.div>
                    )
                  }
                  
                })
              }

               {/* if the Volcanoes button is pressed, the code below will execute*/}
               {active==="show_volcano" &&
                eventData.map(allData =>{
                  if (allData.categories[0].id === "volcanoes") {
                    if(allData.geometry[0].type === "Polygon"){
                        return (
                          <motion.div className="tracker-details-content"
                          initial={{opacity:0}}
                          animate={{opacity:1}}
                          exit={{opacity:0}}
                          transition={{duration:1.5}}
                          
                          
                          >
                            
                            <h2>Event: {allData.title}</h2>
                            <p>Coordinates : X: <strong>{allData.geometry[0].coordinates[0][0][1]}</strong> Y: <strong>{allData.geometry[0].coordinates[0][0][0]}</strong> </p>
                          </motion.div>
                        );
                    }
                  }
                  if(allData.categories[0].id === "volcanoes"){
                    return(
                      <motion.div className="tracker-details-content"
                      initial={{opacity:0}}
                      animate={{opacity:1}}
                      exit={{opacity:0}}
                      transition={{duration:1.5}}
                    
                      >
                        <h2>Event: {allData.title}</h2>
                        <p>Coordinates : X: <strong>{allData.geometry[0].coordinates[1]}</strong> Y: <strong>{allData.geometry[0].coordinates[0]}</strong> </p>
                      </motion.div>
                    )
                  }
                  
                })
              }
               {/* if the Ice Melt button is pressed, the code below will execute*/}
               {active==="show_icemelt" &&
                eventData.map(allData =>{
                    
                  if(allData.categories[0].id === "seaLakeIce"){
                    return(
                      <motion.div className="tracker-details-content"
                      initial={{opacity:0}}
                      animate={{opacity:1}}
                      exit={{opacity:0}}
                      transition={{duration:1.5}}
                    
                      >
                        <h2>Event: {allData.title}</h2>
                        <p>Coordinates : X: <strong>{allData.geometry[0].coordinates[1]}</strong> Y: <strong>{allData.geometry[0].coordinates[0]}</strong> </p>
                      </motion.div>
                    )
                  }
                  
                })
              }
            </motion.div>



            {/* change map depending of button clicked */}

            {/* show all Events markers in map if all button is clicked */}
            {active==="show_all" &&
                <motion.div className="tracker-map" 
                initial={{x:1000}}
                animate={{x:0}}
                transition={{duration:2}}
                
                
                >
                    <Map eventData={eventData} /> 
                </motion.div>
            }
            
            {/* show all Wildfire markers in map if wildfire button is clicked */}
            {active==="show_wildfire" &&
                <motion.div className="tracker-map" 
                initial={{x:1000}}
                animate={{x:0}}
                transition={{duration:2}}
                >
                    <WildfireMap eventData={eventData} /> 
                </motion.div>
            }

            {/* show all Storms markers in map if storm button is clicked */}
            {active==="show_storm" &&
                <motion.div className="tracker-map" 
                initial={{x:1000}}
                animate={{x:0}}
                transition={{duration:2}}
                >
                    <StormMap eventData={eventData} /> 
                </motion.div>
            }

            {/* show all Volcanoes markers in map if Volcanoes button is clicked */}
            {active==="show_volcano" &&
                <motion.div className="tracker-map" 
                initial={{x:1000}}
                animate={{x:0}}
                transition={{duration:2}}
                >
                    <VolcanoesMap eventData={eventData} /> 
                </motion.div>
            }

             {/* show all Ice melt markers in map if ice melt button is clicked */}
             {active==="show_icemelt" &&
                <motion.div className="tracker-map" 
                initial={{x:1000}}
                animate={{x:0}}
                transition={{duration:2}}
                >
                    <IceMeltMap eventData={eventData} /> 
                </motion.div>
            }
        </div>
    )
}

export default TrackerPage
