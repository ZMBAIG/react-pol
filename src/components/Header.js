import React from "react";
import logo from "./images/Politie-logo-269952DA5A-seeklogo.com.png";
function Header(props) {
  return (
    <header>
      <nav class="navigation">
        <a href="/">Home</a>
        <a href="/">Aangifte of melding doen</a>
        <a href="https://www.nu.nl/" target="__blank">
          Nieuws
        </a>
        <img id="pol-logo" alt="pic" src={logo} />
        <a href="/">Lorem</a>
        <a href="/">Lorem</a>
        <div class="dropdown">
          <button class="dropbtn">
            Onderwerpen<i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="/">Link One</a>
            <a href="/">Link Two</a>
            <a href="/">Link Three</a> <a href="/">Link Four</a>
            <a href="/">Link Five</a>
          </div>{" "}
        </div>
        <a href="/">Lorem</a>
      </nav>
    </header>
  );
}

export default Header;
