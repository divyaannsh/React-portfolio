import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 top-0 transition-all duration-500 ease-in-out p-4 sm:p-6 ${
        navbar ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
      style={{ backgroundColor: navbar ? 'rgba(0, 0, 0, 0.85)' : 'transparent' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 transform transition-transform duration-300 hover:scale-110"
          />
          <span className="text-white text-xl sm:text-2xl font-bold">Divyansh Srivastava</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 sm:space-x-8">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-teal-400"
              className={`relative text-white text-base sm:text-lg cursor-pointer transition ${
                activeSection === section.toLowerCase() ? 'text-teal-400' : ''
              }`}
              onSetActive={handleSetActive}
            >
              {section}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 transform scale-x-0 transition-transform duration-300 ease-in-out ${
                  activeSection === section.toLowerCase() ? 'scale-x-100' : ''
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-900 py-4 space-y-4">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className={`relative text-white text-xl cursor-pointer transition ${
                activeSection === section.toLowerCase() ? 'text-teal-400' : ''
              }`}
              onClick={toggleMobileMenu}
              onSetActive={handleSetActive}
            >
              {section}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 transform scale-x-0 transition-transform duration-300 ease-in-out ${
                  activeSection === section.toLowerCase() ? 'scale-x-100' : ''
                }`}
              ></span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
