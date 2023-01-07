import React, { useState } from "react";

function Timer() {
  const [timer, settimer] = useState("25:00");
  function startTimer() {}

  return (
    <div>
      <div>
        <button>Pomodoro</button>
        <button>Short Break</button>
        <button>Long Break</button>
      </div>
      <h1>{timer}</h1>
      <div>
        <button>Start</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
