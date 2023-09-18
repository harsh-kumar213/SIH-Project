import React from 'react';
import{BrowserRouter as Router, Routes,Route} from 'react-router-dom'

import Home from './components/home.jsx'
import Navbar from './components/navbar.jsx'
import Contact from './components/contact.jsx';
import Earthquake from './components/earthquake.jsx';
import Flood from './components/floods.jsx';
import Heat from './components/heatWaves.jsx';
import LandSlide from './components/LandSlide.jsx';
import Tsunami from './components/tsunami.jsx';
import Cyclone from './components/cyclone.jsx'
import Aware from './components/Aware.jsx';

import "./styles/contact.scss";
import "./styles/navbar.scss"
import "./styles/home.scss"
import "./styles/aware.scss"



function App() {
   return (
      <Router>
           <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/aware' element={<Aware/>}/>
        <Route path='/earthquake' element={<Earthquake/>}/>
        <Route path='/flood' element={<Flood/>}/>
        <Route path='/landslide' element={<LandSlide/>}/>
        <Route path='/tsunami' element={<Tsunami/>}/>
        <Route path='/heat' element={<Heat/>}/>
        <Route path='/cyclone' element={<Cyclone/>}/>
      </Routes>
      </Router>
   ); 
}

export default App;
