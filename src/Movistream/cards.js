import React, { useState } from "react";
import Main from "./nav";
import PosterSection from "./PosterSection";
import TrailerModal from "./TrailModal";

import alice from './images/action.jpg';
import stranger from './images/deadly.jpg';
import wednesday from './images/weather.jpg';
import squid from './images/squid2.jpg';
import gbu from './images/gbu.jpg';
 import Hit from './images/Hit.jpg';
 import inter from './images/intersteller.jfif';
 import big from './images/big world.webp';
 import squid2 from './images/squid2.jpg';
 import sheldon from './images/sheldon.jpg';

 //tv shows
 import weak from './images/weak.jfif';
 import unseen from './images/unseen.jpg';
 import friends from './images/friends.jpg';
 import dark from './images/dark.jfif';
 import forever from './images/forever.jpg';
 import boys from './images/boys.jfif';
 import peaky from './images/peaky.jfif';
 import all from './images/all.jfif';

// Movies

import action from './images/action.jpg'
import deadly from './images/deadly.jpg';
import havoc from './images/havoc.jfif';
import Nonnas from './images/Nonnas.jpg';
import inside from './images/inside.jfif';
import home from './images/home.jfif';
import extract from './images/extract.webp';
import twin from './images/twin.jpg';

// recently added

 import rich from './images/rich.jfif';
 import office from './images/office.jpg';
 import retro from './images/retro.webp';
 import world from './images/world.jpg';
 import thunder from './images/thunder.webp';
 import family from './images/family.jpg';
 import craft from './images/craft.jpg';
 import seven from './images/seven.jfif';

//Anime

import naruto from './images/naruto.jfif';
import onepiece from './images/one piece.jfif';
import yourname from './images/your name.jfif';
import weather from './images/weather.jpg';
import dragon from './images/dragon.jfif';
import dandad from './images/dandad.jfif';
import blue from './images/blue.webp';
import chainsaw from './images/chainsaw.png';

// Web series

import bad from './images/bad.jfif';
 import game from './images/game.jpg';
 import guest from './images/guest.jpg';
 import paatal from './images/paatal.jpg'
 import loki from './images/loki.jfif';
 import paatal1 from './images/paatal 1.jpg';
 import money from './images/money.jpg';
 import voffice from './images/voffice.jpg';

 import Carso from './Carso'

const Home = () => {
  const [trailerUrl, setTrailerUrl] = useState(null)

  const handlePlay = (url) => {
    setTrailerUrl(url);
  };

  const popularPosters = [
    {
      name: "Alice in Borderland",
      img: alice,
      trailer: `https://www.youtube.com/watch?v=49_44FFKZ1M`
    },
    {
      name: "Stranger Things",
      img: stranger,
      trailer: `https://www.youtube.com/watch?v=b9EkMc79ZSU`
    },
    {
      name: "Wednesday",
      img: wednesday,
      trailer: `https://www.youtube.com/watch?v=Di310WS8zLk`
    },
    {
      name: "Squid Game",
      img: squid,
      trailer: `https://www.youtube.com/watch?v=oqxAJKy0ii4`
    },
     {
    name: "Good Bad Ugly",
    img: gbu,
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with real trailer
  },
  {
    name: "Hit: The First Case",
    img: Hit,
    trailer: "https://www.youtube.com/watch?v=Go8nTmfrQd8" // Replace with real trailer
  },
  {
    name: "Interstellar",
    img: inter,
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
  },
  {
    name: "Big World",
    img: big,
    trailer: "https://www.youtube.com/watch?v=xyz123abc" // Replace with real trailer
  },

   {
    name: "Squid Game Season 2",
    img: squid2,
    trailer: "https://www.youtube.com/watch?v=xyz123abc"
  },
  {
    name: "Young Sheldon",
    img: sheldon,
    trailer: "https://www.youtube.com/watch?v=YJUz3v5RZ9I"
  }

  ];

  const Tvshows=[
  {
    name: "The Weakest Link",
    img: weak,
    trailer: "https://www.youtube.com/watch?v=scsE_J9Wnmk"
  },
  {
    name: "Unseen",
    img: unseen,
    trailer: "https://www.youtube.com/watch?v=0n1NvFns3-Y"
  },
  {
    name: "Friends",
    img: friends,
    trailer: "https://www.youtube.com/watch?v=8wThS5WCzs4"
  },
  {
    name: "Dark",
    img: dark,
    trailer: "https://www.youtube.com/watch?v=HBpZHcat8DQ"
  },
  {
    name: "Forever",
    img: forever,
    trailer: "https://www.youtube.com/watch?v=Dqg3pzQH8Ew"
  },
  {
    name: "The Boys",
    img: boys,
    trailer: "https://www.youtube.com/watch?v=M1bhOaLV4FU"
  },
  {
    name: "Peaky Blinders",
    img: peaky,
    trailer: "https://www.youtube.com/watch?v=oVzVdvGIC7U"
  },
  {
    name: "All of Us Are Dead",
    img: all,
    trailer: "https://www.youtube.com/watch?v=IN5TD4VRcSM"
  },
   {
    name: "Friends",
    img: friends,
    trailer: "https://www.youtube.com/watch?v=8wThS5WCzs4"
  },
  {
    name: "Dark",
    img: dark,
    trailer: "https://www.youtube.com/watch?v=HBpZHcat8DQ"
  },
];

const movies = [
  {
    name: "Nonna's Recipe",
    img: Nonnas,
    trailer: "https://www.youtube.com/watch?v=cgywJK9iKZk"
  },
  {
    name: "Action",
    img: action,
    trailer: "https://www.youtube.com/watch?v=R2gbPxeNk2E"
  },
  {
    name: "Havoc",
    img: havoc,
    trailer: "https://www.youtube.com/watch?v=c4bIfRqjPhw"
  },
  {
    name: "Extraction",
    img: extract,
    trailer: "https://www.youtube.com/watch?v=L6P3nI6VnlY"
  },
  {
    name: "Deadly Illusions",
    img: deadly,
    trailer: "https://www.youtube.com/watch?v=Ni8lRqeS2bI"
  },
  {
    name: "Inside",
    img: inside,
    trailer: "https://www.youtube.com/watch?v=U4U1oN-YhjI"
  },
  {
    name: "Sweet Home",
    img: home,
    trailer: "https://www.youtube.com/watch?v=7rLZ0yA7rPo"
  },
  {
    name: "Twin Murders",
    img: twin,
    trailer: "https://www.youtube.com/watch?v=zzyE2Xz4jGQ"
  },

   {
    name: "Sweet Home",
    img: home,
    trailer: "https://www.youtube.com/watch?v=7rLZ0yA7rPo"
  },
  {
    name: "Twin Murders",
    img: twin,
    trailer: "https://www.youtube.com/watch?v=zzyE2Xz4jGQ"
  },
  
];

const recentlyAdded = [
  {
    name: "Retro ",
    img: retro,
    trailer: "https://www.youtube.com/watch?v=_InqQJRqGW4" // placeholder
  },
  {
    name: "The Office (US)",
    img: office,
    trailer: "https://www.youtube.com/watch?v=Vmb1tqYqyII"
  },
  {
    name: "Richie Rich",
    img: rich,
    trailer: "https://www.youtube.com/watch?v=K4bIrk2xZp0"
  },
  {
    name: "World War Z",
    img: world,
    trailer: "https://www.youtube.com/watch?v=Md6Dvxdr0AQ"
  },
  {
    name: "Thunder Force",
    img: thunder,
    trailer: "https://www.youtube.com/watch?v=qnx6-YLXFwg"
  },
  {
    name: "Yes Day (Family Movie)",
    img: family,
    trailer: "https://www.youtube.com/watch?v=fsb8UDr3kMQ"
  },
  {
    name: "The Craft: Legacy",
    img: craft,
    trailer: "https://www.youtube.com/watch?v=Ba-cqYXcFNU"
  },
  {
    name: "Seven",
    img: seven,
    trailer: "https://www.youtube.com/watch?v=znmZoVkCjpI"
  },
  {
    name: "The Office (US)",
    img: office,
    trailer: "https://www.youtube.com/watch?v=Vmb1tqYqyII"
  },
  {
    name: "Richie Rich",
    img: rich,
    trailer: "https://www.youtube.com/watch?v=K4bIrk2xZp0"
  },
];

const anime = [
  {
    name: "Naruto",
    img: naruto,
    trailer: "https://www.youtube.com/watch?v=JvKrwwA-m4E"
  },
  {
    name: "One Piece (Netflix Live Action)",
    img: onepiece,
    trailer: "https://www.youtube.com/watch?v=Ades3pQbeh8"
  },
  {
    name: "Your Name",
    img: yourname,
    trailer: "https://www.youtube.com/watch?v=xU47nhruN-Q"
  },
  {
    name: "Weathering With You",
    img: weather,
    trailer: "https://www.youtube.com/watch?v=Q6iK6DjV_iE"
  },
  {
    name: "Dragon Ball Super: Broly",
    img: dragon,
    trailer: "https://www.youtube.com/watch?v=3nU3aUX4zQk"
  },
  {
    name: "Dandadan (Fan Trailer)",
    img: dandad,
    trailer: "https://www.youtube.com/watch?v=nGxDkF3qR-o"
  },
  {
    name: "Blue Period",
    img: blue,
    trailer: "https://www.youtube.com/watch?v=eRby9Yjo5Vg"
  },
  {
    name: "Chainsaw Man",
    img: chainsaw,
    trailer: "https://www.youtube.com/watch?v=eyonP1AgC0k"
  },
  {
    name: "One Piece (Netflix Live Action)",
    img: onepiece,
    trailer: "https://www.youtube.com/watch?v=Ades3pQbeh8"
  },
  {
    name: "Your Name",
    img: yourname,
    trailer: "https://www.youtube.com/watch?v=xU47nhruN-Q"
  },
];
const webSeries = [
  {
    name: "Breaking Bad",
    img: bad,
    trailer: "https://www.youtube.com/watch?v=HhesaQXLuRY"
  },
  {
    name: "The Queen's Gambit",
    img: game,
    trailer: "https://www.youtube.com/watch?v=CDrieqwSdgI"
  },
  {
    name: "The Guest",
    img: guest,
    trailer: "https://www.youtube.com/watch?v=0L2RzTujcuY"
  },
  {
    name: "Paatal Lok",
    img: paatal,
    trailer: "https://www.youtube.com/watch?v=ix3hck4fLO0"
  },
  {
    name: "Loki",
    img: loki,
    trailer: "https://www.youtube.com/watch?v=nW948Va-l10"
  },
  {
    name: "Paatal Lok – Season 2",
    img: paatal1,
    trailer: "https://www.youtube.com/watch?v=d-SvTOiY_5k"
  },
  {
    name: "Money Heist",
    img: money,
    trailer: "https://www.youtube.com/watch?v=htqXL94Rza4"
  },
  {
    name: "The Office (US)",
    img: voffice,
    trailer: "https://www.youtube.com/watch?v=Vmb1tqYqyII"
  },
  {
    name: "Loki",
    img: loki,
    trailer: "https://www.youtube.com/watch?v=nW948Va-l10"
  },
  {
    name: "Paatal Lok – Season 2",
    img: paatal1,
    trailer: "https://www.youtube.com/watch?v=d-SvTOiY_5k"
  },
  {
    name: "Money Heist",
    img: money,
    trailer: "https://www.youtube.com/watch?v=htqXL94Rza4"
  },
];
  return (
    <>
      <Main />
<Carso />

{/* Anchor lyadded for smooth scrolling */}
<div id="popular">
  <PosterSection title="Popular on Movistream" posters={popularPosters} onPlay={handlePlay} />
</div>

<div id="tvshows">
  <PosterSection title="TV Shows" posters={Tvshows} onPlay={handlePlay} />
</div>

<div id="movies">
  <PosterSection title="Movies" posters={movies} onPlay={handlePlay} />
</div>

<div id="recent">
  <PosterSection title="Recently Added" posters={recentlyAdded} onPlay={handlePlay} />
</div>

<div id="anime">
  <PosterSection title="Anime" posters={anime} onPlay={handlePlay} />
</div>

<div id="webseries">
  <PosterSection title="Web Series" posters={webSeries} onPlay={handlePlay} />
</div>

{/* Only one Trailer Modal */}
<TrailerModal url={trailerUrl} onClose={() => setTrailerUrl(null)} />

      {/* <PosterSection title="Popular on Movistream" posters={popularPosters} onPlay={handlePlay} />
      <TrailerModal url={trailerUrl} onClose={() => setTrailerUrl(null)} />
      <PosterSection title="Tv Shows" posters={Tvshows} onPlay={handlePlay} />
      <TrailerModal url={trailerUrl} onClose={() => setTrailerUrl(null)} />
        <PosterSection title="Movies" posters={movies} onPlay={handlePlay} />
      <TrailerModal url={trailerUrl} onClose={() => setTrailerUrl(null)} />
        <PosterSection title="Recently Added" posters={recentlyAdded} onPlay={handlePlay} />
      <TrailerModal url={trailerUrl} onClose={() => setTrailerUrl(null)} />
        <PosterSection title="Anime" posters={anime} onPlay={handlePlay} />
      <TrailerModal url={trailerUrl} onClose={() => setTrailerUrl(null)} />
        <PosterSection title="Web Series" posters={webSeries} onPlay={handlePlay} />
      <TrailerModal url={trailerUrl} onClose={() => setTrailerUrl(null)} /> */}
        

    </>
  );
};

export default Home;





// import React from "react";
// import Card from 'react-bootstrap/Card';


// // home
// import alice  from './images/alice.jfif';
// import stranger from './images/stranger.jfif';
// import wednesday from './images/wednesday.jfif';
// import gbu from './images/gbu.jpg';
// import Hit from './images/Hit.jpg';
// import inter from './images/intersteller.jfif';
// import squid from './images/squid.jpg';
// import big from './images/big world.webp';
// import squid2 from './images/squid2.jpg';
// import sheldon from './images/sheldon.jpg';
// // tv shows
// import weak from './images/weak.jfif';
// import unseen from './images/unseen.jpg';
// import friends from './images/friends.jpg';
// import dark from './images/dark.jfif';
// import forever from './images/forever.jpg';
// import boys from './images/boys.jfif';
// import peaky from './images/peaky.jfif';
// import all from './images/all.jfif';
// // movies
// import action from './images/action.jpg'
// import deadly from './images/deadly.jpg';
// import havoc from './images/havoc.jfif';
// import Nonnas from './images/Nonnas.jpg';
// import inside from './images/inside.jfif';
// import home from './images/home.jfif';
// import extract from './images/extract.webp';
// import twin from './images/twin.jpg';
// // anime

// import naruto from './images/naruto.jfif';
// import onepiece from './images/one piece.jfif';
// import yourname from './images/your name.jfif';
// import weather from './images/weather.jpg';
// import dragon from './images/dragon.jfif';
// import dandad from './images/dandad.jfif';
// import blue from './images/blue.webp';
// import chainsaw from './images/chainsaw.png';

// // recently added

// import rich from './images/rich.jfif';
// import office from './images/office.jpg';
// import retro from './images/retro.webp';
// import world from './images/world.jpg';
// import thunder from './images/thunder.webp';
// import family from './images/family.jpg';
// import craft from './images/craft.jpg';
// import seven from './images/seven.jfif';

// //web series 

// import bad from './images/bad.jfif';
// import game from './images/game.jpg';
// import guest from './images/guest.jpg';
// import paatal from './images/paatal.jpg'
// import loki from './images/loki.jfif';
// import paatal1 from './images/paatal 1.jpg';
// import money from './images/money.jpg';
// import voffice from './images/voffice.jpg';



// import './cards.css';





// const Home=()=>{
//     return(
//         <>
           

//          <div id="home" className='row'>
//             <h2 className="home">Popular on Movistream </h2> 
//             <br></br>
//             <br></br>
//          <div className="posters">
            
//   <div className="poster-wrapper">
//      <div className="poster-container">
//                <img  className='poster'  alt='Alice' src={alice} />
//                  <a
//   href="https://youtu.be/49_44FFKZ1M?si=SHwKDedrVWUMSPBB"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="play-button"
// >
//   ▶ 
// </a>
//     </div>
//     <p className="poster-title">Alice in Borderland</p>
//     </div>
    
//       <div className="poster-wrapper">
//                  <div className="poster-container">
//                 <img className='poster' alt='poster' src={stranger} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Stranger Things</p>
//     </div>

//      <div className="poster-wrapper">
//                  <div className="poster-container">
//                 <img className='poster' alt='poster' src={wednesday} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Wednesday</p>
//     </div>
   
//      <div className="poster-wrapper">
//                  <div className="poster-container">
//                 <img className='poster' alt='poster' src={squid} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 1</p>
//     </div>

//      <div className="poster-wrapper">
//                  <div className="poster-container">
//                 <img className='poster' alt='poster' src={Hit} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Hit Third Case</p>
//     </div>
 
//      <div className="poster-wrapper">
//                  <div className="poster-container">
//                 <img className='poster' alt='poster' src={gbu} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Good Bad Ugly</p>
//     </div>
    
//      <div className="poster-wrapper">
//                  <div className="poster-container">
//                 <img className='poster' alt='poster' src={inter} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">intersteller</p>
//     </div>

//          <div className="poster-wrapper">
//                  <div className="poster-container">
//                 <img className='poster' alt='poster' src={big} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Big World</p>
//     </div>

//            <div className="poster-wrapper">
//                  <div className="poster-container">
//                 <img className='poster' alt='poster' src={squid2} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>       
//      <div className="poster-wrapper">
//                  <div className="poster-container">
//                 <img className='poster' alt='poster' src={sheldon} />
//                  <button className="play-button" herf="#Tv Shows">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Sheldon</p>
//     </div>           
//             </div>
//         </div>
     

//         <div id="tv shows" className='row'>
//             <h2 className="home">Tv shows</h2>
//             <div className='posters'>
//                   <div className="poster-wrapper">
//                  <div className="poster-container">
//                 <img className='poster' alt='Alice' src={weak} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>
//                   <div className="poster-wrapper">
//                  <div className="poster-container">
//                  <img className='poster' alt='poster' src={friends} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>


//                   <div className="poster-wrapper">
//                  <div className="poster-container">
//                 <img className='poster' alt='poster' src={forever} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>

   
//                   <div className="poster-wrapper">
//                  <div className="poster-container">
//                 <img className='poster' alt='poster' src={dark} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>
//       <div className="poster-wrapper">
//                  <div className="poster-container">
                
//                  <img className='poster' alt='poster' src={unseen} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>

   
//                   <div className="poster-wrapper">
//                  <div className="poster-container">
//                  <img className='poster' alt='poster' src={all} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>

  
//                   <div className="poster-wrapper">
//                  <div className="poster-container">
//               <img className='poster' alt='poster' src={boys} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>

 
//                   <div className="poster-wrapper">
//                  <div className="poster-container">
//                   <img className='poster' alt='poster' src={peaky} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>
//             </div>
//         </div>
// <div id="movies" className='row'>
//             <h2 className="home">Movies</h2>
//             <div className='posters'>

//  <div className="poster-wrapper">
//                  <div className="poster-container">
//               <img className='poster' alt='Alice' src={Nonnas} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>

//      <div className="poster-wrapper">
//                  <div className="poster-container">
//                <img className='poster' alt='poster' src={action} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>

//      <div className="poster-wrapper">
//                  <div className="poster-container">
//                              <img className='poster' alt='poster' src={havoc} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>

//      <div className="poster-wrapper">
//                  <div className="poster-container">
//             <img className='poster' alt='poster' src={extract} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>

//      <div className="poster-wrapper">
//                  <div className="poster-container">
//             <img className='poster' alt='poster' src={deadly} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>

    
//      <div className="poster-wrapper">
//                  <div className="poster-container">
//          <img className='poster' alt='poster' src={inside} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>

//     <div className="poster-wrapper">
//                  <div className="poster-container">
//         <img className='poster' alt='poster' src={home} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>


//  <div className="poster-wrapper">
//                  <div className="poster-container">
//        <img className='poster' alt='poster' src={twin} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>   
//             </div>
//         </div>

//         <div id="anime" className='row'>
//             <h2 className="home">Anime</h2>
//             <div className='posters'>
//               <div className="poster-wrapper">
//                  <div className="poster-container">
//        <img className='poster' alt='Alice' src={naruto} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>

//      <div className="poster-wrapper">
//                  <div className="poster-container">
//        <img className='poster' alt='poster' src={onepiece} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>

//            <div className="poster-wrapper">
//                  <div className="poster-container">
//        <img className='poster' alt='poster' src={yourname} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>      
                
//              <div className="poster-wrapper">
//                  <div className="poster-container">
//      <img className='poster' alt='poster' src={dandad} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>         

//               <div className="poster-wrapper">
//                  <div className="poster-container">
//        <img className='poster' alt='poster' src={chainsaw} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>          

//                  <div className="poster-wrapper">
//                  <div className="poster-container">
//                    <img className='poster' alt='poster' src={blue} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>   

//         <div className="poster-wrapper">
//                  <div className="poster-container">
//                     <img className='poster' alt='poster' src={weather} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>            
            
//               <div className="poster-wrapper">
//                  <div className="poster-container">
//                    <img className='poster' alt='poster' src={dragon} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>    
//             </div>
//         </div>
        
//         <div id="recently added" className='row'>
//             <h2 className="home">Recently Added</h2>
//             <div className='posters'>
//                      <div className="poster-wrapper">
//                  <div className="poster-container">
//                     <img className='poster' alt='Alice' src={retro} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>

//     <div className="poster-wrapper">
//                  <div className="poster-container">
//                     <img className='poster' alt='poster' src={office} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>

//     <div className="poster-wrapper">
//                  <div className="poster-container">
//                     <img className='poster' alt='poster' src={rich} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>

//             <div className="poster-wrapper">
//                  <div className="poster-container">
//                     <img className='poster' alt='poster' src={world} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>   
                
//                  <div className="poster-wrapper">
//                  <div className="poster-container">
//                     <img className='poster' alt='poster' src={thunder} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>

//                 <div className="poster-wrapper">
//                  <div className="poster-container">
//                    <img className='poster' alt='poster' src={family} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>        
                 
           
//                 <div className="poster-wrapper">
//                  <div className="poster-container">
//                     <img className='poster' alt='poster' src={craft} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div> 

    
//                 <div className="poster-wrapper">
//                  <div className="poster-container">
//                   <img className='poster' alt='poster' src={seven} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>       
//             </div>
//         </div>
       

//         <div id="web series" className='row'>
//             <h2 className="home">Web Series</h2> 
//             <div className='posters'> 
              
//                        <div className="poster-wrapper">
//                  <div className="poster-container">
//                      <img className='poster' alt='Alice' src={bad} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>
//              <div className="poster-wrapper">
//                  <div className="poster-container">
//                   <img className='poster' alt='poster' src={game} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>
//              <div className="poster-wrapper">
//                  <div className="poster-container">
//                   <img className='poster' alt='poster' src={guest} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>

//             <div className="poster-wrapper">
//                  <div className="poster-container">
//                   <img className='poster' alt='poster' src={paatal} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>

//      <div className="poster-wrapper">
//                  <div className="poster-container">
//                   <img className='poster' alt='poster' src={voffice} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div> 

//      <div className="poster-wrapper">
//                  <div className="poster-container">
//                   <img className='poster' alt='poster' src={paatal1} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div> 

//      <div className="poster-wrapper">
//                  <div className="poster-container">
//                   <img className='poster' alt='poster' src={loki} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>  
                
//           <div className="poster-wrapper">
//                  <div className="poster-container">
//                 <img className='poster' alt='poster' src={money} />
//                  <button className="play-button">
//       ▶ play
//     </button>
//       </div>
//        <p className="poster-title">Squid Game Season 2</p>
//     </div>   
//             </div>
//         </div>
//      </>
//     )
// }
  
// export default Home;