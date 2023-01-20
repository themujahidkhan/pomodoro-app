import React from "react";
import logo from "../assets/logo.svg";
import "../App.css";

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
