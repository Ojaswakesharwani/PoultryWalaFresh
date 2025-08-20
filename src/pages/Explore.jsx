import React from "react";

// Sample data for traders — you can replace with API data later
const traders = [
  {
    id: 1,
    name: "Raj Poultry",
    location: "Delhi",
    todayPrice: "₹180/kg",
    contact: "9876543210",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Sharma Farms",
    location: "Noida",
    todayPrice: "₹175/kg",
    contact: "9876512340",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Green Hatcheries",
    location: "Gurgaon",
    todayPrice: "₹185/kg",
    contact: "9876509876",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Fresh Eggs Co.",
    location: "Faridabad",
    todayPrice: "₹178/kg",
    contact: "9876541230",
    rating: 4.1,
  },
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Header Section */}
      <div className="bg-green-800 text-yellow-400 py-8 px-4 text-center rounded-b-xl shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold">Explore Traders</h1>
        <p className="mt-2 text-yellow-200 max-w-2xl mx-auto">
          Check today’s pricing and essential info of trusted poultry traders near you.
          Compare and make informed decisions for your poultry business or personal needs.
        </p>
      </div>

      {/* Table Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-green-200 rounded-lg shadow-sm">
            <thead className="bg-green-100 text-green-900">
              <tr>
                <th className="py-2 px-4 border-b border-green-200 text-left">#</th>
                <th className="py-2 px-4 border-b border-green-200 text-left">Trader Name</th>
                <th className="py-2 px-4 border-b border-green-200 text-left">Location</th>
                <th className="py-2 px-4 border-b border-green-200 text-left">Today’s Price</th>
                <th className="py-2 px-4 border-b border-green-200 text-left">Contact</th>
                <th className="py-2 px-4 border-b border-green-200 text-left">Rating</th>
              </tr>
            </thead>
            <tbody>
              {traders.map((trader) => (
                <tr
                  key={trader.id}
                  className="even:bg-green-50 hover:bg-green-100 transition-colors"
                >
                  <td className="py-2 px-4 border-b border-green-200">{trader.id}</td>
                  <td className="py-2 px-4 border-b border-green-200 font-semibold">{trader.name}</td>
                  <td className="py-2 px-4 border-b border-green-200">{trader.location}</td>
                  <td className="py-2 px-4 border-b border-green-200 text-yellow-700 font-bold">{trader.todayPrice}</td>
                  <td className="py-2 px-4 border-b border-green-200">{trader.contact}</td>
                  <td className="py-2 px-4 border-b border-green-200">{trader.rating} ⭐</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Essential Info Section */}
      <div className="max-w-4xl mx-auto px-4 py-8 bg-green-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Why Use Explore?</h2>
        <p className="text-green-800 leading-relaxed">
          The Explore section gives you up-to-date pricing from verified poultry traders.
          You can compare prices, check trader ratings, and contact them directly. It helps you
          make smart purchasing decisions, whether you are a small business or a home consumer.
          All information is verified and updated daily to ensure reliability.
        </p>
      </div>
    </div>
  );
};

export default Explore;
