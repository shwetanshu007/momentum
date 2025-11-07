import React from 'react';
import { MomentummFloatingNav } from './MomentummFloatingNav';

// Test page to showcase the FloatingNav component
export default function FloatingNavTestPage() {
  return (
    <div className="relative">
      <MomentummFloatingNav />
      
      {/* Test content with sections */}
      <div className="min-h-screen bg-gradient-to-b from-[#00403d] to-[#004a44] text-white">
        
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold mb-6 text-[#d9ff00]">
              Floating Navigation Test
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Scroll down to see the floating navigation appear and disappear based on scroll direction.
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-md mx-auto">
              <p className="font-medium">Instructions:</p>
              <ul className="text-left mt-2 space-y-1 text-sm">
                <li>• Scroll down to hide navigation</li>
                <li>• Scroll up to reveal navigation</li>
                <li>• Click nav items for smooth scrolling</li>
                <li>• Test "Contact Us" button</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen flex items-center justify-center bg-[#b3cccc]">
          <div className="text-center px-4">
            <h2 className="text-4xl font-bold mb-6 text-[#00403d]">Services Section</h2>
            <p className="text-xl text-[#00403d]">
              This demonstrates the services section navigation target.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center bg-[#d9ff00]">
          <div className="text-center px-4">
            <h2 className="text-4xl font-bold mb-6 text-[#00403d]">About Section</h2>
            <p className="text-xl text-[#00403d]">
              This demonstrates the about section navigation target.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section id="values" className="min-h-screen flex items-center justify-center bg-[#004a44]">
          <div className="text-center px-4">
            <h2 className="text-4xl font-bold mb-6 text-[#d9ff00]">Core Values</h2>
            <p className="text-xl text-white">
              This demonstrates the values section navigation target.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose" className="min-h-screen flex items-center justify-center bg-[#b8e600]">
          <div className="text-center px-4">
            <h2 className="text-4xl font-bold mb-6 text-[#00403d]">Why Choose Us</h2>
            <p className="text-xl text-[#00403d]">
              This demonstrates the why choose us section navigation target.
            </p>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="min-h-screen flex items-center justify-center bg-[#9bb8bb]">
          <div className="text-center px-4">
            <h2 className="text-4xl font-bold mb-6 text-[#00403d]">Case Studies</h2>
            <p className="text-xl text-[#00403d]">
              This demonstrates the case studies section navigation target.
            </p>
          </div>
        </section>

        <div className="h-96 bg-[#00403d] flex items-center justify-center">
          <p className="text-[#d9ff00] text-xl font-semibold">
            Floating Navigation Integration Complete! 🚀
          </p>
        </div>

      </div>
    </div>
  );
}