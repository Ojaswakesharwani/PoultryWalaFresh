import React from "react";
import { FaSignInAlt, FaUserCheck, FaFileContract } from "react-icons/fa";
import { MdReviews, MdOutlineRealEstateAgent } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Presence = () => {
  return (
    <section className="min-h-screen bg-yellow-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Info */}
          <div>
            <h1 className="text-3xl font-bold text-green-900">
              10 K+ Downloads <br /> on Android & iOS
            </h1>

            <div className="flex gap-4 mt-6">
              <button className="bg-green-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-green-800 transition">
                <FaSignInAlt /> Sign Up
              </button>
              <button className="bg-yellow-400 text-green-900 px-5 py-2 rounded-lg flex items-center gap-2 font-semibold hover:bg-yellow-500 transition">
                26 Age
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-yellow-100 p-4 rounded-lg flex items-center gap-3 hover:bg-yellow-200 transition">
                <MdOutlineRealEstateAgent className="text-green-700 text-2xl" />
                <span className="font-semibold text-green-900">
                  Real Time Trading
                </span>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg flex items-center gap-3 hover:bg-yellow-200 transition">
                <IoMdPerson className="text-green-700 text-2xl" />
                <span className="font-semibold text-green-900">
                  Verified Profiles
                </span>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg flex items-center gap-3 hover:bg-yellow-200 transition">
                <FaUserCheck className="text-green-700 text-2xl" />
                <span className="font-semibold text-green-900">
                  Online Profiles
                </span>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg flex items-center gap-3 hover:bg-yellow-200 transition">
                <MdReviews className="text-green-700 text-2xl" />
                <span className="font-semibold text-green-900">
                  All Review <span className="text-xs">(941:03027)</span>
                </span>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg flex items-center gap-3 hover:bg-yellow-200 transition col-span-2">
                <FaFileContract className="text-green-700 text-2xl" />
                <span className="font-semibold text-green-900">
                  Digital Contracts
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-green-700 p-4 rounded-full w-40 h-40 flex items-center justify-center">
                {/* Farmer Illustration Placeholder */}
                <span className="text-yellow-300 font-bold text-xl">
                  Farmer + Duck
                </span>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </section>
  );
};

export default Presence;
