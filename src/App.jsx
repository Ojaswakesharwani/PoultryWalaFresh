import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Navbar from './Components/layouts/navbar';
import Footer from './Components/layouts/footer';
import Home from './Components/layouts/home';
import Future from './Components/layouts/Future';
import Presence from './Components/layouts/presence';
import About from './Components/layouts/About'
import Explore from './pages/Explore';
import Services from './pages/Services';
// import { AppProvider } from "./context/appcontext";

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
