import React from 'react';

const About3 = () => {
  return (
    <div className="relative w-full py-16 bg-slate-50  text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 uppercase text-center">
          Our Revolution in Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Statistic Card 1 */}
          <div className="bg-white bg-opacity-20 rounded-lg p-6 flex items-center space-x-4 shadow-lg transform transition hover:scale-105">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 flex items-center justify-center bg-white bg-opacity-30 rounded-full">
                <span className="text-2xl">🌍</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase">Presence Across</h3>
              <p className="text-sm">39 Countries</p>
            </div>
          </div>

          {/* Statistic Card 2 */}
          <div className="bg-white bg-opacity-20 rounded-lg p-6 flex items-center space-x-4 shadow-lg transform transition hover:scale-105">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 flex items-center justify-center bg-white bg-opacity-30 rounded-full">
                <span className="text-2xl">🔧</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase">Complete O&M Services</h3>
              <p className="text-sm">More than 275 projects commissioned</p>
            </div>
          </div>

          {/* Statistic Card 3 */}
          <div className="bg-white bg-opacity-20 rounded-lg p-6 flex items-center space-x-4 shadow-lg transform transition hover:scale-105">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 flex items-center justify-center bg-white bg-opacity-30 rounded-full">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase">Experienced EPC</h3>
              <p className="text-sm">About 1030 MW Project Commissioned and executed</p>
            </div>
          </div>

          {/* Statistic Card 4 */}
          <div className="bg-white bg-opacity-20 rounded-lg p-6 flex items-center space-x-4 shadow-lg transform transition hover:scale-105">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 flex items-center justify-center bg-white bg-opacity-30 rounded-full">
                <span className="text-2xl">🌱</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase">Energy Targets</h3>
              <p className="text-sm">Enabling India’s 500 GW 2030 renewable energy target</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;
