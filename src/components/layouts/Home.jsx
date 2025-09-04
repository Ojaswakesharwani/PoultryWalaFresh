import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";  // ✅ add
import bgpic from "../../assets/hero-bg-img.jpg";
import video from "../../assets/vidieo1.mp4";
import Modal from "../../components/layouts/Modal";   
import Registration from "./Registration.jsx";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation(); // ✅ useTranslation hook
  const closeModal = () => setOpenModal(false);  

  return (
    <section id="home-section" className="relative w-full min-h-full flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{ backgroundImage: `url(${bgpic})` }}
      ></div>

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-green-900/60 z-10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-5 items-center justify-between px-6 lg:px-10 py-10 lg:py-22 text-white">
        
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4"
          >
            <p className="text-orange-300 font-semibold text-5xl sm:text-4xl tracking-wide">
              {t("home.tagline")} {/* ✅ */}
            </p>
            <p className="text-gray-200 text-lg sm:text-2xl font-semibold mt-2">
              {t("home.subTagline")} {/* ✅ */}
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-5xl font-bold leading-snug mt-4"
          >
            {t("home.heading")} {/* ✅ */}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-gray-100 sm:text-lg leading-relaxed"
          >
            {t("home.subtext")} {/* ✅ */}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-8"
          >
            <div className="mt-6 mb-13">
              <p className="text-gray-200 text-lg font-medium mb-3 pb-10">
                {t("home.registerText")} {/* ✅ */}
              </p>
              <button
                onClick={() => setOpenModal(true)}
                className="inline-block px-10 py-4 bg-yellow-400 hover:bg-yellow-500 
                           text-green-900 font-bold rounded-lg shadow-md 
                           transition-transform transform hover:scale-105 mr-3"
              >
                {t("home.registerBtn")} {/* ✅ */}
              </button>
              <button
                onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=com.poultrywala.app'} // Link to Google Play
                className="inline-block px-10 py-4 bg-green-600 hover:bg-green-700 
                           text-green-900 hover:text-green-950 font-bold rounded-lg shadow-md 
                           transition-transform transform hover:scale-105 ml-3"
              >
                {t("home.appBtn")} {/* ✅ */}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Section - Transparent Video */}
        <div className="w-full lg:w-1/2 mb-10 mt-8 lg:mt-2 lg:mb-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-5xl aspect-w-18 aspecth-12 rounded-xl shadow-2xl overflow-hidden relative"
          >
            {/* Transparent overlay on video */}
            <div className="absolute inset-0 bg-black/30 z-10 rounded-xl"></div>

            <motion.video
              initial={{ scale: 1.03 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full h-full object-cover rounded-xl opacity-100 z-100"
              autoPlay
              loop
              playsInline
            >
              <source src={video} type="video/mp4" />
            </motion.video>
          </motion.div>
        </div>
      </div>

      {/* ✅ Modal with Registration form */}
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <Registration />
      </Modal>
    </section>
  );
};

export default Home;
