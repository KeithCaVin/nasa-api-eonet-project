
import './App.scss';
import React from 'react';
import Header from './components/Header';
import TrackerPage from './components/TrackerPage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import {AnimatePresence} from 'framer-motion';
function App() {
  

  return (
    <Router>
      <div className="App">
        <Header/> 

        <AnimatePresence exitBeforeEnter>
          
          <Route path="/nasa-api-eonet-project" component={Home} exact/>
          <Route path="/nasa-api-eonet-project/tracker" component={TrackerPage}/>
        </AnimatePresence>
        
      </div>
    </Router>
  );
}

export default App;
