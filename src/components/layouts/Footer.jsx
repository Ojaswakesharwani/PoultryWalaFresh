const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 relative">
      {/* Yellow top border */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-yellow-400"></div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="font-medium">Registered Office:</p>
          <p>Ninjafarm Services Private Limited</p>
          <p>Registered Address – Amalner Dist Jalgaon, Maharashtra – 425401</p>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
          <p>📞 Phone: <a href="tel:+919834512510" className="hover:underline">+91-9834512510</a></p>
          <p>📧 Email: <a href="mailto:support@ninjafarm.in" className="hover:underline">support@ninjafarm.in</a></p>
          <p>🌐 Website: <a href="https://www.poultrywala.in" target="_blank" rel="noopener noreferrer" className="hover:underline">www.poultrywala.in</a></p>
        </div>

        {/* Enquiry Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Enquiry Section</h3>
          <p>For Traders and Contract Companies</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-6 border-t border-green-950 pt-4 text-center text-sm">
        <p>© 2025 Poultrywala | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
