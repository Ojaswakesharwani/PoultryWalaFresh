import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/navbar.jsx';
import Footer from './components/layouts/footer.jsx';
import Home from './components/layouts/home.jsx';
import Future from './components/layouts/future.jsx';
import Presence from './components/layouts/presence.jsx';
import About from './components/layouts/about.jsx';
import Explore from './pages/Explore.jsx';
import Services from './pages/Services.jsx';

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
