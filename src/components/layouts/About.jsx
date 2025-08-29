import { motion } from "framer-motion";
import aboutImage from "../../assets/hero-bg.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutSection = () => {
  return (
    <section className="w-full bg-white text-black px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Text */}
        <div>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            About Us
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-lg leading-relaxed text-gray-700"
          >
            Poultrywala by Ninjafarm is India’s first organized B2B digital marketplace 
            for live broiler poultry trading. We connect contract poultry farming 
            companies with verified poultry traders to enable seamless, secure, transparent, 
            and reliable transactions.
          </motion.p>

          {/* Features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15, delayChildren: 0.3 },
              },
            }}
            className="mt-8 flex flex-wrap gap-4"
          >
            {[
              { text: "Verified Profiles", color: "green" },
              { text: "Real Time Trading", color: "yellow" },
              { text: "Digital Contracts", color: "blue" },
              { text: "Daily Rates", color: "red" },
              { text: "Order Poultry", color: "pink" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`bg-${item.color}-100 px-4 py-2 rounded-lg text-${item.color}-800 font-semibold shadow`}
              >
                {item.text}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <img
            src={aboutImage}
            alt="About Poultrywala"
            className="rounded-2xl shadow-lg max-w-7xl w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
