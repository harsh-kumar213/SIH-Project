import React from 'react'
import {HashLink} from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h3>Guardians</h3>
        <main>
            <HashLink className='link-items' to  = "/">Home</HashLink>
            <HashLink className='link-items' to  = "/contact">Contact</HashLink>
            <HashLink className='link-items' to  = "/#about">About</HashLink>
            <HashLink className='link-items' to  = "/#donate">Donate</HashLink>
            <HashLink className='link-items' to  = "/call">Know who to call</HashLink>
            <HashLink className='link-items' to  = "/aware">Be Aware</HashLink>
        </main>
    </nav>
  )
}

export default Navbar