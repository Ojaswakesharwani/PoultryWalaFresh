import React, { useState } from "react";
import Modal from "../components/layouts/Modal";
import Registration from "./Registration";

// Sample data for traders — later you can fetch from API
const traders = [
  {
    id: 1,
    name: "Raj Poultry",
    location: "Delhi",
    todayPrice: "₹180/kg",
    contact: "9876543210",
    rating: 4.5,
    company: "Raj Poultry Pvt Ltd",
  },
  {
    id: 2,
    name: "Sharma Farms",
    location: "Noida",
    todayPrice: "₹175/kg",
    contact: "9876512340",
    rating: 4.2,
    company: "Sharma Poultry & Feeders",
  },
  {
    id: 3,
    name: "Green Hatcheries",
    location: "Gurgaon",
    todayPrice: "₹185/kg",
    contact: "9876509876",
    rating: 4.8,
    company: "Green Hatcheries Ltd",
  },
  {
    id: 4,
    name: "Fresh Eggs Co.",
    location: "Faridabad",
    todayPrice: "₹178/kg",
    contact: "9876541230",
    rating: 4.1,
    company: "Fresh Eggs Traders",
  },
];

const Explore = () => {
  const [openModal, setOpenModal] = useState(null); // ✅ fixed
  const closeModal = () => setOpenModal(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-green-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-yellow-100 py-12 px-6 text-center shadow-lg">
        <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-md">
          Explore Poultry Traders
        </h1>
        <p className="mt-3 text-amber-200 max-w-2xl mx-auto text-lg">
          Compare trusted suppliers, check today’s prices, and connect instantly.
        </p>
      </div>

      {/* Table Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="overflow-x-auto rounded-xl shadow-lg border border-green-200">
          <table className="min-w-full text-sm text-left rounded-xl overflow-hidden">
            <thead className="bg-green-700 text-white sticky top-0">
              <tr>
                {[
                  "S. No.",
                  "Supplier Name",
                  "Company",
                  "Location",
                  "Today’s Price",
                  "Contact",
                  "Rating",
                ].map((header) => (
                  <th
                    key={header}
                    className="py-4 px-5 font-semibold text-sm uppercase tracking-wide"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {traders.map((trader, i) => (
                <tr
                  key={trader.id}
                  className="even:bg-green-50 odd:bg-yellow-50 hover:bg-green-100 transition-all border-b border-green-100"
                >
                  <td className="py-3 px-5 font-medium text-gray-700">
                    {i + 1}
                  </td>
                  <td className="py-3 px-5 font-bold text-green-900">
                    {trader.name}
                  </td>
                  <td className="py-3 px-5">{trader.company}</td>
                  <td className="py-3 px-5">{trader.location}</td>
                  <td className="py-3 px-5 text-yellow-700 font-bold">
                    {trader.todayPrice}
                  </td>
                  <td className="py-3 px-5 text-gray-700">
                    📞 {trader.contact}
                  </td>
                  <td className="py-3 px-5 text-green-700 font-medium">
                    ⭐ {trader.rating}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Why Use Explore Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 bg-green-600/90 rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold text-yellow-100 mb-4">
          Why Use Explore?
        </h2>
        <p className="text-yellow-50 leading-relaxed text-lg">
          The <b>Explore</b> section gives you real-time prices from{" "}
          <span className="underline">verified poultry traders</span>. Compare
          suppliers, check ratings, and connect directly with confidence.
        </p>
      </div>

      {/* Company Directory Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
          Company Directory
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {traders.map((trader) => (
            <div
              key={trader.id}
              className="bg-white border border-green-200 rounded-xl shadow hover:shadow-xl p-6 transition-all transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-bold text-green-800">
                {trader.company}
              </h3>
              <p className="text-sm text-gray-600">{trader.location}</p>
              <p className="mt-2 text-yellow-700 font-semibold">
                {trader.todayPrice}
              </p>
              <p className="text-sm mt-1">📞 {trader.contact}</p>
              <p className="text-sm text-green-600">⭐ {trader.rating}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 text-white py-20 px-6">
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
            <div className="bg-yellow-100 text-green-900 rounded-xl shadow-md p-8 hover:shadow-lg transition">
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

            <div className="bg-yellow-100 text-green-900 rounded-xl shadow-md p-8 hover:shadow-lg transition">
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

      {/* ✅ Modal with registration form */}
      <Modal isOpen={openModal !== null} onClose={closeModal}>
        {openModal === "trader" && <Registration />}
        {openModal === "buyer" && <Registration />}
      </Modal>
    </div>
  );
};

export default Explore;
