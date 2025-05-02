
import React from 'react';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">St. Petersburg Travel Guide</h2>
            <p className="text-blue-100">Your companion for exploring the cultural capital of Russia</p>
          </div>
          <div className="flex space-x-4">
            <button className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition-colors">
              <Icon name="Facebook" size={20} />
            </button>
            <button className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition-colors">
              <Icon name="Instagram" size={20} />
            </button>
            <button className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition-colors">
              <Icon name="Twitter" size={20} />
            </button>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-blue-700 text-center text-blue-200 text-sm">
          © {new Date().getFullYear()} St. Petersburg Travel Guide. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
