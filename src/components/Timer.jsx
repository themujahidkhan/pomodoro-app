import React, { useState } from "react";
import "../styles/Timer.css";

function Timer() {
  const [time, setTime] = useState(25 * 60);
  let interval;

  function startTimer() {
    let i = 1500;
    let minutes;
    let secondsRemaining;

    interval = setInterval(decrement, 1000);

    function decrement() {
      i = (i % 9000) - 1;
      minutes = Math.floor(i / 60);
      secondsRemaining = i - minutes * 60;

      setTime([`${minutes} Minutes :`, ` ${secondsRemaining} Seconds`]);
    }
  }

  function resetTimer() {
    clearInterval(interval);
    setTime([25, " : 00"]);
  }

  return (
    <div className="timer-wrapper">
      <div className="top-tab">
        <button className="btn-pomodoro">Pomodoro</button>
        <button className="btn-shortBreak">Short Break</button>
        <button className="btn-longBreak">Long Break</button>
      </div>
      <h1 className="displayTimer">{time}</h1>
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
