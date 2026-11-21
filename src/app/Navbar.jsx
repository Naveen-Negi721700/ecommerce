
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
