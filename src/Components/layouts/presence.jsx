import React from "react";
import { motion } from "framer-motion";
import { FaSignInAlt, FaUserCheck, FaFileContract } from "react-icons/fa";
import { MdReviews, MdOutlineRealEstateAgent } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import img from "../../assets/App.png";
import pic from "../../assets/App-1.png";

const Presence = () => {
  return (
    <section className="bg-yellow-50 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-green-900 leading-snug">
              10K+ Downloads <br /> on Android & iOS
            </h1>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button className="bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-green-800 transition font-medium shadow">
                <FaSignInAlt /> Sign Up
              </button>
              <button className="bg-yellow-400 text-green-900 px-6 py-3 rounded-xl flex items-center gap-2 font-semibold hover:bg-yellow-500 transition shadow">
                26 Age
              </button>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10"
            >
              <div className="bg-yellow-100 p-5 rounded-xl flex items-center gap-3 hover:bg-yellow-200 transition shadow-sm">
                <MdOutlineRealEstateAgent className="text-green-700 text-2xl" />
                <span className="font-semibold text-green-900">
                  Real Time Trading
                </span>
              </div>

              <div className="bg-yellow-100 p-5 rounded-xl flex items-center gap-3 hover:bg-yellow-200 transition shadow-sm">
                <IoMdPerson className="text-green-700 text-2xl" />
                <span className="font-semibold text-green-900">
                  Verified Profiles
                </span>
              </div>

              <div className="bg-yellow-100 p-5 rounded-xl flex items-center gap-3 hover:bg-yellow-200 transition shadow-sm">
                <FaUserCheck className="text-green-700 text-2xl" />
                <span className="font-semibold text-green-900">
                  Online Profiles
                </span>
              </div>

              <div className="bg-yellow-100 p-5 rounded-xl flex items-center gap-3 hover:bg-yellow-200 transition shadow-sm">
                <MdReviews className="text-green-700 text-2xl" />
                <span className="font-semibold text-green-900">
                  All Reviews{" "}
                  <span className="text-xs text-gray-600">(941:03027)</span>
                </span>
              </div>

              <div className="bg-yellow-100 p-5 rounded-xl flex items-center gap-3 hover:bg-yellow-200 transition shadow-sm sm:col-span-2">
                <FaFileContract className="text-green-700 text-2xl" />
                <span className="font-semibold text-green-900">
                  Digital Contracts
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
            <div className="relative p-2 rounded-2xl shadow-xl bg-white w-1/2 max-w-xs">
              <img
                src={img}
                className="w-full h-auto object-contain rounded-lg"
                alt="App preview"
              />
            </div>
            <div className="relative p-2 rounded-2xl shadow-xl bg-white w-1/2 max-w-xs">
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
