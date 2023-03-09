import "../App.css";

import React from "react";

function Header() {
  return (
    <div className="navbar">
      <div className="site-logo">
        <img src={logo} />
      </div>
      <div className="nav-links">
        <a href="">What is Pomodoro Technique?</a>
      </div>
    </div>
  );
}

export default Header;
