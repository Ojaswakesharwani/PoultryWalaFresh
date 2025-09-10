import React from "react";
import { motion } from "framer-motion";
import { FaUserCheck, FaFileContract } from "react-icons/fa";
import { MdReviews, MdOutlineRealEstateAgent } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { useTranslation } from "react-i18next";

// import img from "../../assets/App.png";
import pic from "../../assets/Appplay.png";

const Presence = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-b from-yellow-50 to-green-50 px-6 py-14">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-green-900 leading-snug">
              {t("presence_title")}
            </h1>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10"
            >
              <div className="bg-yellow-100 p-5 rounded-xl flex items-center gap-4 hover:bg-yellow-200 transition-all shadow-md">
                <MdOutlineRealEstateAgent className="text-green-700 text-2xl" />
                <span className="font-semibold text-green-900">
                  {t("presence_realtime")}
                </span>
              </div>

              <div className="bg-yellow-100 p-5 rounded-xl flex items-center gap-4 hover:bg-yellow-200 transition-all shadow-md">
                <IoMdPerson className="text-green-700 text-2xl" />
                <span className="font-semibold text-green-900">
                  {t("presence_verified")}
                </span>
              </div>

              <div className="bg-yellow-100 p-5 rounded-xl flex items-center gap-4 hover:bg-yellow-200 transition-all shadow-md">
                <FaUserCheck className="text-green-700 text-2xl" />
                <span className="font-semibold text-green-900">
                  {t("presence_online")}
                </span>
              </div>

              <div className="bg-yellow-100 p-5 rounded-xl flex items-center gap-4 hover:bg-yellow-200 transition-all shadow-md">
                <MdReviews className="text-green-700 text-2xl" />
                <span className="font-semibold text-green-900">
                  {t("presence_reviews")}{" "}
                  <span className="text-xs text-gray-600">(941:03027)</span>
                </span>
              </div>

              <div className="bg-yellow-100 p-5 rounded-xl flex items-center gap-4 hover:bg-yellow-200 transition-all shadow-md sm:col-span-2">
                <FaFileContract className="text-green-700 text-2xl" />
                <span className="font-semibold text-green-900">
                  {t("presence_contracts")}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center gap-6"
          >
    
            <div className="relative p-3 rounded-2xl shadow-lg bg-white w-1/2 max-w-xs hover:scale-105 transition-transform">
              <img
                src={pic}
                className="w-full h-auto object-contain rounded-lg"
                alt="App preview"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Presence;
