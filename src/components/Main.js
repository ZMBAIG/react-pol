import React from "react";
function Main(props) {
  return (
    <main>
      {" "}
      <h1>Goedemorgen, waarmee kunnen wij u helpen?</h1>{" "}
      <input type="search" placeholder="Zoek..." class="header__logo" />
      <div>
        <span class="spoed">
          <i class="fa fa-phone"></i> Bij spoed: 112 Geen spoed: 0900 8844
        </span>
      </div>
      <article class="article">
        <a
          href="https://en.wikipedia.org/wiki/National_Police_Corps_(Netherlands)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            {/* Aangifte of melding doen */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <i class="fa fa-angle-double-right"></i>
          </p>
        </a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          {/* Mag ik vuurwerk bewaren tot volgende jaar? */}
          <i class="fa fa-angle-double-right"></i>
        </p>
        <p>
          {/* Word agent!  */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <i class="fa fa-angle-double-right"></i>
        </p>
        <p>
          {/* Is lachgas toegestaan?  */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <i class="fa fa-angle-double-right"></i>
        </p>
        <p>
          {/* Aanmelden Camera in Beeld  */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <i class="fa fa-angle-double-right"></i>
        </p>
        <p>
          {/* Moet ik op een snorefiets een helm dragen */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <i class="fa fa-angle-double-right"></i>
        </p>
      </article>
    </main>
  );
}

export default Main;
