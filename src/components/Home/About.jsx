import React from 'react';

const About = () => {
  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section: Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="/images9.jpeg"
              alt="About Us"
              className="w-full h-[400px] object-cover object-center "
            />
          </div>

          {/* Right Section: Text */}
          <div className="w-full md:w-1/2 md:pl-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 uppercase">
              Creating Climate for Change
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Enabling India’s Green Energy Goal of 500 GW by 2030
            </p>
            <p className="text-lg text-gray-600 mb-8 font-semibold">
              Making in India for the World
            </p>
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-full 
                             hover:bg-indigo-700 transition-all duration-300
                             uppercase font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;