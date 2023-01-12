import React from "react";
import logo from "./images/Politie-logo-269952DA5A-seeklogo.com.png";
function Header(props) {
  return (
    <header>
      <nav class="navigation">
        <a href="/">Home</a>
        <a href="/">Aangifte doen</a>
        <a href="/">Mijn buurt</a>
        <a href="https://www.nu.nl/" target="__blank">
          Nieuws
        </a>
        <img id="pol-logo" alt="pic" src={logo} />
        <a href="/">Gezocht & Vermist</a>
        <div class="dropdown">
          <a class="dropbtn" href="/">
            Onderwerpen
          </a>
          <div class="dropdown-content">
            <a href="/">Link One</a>
            <a href="/">Link Two</a>
            <a href="/">Link Three</a> <a href="/">Link Four</a>
            <a href="/">Link Five</a>
          </div>
        </div>
        <div class="header__logo">
          <input type="search" placeholder="Zoek..." />
        </div>
      </nav>
    </header>
  );
}

export default Header;
