import './App.css';
import CardList from './components/CardList'
import Header from './components/Header';
import ImageSliderContainer from './components/ImageSliderContainer';
import all_images from './assets/images/all_images';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutMe from './routes/AboutMe.js';
import PastExperiences from './routes/PastExperiences';
import Footer from './components/Footer';
import React from 'react';
const required_images = [all_images.img1,all_images.img2,all_images.img3,all_images.img4]
function App() {
  return (
    <Router>
      <div className='App'>
        
        <Header heading = "Prateek Talukdar"></Header>
        
        <Routes>
            <Route path = "/" element = {
            <div >
            <ImageSliderContainer images = {required_images}></ImageSliderContainer>
            <AboutMe/>
            </div>
            }/>
            <Route path = "/about" element = {
            <div >
            <ImageSliderContainer images = {required_images}></ImageSliderContainer>
            <AboutMe/>
          </div>
            }/>
            <Route path = "/past-experiences" element = {<PastExperiences/>}/>
            <Route path = "/know-me-better" element = {<div className = "card-list-container">
          <CardList></CardList>
        </div>}/>
             
        </Routes>
      <Footer></Footer>
      </div>
      </Router>
      
      
  );
}

export default App;
