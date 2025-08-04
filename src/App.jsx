import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/layouts/navbar';
import Footer from './Components/layouts/footer';
import Home from './Components/layouts/home';
import Register from './Components/layouts/registraionform';
import Pricing from './Components/layouts/pricing';
import About from './Components/layouts/About'
// import { AppProvider } from "./context/appcontext";

function App() {
  return (
    // <AppProvider>
    //   <Router>
    //     <div className="min-h-screen flex flex-col">
    //       <Navbar />
    //       <main className="flex-grow">
    //         <Routes>
    //           <Route path="/" element={<Home />} />
    //           <Route path="/register" element={<Register />} />
    //           <Route path="/updates" element={<Pricing />}  />
    //         </Routes>
    //       </main>
    //       <Footer />
    //     </div>
    //   </Router>
    // </AppProvider>


      <>
      <Navbar />
      <Home />
      <About />
      <Register />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
