import React from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const ReviewsSection = () => {
  return (
    <motion.section
      className="bg-yellow-50 py-12 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="bg-yellow-100 shadow-lg rounded-lg p-6"
        variants={itemVariants}
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Top Progress */}
          <motion.h2
            className="text-3xl font-bold text-green-900 mb-4"
            variants={itemVariants}
          >
            Future of <span className="text-green-700">Poultry Trading</span>
          </motion.h2>

          <motion.div
            className="flex items-center flex-wrap gap-4 mb-10 flex-col md:flex-row justify-center"
            variants={containerVariants}
          >
            {[
              "Sign Up",
              "Get Verified",
              "Connect & Connect & Trade",
              "Track Deliveries",
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <motion.div
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <FaCheckCircle className="text-green-700 text-lg" />
                  <span
                    className={`${
                      idx === 3 ? "font-bold" : ""
                    } text-green-900 text-sm`}
                  >
                    {step}
                  </span>
                </motion.div>
                {idx !== 3 && (
                  <motion.div
                    className="w-10 h-[2px] bg-green-700"
                    variants={itemVariants}
                  ></motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* User Reviews */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {/* Left Card */}
          <motion.div
            className="bg-green-700 text-white p-6 rounded-lg flex flex-col items-center justify-center hover:scale-105 transition-transform"
            variants={itemVariants}
          >
            <div className="bg-green-600 w-20 h-20 rounded-full mb-4"></div>
            <div className="flex items-center gap-1">
              <span className="text-3xl font-bold">43</span>
              <FaStar className="text-yellow-400 text-2xl" />
            </div>
            <p className="mt-1">433</p>
            <p className="mt-2 text-sm">UNH 2A77</p>
          </motion.div>

          {/* Middle Highlight Review */}
          <motion.div
            className="bg-yellow-100 p-6 rounded-lg hover:scale-105 transition-transform"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2 mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
            </div>
            <h3 className="font-bold text-green-900">Aditya Sinha</h3>
            <p className="text-green-800 text-sm mt-1">
              “Poultrywala helped us double our trade efficiency thin”
            </p>
            <p className="text-green-700 text-xs mt-3">
              Ravee, Misha <br /> // 1B 500g Stis
            </p>
          </motion.div>

          {/* Right List of Reviews */}
          <motion.div className="space-y-3" variants={containerVariants}>
            {[
              {  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D", name: "Aditya satisfaction", rating: "5.0" },
              {  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D", name: "Selena Ray", rating: "4.0" },
              {  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D", name: "Vikram Mishra", rating: "4.0" },
            ].map((review, idx) => (
              <motion.div
                key={idx}
                className="bg-yellow-100 p-3 rounded-lg flex items-center justify-between hover:bg-green-600 hover:scale-[1.02] transition-transform p-2"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-600 w-12 h-12 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-green-900">{review.name}</p>
                    <p className="text-green-800 text-sm">
                      {review.rating} stars
                    </p>
                  </div>
                </div>
                <BsArrowRight className="text-green-700 text-xl" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ReviewsSection;
