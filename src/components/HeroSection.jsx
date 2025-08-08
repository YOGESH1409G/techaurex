import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8 mb-8">
      <div className="flex items-center justify-between">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Your Hub for<br />
            <span className="text-purple-600">Unbiased Gadget<br />Reviews</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Dive deep into detailed analyses of the latest smartphones, smartwatches, 
            headphones, and more. Make informed decisions with TechVault Reviews.
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors">
            Explore Reviews
          </button>
        </div>
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=300&h=250&fit=crop"
            alt="Gadgets illustration"
            className="w-80 h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;