import React from "react";
import Card from 'react-bootstrap/Card';


// home
import alice  from './images/alice.jfif';
import stranger from './images/stranger.jfif';
import wednesday from './images/wednesday.jfif';
import gbu from './images/gbu.jpg';
import Hit from './images/Hit.jpg';
import inter from './images/intersteller.jfif';
import squid from './images/squid.jpg';
import big from './images/big world.webp';
import squid2 from './images/squid2.jpg';
import sheldon from './images/sheldon.jpg';
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



import './cards.css';





const Home=()=>{
    return(
        <>
           

         <div id="home" className='row'>
            <h2 className="home">Popular on Movistream </h2> 
            <br></br>
            <br></br>
         <div className="posters">
            
  <div className="poster-wrapper">
     <div className="poster-container">
               <img  className='poster'  alt='Alice' src={alice} />
                 <a
  href="https://youtu.be/49_44FFKZ1M?si=SHwKDedrVWUMSPBB"
  target="_blank"
  rel="noopener noreferrer"
  className="play-button"
>
  ▶ 
</a>
    </div>
    <p className="poster-title">Alice in Borderland</p>
    </div>
    
      <div className="poster-wrapper">
                 <div className="poster-container">
                <img className='poster' alt='poster' src={stranger} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Stranger Things</p>
    </div>

     <div className="poster-wrapper">
                 <div className="poster-container">
                <img className='poster' alt='poster' src={wednesday} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Wednesday</p>
    </div>
   
     <div className="poster-wrapper">
                 <div className="poster-container">
                <img className='poster' alt='poster' src={squid} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 1</p>
    </div>

     <div className="poster-wrapper">
                 <div className="poster-container">
                <img className='poster' alt='poster' src={Hit} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Hit Third Case</p>
    </div>
 
     <div className="poster-wrapper">
                 <div className="poster-container">
                <img className='poster' alt='poster' src={gbu} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Good Bad Ugly</p>
    </div>
    
     <div className="poster-wrapper">
                 <div className="poster-container">
                <img className='poster' alt='poster' src={inter} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">intersteller</p>
    </div>

         <div className="poster-wrapper">
                 <div className="poster-container">
                <img className='poster' alt='poster' src={big} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Big World</p>
    </div>

           <div className="poster-wrapper">
                 <div className="poster-container">
                <img className='poster' alt='poster' src={squid2} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>       
     <div className="poster-wrapper">
                 <div className="poster-container">
                <img className='poster' alt='poster' src={sheldon} />
                 <button className="play-button" herf="#Tv Shows">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Sheldon</p>
    </div>           
            </div>
        </div>
     

        <div id="tv shows" className='row'>
            <h2 className="home">Tv shows</h2>
            <div className='posters'>
                  <div className="poster-wrapper">
                 <div className="poster-container">
                <img className='poster' alt='Alice' src={weak} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>
                  <div className="poster-wrapper">
                 <div className="poster-container">
                 <img className='poster' alt='poster' src={friends} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>


                  <div className="poster-wrapper">
                 <div className="poster-container">
                <img className='poster' alt='poster' src={forever} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>

   
                  <div className="poster-wrapper">
                 <div className="poster-container">
                <img className='poster' alt='poster' src={dark} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>
      <div className="poster-wrapper">
                 <div className="poster-container">
                
                 <img className='poster' alt='poster' src={unseen} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>

   
                  <div className="poster-wrapper">
                 <div className="poster-container">
                 <img className='poster' alt='poster' src={all} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>

  
                  <div className="poster-wrapper">
                 <div className="poster-container">
              <img className='poster' alt='poster' src={boys} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>

 
                  <div className="poster-wrapper">
                 <div className="poster-container">
                  <img className='poster' alt='poster' src={peaky} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>
            </div>
        </div>
<div id="movies" className='row'>
            <h2 className="home">Movies</h2>
            <div className='posters'>

 <div className="poster-wrapper">
                 <div className="poster-container">
              <img className='poster' alt='Alice' src={Nonnas} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>

     <div className="poster-wrapper">
                 <div className="poster-container">
               <img className='poster' alt='poster' src={action} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>

     <div className="poster-wrapper">
                 <div className="poster-container">
                             <img className='poster' alt='poster' src={havoc} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>

     <div className="poster-wrapper">
                 <div className="poster-container">
            <img className='poster' alt='poster' src={extract} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>

     <div className="poster-wrapper">
                 <div className="poster-container">
            <img className='poster' alt='poster' src={deadly} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>

    
     <div className="poster-wrapper">
                 <div className="poster-container">
         <img className='poster' alt='poster' src={inside} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>

    <div className="poster-wrapper">
                 <div className="poster-container">
        <img className='poster' alt='poster' src={home} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>


 <div className="poster-wrapper">
                 <div className="poster-container">
       <img className='poster' alt='poster' src={twin} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>   
            </div>
        </div>

        <div id="anime" className='row'>
            <h2 className="home">Anime</h2>
            <div className='posters'>
              <div className="poster-wrapper">
                 <div className="poster-container">
       <img className='poster' alt='Alice' src={naruto} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>

     <div className="poster-wrapper">
                 <div className="poster-container">
       <img className='poster' alt='poster' src={onepiece} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>

           <div className="poster-wrapper">
                 <div className="poster-container">
       <img className='poster' alt='poster' src={yourname} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>      
                
             <div className="poster-wrapper">
                 <div className="poster-container">
     <img className='poster' alt='poster' src={dandad} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>         

              <div className="poster-wrapper">
                 <div className="poster-container">
       <img className='poster' alt='poster' src={chainsaw} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>          

                 <div className="poster-wrapper">
                 <div className="poster-container">
                   <img className='poster' alt='poster' src={blue} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>   

        <div className="poster-wrapper">
                 <div className="poster-container">
                    <img className='poster' alt='poster' src={weather} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>            
            
              <div className="poster-wrapper">
                 <div className="poster-container">
                   <img className='poster' alt='poster' src={dragon} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>    
            </div>
        </div>
        
        <div id="recently added" className='row'>
            <h2 className="home">Recently Added</h2>
            <div className='posters'>
                     <div className="poster-wrapper">
                 <div className="poster-container">
                    <img className='poster' alt='Alice' src={retro} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>

    <div className="poster-wrapper">
                 <div className="poster-container">
                    <img className='poster' alt='poster' src={office} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>

    <div className="poster-wrapper">
                 <div className="poster-container">
                    <img className='poster' alt='poster' src={rich} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>

            <div className="poster-wrapper">
                 <div className="poster-container">
                    <img className='poster' alt='poster' src={world} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>   
                
                 <div className="poster-wrapper">
                 <div className="poster-container">
                    <img className='poster' alt='poster' src={thunder} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>

                <div className="poster-wrapper">
                 <div className="poster-container">
                   <img className='poster' alt='poster' src={family} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>        
                 
           
                <div className="poster-wrapper">
                 <div className="poster-container">
                    <img className='poster' alt='poster' src={craft} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div> 

    
                <div className="poster-wrapper">
                 <div className="poster-container">
                  <img className='poster' alt='poster' src={seven} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>       
            </div>
        </div>
       

        <div id="web series" className='row'>
            <h2 className="home">Web Series</h2> 
            <div className='posters'> 
              
                       <div className="poster-wrapper">
                 <div className="poster-container">
                     <img className='poster' alt='Alice' src={bad} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>
             <div className="poster-wrapper">
                 <div className="poster-container">
                  <img className='poster' alt='poster' src={game} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>
             <div className="poster-wrapper">
                 <div className="poster-container">
                  <img className='poster' alt='poster' src={guest} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>

            <div className="poster-wrapper">
                 <div className="poster-container">
                  <img className='poster' alt='poster' src={paatal} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>

     <div className="poster-wrapper">
                 <div className="poster-container">
                  <img className='poster' alt='poster' src={voffice} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div> 

     <div className="poster-wrapper">
                 <div className="poster-container">
                  <img className='poster' alt='poster' src={paatal1} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div> 

     <div className="poster-wrapper">
                 <div className="poster-container">
                  <img className='poster' alt='poster' src={loki} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>  
                
          <div className="poster-wrapper">
                 <div className="poster-container">
                <img className='poster' alt='poster' src={money} />
                 <button className="play-button">
      ▶ play
    </button>
      </div>
       <p className="poster-title">Squid Game Season 2</p>
    </div>   
            </div>
        </div>
     </>
    )
}
  
export default Home;