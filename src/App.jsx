import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/navbar';
import Footer from './components/layouts/footer';
import Home from './components/layouts/home';
import Future from './components/layouts/future';
import Presence from './components/layouts/presence';
import About from './components/layouts/About'
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
