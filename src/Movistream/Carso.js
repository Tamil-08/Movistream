import React from "react";
import Button from 'react-bootstrap/Button';
import marvel from './images/marvel.jpg';
import alice from './images/alice.jfif'
import stranger from './images/stranger.jfif';
import wednesday from './images/wednesday.jfif';
import squid from './images/squid.jpg';
import Carousel from 'react-bootstrap/Carousel';

import { FaPlay } from "react-icons/fa6";

import './carousel.css'
import CardText from "react-bootstrap/esm/CardText";
const Sample=()=>{
     
return(
  <>
  <Carousel className="car">
        <Carousel.Item interval={4000}>
        
      
          <img src={alice} alt="pic1" className="d-block w-100"/>
           
            <Carousel.Caption >
          <h3 style={{color:"white", }}>Alice In The BoderLand</h3>
         
        
   
          <p style={{color:"white",}}>Arisu - a listless, jobless and video-game-obsessed young man - suddenly finds himself in a strange, emptied-out version of Tokyo in which he and his friends must compete in dangerous games in order to survive.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={stranger} alt="pic2" className="d-block w-100" />
           <Carousel.Caption>
          <h3 style={{color:"white"}}>Stranger Things</h3>
         
      
          <p style={{ color:"white"}}>In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={wednesday} alt="pic3" className="d-block w-100" />
           <Carousel.Caption>
          <h3 style={{color:"white", }}>Wednesday</h3>
      
          <p style={{color:"white"}}>Follows Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the mystery that embroiled her parents.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={squid} alt="pic4" className="d-block w-100" />
           <Carousel.Caption className="box">
          <h3 style={{color:"white",}}>Squid Game</h3>
     
          <p style={{color:"white", }}>Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes: a survival game that has a whopping 45.6 billion-won prize at stake.</p>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      
  </>
)


}
export default Sample;