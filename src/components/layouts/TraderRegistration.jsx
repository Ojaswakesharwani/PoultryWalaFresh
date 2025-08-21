import React from "react";

const TraderRegistration = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        📦 Trader Registration
      </h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          placeholder="Company Name"
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
          placeholder="Location / City"
          className="w-full border rounded p-2"
          required
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TraderRegistration;
