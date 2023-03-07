import React, { useRef, useState } from "react";

import lofiAudio from "../assets/lofi.wav";
import natureAudio from "../assets/nature.wav";
import whiteNoiseAudio from "../assets/white-noise.wav";

function LeftSidebar() {
  const lofiRef = useRef();
  const natureRef = useRef();
  const whiteNoiseRef = useRef();

  const [lofiPlaying, setLofiPlaying] = useState(false);
  const [naturePlaying, setNaturePlaying] = useState(false);
  const [whiteNoisePlaying, setWhiteNoisePlaying] = useState(false);

  const handleLofiClick = () => {
    if (lofiPlaying) {
      lofiRef.current.pause();
    } else {
      lofiRef.current.play();
    }
    setLofiPlaying(!lofiPlaying);
  };

  const handleNatureClick = () => {
    if (naturePlaying) {
      natureRef.current.pause();
    } else {
      natureRef.current.play();
    }
    setNaturePlaying(!naturePlaying);
  };

  const handleWhiteNoiseClick = () => {
    if (whiteNoisePlaying) {
      whiteNoiseRef.current.pause();
    } else {
      whiteNoiseRef.current.play();
    }
    setWhiteNoisePlaying(!whiteNoisePlaying);
  };

  return (
    <div>
      <div className="music-wrapper">
        <h1>Music</h1>
        <div className="music-card">
          <div className="card-nature" onClick={handleNatureClick}>
            Nature
          </div>
          <audio src={natureAudio} ref={natureRef} />
          <div className="card-lofi" onClick={handleLofiClick}>
            Lofi
          </div>
          <audio src={lofiAudio} ref={lofiRef} />
          <div className="card-whiteNoise" onClick={handleWhiteNoiseClick}>
            White Noise
          </div>
          <audio src={whiteNoiseAudio} ref={whiteNoiseRef} />
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
