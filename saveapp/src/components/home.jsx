import React from 'react'
import vg from '../assets/graphic.png'


import {AiFillGoogleCircle,AiFillTwitterCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>  
      <div className="home" id='home'>
        <main>
            <h1>Guardians</h1>
            <p>A initiative to always keep you safe</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
        <p>
            We are aiming to provide you with all the information that
            is needed to help you not panic and always know what is needed 
            to be done in any case or situation. We aim to prepare you 
            for future uncertainities of the natural disasters. 
        </p>
        </div>
    </div>

     <div className="home3" id='about'>
        <div>
          <h1>  Who we are?</h1>
       
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia id mollitia perspiciatis eum, odio dolores 
            repellat, dicta quaerat aspernatur dolore ducimus ipsa officiis dolor ratione est saepe 
            fuga? Perspiciatis sapiente odio aliquam. Consequuntur dolorem voluptates repellat nulla porro 
            cupiditate sequi sit quae iusto, facere laudantium exercitationem, nesciunt vitae quaerat quasi?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quos laborum accusamus minima ut similique 
            ex repudiandae esse ad hic illum voluptatem nisi,
             deserunt veniam facilis aliquid quaerat animi provident nulla sed modi.
             Sunt quod culpa rerum dolore,
             a soluta dicta repellendus illum molestias autem recusandae voluptatem ab saepe necessitatibus!
        </p>
        </div>
     </div>

     <div className="home4" id='brands'>
          <div>
              <h1>SOCIAL PRESENCE</h1>
        <article>
           <div style={{animationDelay:"0.3s"}}>
              <AiFillGoogleCircle/>
              <p>Google</p>
           </div>
           <div style={{animationDelay:"0.5s"}}>
              <AiFillTwitterCircle/>
              <p>Twitter</p>
           </div>
           <div style={{animationDelay:"0.7s"}}>
              <AiFillYoutube/>
              <p>Youtube</p>
           </div>
           <div style={{animationDelay:"0.9s"}}>
              <AiFillInstagram/>
              <p>Instagram</p>
           </div>


       </article>
       </div>

    </div>

    <div className="home5" id='donate'>
        <div className="donate">
            < div className="info">
            <p>Donate and help us reducing the suffering of
                millions of disaster struck people. Even One Rupee 
                from you can help in saving someone.
            </p>
        </div>
        <div className="button">
            <h1>DONATE</h1>
        </div>
        <h3>*All donated money is goes to respective state government </h3>
        </div>
    </div>

    </>

  )
}

export default Home