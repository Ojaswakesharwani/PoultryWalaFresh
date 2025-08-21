import React from "react";

const BuyerRegistration = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        🛒 Buyer Registration
      </h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded p-2"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border rounded p-2"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          placeholder="City"
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          placeholder="State"
          className="w-full border rounded p-2"
          required
        />

        <button className="bg-yellow-500 text-green-900 px-4 py-2 rounded hover:bg-yellow-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BuyerRegistration;
