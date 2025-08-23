import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaCheckCircle, FaHandshake, FaMapMarkedAlt, FaStar } from "react-icons/fa";
import { useState } from "react";
import Modal from "../components/layouts/Modal";
import Registration from "./Registration";


const Services = () => {
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false); // Function for closing modal  
  

  return (
    <div className="w-full overflow-x-hidden">
        
      {/* HERO */}
      <section className="relative  opacity-90  bg-green-600 text-white flex flex-col items-center justify-center px-4 py-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl text-green-950 md:text-6xl font-bold leading-tight"
        >
          Poultrywala – Connecting <span className="text-yellow-500">Traders & Farmers</span> Across India
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-emerald-900"
        >
          Buy and sell broiler hens directly from trusted traders & farmers. 
          Verified profiles, transparent rates, and quality-controlled deliveries.
        </motion.p>
    
      </section>

    

      {/* SERVICES */}
      <section className="py-8 bg-yellow-100 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-semibold text-green-800 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition hover:bg-green-500 hover:opacity-90">
              <FaHandshake className="text-emerald-800 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Trading Platform</h3>
              <p className="text-sm text-gray-600 mt-2">
                Connect buyers and traders seamlessly. Verified farmers & traders ensure trustworthy deals.
              </p>
            </motion.div>
            <motion.div className="p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition  hover:bg-green-500 hover:opacity-90">
              <FaCheckCircle className="text-emerald-800 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Quality Control</h3>
              <p className="text-sm text-gray-600 mt-2">
                Every batch is checked for quality assurance before delivery, ensuring the best poultry.
              </p>
            </motion.div>
            <motion.div className="p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition  hover:bg-green-500 hover:opacity-90">
              <FaTruck className="text-emerald-800 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Delivery Network</h3>
              <p className="text-sm text-gray-600 mt-2">
                Fast delivery from the nearest verified location. Track orders in real-time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FARMER/TRADER NETWORK */}
      <section className="py-5 bg-green-600  px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-950 mb-5">
            Farmers & Traders Network
          </h2>
          <p className="max-w-2xl mx-auto text-gray-950 mb-4">
            We connect buyers to thousands of farmers and traders across multiple locations in the country.
            Find the nearest verified poultry source at transparent rates.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Delhi", "Mumbai", "Lucknow", "Hyderabad", "Kolkata", "Jaipur", "Chennai", "Bengaluru"].map((city, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-4 rounded-lg shadow z-0 hover:bg-yellow-200 hover:scale-105 hover:text-green-800 transition"
              >
                <FaMapMarkedAlt className="text-green-700 z-10  text-3xl mx-auto mb-2 group-hover:text-white" />
                <p className="font-semibold">{city}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-8 bg-green-600 text-yellow-500 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Trading?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 font-semibold text-gray-950 text-lg">
          Join thousands of buyers, farmers, and traders who trust Poultrywala for reliable poultry trading.
        </p>
        <button
        onClick={() => setOpenModal(true)}
        className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold hover:scale-105 active:scale-95 hover:bg-yellow-500 transition">
          Register Now
        </button>
      </section>
      {/* ✅ Modal with Registration form */}
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <Registration />
      </Modal>
    </div>
  );
};

export default Services;
