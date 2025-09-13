import React from "react";
import Navbar from "./components/layouts/Navbar.jsx";
import Footer from "./components/layouts/Footer.jsx";
import Home from "./components/layouts/Home.jsx";
import Future from "./components/layouts/Future.jsx";
import Presence from "./components/layouts/Presence.jsx";
import About from "./components/layouts/About.jsx";
import Explore from "./components/layouts/Explore.jsx";
import Services from "./components/layouts/Services.jsx";

import LanguagePopup from "./components/layouts/languagepopup.jsx"
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <>
      {/*  Language Selector Popup */}
      <LanguagePopup />

      {/* Common Navbar */}
      <Navbar />

      {/* Scrollable sequence of sections */}
      <div id="home">
        <Home title={t("welcome")} />
      </div>

      <div id="about">
        <About title={t("about")} />
      </div>

      <div id="services">
        <Services title={t("services")} />
      </div>

      <div id="explore">
        <Explore title={t("explore")} />
      </div>

      <div id="future">
        <Future title={t("future")} />
      </div>

      <div id="presence">
        <Presence title={t("presence")} />
      </div>

      {/* Common Footer */}
      <Footer text={t("footer")} />
    </>
  );
}

export default App;
