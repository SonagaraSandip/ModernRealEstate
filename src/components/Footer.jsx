import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#172229] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Newsletter Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Subscribe newsletter and get -20% off
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Discover the perfect family haven in our spacious suburban residences. 
              These thoughtfully designed homes provide ample room for your growing family to thrive.
            </p>
          </div>

          {/* Shop Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Shop:</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Search
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  All collections
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  All products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  My Cart
                </a>
              </li>
            </ul>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Account:</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Contact with us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Faq
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Wishlist
                </a>
              </li>
            </ul>
          </div>

          {/* Share Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Share:</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Youtube
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025, Modernrealestate WorkDo, Powered by WorkDo.io
          </p>
          
          {/* Payment Icons */}
          <div className="flex gap-2">
            <div className="bg-white rounded px-2 py-1">
              <span className="text-blue-600 font-bold text-xs">VISA</span>
            </div>
            <div className="bg-white rounded px-2 py-1">
              <span className="text-red-600 font-bold text-xs">EXPRESS</span>
            </div>
            <div className="bg-white rounded px-2 py-1">
              <span className="text-blue-600 font-bold text-xs">AMEX</span>
            </div>
            <div className="bg-white rounded px-2 py-1">
              <span className="text-blue-600 font-bold text-xs">PAYPAL</span>
            </div>
            <div className="bg-white rounded px-2 py-1">
              <span className="text-blue-400 font-bold text-xs">UPI</span>
            </div>
            <div className="bg-white rounded px-2 py-1">
              <span className="text-orange-600 font-bold text-xs">DISCOVER</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
