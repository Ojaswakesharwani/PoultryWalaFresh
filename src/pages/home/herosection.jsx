import { motion } from "framer-motion";


const HeroSection = () => {
  return (
    <section id="home" className="bg-green-800 text-white py-24 text-center px-4">
        <img src="" alt="" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          ब्रायलर मुर्गी खरीदना अब होगा आसान
        </h1>
        <p className="text-yellow-300 text-2xl font-semibold mt-4">
          तेज़ और भरोसेमंद!
        </p>
        <p className="mt-4 text-lg">
          अब जुड़िए पोल्ट्रीवाला के साथ – भारत का पहला ऑनलाइन पोल्ट्री मार्केट.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
