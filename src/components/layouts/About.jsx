import { motion } from "framer-motion";
import aboutImage from "../../assets/hero-bg.jpg"; // Replace with your PNG/SVG path

const AboutSection = () => {
  return (
    <section className="w-full bg-white text-black px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left side - Text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            About Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-6 text-base sm:text-lg leading-relaxed text-gray-700"
          >
            Poultrywala by Ninjafarm is India’s first organized B2B digital marketplace 
            for live broiler poultry trading. We connect contract poultry farming 
            companies with verified poultry traders to enable seamless, secure, transparent, 
            and reliable transactions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <div className="bg-green-100 px-4 py-2 rounded-lg text-green-800 font-semibold shadow">
              Verified Profiles
            </div>
            <div className="bg-yellow-100 px-4 py-2 rounded-lg text-yellow-800 font-semibold shadow">
              Real Time Trading
            </div>
            <div className="bg-blue-100 px-4 py-2 rounded-lg text-blue-800 font-semibold shadow">
              Digital Contracts
            </div>
          </motion.div>
        </div>

        {/* Right side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={aboutImage}
            alt="About Poultrywala"
            className="max-w-7xl w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
