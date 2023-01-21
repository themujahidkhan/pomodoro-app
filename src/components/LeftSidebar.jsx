import React from "react";
import "../App.css";

function LeftSidebar() {
  return (
    <div>
      <div className="music-wrapper">
        <h1>Music</h1>
        <div className="music-card">
          <div className="card-nature">Nature</div>
          <div className="card-lofi">Lofi</div>
          <div className="card-whiteNoise">White Noise</div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
