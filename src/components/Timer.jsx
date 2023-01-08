import React, { useState } from "react";

function Timer() {
  const [time, setTime] = useState([`${25} Minutes`, " : 00 Seconds"]);
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

      if (minutes === 0 && secondsRemaining === 0) {
        clearInterval(interval);
        alert("Time is up");
      }
    }
  }

  function resetTimer() {
    clearInterval(interval);
    setTime([25, " : 00"]);
  }

  return (
    <div>
      <div>
        <button>Pomodoro</button>
        <button>Short Break</button>
        <button>Long Break</button>
      </div>
      <h1>{time}</h1>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
