import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaTruck,
  FaCheckCircle,
  FaHandshake,
  FaMapMarkedAlt,
} from "react-icons/fa";
import Modal from "./Modal"
import Registration from "./Registration.jsx"
import img from "../../assets/hero-bg.jpg"

const Services = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-full overflow-x-hidden font-sans">
      {/* HERO + OUR SERVICES */}
      <section className="relative bg-gradient-to-b from-yellow-50 to-yellow-100 text-green-800 flex flex-col items-center justify-center px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Poultrywala – Connecting{" "}
          <span className="text-yellow-300">Traders & Farmers</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-green-800"
        >
          Buy and sell broiler hens directly from trusted traders & farmers.  
          Verified profiles, transparent rates & quality-controlled deliveries.
        </motion.p>

        {/* OUR SERVICES */}
        <div className="max-w-6xl mx-auto text-center mt-16">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-800 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <FaHandshake className="text-green-800 hover:text-green-900 text-4xl mx-auto mb-4" />
                ),
                title: "Trading Platform",
                desc: "Seamless connection between buyers & traders with verified profiles for trustworthy deals.",
              },
              {
                icon: (
                  <FaCheckCircle className="text-green-800 hover:text-green-900 text-4xl mx-auto mb-4" />
                ),
                title: "Quality Control",
                desc: "Every batch checked for quality before delivery, ensuring only the best poultry reaches you.",
              },
              {
                icon: (
                  <FaTruck className="text-green-800 hover:text-green-900 text-4xl mx-auto mb-4" />
                ),
                title: "Delivery Network",
                desc: "Fast deliveries from nearest verified farms with real-time tracking.",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-green-600 backdrop-blur-md rounded-xl shadow-md hover:text-yellow-100 transition"
              >
                {service.icon}
                <h3 className="font-semibold text-lg text-green-900 hover:text-green-900">
                  {service.title}
                </h3>
                <p className="text-sm text-yellow-50 mt-2">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NETWORK with background image & opacity */}
      <section className="relative py-20 px-6 bg-green-600/90 ">
        {/* Background Image with opacity */}
        <div className="absolute inset-0">
          <img
            src={img}
            alt="background image"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        {/* Content above image */}
        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Farmers & Traders Network
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-yellow-400 text-lg">
            We connect buyers to thousands of farmers & traders across India.  
            Find the nearest verified poultry source at transparent rates.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Delhi",
              "Mumbai",
              "Lucknow",
              "Hyderabad",
              "Kolkata",
              "Jaipur",
              "Chennai",
              "Bengaluru",
            ].map((city, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-green-50 p-4 rounded-lg shadow hover:bg-yellow-200  transition"
              >
                <FaMapMarkedAlt className="text-green-700 text-2xl mx-auto mb-2" />
                <p className="font-semibold text-gray-800">{city}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative py-16 text-center text-white px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Trading?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-yellow-100 text-lg">
            Join thousands of farmers & traders who trust Poultrywala for reliable poultry trading.
          </p>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-yellow-400 text-green-900 px-10 py-4 rounded-lg font-bold hover:bg-yellow-500 transition transform hover:scale-105 active:scale-95"
          >
            Register Now
          </button>
        </div>
      </section>

      {/* Modal with Registration form */}
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <Registration />
      </Modal>
    </div>
  );
};

export default Services;
