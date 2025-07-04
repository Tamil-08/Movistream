import React from "react";
import './cards.css';

const PosterSection = ({ title, posters, onPlay }) => {
  return (
    <div className="row-cont">
      <h2 className="home">{title}</h2>
      <div className="posters">
        {posters.map((poster, idx) => (
          <div className="poster-wrapper" key={idx}>
            <div className="poster-container">
              <img className='poster' src={poster.img} alt={poster.name} />
              <button className="play-button" onClick={() => onPlay(poster.trailer)}>
                ▶ play
              </button>
            </div>
            <p className="poster-title">{poster.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PosterSection;
