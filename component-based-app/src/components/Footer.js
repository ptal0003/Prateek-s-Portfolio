import React from 'react'
import '../css/Footer.css'
import all_images from '../assets/images/all_images'
export default function Footer() {
  return (
    <nav className='nav-footer'>
        <a href='https://www.linkedin.com/in/prateek-talukdar-870833167'>
            <img src= {all_images.img5} class = 'navbar-image' ></img>
        </a>
        <a href='https://www.facebook.com/prateek.talukdar'>
            <img src= {all_images.img6} class = 'navbar-image'></img>
        
        </a>
        <img src= {all_images.img7} class = 'navbar-image'></img>
    </nav>
  )
}
