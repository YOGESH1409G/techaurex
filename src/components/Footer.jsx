import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <div className="flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              Quick Links
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              Support
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              Legal
            </a>
          </div>
          <div className="flex space-x-4">
            <span className="text-gray-400 cursor-pointer hover:text-purple-600 transition-colors">📘</span>
            <span className="text-gray-400 cursor-pointer hover:text-purple-600 transition-colors">🐦</span>
            <span className="text-gray-400 cursor-pointer hover:text-purple-600 transition-colors">💼</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t text-center text-gray-500 text-sm">
          <p>&copy; 2024 TechVault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;