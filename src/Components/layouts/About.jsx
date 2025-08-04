import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="w-full px-4 py-16 bg-white text-black">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
      >
        About Us
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-6 max-w-3xl mx-auto text-center text-base sm:text-lg"
      >
        Poultrywala by Ninjafarm is India’s first organized B2B digital marketplace for live broiler poultry trading. We connect contract poultry farming companies with verified poultry traders to enable seamless, secure, transparent, and reliable platform for poultry transactions.

        
      </motion.p>
    </section>
  );
};

export default AboutSection;
