import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import "./watch.css";

const Watch = () => {
  const { state } = useLocation();
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleFullscreenPlay = () => {
    const container = containerRef.current;

    // Enter fullscreen safely
    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.webkitRequestFullscreen) {
      container.webkitRequestFullscreen();
    } else if (container.mozRequestFullScreen) {
      container.mozRequestFullScreen();
    } else if (container.msRequestFullscreen) {
      container.msRequestFullscreen();
    }

    setIsPlaying(true); // Start playing
  };

  return (
    <div className="watch-container" ref={containerRef}>
      <ReactPlayer
        url={state?.trailerUrl}
        playing={isPlaying}
        controls
        width="100%"
        height="100%"
      />

      {!isPlaying && (
        <div className="watch-controls">
          <button className="play-btn" onClick={handleFullscreenPlay}>
            ▶ Play Fullscreen
          </button>
          <button className="back-btn" onClick={() => navigate("/home")}>
            ⬅ Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Watch;
