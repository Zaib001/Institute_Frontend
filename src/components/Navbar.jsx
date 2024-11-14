import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full z-50">
      <div className="container mx-auto px-6 py-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/path/to/logo.png" alt="Logo" className="h-10" />
          <span className="text-lg font-bold">Jolie Institute</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {['Home', 'About', 'Services', 'Courses', 'Contact Us', 'Curriculum'].map((link, index) => (
            <Link
              key={index}
              to={`/${link.toLowerCase().replace(' ', '-')}`}
              className="text-gray-800 uppercase hover:text-red-600 font-medium transition duration-300"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="px-6 py-1 text-white bg-red-600 hover:bg-red-700 transition duration-300">
            Sign In
          </Link>
          <Link to="/signup" className="px-3 py-1 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition duration-300">
            Sign Up
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
