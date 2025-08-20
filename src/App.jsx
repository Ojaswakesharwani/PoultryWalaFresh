import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/layouts/Navbar.jsx";
import Footer from "./Components/layouts/Footer.jsx";
import Home from "./Components/layouts/home.jsx";
import Future from "./Components/layouts/future.jsx";
import Presence from "./Components/layouts/Presence.jsx";
import About from "./Components/layouts/About.jsx";
import Explore from "./pages/Explore.jsx";
import Services from "./pages/Services.jsx";

function App() {
  return (
    <>
      {/* Common Navbar (always visible) */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        {/* Home page (scrollable sections) */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Future />
              <Presence />
            </>
          }
        />

        {/* Dedicated pages */}
        <Route path="/explore" element={<Explore />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      {/* Common Footer (always visible) */}
      <Footer />
    </>
  );
}

export default App;
