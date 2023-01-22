import React, { useState, useEffect } from "react";

import "../App.css";

function Timer() {
  const [time, setTime] = useState(1500);
  const [progress, setProgress] = useState(1500);

  const [isActive, setIsActive] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
        setProgress((progress) => progress - 1);
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

  // It will start, and stop the timer
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  // It will reset the timer
  const resetTimer = () => {
    setIsActive(false);
    setTime(1500);
  };

  return (
    <>
      <div className="timer-wrapper">
        <div className="top-tab">
          <button className="btn-pomodoro">Pomodoro</button>
          <button className="btn-shortBreak">Short Break</button>
          <button className="btn-longBreak">Long Break</button>
        </div>

        <h1 className="displayTimer">{getTime(time)}</h1>

        <div className="bottom-tab">
          <button
            className="btn-start"
            style={{
              backgroundColor: isActive ? "red" : "green",
              color: "white",
            }}
            onClick={toggleActive}
          >
            {isActive ? "Pause" : "Start"}
          </button>

          <button className="btn-reset" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Timer;
