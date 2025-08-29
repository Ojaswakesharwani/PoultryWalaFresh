import React from "react";

import Navbar from "./components/layouts/Navbar.jsx";
import Footer from "./components/layouts/Footer.jsx";
import Home from "./components/layouts/Home.jsx";
import Future from "./components/layouts/Future.jsx";
import Presence from "./components/layouts/Presence.jsx";
import About from "./components/layouts/About.jsx";
import Explore from "./components/layouts/Explore.jsx";
import Services from "./components/layouts/Services.jsx";

function App() {
  return (
    <>
      {/* Common Navbar (always visible) */}
      <Navbar />

      {/* Scrollable sequence of sections */}
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="explore">
        <Explore />
      </div>

      <div id="future">
        <Future />
      </div>

      <div id="presence">
        <Presence />
      </div>

      {/* Common Footer (always visible) */}
      <Footer />
    </>
  );
}

export default App;
