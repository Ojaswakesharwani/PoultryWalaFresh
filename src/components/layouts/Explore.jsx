import React, { useState } from "react";
import Modal from "./Modal";
import Registration from "./Registration";
import { useTranslation } from "react-i18next";

const Explore = () => {
  const [openModal, setOpenModal] = useState(null);
  const closeModal = () => setOpenModal(null);

  const { t } = useTranslation();

  // ✅ Verified Points with translation keys
  const verifiedPoints = [
    t("explore.verified1"),
    t("explore.verified2"),
    t("explore.verified3"),
    t("explore.verified4"),
    t("explore.verified5"),
    t("explore.verified6"),
  ];

  return (
    <div id="explore-section" className="min-h-screen bg-gradient-to-b from-yellow-50 to-green-50">
      {/* Header Section */}
      <div className=" text-green-900 py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-md">
          {t("explore.title")}
        </h1>
        <p className="mt-3 text-green-800 max-w-2xl mx-auto text-lg">
          {t("explore.subtitle")}
        </p>
      </div>

      {/* Why Use Explore Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 bg-green-600/90 rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold text-yellow-100 mb-4">
          {t("explore.whyUseTitle")}
        </h2>
        <p className="text-yellow-50 leading-relaxed text-lg">
          {t("explore.whyUseText")}
        </p>
      </div>

      {/* Verified Traders Benefits Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
          {t("explore.whyChooseTitle")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: t("explore.card1Title"), desc: t("explore.card1Desc") },
            { title: t("explore.card2Title"), desc: t("explore.card2Desc") },
            { title: t("explore.card3Title"), desc: t("explore.card3Desc") },
            { title: t("explore.card4Title"), desc: t("explore.card4Desc") },
            { title: t("explore.card5Title"), desc: t("explore.card5Desc") },
            { title: t("explore.card6Title"), desc: t("explore.card6Desc") },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-green-100 border border-green-200 rounded-xl shadow hover:bg-green-500/80 hover:shadow-lg p-6 transition-all transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-bold text-green-900">
                {card.title}
              </h3>
              <p className="mt-2 text-green-900 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className=" bg-green-700/90 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5">
            {t("explore.ctaTitle")}
          </h2>
          <p className="text-amber-200 max-w-2xl mx-auto mb-10 text-lg">
            {t("explore.ctaText")}
          </p>

          {/* Two registration cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="bg-green-100 hover:bg-yellow-100 text-green-900 rounded-xl shadow-md p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">📦 {t("explore.traderTitle")}</h3>
              <p className="mb-5 text-gray-700">{t("explore.traderText")}</p>
              <button
                onClick={() => setOpenModal("trader")}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow transition"
              >
                {t("explore.traderBtn")}
              </button>
            </div>

            <div className="bg-green-100 hover:bg-yellow-100 text-green-900 rounded-xl shadow-md p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">🛒 {t("explore.buyerTitle")}</h3>
              <p className="mb-5 text-gray-700">{t("explore.buyerText")}</p>
              <button
                onClick={() => setOpenModal("buyer")}
                className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold rounded-lg shadow transition"
              >
                {t("explore.buyerBtn")}
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
