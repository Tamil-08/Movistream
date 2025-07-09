import React, { useState } from "react";
import './cards.css';

const PosterSection = ({ title, posters }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  
  return (
    <div className="row-cont">
      <h2 className="home">{title}</h2>

      <div className="posters horizontal-scroll">
        {posters.map((poster, idx) => (
          <div
            className="poster-wrapper steam-style-card"
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="poster-container">
              {hoveredIndex === idx ? (
                poster.trailer.endsWith('.mp4') ? (
                  <video
                    className="poster-video"
                    src={poster.trailer}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <iframe
                    className="poster-video"
                    src={`${poster.trailer.replace("watch?v=", "embed/")}?autoplay=1&mute=1&controls=0&loop=1`}
                    title="Trailer"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                )
              ) : (
                <img className="poster" src={poster.img} alt={poster.name} />
              )}
            </div>

            <div className="poster-info">
              <p className="poster-title">{poster.name}</p>
              {poster.genre && <p className="poster-genre"><strong>Genre:</strong> {poster.genre}</p>}
              {poster.description && <p className="poster-description">{poster.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PosterSection;
