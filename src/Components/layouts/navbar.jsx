import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-800">🐔 Poultrywala</div>
        <nav className="space-x-6 font-medium text-green-900">
           <Link className="hover:text-yellow-500" to="/">Home</Link>
           <Link className="hover:text-yellow-500" to="/services">Services</Link>
           <Link className="hover:text-yellow-500" to="/updates">Updates</Link>
           <Link className="hover:text-yellow-500" to="/registraion">Registration</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
