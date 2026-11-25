
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600">
          MyWebsite
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-gray-700 hover:text-indigo-600">Home</a>
          <a href="/about" className="text-gray-700 hover:text-indigo-600">About</a>
          <a href="/services" className="text-gray-700 hover:text-indigo-600">Services</a>
          <a href="/contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50">
            Login
          </button>

          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-700"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          <a href="/" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/about" onClick={() => setIsOpen(false)}>About</a>
          <a href="/services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>

          <button className="bg-indigo-600 text-white py-2 rounded-lg">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};


export default Navbar;
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">
              MyWebsite
            </h2>

            <p className="text-gray-400 leading-7">
              We build modern digital experiences to help
              businesses grow and succeed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
         

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

            <ul className="space-y-3 text-gray-400">
              <li>Email: hello@example.com</li>
              <li>Phone: +91 9876543210</li>
              <li>Location: India</li>
              <li>home </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>


        </div>

      </div>
    </footer>
  );
};

export default Footer;

