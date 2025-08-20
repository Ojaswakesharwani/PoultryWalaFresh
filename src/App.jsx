import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar.jsx';
import Footer from './components/layouts/Footer.jsx';
import Home from './Components/layouts/home.jsx';
import Future from './Components/layouts/future.jsx';
import Presence from './components/layouts/Presence.jsx';
import About from "./Components/layouts/About.jsx"
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
