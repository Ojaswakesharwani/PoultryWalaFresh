import React from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ReviewsSection = () => {
  return (
    <motion.section
      className="relative w-full py-12 px-6 bg-yellow-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-green-800 mb-10 text-center"
        variants={itemVariants}
      >
        Future of{" "}
        <span className="text-green-600 underline underline-offset-4">
          Poultry Trading
        </span>
      </motion.h2>

      {/* Steps */}
      <motion.div
        className="flex items-center flex-wrap gap-4 mb-12 justify-center"
        variants={containerVariants}
      >
        {["Sign Up", "Get Verified", "Connect & Trade", "Track Deliveries"].map(
          (step, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                className="flex items-center gap-2"
                variants={itemVariants}
              >
                <FaCheckCircle className="text-green-700 text-lg" />
                <span
                  className={`${
                    idx === 3 ? "font-bold" : ""
                  } text-green-900 text-sm md:text-base`}
                >
                  {step}
                </span>
              </motion.div>
              {idx !== 3 && (
                <motion.div
                  className="w-10 h-[2px] bg-green-600"
                  variants={itemVariants}
                ></motion.div>
              )}
            </React.Fragment>
          )
        )}
      </motion.div>

      {/* Main Layout */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {/* Highlight Card */}
        <motion.div
          className="bg-green-700/90 text-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform"
          variants={itemVariants}
        >
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-28 h-28 rounded-full mb-4 border-4 border-yellow-400 shadow-xl"
          />
          <div className="flex items-center gap-1">
            <span className="text-3xl font-bold">4.3</span>
            <FaStar className="text-yellow-400 text-2xl" />
          </div>
          <p className="mt-1 text-yellow-100">433 Reviews</p>

          <h3 className="font-bold text-yellow-300 mt-5 text-lg">
            Aditya Sinha
          </h3>
          <p className="text-sm text-yellow-100 mt-2 text-center italic">
            “Poultrywala helped us double our trade efficiency.”
          </p>
          <p className="text-yellow-200 text-xs mt-3 text-center">
            Verified Trader • Serving 10+ Cities
          </p>
        </motion.div>

        {/* Reviews List */}
        <motion.div
          className="md:col-span-2 space-y-4"
          variants={containerVariants}
        >
          {[
            {
              img: "https://randomuser.me/api/portraits/women/44.jpg",
              name: "Aditya Satisfaction",
              rating: "5.0",
            },
            {
              img: "https://randomuser.me/api/portraits/women/68.jpg",
              name: "Selena Ray",
              rating: "4.0",
            },
            {
              img: "https://randomuser.me/api/portraits/men/20.jpg",
              name: "Vikram Mishra",
              rating: "4.0",
            },
            {
              img: "https://randomuser.me/api/portraits/men/12.jpg",
              name: "Rahul Sharma",
              rating: "4.5",
            },
            {
              img: "https://randomuser.me/api/portraits/women/33.jpg",
              name: "Priya Verma",
              rating: "5.0",
            },
          ].map((review, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-green-600 p-4 rounded-xl flex items-center justify-between shadow hover:shadow-md hover:bg-green-700/80 transition-all"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-14 h-14 rounded-full border-2 border-green-400"
                />
                <div>
                  <p className="font-semibold text-green-900">
                    {review.name}
                  </p>
                  <p className="text-sm text-yellow-300 font-medium">
                    {review.rating} ★
                  </p>
                </div>
              </div>
              <BsArrowRight className="text-green-900 text-xl" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ReviewsSection;
