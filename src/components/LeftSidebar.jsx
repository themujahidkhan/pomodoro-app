import React, { useState } from "react";
import natureAudio from "../assets/nature.wav";
import lofiAudio from "../assets/lofi.wav";
import whiteNoiseAudio from "../assets/white-noise.wav";
import "../App.css";

function LeftSidebar() {
  const [currentMusic, setCurrentMusic] = useState(false);
  const [playing, setPlaying] = useState(false);

  let natureMusic = new Audio(natureAudio);
  let lofiMusic = new Audio(lofiAudio);
  let whiteNoiseMusic = new Audio(whiteNoiseAudio);

  const playNatureMusic = (e) => {
    natureMusic.play();
  };

  const playLofi = () => {
    lofiMusic.play();
  };

  const playWhiteNoise = () => {
    whiteNoiseMusic.play();
  };

  return (
    <div>
      <div className="music-wrapper">
        <h1>Music</h1>
        <div className="music-card">
          <div className="card-nature" onClick={playNatureMusic}>
            Nature
          </div>
          <div className="card-lofi" onClick={playLofi}>
            Lofi
          </div>
          <div className="card-whiteNoise" onClick={playWhiteNoise}>
            White Noise
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
