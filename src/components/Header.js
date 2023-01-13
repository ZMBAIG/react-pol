import React from "react";
import logo from "./images/Politie-logo-269952DA5A-seeklogo.com.png";
function Header(props) {
  return (
    <header>
      <nav class="navigation">
        {/* <div className="nav-left"> */}
        <a href="/">Home</a>
        {/* <a href="/">Aangifte doen</a> */}
        <a href="/">Lorem</a>
        {/* <a href="/">Mijn buurt</a> */}
        <a href="/">Lorem</a>

        <a href="https://www.nu.nl/" target="__blank">
          Nieuws
        </a>
        {/* </div> */}
        <img id="pol-logo" alt="pic" src={logo} />
        {/* <a href="/">Gezocht & Vermist</a> */}

        {/* <div className="nav-right"> */}
        <a href="/">Lorem</a>
        <a href="/">Lorem</a>
        <a href="/">Lorem</a>
        <div class="dropdown">
          <a class="dropbtn" href="/">
            Lorem
          </a>
          <div class="dropdown-content">
            <a href="/">Link One</a>
            <a href="/">Link Two</a>
            <a href="/">Link Three</a> <a href="/">Link Four</a>
            <a href="/">Link Five</a>
          </div>{" "}
        </div>
        {/* <input type="search" placeholder="Zoek..." class="header__logo" /> */}

        {/* <div class="header__logo">
            <input type="search" placeholder="Zoek..." />
          </div> */}
        {/* </div> */}
      </nav>
    </header>
  );
}

export default Header;
