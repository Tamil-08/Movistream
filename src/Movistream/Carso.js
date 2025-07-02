import React from "react";
import Button from 'react-bootstrap/Button';
import marvel from './images/marvel.jpg';
import alice from './images/alice.jfif'
import stranger from './images/stranger.jfif';
import wednesday from './images/wednesday.jfif';
import squid from './images/squid.jpg';
import Carousel from 'react-bootstrap/Carousel';



import './carousel.css'

const Sample=()=>{
     
return(
  <>
  <Carousel className="car" >
        <Carousel.Item interval={4000}>
        
      
          <img src={alice} alt="pic1" className="d-block w-100"/>
           
            <Carousel.Caption >     
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={stranger} alt="pic2" className="d-block w-100" />
           <Carousel.Caption>
          
         
      
         
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={wednesday} alt="pic3" className="d-block w-100" />
           <Carousel.Caption>
         
      
          
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={squid} alt="pic4" className="d-block w-100" />
           <Carousel.Caption className="box">
          
          
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
     
      
  </>
)


}
export default Sample;