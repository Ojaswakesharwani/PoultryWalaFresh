import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layouts/Navbar.jsx";
import Footer from "./components/layouts/Footer.jsx";
import Home from "./components/layouts/Home.jsx";
import Future from "./components/layouts/Future.jsx";
import Presence from "./components/layouts/Presence.jsx";
import About from "./components/layouts/About.jsx";
import Explore from "./pages/Explore.jsx";
import Services from "./pages/Services.jsx";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
