import React from 'react'
import '../App.css'
import all_images from '../assets/images/all_images.js'
import '../css/PastExperience.css'

export default function PastExperiences() {
  return (
    <div className='section-header'>
    <h1>Past Experiences</h1>
    <div className='page-flex-container'>
        <div className='page-content'>
            <h2 className='section-header'>
                Research Assistant 
            </h2>
           <div></div>
            <p1>I have worked as a full-time Research Assistant under Department of Data Science and AI at Monash University during the summer of 2021.</p1>
            <br></br>
            <p1> During my research, I focused on extending Asprilo, which is standard benchmarking tool for the MAPF problem. My goal was to generate explanations to the solutions generated by the lazycbs solver and facilitate dynamic communication between Asprilo and the lazycbs solver</p1>
        </div>
        <div className='page-content'>
        <img className='img-container' src={all_images.img7} />
        </div>    
    </div>
    <div className='page-flex-container'>
        <div className='page-content'>
            <h2 className='section-header'>
                iLearn Library Management System 
            </h2>
           
            <p1>iLearn is a Library management system for both students and professors created on iOS using Google Firebase, Core Data and Swift.     
            </p1>
            <br></br>
            <p1>It allows professors to upload books on firebase for students and other professors to search through them, read them and save for offline reading. Moreover, it also saves offline highlights and annotations for each user and allows professors to choose the PDF file they wish to upload.</p1>
        </div>
        <div className='page-content'>
        <img src={all_images.img7}></img>
            
        </div>    
    </div>
    </div>
    
  )
}
