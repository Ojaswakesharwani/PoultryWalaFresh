import { useState } from "react";
import { Link } from "react-router-dom"; 
import { Menu, X } from "lucide-react";
import icon from "../../assets/Fevicon.png";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to scroll to About section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu if open
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-yellow-400">
      <div className="max-w-8xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-2xl font-bold text-green-800">
          <div className="flex items-center space-x-3">
            <img src={icon} alt="Poultrywala icon" className="w-10 h-10 object-contain" />
            <img src={logo} alt="Poultrywala logo" className="h-6 sm:h-8 md:h-9 object-contain" />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-semibold">
          <Link
            to="/"
            className="text-green-700 hover:text-green-900 text-lg font-semibold pb-1 border-b hover:border-b-3 border-green-700 hover:border-green-900"
          >
            Home
          </Link>


          <Link
            to="/Services"
            className="text-yellow-500 hover:text-yellow-600 text-lg font-semibold pb-1 border-b hover:border-b-3 border-yellow-400 hover:border-yellow-500"
          >
            Services
          </Link>

          <Link
            to="/explore"
            className="text-yellow-500 hover:text-yellow-600 text-lg font-semibold pb-1 border-b hover:border-b-3 border-yellow-400 hover:border-yellow-500"
          >
            Explore
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-green-900 focus:outline-none" aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 text-green-900 font-medium space-y-2 shadow-inner border-t border-yellow-300 animate-fade-down">
          <Link
            to="/"
            className="block text-green-900 hover:text-green-700"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <button
            onClick={scrollToAbout}
            className="block text-green-900 hover:text-green-700 w-full text-left"
          >
            About
          </button>
          <Link
            to="/services"
            className="block text-green-900 hover:text-green-700"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/updates"
            className="block text-green-900 hover:text-green-700"
            onClick={() => setIsOpen(false)}
          >
            Updates
          </Link>
          <Link
            to="/registraion"
            className="block text-green-900 hover:text-green-700"
            onClick={() => setIsOpen(false)}
          >
            Registration
          </Link>
          <Link
            to="/explore"
            className="block text-yellow-500 font-semibold text-lg pb-1 border-b-2 border-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Explore
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
