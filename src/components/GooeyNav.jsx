import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import Logo from '../assets/momentumm-logo.png';

const GooeyNav = () => {
  const [activeItem, setActiveItem] = useState('');

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f7f8f8] shadow-lg">
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
              className="button-gradient-effect bg-[#00403d] text-[#d9ff00] font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#d9ff00] hover:text-[#00403d]"
              onClick={() => window.open('https://wa.me/917383074191?text=Hi%20Momentumm%20Media%2C%20I%20would%20like%20to%20book%20a%20discovery%20call!', '_blank')}
            >
              Free Discovery Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-[#00403d] hover:text-[#d9ff00] transition-colors duration-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GooeyNav;

