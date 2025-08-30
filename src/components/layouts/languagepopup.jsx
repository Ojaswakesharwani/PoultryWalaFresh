import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguagePopup = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(true); // popup open by default

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // close popup after selection
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-transparent">
      <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-80 text-center border border-gray-200 animate-fadeIn">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🌐 Select Language</h2>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => changeLanguage("en")}
            className="w-full bg-blue-700/90 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition shadow-md"
          >
            English
          </button>

          <button
            onClick={() => changeLanguage("hi")}
            className="w-full bg-green-700/90 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition shadow-md"
          >
            हिंदी
          </button>

          <button
            onClick={() => changeLanguage("mr")}
            className="w-full bg-purple-700/90 text-white py-2 rounded-lg font-semibold hover:bg-purple-600 transition shadow-md"
          >
            मराठी
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguagePopup;
