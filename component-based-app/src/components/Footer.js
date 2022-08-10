import React from 'react'
import '../css/Footer.css'
import all_images from '../assets/images/all_images'
import data from "../assets/text-data/text.json"
const Footer = () => {
  return (
    <nav className='nav-footer'>
        <a href={data.url.linkedIn}>
            <img src= {all_images.img5} class = 'navbar-image' ></img>
        </a>
        <a href={data.url.facebook}>
            <img src= {all_images.img6} class = 'navbar-image'></img>
        
        </a>
        <a href = {data.url.instagram}>

        <img src= {all_images.img7} class = 'navbar-image'></img>
        </a>
        
    </nav>
  )
}
export default Footer