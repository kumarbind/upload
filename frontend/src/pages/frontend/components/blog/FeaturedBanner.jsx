import React from 'react';

const FeaturedBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-4xl font-bold mb-2">Featured Blog</h2>
      <p className="text-lg">Check out our most popular post of the month!</p>
      <button className="mt-4 px-4 py-2 bg-white text-blue-600 font-semibold rounded-xl shadow">
        Read Now
      </button>
    </div>
  );
};

export default FeaturedBanner;
