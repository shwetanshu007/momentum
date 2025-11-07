import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import Logo from '../assets/momentumm-logo.png';

const GooeyNav = () => {
  const [activeItem, setActiveItem] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const topThreshold = window.innerHeight * 0.08; // Top 8% of the page
      
      if (currentScrollY <= topThreshold) {
        // In top 8% of page - always show
        setIsVisible(true);
      } else {
        // Past top 8% - always hide (even when scrolling up)
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#values' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#f7f8f8] shadow-lg transition-transform duration-300 ease-in-out ${
      isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <img src={Logo} alt="Momentumm Media Logo" style={{ height: '44px', width: 'auto' }} />
          </div>

          {/* Navigation Items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveItem(item.name);
                    scrollToSection(item.href);
                  }}
                  className={`gooey-nav-button px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden ${
                    activeItem === item.name
                      ? 'text-[#00403d] bg-[#d9ff00]'
                      : 'text-[#00403d]'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-[#00403d] text-[#d9ff00] font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#d9ff00] hover:text-[#00403d]"
              onClick={() => window.open('https://wa.me/917383074191?text=Hi%20Momentumm%20Media%2C%20I%20would%20like%20to%20book%20a%20discovery%20call!', '_blank')}
            >
              Free Discovery Call
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#00403d] hover:text-[#d9ff00] transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#f7f8f8] border-t border-[#00403d]/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveItem(item.name);
                  scrollToSection(item.href);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeItem === item.name
                    ? 'text-[#00403d] bg-[#d9ff00]'
                    : 'text-[#00403d] hover:bg-[#d9ff00]/20'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4">
              <Button 
                className="w-full bg-[#00403d] text-[#d9ff00] font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:bg-[#d9ff00] hover:text-[#00403d]"
                onClick={() => {
                  window.open('https://wa.me/917383074191?text=Hi%20Momentumm%20Media%2C%20I%20would%20like%20to%20book%20a%20discovery%20call!', '_blank');
                  setIsMobileMenuOpen(false);
                }}
              >
                Free Discovery Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default GooeyNav;

