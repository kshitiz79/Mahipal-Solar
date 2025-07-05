import React from 'react';

const About2 = () => {
  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Right Section: Updated Text */}
          <div className="w-full md:w-1/2 md:pr-12 mt-8 md:mt-0">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase">
              Innovating for a Sustainable Future
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Pioneering breakthrough technologies to drive India’s green revolution.
            </p>
            <p className="text-xl text-gray-700 mb-6 font-semibold">
              Our commitment to innovation and sustainability sets us apart.
              <br />
              <span className="italic">Empowering communities through clean energy solutions.</span>
            </p>
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300 uppercase font-semibold tracking-wider">
              Discover More
            </button>
          </div>

          {/* Left Section: Circular Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images9.jpeg"
              alt="About Us"
              className="w-64 h-64 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
