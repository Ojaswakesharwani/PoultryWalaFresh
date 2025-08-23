import React, { useState } from "react";   // ✅ fixed import
import Modal from "../components/layouts/Modal";   // ✅ added missing Modal import
import Registration from "./Registration"

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


  
    const [openModal, setOpenModal] = useState(false);
    const closeModal = () => setOpenModal(false); // Function to close modal  



    
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Header Section */}
      <div className="bg-green-600/90 text-yellow-100 py-8 px-4 text-center shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold">Explore Poultry Traders</h1>
        <p className="mt-2 text-amber-200 max-w-2xl mx-auto">
          Compare trusted poultry suppliers, check today’s prices, and connect instantly.
        </p>
      </div>

      {/* Table Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="overflow-x-auto shadow-md rounded-lg border border-green-950">
          <table className="min-w-full text-sm text-left shadow-2xl">
            <thead className="bg-green-700 text-white sticky border-green-950 top-0">
              <tr>
                <th className="py-3 px-4">S. No.</th>
                <th className="py-3 px-4">Supplier Name</th>
                <th className="py-3 px-4">Company</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Today’s Price</th>
                <th className="py-3 px-4">Contact</th>
                <th className="py-3 px-4">Rating</th>
              </tr>
            </thead>
            <tbody>
              {traders.map((trader) => (
                <tr
                  key={trader.id}
                  className="even:bg-green-100 bg-amber-100 border-green-950 border-1 hover:bg-green-600/60 transition"
                >
                  <td className="py-3 px-4 font-medium">{trader.id}</td>
                  <td className="py-3 px-4 font-semibold text-green-900">{trader.name}</td>
                  <td className="py-3 px-4">{trader.company}</td>
                  <td className="py-3 px-4">{trader.location}</td>
                  <td className="py-3 px-4 text-yellow-600 font-bold">{trader.todayPrice}</td>
                  <td className="py-3 px-4">{trader.contact}</td>
                  <td className="py-3 px-4">{trader.rating} ⭐</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Why Use Explore Section */}
      <div className="max-w-4xl mx-auto px-4 py-10 bg-green-600/80 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-yellow-100 mb-3">Why Use Explore?</h2>
        <p className="text-yellow-50 leading-relaxed">
          The <b>Explore</b> section gives you up-to-date prices from verified poultry traders. 
          Compare suppliers, check ratings, and connect directly. Whether you run a farm, 
          business, or are just buying for your family, this tool helps you make smart 
          purchasing decisions with confidence.
        </p>
      </div>

      {/* Company Directory Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-green-900 mb-6">Company Directory</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {traders.map((trader) => (
            <div
              key={trader.id}
              className="bg-white border border-green-200 hover:bg-green-500/70 rounded-lg shadow-md p-5 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-green-800">{trader.company}</h3>
              <p className="text-sm text-gray-600">{trader.location}</p>
              <p className="mt-2 text-yellow-700 font-semibold">{trader.todayPrice}</p>
              <p className="text-sm mt-1">📞 {trader.contact}</p>
              <p className="text-sm text-green-600">⭐ {trader.rating}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-green-700 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Be a Part of India’s Trusted Poultry Marketplace
          </h2>
          <p className="text-amber-200 max-w-2xl mx-auto mb-10">
            Whether you are a <b>supplier</b> looking to sell your poultry products or a <b>buyer</b> 
            searching for the best deals, join our growing network today and connect with verified partners.
          </p>

          {/* Two registration cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            {/* Trader Registration */}
            <div className="bg-yellow-100 text-green-900 rounded-lg shadow-md p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">📦 Register as a Trader</h3>
              <p className="mb-5 text-gray-700 leading-relaxed">
                List your company in our trusted poultry directory. Reach thousands of 
                potential buyers, showcase your daily prices, and grow your business with confidence.
              </p>
              <button
                onClick={() => setOpenModal("trader")}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow"
              >
                Register as Trader
              </button>
            </div>

            {/* Buyer Registration */}
            <div className="bg-yellow-100 text-green-900 rounded-lg shadow-md p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">🛒 Register as a Buyer</h3>
              <p className="mb-5 text-gray-700 leading-relaxed">
                Looking to purchase poultry at the best prices? Get access to verified traders, 
                compare rates instantly, and connect directly with suppliers near you.
              </p>
              <button
                onClick={() => setOpenModal("buyer")}
                className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold rounded-lg shadow"
              >
                Register as Buyer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Modal with the registration form */}
      <Modal isOpen={openModal !== null} onClose={() => setOpenModal(null)}>
        {openModal === "trader" && <Registration />}
        {openModal === "buyer" && <Registration />}
      </Modal>
    </div>
  );
};

export default Explore;
