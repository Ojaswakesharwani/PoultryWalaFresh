import { motion } from "framer-motion";
import bgpic from "../../assets/hero-bg-img.jpg";

const Home = () => {
  return (
    <section className="relative w-full pt-2 overflow-visible">
      {/* Fixed Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-[100vh] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgpic})` }}
      ></div>

      {/* Green Overlay with Opacity */}
      <div className="absolute top-0 left-0 w-full h-[100vh] bg-green-700 opacity-80"></div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white min-h-[100vh] px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Poultrywala by Ninjafarm
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-yellow-300 text-2xl font-semibold mt-4"
        >
          Poultrywala by Ninjafarm
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 text-lg max-w-3xl"
        >
          Poultrywala by Ninjafarm is India’s first organized B2B digital marketplace for live broiler poultry
          trading. We connect contract poultry farming companies with verified poultry traders to enable
          seamless, secure, and transparent poultry transactions.
        </motion.p>
      </div>

      {/* About Section Inside Hero */}
      <div className="relative z-10 px-4 py-20 bg-white text-black">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 max-w-3xl mx-auto text-center text-lg"
        >
          Poultrywala by Ninjafarm is India’s first organized B2B digital marketplace for live broiler poultry trading. We connect contract poultry farming companies with verified poultry traders to enable seamless, secure, and transparent poultry transactions.
        </motion.p>
      </div>
    </section>
  );
};

export default Home;
