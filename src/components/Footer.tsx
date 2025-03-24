import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">ARGJENDARI KAPIDANI</h3>
            <p className="text-gray-400 text-sm">
              Crafting timeless pieces of elegance since 1990.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Collections</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/collections" className="hover:text-white transition-colors">Rings</Link></li>
              <li><Link to="/collections" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/collections" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/collections" className="hover:text-white transition-colors">Bracelets</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/bespoke" className="hover:text-white transition-colors">Bespoke Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Book Appointment</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Subscribe to receive updates about new collections and exclusive offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-neutral-900 px-4 py-2 text-sm flex-1"
              />
              <button className="bg-gold hover:bg-gold/90 text-black px-4 py-2 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-sm text-gray-400">
          <p>&copy; 2024 ARGJENDARI KAPIDANI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;