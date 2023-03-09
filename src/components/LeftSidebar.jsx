import React, { useRef, useState } from "react";

import Spotify from "./Spotify";

function LeftSidebar() {
  //   const lofiRef = useRef();
  //   const natureRef = useRef();
  //   const whiteNoiseRef = useRef();

  //   const [lofiPlaying, setLofiPlaying] = useState(false);
  //   const [naturePlaying, setNaturePlaying] = useState(false);
  //   const [whiteNoisePlaying, setWhiteNoisePlaying] = useState(false);

  //   const handleLofiClick = () => {
  //     if (lofiPlaying) {
  //       lofiRef.current.pause();
  //     } else {
  //       lofiRef.current.play();
  //     }
  //     setLofiPlaying(!lofiPlaying);
  //   };

  //   const handleNatureClick = () => {
  //     if (naturePlaying) {
  //       natureRef.current.pause();
  //     } else {
  //       natureRef.current.play();
  //     }
  //     setNaturePlaying(!naturePlaying);
  //   };

  //   const handleWhiteNoiseClick = () => {
  //     if (whiteNoisePlaying) {
  //       whiteNoiseRef.current.pause();
  //     } else {
  //       whiteNoiseRef.current.play();
  //     }
  //     setWhiteNoisePlaying(!whiteNoisePlaying);
  //   };

  return (
    <div className="">
      <Spotify
        wide
        height={200}
        link="https://open.spotify.com/playlist/3vXUEGi4ip1EhI9OtdgdCy?si=49677e78d2cb4733"
      />
      {/* <div className="music-wrapper text-center border-2">
        <h2 className="text-3xl font-bold mb-8">Listen Music</h2>
        <div className="music-card flex space-x-8 justify-center items-center">
          <div
            className={
              naturePlaying
                ? "bg-green-800 w-16 h-16 p-2 rounded-lg"
                : "card-nature bg-green-400 w-16 h-16 p-2 rounded-lg"
            }
            onClick={handleNatureClick}
          >
            <img src={natureIcon} alt="nature icon" />
            <p>Nature Music</p>
            <audio src={natureAudio} ref={natureRef} />
          </div>
          <div
            className={
              lofiPlaying
                ? "card-lofi bg-orange-800 w-16 h-16 p-2 rounded-lg"
                : "card-lofi bg-orange-300 w-16 h-16 p-2 rounded-lg"
            }
            onClick={handleLofiClick}
          >
            <img src={lofiIcon} alt="nature icon" />
            <p>Lofi Music</p>
            <audio src={lofiAudio} ref={lofiRef} />
          </div>
          <div
            className={
              whiteNoisePlaying
                ? "card-whiteNoise bg-gray-800 w-16 h-16 p-2 rounded-lg"
                : "card-whiteNoise bg-gray-400 w-16 h-16 p-2 rounded-lg"
            }
            onClick={handleWhiteNoiseClick}
          >
            <img src={whiteNoiseIcon} alt="white noise icon" />
            <p>White noise</p>
            <audio src={whiteNoiseAudio} ref={whiteNoiseRef} />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default LeftSidebar;
