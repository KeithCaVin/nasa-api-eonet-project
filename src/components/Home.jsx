import React from 'react'
import { Link } from 'react-router-dom'
import GlacierImg from '../assets/Glacier_img.png';
import SevereStormImg from '../assets/Storm_img.png';
import VolcanoImg from '../assets/Volcanoes_img.png';
import WildfireImg from '../assets/Wildfire_img.png';
import Arrow from '../assets/arrow.png';
import {motion} from 'framer-motion';

const Home = () => {
    return (
        <motion.div className="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
       
        >
            <div className="page-desc">
                <p><strong>Tiyempu</strong> uses NASA’s EONET API which 
                contains JSON</p>
                <p className="p-spacing"> DATA about natural events that is currently 
                happening all over the world, and Google Map API that serves
                as a geolocation in order to pinpoint the exact location of the
                natural events 
                </p>
            </div>
            <div className="tracker-images">
                <motion.img src={WildfireImg} alt="Wildfires" 
                    whileHover={{scale:2, zIndex:1, x:160, y:160}}
                />
                <motion.img src={VolcanoImg} alt="Volcanoes" 
                    whileHover={{scale:2, zIndex:1, x:-160, y:160}}
                />
                <motion.img src={GlacierImg} alt="Glaciers" 
                    whileHover={{scale:2, zIndex:1, x:160, y:-160}}
                />
                <motion.img src={SevereStormImg} alt="Severe Storms" 
                    whileHover={{scale:2, zIndex:1, x:-160, y:-160}}
                />
            </div>
            
                <motion.button className="get-started-btn"
                    whileHover={{scale:1.3 , x:20}}
                    
                >
                    <Link to="/nasa-api-eonet-project/tracker">Get Started <img src={Arrow} alt="Arrow" />
                    </Link>
                </motion.button>
        </motion.div>
    )
}

export default Home
