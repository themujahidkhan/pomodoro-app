import { useEffect, useRef, useState } from "react";

import Confetti from "react-confetti";
import RightSidebar from "./RightSidebar";
import { Spotify } from "react-spotify-embed";
import resetIcon from "../assets/reset-icon.svg";
import useWindowSize from "react-use/lib/useWindowSize";

function Timer() {
  const [time, setTime] = useState(1500);
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [isSelected, setIsSelected] = useState(1);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => (time >= 1 ? time - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    } else if (time === 0) {
      setIsConfettiActive(true);
      setTime(1500);
      setIsActive(false);
      setTimeout(() => {
        setIsConfettiActive(false);
      }, 5000);
    }
  }, [time, isActive]);

  const getTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const handleTimers = (index) => {
    if (index === 1) {
      setTime(1500);
      setIsSelected(index);
    } else if (index === 2) {
      setTime(300);
      setIsSelected(index);
    } else if (index === 3) {
      setTime(600);
      setIsSelected(index);
    }
  };

  return (
    <div className=" overflow-hidden relative grid grid-flow-col grid-cols-3  gap-8 px-16  justify-center items-center align-middle h-screen bg-[url('https://i.imgur.com/2kJHylF.gif')]  bg-cover object-cover">
      {isConfettiActive && <Confetti width={width} height={height} />}
      <div className="invisible h-full w-full" />

      <div className="text-center text-white">
        <div className="space-x-8 my-2 md:my-4 lg:my-8">
          <button
            className={
              isSelected === 1
                ? "rounded-full bg-white text-black font-bold  p-2 text-sm md:text-md lg:text-lg xl:text-xl"
                : "rounded-full p-2 text-sm md:text-md lg:text-lg xl:text-xl"
            }
            onClick={() => handleTimers(1)}
          >
            Pomodoro
          </button>
          <button
            className={
              isSelected === 2
                ? "rounded-full bg-white text-black font-bold  p-2 text-sm md:text-md lg:text-lg xl:text-xl"
                : "rounded-full p-2 text-sm md:text-md lg:text-lg xl:text-xl"
            }
            onClick={() => handleTimers(2)}
          >
            Short Break
          </button>
          <button
            className={
              isSelected === 3
                ? "rounded-full bg-white text-black font-bold   p-2 text-sm md:text-md lg:text-lg xl:text-xl"
                : "rounded-full p-2 text-sm md:text-md lg:text-lg xl:text-xl"
            }
            onClick={() => handleTimers(3)}
          >
            Long Break
          </button>
        </div>

        <h2 className="text-lg md:text-5xl lg:text-7xl xl:text-9xl xl:font-bold my-2">
          {getTime(time)}
        </h2>

        <div className="space-x-5 items-center">
          <button
            className="px-4 py-2 rounded-full border-4 border-white hover:bg-white hover:text-black  "
            onClick={toggleActive}
          >
            {isActive ? "Pause" : "Start"}
          </button>
          <button
            className="px-4 py-2 "
            onClick={() => handleTimers(isSelected)}
          >
            <img src={resetIcon} alt="reset-icon" />
          </button>
        </div>
      </div>
      <RightSidebar />
      <Spotify
        className="absolute bottom-8 left-16"
        height={200}
        link="https://open.spotify.com/playlist/3vXUEGi4ip1EhI9OtdgdCy?si=49677e78d2cb4733"
      />
    </div>
  );
}

export default Timer;
