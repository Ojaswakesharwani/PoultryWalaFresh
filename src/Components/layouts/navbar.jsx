import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger icons
import icon from "../../assets/Fevicon.png";
import logo from "../../assets/logo.png"



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-yellow-400">
      <div className="max-w-8xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-2xl font-bold text-green-800">
          <div className="flex items-center space-x-3">
  {/* Poultrywala Icon */}
  <img 
    src={icon} 
    alt="Poultrywala icon" 
    className="w-10 h-10 object-contain" 
  />

  {/* Poultrywala Text Logo */}
  <img 
    src={logo} 
    alt="Poultrywala logo" 
    className="h-6 sm:h-8 md:h-9 object-contain" 
  />
</div>

        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-semibold text-green-900">
          <Link to="/" className="hover:border-b- border-yellow-400 pb-1 transition-all">Home</Link>
          <Link to="/about" className="hover:border-b- border-yellow-400 pb-1 transition-all">About</Link>
          <Link to="/services" className="hover:border-b- border-yellow-400 pb-1 transition-all">Services</Link>
          {/* <Link to="/features" className="hover:border-b- border-yellow-400 pb-1 transition-all">features</Link>
          <Link to="/updates" className="hover:border-b- border-yellow-400 pb-1 transition-all">Updates</Link>
          <Link to="/registraion" className="hover:border-b- border-yellow-400 pb-1 transition-all">Registration</Link> */}

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
          <Link to="/" className="block hover:text-yellow-500">Home</Link>
          <Link to="/services" className="block hover:text-yellow-500">Services</Link>
          <Link to="/updates" className="block hover:text-yellow-500">Updates</Link>
          <Link to="/registraion" className="block hover:text-yellow-500">Registration</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
