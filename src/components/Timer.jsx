import React, { useState } from "react";
import "../styles/Timer.css";

function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  const minutesTimer = minutes < 10 ? `0${minutes}` : minutes;
  const secondsTimer = seconds < 10 ? `0${seconds}` : seconds;

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
      <h1 className="displayTimer">
        {minutesTimer}:{secondsTimer}
      </h1>
      <div className="bottom-tab">
        <button
          className="btn-start"
          onClick={() => {
            alert("clicked");
          }}
        >
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
