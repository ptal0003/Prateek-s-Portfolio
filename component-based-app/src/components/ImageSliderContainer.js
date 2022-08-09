import React from 'react'

import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";
 
const ImageSliderContainer = (props) => {
  
  return (
    <AliceCarousel autoPlay = {true}>
    {props.images.map((image) =>(<img src= {image} className = "image-slider" alt='This is alt text'></img>))}
    </AliceCarousel>
  )
}
export default ImageSliderContainer