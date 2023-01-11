import React from "react";
import "../styles/Header.css";
import Logo from "../assets/logo.svg";
function Header() {
  return (
    <div className="navbar">
      <div className="site-logo">
        <img src={Logo} />
      </div>
      <div className="nav-links">
        <a href="">What is Pomodoro Technique?</a>
      </div>
    </div>
  );
}

export default Header;
