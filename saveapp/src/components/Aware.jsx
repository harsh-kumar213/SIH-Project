import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Cyclone from '../assets/Cyclone.jpg'
import earthquake from '../assets/earthquake.jpg'
import flood from '../assets/flood.jpg'
import heat from '../assets/heat waves.jpg'
import landslide from '../assets/landslide.jpg'
import tsunami from '../assets/Tsunami.jpg'

const Aware = () => {
  return (
    <div className='body'>
        <div className="explain">
        <h1>You should know what to do</h1>
        <p>There is no guarantee and anything can happen at any time, but you should be prepared for anything 
            that comes. The best way to prepare for it to start by knowing about it. Below we provide you 
            every information that can be life saving for you. Please go through it thouroughly.....
        </p>
        </div>
        <hr />
        <div className="cards">
            <div className="row">
            <div className="disaster">
                <h1>Earthquake</h1>
                <img src={earthquake} alt="earthquake" />
                <p>An earthquake is a phenomenon that occurs without warning and involves violent shaking of the ground and everything over it. It results from the release of accumulated stress of the moving lithospheric or crustal plates.</p>
                <HashLink className='detail' to ='/earthquake'>Know more</HashLink>
            </div>
            <div className="disaster">
                <h1>Cyclone</h1>
                <img src={Cyclone} alt="Cyclone" />
                <p>Cyclones are caused by atmospheric disturbances around a low-pressure area distinguished by swift and often destructive air circulation. Cyclones are usually accompanied by violent storms and bad weather.</p>
                <HashLink className='detail' to='/cyclone'>Know more</HashLink>
            </div>
            <div className="disaster">
                <h1>Tsunami</h1>
                <img src={tsunami} alt="tsunami" />
                <p>The Earth's lithosphere is broken up into a bunch of discrete pieces, called plates that move around the surface of the planet. There are seven or eight major plates (depending on how they are defined) and many minor plates.</p>
                <HashLink className='detail' to='/tsunami'>Know more</HashLink>
            </div>
            </div>
            <div className="row">
            <div className="disaster">
                <h1>Heat Waves</h1>
                <img src={heat} alt="heat" />
                <p>A Heat Wave is a period of abnormally high temperatures, more than the normal maximum temperature that occurs during the summer season in the North-Western parts of India.</p>
                <HashLink className='detail' to='/heat'>Know more</HashLink>
            </div>
            <div className="disaster">
                <h1>LandSlide</h1>
                <img src={landslide} alt="landslide" />
                <p>India has the highest mountain chain on earth, the Himalayas, which are formed due to collision of Indian and Eurasian plate, the northward movement of the Indian </p>
                <HashLink className='detail' to='/landslide'>Know more</HashLink>
            </div>
            <div className="disaster">
                <h1>Floods</h1>
                <img src={flood} alt="flood" />
                <p>India is highly vulnerable to floods. Out of the total geographical area of 329 million hectares (mha), more than 40 mha is flood prone.</p>
                <HashLink className='detail' to='/flood'>Know more</HashLink>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Aware