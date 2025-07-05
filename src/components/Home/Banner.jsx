import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Image */}
      <img
        src="/2.png"
        alt="Banner"
        className="w-full h-full object-cover object-center"
      />
      
      {/* Overlay (optional, kept for visual enhancement) */}
      <div className="absolute inset-0 bg-black bg-opacity-20" />
    </div>
  );
};

export default Banner;