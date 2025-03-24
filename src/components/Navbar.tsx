import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, Search, Heart, User, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <button 
                className="lg:hidden p-2"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
              <div className="hidden lg:flex items-center space-x-8 ml-8">
                <Link to="/collections" className="text-sm hover:text-gold transition-colors">Collections</Link>
                <Link to="/about" className="text-sm hover:text-gold transition-colors">About Us</Link>
                <Link to="/bespoke" className="text-sm hover:text-gold transition-colors">Bespoke</Link>
                <Link to="/contact" className="text-sm hover:text-gold transition-colors">Contact</Link>
              </div>
            </div>

            <Link to="/" className="text-2xl font-serif">ARGJENDARI KAPIDANI</Link>

            <div className="flex items-center space-x-4">
              <button 
                className="p-2"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-2">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2">
                <ShoppingBag className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className={`
          absolute top-full left-0 w-full bg-black/80 backdrop-blur-md
          transition-all duration-300 overflow-hidden
          ${isSearchOpen ? 'max-h-20 py-4' : 'max-h-0'}
        `}>
          <div className="max-w-3xl mx-auto px-4">
            <input
              type="search"
              placeholder="Search for jewelry..."
              className="w-full bg-neutral-800 text-white px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`
        fixed inset-0 bg-black z-50 transition-transform duration-300
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-4">
          <button 
            className="p-2 mb-8"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="space-y-6">
            <Link to="/collections" className="block text-lg hover:text-gold transition-colors">Collections</Link>
            <Link to="/about" className="block text-lg hover:text-gold transition-colors">About Us</Link>
            <Link to="/bespoke" className="block text-lg hover:text-gold transition-colors">Bespoke</Link>
            <Link to="/contact" className="block text-lg hover:text-gold transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;