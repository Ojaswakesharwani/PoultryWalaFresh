import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import icon from "../../assets/logonew.png";
// import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu if open
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-yellow-400">
      <div className="max-w-8xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-2xl font-bold text-green-800">
          <div className="flex items-center space-x-3">
            <img
              src={icon}
              alt="Poultrywala icon"
              className="w-full h-12 object-contain"
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-semibold">
          <button
            onClick={() => scrollToSection("home-section")}
            className="text-green-700 hover:text-green-900 text-lg font-semibold pb-1 border-b hover:border-b-3 border-green-700 hover:border-green-900"
          >
            {t("navbar.home")}
          </button>

          <button
            onClick={() => scrollToSection("services-section")}
            className="text-yellow-500 hover:text-yellow-600 text-lg font-semibold pb-1 border-b hover:border-b-3 border-yellow-400 hover:border-yellow-500"
          >
            {t("navbar.services")}
          </button>

          <button
            onClick={() => scrollToSection("explore-section")}
            className="text-yellow-500 hover:text-yellow-600 text-lg font-semibold pb-1 border-b hover:border-b-3 border-yellow-400 hover:border-yellow-500"
          >
            {t("navbar.explore")}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-green-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 text-green-900 font-medium space-y-2 shadow-inner border-t border-yellow-300 animate-fade-down">
          <button
            onClick={() => scrollToSection("home-section")}
            className="block text-green-900 hover:text-green-700"
          >
            {t("navbar.home")}
          </button>

          <button
            onClick={() => scrollToSection("services-section")}
            className="block text-green-900 hover:text-green-700"
          >
            {t("navbar.services")}
          </button>

          <button
            onClick={() => scrollToSection("explore-section")}
            className="block text-yellow-500 font-semibold text-lg pb-1 border-b-2 border-yellow-400"
          >
            {t("navbar.explore")}
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
