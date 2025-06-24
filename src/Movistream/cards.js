import React from "react";
import Card from 'react-bootstrap/Card';


// home
import alice from './images/alice.jfif';
import stranger from './images/stranger.jfif';
import wednesday from './images/wednesday.jfif';
import gbu from './images/gbu.jpg';
import Hit from './images/Hit.jpg';
import inter from './images/intersteller.jfif';
import squid from './images/squid.jpg';
import big from './images/big world.webp';
// tv shows
import weak from './images/weak.jfif';
import unseen from './images/unseen.jpg';
import friends from './images/friends.jpg';
import dark from './images/dark.jfif';
import forever from './images/forever.jpg';
import boys from './images/boys.jfif';
import peaky from './images/peaky.jfif';
import all from './images/all.jfif';
// movies
import action from './images/action.jpg'
import deadly from './images/deadly.jpg';
import havoc from './images/havoc.jfif';
import Nonnas from './images/Nonnas.jpg';
import inside from './images/inside.jfif';
import home from './images/home.jfif';
import extract from './images/extract.webp';
import twin from './images/twin.jpg';
// anime

import naruto from './images/naruto.jfif';
import onepiece from './images/one piece.jfif';
import yourname from './images/your name.jfif';
import weather from './images/weather.jpg';
import dragon from './images/dragon.jfif';
import dandad from './images/dandad.jfif';
import blue from './images/blue.webp';
import chainsaw from './images/chainsaw.png';

// recently added

import rich from './images/rich.jfif';
import office from './images/office.jpg';
import retro from './images/retro.webp';
import world from './images/world.jpg';
import thunder from './images/thunder.webp';
import family from './images/family.jpg';
import craft from './images/craft.jpg';
import seven from './images/seven.jfif';

//web series 

import bad from './images/bad.jfif';
import game from './images/game.jpg';
import guest from './images/guest.jpg';
import paatal from './images/paatal.jpg'
import loki from './images/loki.jfif';
import paatal1 from './images/paatal 1.jpg';
import money from './images/money.jpg';
import voffice from './images/voffice.jpg';

import { IoPlay } from "react-icons/io5";

import './cards.css';
import CardBody from "react-bootstrap/esm/CardBody";




const Home=()=>{
    return(
        <>
  
         <div id="home" className='row'>
            <h2 className="home">Popular on Movistream </h2> 
         <div className="posters">
                <img  className='poster'  alt='Alice' src={alice} />
                <img className='poster' alt='poster' src={stranger} />
                 <img className='poster' alt='poster' src={wednesday} />
                 <img className='poster' alt='poster' src={squid} />
                 <img className='poster' alt='poster' src={Hit} />
                <img className='poster' alt='poster' src={gbu} />
               <img className='poster' alt='poster' src={inter} />
              <img className='poster' alt='poster' src={big} />
            </div>

        </div>
     

        <div id="tv shows" className='row'>
            <h2 className="home">Tv shows</h2>
            <div className='posters'>
                <img className='poster' alt='Alice' src={weak} />
                <img className='poster' alt='poster' src={friends} />
                 <img className='poster' alt='poster' src={forever} />
                 <img className='poster' alt='poster' src={unseen} />
                 <img className='poster' alt='poster' src={dark} />
                <img className='poster' alt='poster' src={all} />
               <img className='poster' alt='poster' src={boys} />
              <img className='poster' alt='poster' src={peaky} />
                
            </div>
        </div>

        <div id="Movies" className='row'>
            <h2 className="home">Movies</h2>
            <div className='posters'>
                <img className='poster' alt='Alice' src={Nonnas} />
                <img className='poster' alt='poster' src={action} />
                 <img className='poster' alt='poster' src={havoc} />
                 <img className='poster' alt='poster' src={extract} />
                 <img className='poster' alt='poster' src={deadly} />
                <img className='poster' alt='poster' src={inside} />
               <img className='poster' alt='poster' src={home} />
              <img className='poster' alt='poster' src={twin} />
                
            </div>
        </div>

        <div id="anime" className='row'>
            <h2 className="home">Anime</h2>
            <div className='posters'>
                <img className='poster' alt='Alice' src={naruto} />
                <img className='poster' alt='poster' src={onepiece} />
                 <img className='poster' alt='poster' src={yourname} />
                 <img className='poster' alt='poster' src={dandad} />
                 <img className='poster' alt='poster' src={chainsaw} />
                <img className='poster' alt='poster' src={blue} />
               <img className='poster' alt='poster' src={weather} />
              <img className='poster' alt='poster' src={dragon} />
                
            </div>
        </div>
        
        <div id="recently added" className='row'>
            <h2 className="home">Recently Added</h2>
            <div className='posters'>
               <img className='poster' alt='Alice' src={retro} />
                <img className='poster' alt='poster' src={office} />
                 <img className='poster' alt='poster' src={rich} />
                 <img className='poster' alt='poster' src={world} />
                 <img className='poster' alt='poster' src={thunder} />
                <img className='poster' alt='poster' src={family} />
               <img className='poster' alt='poster' src={craft} />
              <img className='poster' alt='poster' src={seven} />
                
            </div>
        </div>
       

        <div id="web series" className='row'>
            <h2 className="home">Web Series</h2> 
            <div className='posters'> 
              
                <img className='poster' alt='Alice' src={bad} />
                <img className='poster' alt='poster' src={game} />
                 <img className='poster' alt='poster' src={guest} />
                 <img className='poster' alt='poster' src={paatal} />
                 <img className='poster' alt='poster' src={paatal1} />
                <img className='poster' alt='poster' src={loki} />
               <img className='poster' alt='poster' src={money} />
              <img className='poster' alt='poster' src={voffice} />
            </div>
        </div>
     </>
    )
}
  
export default Home;