import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/layouts/navbar';
import Footer from './Components/layouts/footer';
import Home from './pages/home/herosection';
import Register from './pages/register/registraionform';
import Pricing from './pages/marketupdate/pricing';
import { AppProvider } from "./context/appcontext";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/updates" element={<Pricing />}  />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
