import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTruck, FaCheckCircle, FaHandshake, FaMapMarkedAlt } from "react-icons/fa";
import Modal from "./Modal";
import Registration from "./Registration.jsx";
import img from "../../assets/hero-bg.jpg";
import { useTranslation } from "react-i18next";

const Services = () => {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="w-full overflow-x-hidden font-sans">
      {/* HERO + OUR SERVICES */}
      <section
        id="services-section"
        className="relative bg-gradient-to-b from-yellow-50 to-yellow-100 text-green-800 flex flex-col items-center justify-center px-6 py-20 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          {t("services.heroTitle")}{" "}
          <span className="text-yellow-300">{t("services.heroHighlight")}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-green-800"
        >
          {t("services.heroSubtitle")}
        </motion.p>

        {/* OUR SERVICES */}
        <div className="max-w-6xl mx-auto text-center mt-16">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-800 mb-12">
            {t("services.ourServices")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHandshake className="text-green-800 text-4xl mx-auto mb-4" />,
                title: t("services.card1Title"),
                desc: t("services.card1Desc"),
              },
              {
                icon: <FaCheckCircle className="text-green-800 text-4xl mx-auto mb-4" />,
                title: t("services.card2Title"),
                desc: t("services.card2Desc"),
              },
              {
                icon: <FaTruck className="text-green-800 text-4xl mx-auto mb-4" />,
                title: t("services.card3Title"),
                desc: t("services.card3Desc"),
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-green-600 backdrop-blur-md rounded-xl shadow-md hover:text-yellow-100 transition"
              >
                {service.icon}
                <h3 className="font-semibold text-lg text-green-900">{service.title}</h3>
                <p className="text-sm text-yellow-50 mt-2">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NETWORK */}
      <section className="relative py-20 px-6 bg-green-600/90">
        <div className="absolute inset-0">
          <img src={img} alt="background" className="w-full h-full object-cover opacity-50" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("services.networkTitle")}
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-yellow-400 text-lg">
            {t("services.networkText")}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t("services.cities", { returnObjects: true }).map((city, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-amber-100 p-4 rounded-lg shadow hover:bg-yellow-200 transition"
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
            {t("services.ctaTitle")}
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-yellow-100 text-lg">
            {t("services.ctaText")}
          </p>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-yellow-400 text-green-900 px-10 py-4 rounded-lg font-bold hover:bg-yellow-500 transition transform hover:scale-105 active:scale-95"
          >
            {t("services.ctaBtn")}
          </button>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <Registration />
      </Modal>
    </div>
  );
};

export default Services;
