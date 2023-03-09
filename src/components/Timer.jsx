import { useEffect, useRef, useState } from "react";

import resetIcon from "../assets/reset-icon.svg";

function Timer() {
  const [time, setTime] = useState(1500);
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => (time >= 1 ? time - 1 : 0));
        const progressValue = Math.floor(((1500 - time) / 1500) * 100);
        setProgress(progressValue);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, isActive, reset]);

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

  const resetTimer = () => {
    setIsActive(false);
    setTime(1500);
    setProgress(0);
  };

  const shortBreak = () => {
    setTime(300);
  };
  const longBreak = () => {
    setTime(600);
  };

  return (
    <div className=" overflow-hidden flex flex-col justify-center items-center align-middle h-screen bg-[url('https://i.imgur.com/2kJHylF.gif')]  bg-cover object-cover">
      <div className="text-center text-white">
        {/* <div className="bg-white">
          <div className={`w-[${progress}%] h-2 my-8`}></div>
        </div> */}
        <div className="space-x-8 my-2 md:my-4 lg:my-8">
          <button className="rounded-full border-4 p-2 text-sm md:text-md lg:text-lg xl:text-xl  ">
            Pomodoro
          </button>
          <button
            className="rounded-full p-2 text-sm md:text-md lg:text-lg xl:text-xl"
            onClick={shortBreak}
          >
            Short Break
          </button>
          <button
            className="rounded-full p-2 text-sm md:text-md lg:text-lg xl:text-xl"
            onClick={longBreak}
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
          <button className="px-4 py-2 " onClick={resetTimer}>
            <img src={resetIcon} alt="reset-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
