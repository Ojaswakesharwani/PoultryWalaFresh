const services = [
  "डेली ब्रायलर लिफ्टिंग रेट",
  "100% भरोसेमंद कंपनियाँ और फार्मर्स",
  "नज़दीकी फार्म से सीधी डिलीवरी",
  "कई कंपनियों से ऑर्डर करने की आज़ादी",
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white text-center px-4">
      <h2 className="text-3xl font-bold text-green-800 mb-8">
        हमारी सर्विस कैटेगरी
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((text, i) => (
          <div
            key={i}
            className="bg-yellow-400 text-green-900 font-semibold p-6 rounded-lg shadow"
          >
            {text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
