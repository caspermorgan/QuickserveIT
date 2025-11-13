import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b">
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@quickserveit.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <Mail size={16} />
              <span>info@quickserveit.com</span>
            </a>
          </div>
          <div className="text-gray-600">
            <span>Fast. Trusted. Local.</span>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              QuickServe <span className="text-gray-800">IT</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
            <Link to="/referral" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Refer & Earn</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/services" className="block text-gray-700 hover:text-blue-600 py-2" onClick={toggleMenu}>Services</Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-600 py-2" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-600 py-2" onClick={toggleMenu}>Contact</Link>
            <Link to="/referral" className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center" onClick={toggleMenu}>Refer & Earn</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
