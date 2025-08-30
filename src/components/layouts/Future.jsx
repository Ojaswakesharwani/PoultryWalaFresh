import React from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
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

  const reviews = [
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: t("future_reviews.0.name"),
      rating: t("future_reviews.0.rating"),
    },
    {
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      name: t("future_reviews.1.name"),
      rating: t("future_reviews.1.rating"),
    },
    {
      img: "https://randomuser.me/api/portraits/men/20.jpg",
      name: t("future_reviews.2.name"),
      rating: t("future_reviews.2.rating"),
    },
    {
      img: "https://randomuser.me/api/portraits/men/12.jpg",
      name: t("future_reviews.3.name"),
      rating: t("future_reviews.3.rating"),
    },
    {
      img: "https://randomuser.me/api/portraits/women/33.jpg",
      name: t("future_reviews.4.name"),
      rating: t("future_reviews.4.rating"),
    },
  ];

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
          <p className="mt-1 text-yellow-100">433 {t("future_reviews_count")}</p>

          <h3 className="font-bold text-yellow-300 mt-5 text-lg">
            {t("future_highlight_name")}
          </h3>
          <p className="text-sm text-yellow-100 mt-2 text-center italic">
            {t("future_highlight_review")}
          </p>
          <p className="text-yellow-200 text-xs mt-3 text-center">
            {t("future_highlight_info")}
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
                  <p className="font-semibold text-green-900">{review.name}</p>
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
