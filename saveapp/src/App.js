import React from 'react';
import{BrowserRouter as Router, Routes,Route} from 'react-router-dom'

import Home from './components/home.jsx'
import Navbar from './components/navbar.jsx'
import Contact from './components/contact.jsx';

import "./styles/contact.scss";
import "./styles/navbar.scss"
import "./styles/home.scss"



function App() {
   return (
      <Router>
           <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </Router>
   ); 
}

export default App;
