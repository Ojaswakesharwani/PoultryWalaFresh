import { motion } from "framer-motion";
import bgpic from "../../assets/hero-bg-img.jpg";
import vidieo from "../../assets/vidieo.mp4";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{ backgroundImage: `url(${bgpic})` }}
      ></div>

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-green-900 opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 min-h-screen text-white">
        
        {/* Left Text Content */}
        <div className="max-w-2xl text-center md:text-left">
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4"
          >
            <p className="text-orange-200 font-semibold sm:text-4xl tracking-wide">
              India’s No.1 Poultry Trading Hub
            </p>
            <p className="text-gray-200 text-base sm:text-3xl font-semibold mt-2">
              Smart Trading • Secure Deals • Strong Network
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug"
          >
            Transforming Poultry Trading <br className="hidden sm:block" /> with Technology
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-base sm:text-lg text-gray-100 leading-relaxed"
          >
            India’s first organized B2B platform for contract broiler trading – <br />
            Connecting verified poultry traders.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-8 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 
                       text-green-900 font-bold rounded-lg shadow-md"
          >
            Explore Platform
          </motion.button>
        </div>

        {/* Right Section - Transparent Video */}
        <div className="hidden md:block w-full md:w-1/3 h-full mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="w-full h-full flex items-center justify-center 
                       overflow-hidden rounded-xl shadow-lg relative"
          >
            {/* Transparent overlay on video */}
            <div className="absolute inset-0 bg-black/30 z-10 rounded-xl"></div>

            <motion.video
              initial={{ scale: 1.03 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full h-full object-cover rounded-xl opacity-70"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={vidieo} type="video/mp4" />
            </motion.video>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
