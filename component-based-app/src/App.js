import './App.css';
import CardList from './components/CardList'
import Header from './components/Header';
import ImageSliderContainer from './components/ImageSliderContainer';
import all_images from './assets/images/all_images';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutMe from './routes/AboutMe.js';
import PastExperiences from './routes/PastExperiences';
import Footer from './components/Footer';
const required_images = [all_images.img1,all_images.img2,all_images.img3,all_images.img4]

var questions = [{question: "Who is the president of the US?", options: ["George W Bush", "Barack Obama", "Donald Trump", "Joe Biden"],answer: "Joe Biden"},{question: "What is EY?", options: ["A consultancy","A mining company", "Coffee Shop", "University"], answer: "A consultancy" }]

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
          <CardList questions = {questions}></CardList>
        </div>}/>
             
        </Routes>
      <Footer></Footer>
      </div>
      </Router>
      
      
  );
}

export default App;
