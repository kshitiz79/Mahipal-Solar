import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r bg-white text-black py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left Column: Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/images20.png"
            alt="Future Green Power Logo"
            className="h-40 transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Center Column: Services & Projects */}
        <div className="grid grid-cols-2 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-3 tracking-wide">
              Our Services
            </h3>
            <ul className="text-sm space-y-2 opacity-90">
              <li>Inverter Mounting Systems</li>
              <li>Solar Inverter Installation</li>
              <li>Solar Panel Inverters</li>
              <li>Solar Power Mounting</li>
              <li>Ground Mount Solutions</li>
              <li>Ground-Mounted Solar Panels</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-3 tracking-wide">
              Our Projects
            </h3>
            <ul className="text-sm space-y-2 opacity-90">
              <li>Ground Mount Projects</li>
              <li>Solar On-Grid Systems</li>
              <li>Solar Water Pumping</li>
              <li>Commercial Solar Plants</li>
              <li>Renewable Energy Solutions</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Contact Info */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3 tracking-wide">
            Get in Touch
          </h3>
          <p className="text-sm leading-relaxed opacity-90">
            Future Green Power Solutions Pvt. Ltd.<br />
            92, Karni Nagar E, Gandhi Path West,<br />
            Near Sanaya Restaurant, Vaishali Nagar,<br />
            Jaipur, Rajasthan 302021<br />
            <span className="block mt-3">
              <strong>Phone:</strong> +91 80427 82156
            </span>
            <span className="block">
              <strong>Email:</strong> fgps.solar@gmail.com
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Future Green Power Solutions. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;