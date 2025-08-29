import React, { useState } from "react";
import Modal from "./Modal";
import Registration from "./Registration";

const Explore = () => {
  const [openModal, setOpenModal] = useState(null);
  const closeModal = () => setOpenModal(null);

  // ✅ Verified Points (instead of dummy data)
  const verifiedPoints = [
    "All traders are government-verified for authenticity.",
    "Transparent daily poultry prices updated in real-time.",
    "Direct farmer-to-buyer connections without middlemen.",
    "Secure payments with trusted partners.",
    "Fast & reliable delivery across India.",
    "Quality-controlled poultry before every dispatch.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-green-50">
      {/* Header Section */}
      <div className=" text-green-900 py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-md">
          Explore Poultry Traders
        </h1>
        <p className="mt-3 text-green-800 max-w-2xl mx-auto text-lg">
          Compare trusted suppliers, check today’s prices, and connect instantly.
        </p>
      </div>

      {/* Compact Verified Features Table
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="overflow-hidden rounded-xl shadow-lg border border-green-200">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="py-4 px-5 font-semibold text-sm uppercase tracking-wide">
                  Verified Benefits
                </th>
              </tr>
            </thead>
            <tbody>
              {verifiedPoints.map((point, idx) => (
                <tr
                  key={idx}
                  className="even:bg-green-50 odd:bg-yellow-50 hover:bg-green-100 transition-all border-b border-green-100"
                >
                  <td className="py-3 px-5 text-green-900 font-medium">
                    ✅ {point}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}

      
       {/* Why Use Explore Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 bg-green-600/90 rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold text-yellow-100 mb-4">
          Why Use Explore?
        </h2>
        <p className="text-yellow-50 leading-relaxed text-lg">
          The <b>Explore</b> section gives you real-time prices from{" "}
          <span className="font-bold text-yellow-100">verified poultry traders</span>. Compare
          suppliers, check ratings, and connect directly with confidence.
        </p>
      </div>

      {/* Compact Verified Cards Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
          Why Choose Verified Traders?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Trust & Security",
              desc: "Every trader is verified to ensure secure and reliable trading.",
            },
            {
              title: "Fair Pricing",
              desc: "Real-time market rates without hidden charges or middlemen.",
            },
            {
              title: "Nationwide Network",
              desc: "Connect with farmers and traders across multiple states in India.",
            },
            {
              title: "Quality Checked",
              desc: "Strict quality checks before every dispatch for healthy poultry.",
            },
            {
              title: "Instant Connections",
              desc: "Chat and connect instantly with verified suppliers & buyers.",
            },
            {
              title: "Growth Opportunities",
              desc: "Expand your poultry business by reaching thousands of buyers daily.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-yellow-50 border border-green-200 rounded-xl shadow hover:bg-green-500/80 hover:shadow-lg p-6 transition-all transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-bold text-green-900  ">
                {card.title}
              </h3>
              <p className="mt-2 text-green-900  text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className=" bg-green-700/90 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5">
            Be a Part of India’s Trusted Poultry Marketplace
          </h2>
          <p className="text-amber-200 max-w-2xl mx-auto mb-10 text-lg">
            Whether you are a <b>supplier</b> or a <b>buyer</b>, join our
            growing network and connect with verified partners today.
          </p>

          {/* Two registration cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="bg-yellow-50 hover:bg-yellow-100 text-green-900 rounded-xl shadow-md p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">📦 Register as a Trader</h3>
              <p className="mb-5 text-gray-700">
                List your company, showcase daily prices, and reach thousands of
                buyers.
              </p>
              <button
                onClick={() => setOpenModal("trader")}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow transition"
              >
                Register as Trader
              </button>
            </div>

            <div className="bg-yellow-50 hover:bg-yellow-100 text-green-900 rounded-xl shadow-md p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">🛒 Register as a Buyer</h3>
              <p className="mb-5 text-gray-700">
                Access verified traders, compare rates instantly, and connect
                directly.
              </p>
              <button
                onClick={() => setOpenModal("buyer")}
                className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold rounded-lg shadow transition"
              >
                Register as Buyer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal with registration form */}
      <Modal isOpen={openModal !== null} onClose={closeModal}>
        {openModal === "trader" && <Registration />}
        {openModal === "buyer" && <Registration />}
      </Modal>
    </div>
  );
};

export default Explore;
