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
      <div className="absolute inset-0 bg-green-800 opacity-90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 min-h-screen text-white">
        {/* Left Text Content */}
        <div className="max-w-2xl text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Transforming Poultry Trading <br className="hidden sm:block" /> with Technology
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-base sm:text-lg leading-relaxed text-gray-100"
          >
            India’s first organized B2B platform for contract broiler trading – <br />
            Connecting verified poultry traders.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold rounded shadow"
          >
            Explore Platform
          </motion.button>
        </div>

        {/* Right Placeholder for Image/Vector */}
        <div className="hidden md:block w-full md:w-1/2 h-80 mt-10 md:mt-0">
          {/* You can add the image later here */}
          <div className="w-full h-full rounded-xl bg-green-600 opacity-20 flex items-center justify-center">
            <p className="text-white text-sm">[Illustration Placeholder]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
