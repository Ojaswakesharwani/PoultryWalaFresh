import { motion } from "framer-motion";
import bgpic from "../../assets/hero-bg-img.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{ backgroundImage: `url(${bgpic})` }}
      ></div>

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-green-700 opacity-80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
        >
          Poultrywala by Ninjafarm
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-yellow-300 text-lg sm:text-xl font-semibold mt-4"
        >
          Empowering the Poultry Ecosystem
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 text-sm sm:text-base max-w-2xl"
        >
          India’s first organized B2B digital marketplace for live broiler poultry trading — connecting contract poultry farming companies with verified poultry traders.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
