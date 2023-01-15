import React, { useState, useEffect } from "react";
import "../styles/Timer.css";

function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [displayMessage, setDispalyMessage] = useState("");

  const minutesTimer = minutes < 10 ? `0${minutes}` : minutes;
  const secondsTimer = seconds < 10 ? `0${seconds}` : seconds;

  const startTimer = useEffect(() => {
    const interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          setDispalyMessage("Session complete");
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  function resetTimer() {
    setMinutes(0);
    setSeconds(0);
  }

  return (
    <div className="timer-wrapper">
      <div className="top-tab">
        <button className="btn-pomodoro">Pomodoro</button>
        <button className="btn-shortBreak">Short Break</button>
        <button className="btn-longBreak">Long Break</button>
      </div>

      {<h1>{displayMessage}</h1> && (
        <h1 className="displayTimer">
          {minutesTimer}:{secondsTimer}
        </h1>
      )}
      <div className="bottom-tab">
        <button className="btn-start" onClick={startTimer}>
          Start
        </button>
        <button className="btn-stop" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
