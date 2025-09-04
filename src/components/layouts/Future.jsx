import React, { useState } from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const steps = [
    t("future_steps.signUp"),
    t("future_steps.verify"),
    t("future_steps.connect"),
    t("future_steps.track"),
  ];

  // ✅ Farmers with realistic pics + i18n strings
  const reviews = [
    {
      img: "https://images.unsplash.com/photo-1749367494185-a41c68e8a8cb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwcG91bHRyeSUyMGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D", // Indian farmer
      name: t("future_reviews.0.name"),
      rating: "4.5",
      fullReview: t("future_reviews.0.fullReview"),
      info: t("future_reviews.0.info"),
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1718570264200-d5b480d0afcd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxpbmRpYW4lMjBwb3VsdHJ5JTIwZmFybWVyfGVufDB8fDB8fHww", // Poultry farmer
      name: t("future_reviews.1.name"),
      rating: "4.7",
      fullReview: t("future_reviews.1.fullReview"),
      info: t("future_reviews.1.info"),
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1753983550028-b967712baaaf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMHBvdWx0cnklMjBmYXJtZXJ8ZW58MHx8MHx8fDA%3D", // Dairy village farmer
      name: t("future_reviews.2.name"),
      rating: "4.2",
      fullReview: t("future_reviews.2.fullReview"),
      info: t("future_reviews.2.info"),
    },
    {
      img: "https://images.unsplash.com/photo-1640677114404-35eaffa961f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGluZGlhbiUyMHBvdWx0cnklMjBmYXJtZXJ8ZW58MHx8MHx8fDA%3D", // Farmer with hens
      name: t("future_reviews.3.name"),
      rating: "4.8",
      fullReview: t("future_reviews.3.fullReview"),
      info: t("future_reviews.3.info"),
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1718570264126-48594b527c85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxpbmRpYW4lMjBwb3VsdHJ5JTIwZmFybWVyfGVufDB8fDB8fHww", // Village woman farmer
      name: t("future_reviews.4.name"),
      rating: "4.6",
      fullReview: t("future_reviews.4.fullReview"),
      info: t("future_reviews.4.info"),
    },
  ];

  const [selectedReview, setSelectedReview] = useState(reviews[0]);

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
        {t("future_title")}{" "}
        <span className="text-green-600 underline underline-offset-4">
          {t("future_highlight")}
        </span>
      </motion.h2>

      {/* Steps */}
      <motion.div
        className="flex items-center flex-wrap gap-4 mb-12 justify-center"
        variants={containerVariants}
      >
        {steps.map((step, idx) => (
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
        ))}
      </motion.div>

      {/* Main Layout */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {/* Highlight Card */}
        <motion.div
          className="bg-green-700/90 text-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center"
          variants={itemVariants}
        >
          <img
            src={selectedReview.img}
            alt={selectedReview.name}
            className="w-32 h-32 rounded-full mb-4 border-4 border-yellow-400 shadow-xl object-cover"
          />
          <div className="flex items-center gap-1">
            <span className="text-3xl font-bold">{selectedReview.rating}</span>
            <FaStar className="text-yellow-400 text-2xl" />
          </div>
          <h3 className="font-bold text-yellow-300 mt-4 text-lg">
            {selectedReview.name}
          </h3>
          <p className="text-sm text-yellow-100 mt-3 text-center italic leading-relaxed">
            “{selectedReview.fullReview}”
          </p>
          <p className="text-yellow-200 text-xs mt-3 text-center">
            {selectedReview.info}
          </p>
        </motion.div>

        {/* Reviews List */}
        <motion.div
          className="md:col-span-2 space-y-4"
          variants={containerVariants}
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              className={`p-4 rounded-xl flex items-center gap-4 shadow cursor-pointer transition-all border 
              ${
                selectedReview.name === review.name
                  ? "bg-green-700/90 border-yellow-400"
                  : "bg-white border-green-600 hover:bg-green-100"
              }`}
              onClick={() => setSelectedReview(review)}
              variants={itemVariants}
            >
              <img
                src={review.img}
                alt={review.name}
                className="w-14 h-14 rounded-full border-2 border-green-400 object-cover"
              />
              <div>
                <p
                  className={`font-semibold ${
                    selectedReview.name === review.name
                      ? "text-white"
                      : "text-green-900"
                  }`}
                >
                  {review.name}
                </p>
                <p
                  className={`text-sm font-medium ${
                    selectedReview.name === review.name
                      ? "text-yellow-200"
                      : "text-yellow-600"
                  }`}
                >
                  {review.rating} ★
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ReviewsSection;
