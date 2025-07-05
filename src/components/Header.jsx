import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img 
              src="/images20.png" 
              alt="Logo" 
              className="h-12 w-auto transition-transform duration-300 hover:scale-110" 
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/updates", label: "Updates" },
                { to: "/gallery", label: "Gallery" },
                { to: "/more", label: "More" },
                { to: "/contact", label: "Contact" }
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-gray-700 font-medium text-lg relative px-2 py-1 
                              hover:text-indigo-600 transition-colors duration-300
                              after:content-[''] after:absolute after:w-0 after:h-0.5 
                              after:bg-indigo-600 after:bottom-0 after:left-0 
                              hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button (optional) */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;