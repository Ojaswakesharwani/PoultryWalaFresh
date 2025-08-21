import { motion } from "framer-motion";
import bgpic from "../../assets/hero-bg-img.jpg";
import video from "../../assets/vidieo1.mp4";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative w-full min-h-full height-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{ backgroundImage: `url(${bgpic})` }}
      ></div>

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-green-900/70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-5 items-center justify-between px-6 lg:px-10 py-16 lg:py-32 text-white">
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
              India’s No.1 Poultry Trading Hub
            </p>
            <p className="text-gray-200 text-lg sm:text-2xl font-semibold mt-2">
              Smart Trading • Secure Deals • Strong Network
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-5xl font-bold leading-snug mt-4"
          >
            Transforming Poultry Trading <br className="hidden sm:block" /> with Technology
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-gray-100 text-semibase sm:text-lg leading-relaxed"
          >
            India’s first organized B2B platform for contract broiler trading –
            <br />
            Connecting verified poultry traders.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}          >
            <Link
              to="/explore"   // 👈 where you want to navigate
              className="inline-block mt-8 px-8 py-4 bg-yellow-400 hover:bg-yellow-500 
                         text-green-900 font-bold rounded-lg shadow-lg 
                         transition-transform transform hover:scale-105"
            >
            Explore Platform
            </Link>
          </motion.button>
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
              className="w-full h-full object-cover rounded-xl opacity-110  z-10"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={video} type="video/mp4" />
            </motion.video>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
