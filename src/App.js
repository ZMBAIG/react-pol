import React from "react";
import "./Style/App.css";
import "./Style/Footer.css";
import "./Style/Header.css";
import "./Style/Main.css";
import "./Style/Gallery.css";
import "./Style/Contact.css";
import "./Style/Footer.css";
import "./Style/Youtube.css";
import "./Style/Color.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Youtube from "./components/Youtube";
import Color from "./components/Color";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Gallery />
        <Contact />
        <Footer />
        <Youtube />
        <Color />
      </div>
    );
  }
}

export default App;
