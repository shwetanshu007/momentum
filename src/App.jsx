import React, { useEffect } from 'react';
import SimpleStackingServices from './components/SimpleStackingServices.jsx';
import CaseStudiesCarousel from './components/CaseStudiesCarousel.jsx';
import { StaggerTestimonials } from '@/components/ui/stagger-testimonials.jsx';
import { HandWrittenTitle } from '@/components/ui/hand-writing-text.jsx';

import useLenis from './hooks/useLenis.js';
import { HeroSection } from '@/components/ui/hero-section-with-smooth-bg-shader.jsx';

import { Button } from '@/components/ui/button.jsx';
import GooeyNav from './components/GooeyNav';
import GooeyBackground from './components/GooeyBackground.jsx';
import SpotlightCard from './components/SpotlightCard';
import CountUp from './components/CountUp';
import { MomentummSocialLinks } from './components/MomentummSocialLinks.jsx';
import MomentummTimelineDemo from './components/ui/momentumm-timeline-demo.jsx';
import GradientHeading from '@/components/ui/gradient-heading.jsx';
import LogoCarouselDemo from './components/LogoCarouselDemo.jsx';

import './App.css';


function App() {
  // Initialize Lenis smooth scrolling
  useLenis();
  
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.timeline-content-alt').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80 && rect.bottom > 80) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Entire page with Hero Shader Background */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
        {/* Background shader layer - fixed to viewport */}
        <div className="fixed inset-0 -z-10">
          <HeroSection 
            title=""
            highlightText=""
            description=""
            buttonText=""
            colors={["#00403d", "#d9ff00", "#b3cccc", "#004a44", "#b8e600", "#9bb8bb", "#72b9bb", "#ffd1bd"]}
            distortion={1.4}
            swirl={0.9}
            speed={0.5}
            offsetX={0.12}
            className="hero-section h-screen"
            veilOpacity="bg-black/10"
            onButtonClick={() => {}}
          />
        </div>
        
        {/* Navigation */}
        <nav className="w-full flex items-center justify-between px-6 py-4" style={{ background: 'transparent', position: 'relative', zIndex: 30 }}>
          <div className="flex items-center">
            {/* Logo removed */}
          </div>
          <div className="flex-1 flex justify-end">
            <GooeyNav />
          </div>
        </nav>

        {/* Hero Section Content */}
        <section id="hero">
          <HeroSection 
            title="Accelerate Your Brand with"
            highlightText="Momentumm Media"
            description="A full-service marketing agency helping brands achieve scalable growth through data-driven strategy, expert execution, and a relentless focus on performance."
            buttonText="Start Your Free Discovery Call"
            colors={["#00403d", "#d9ff00", "#b3cccc", "#004a44", "#b8e600", "#9bb8bb", "#72b9bb", "#ffd1bd"]}
            distortion={1.4}
            swirl={0.9}
            speed={0.5}
            offsetX={0.12}
            className="hero-section"
            titleClassName="tracking-tight text-white"
            descriptionClassName="text-white/95 font-medium"
            buttonClassName="bg-[#d9ff00] text-[#00403d] hover:bg-[#b8e600] border-[#d9ff00] hover:border-[#b8e600] font-bold shadow-xl hover:shadow-2xl transform hover:scale-105"
            veilOpacity="bg-black/30"
            onButtonClick={() => window.open('https://wa.me/919408266191?text=I%20am%20interested%20in%20a%20discovery%20call%20with%20Momentumm%20Media', '_blank')}
          />
        </section>
        
        {/* Our Services Section */}
        <section id="services" className="py-0" style={{ position: 'relative', zIndex: 10 }}>
          <SimpleStackingServices />
        </section>
        
        {/* About Section */}
        <section id="about" className="container px-6 mx-auto py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-[#00403d] mb-8 leading-tight">
              About Momentumm Media
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Momentumm Media, we specialize in creating powerful digital marketing strategies that accelerate your business growth. 
              Our team of experts combines creativity with data-driven insights to deliver exceptional results for brands of all sizes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From social media management to performance marketing, we're your partners in building a strong digital presence 
              that converts prospects into loyal customers.
            </p>
          </div>
        </section>

        {/* Our Core Values - Interactive Timeline */}
      <section id="values" style={{ position: 'relative', zIndex: 10 }}>
        {/* Desktop: Interactive Timeline */}
        <div className="hidden md:block">
          <MomentummTimelineDemo />
        </div>
        
        {/* Mobile: Simple Text Layout */}
        <div className="block md:hidden py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#00403d' }}>
              Our Proven Process
            </h2>
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="bg-white p-5 rounded-lg shadow-md border-l-4" style={{ borderColor: '#00403d' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#00403d' }}>1. Discovery & Research</h3>
                <p className="text-sm text-gray-700">Deep dive into your business, audience, and market to build a foundation for success.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md border-l-4" style={{ borderColor: '#00403d' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#00403d' }}>2. Strategy Development</h3>
                <p className="text-sm text-gray-700">Create a comprehensive marketing strategy tailored to your business goals.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md border-l-4" style={{ borderColor: '#00403d' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#00403d' }}>3. Creative & Content</h3>
                <p className="text-sm text-gray-700">Develop compelling creative assets and content that resonates with your audience.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md border-l-4" style={{ borderColor: '#00403d' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#00403d' }}>4. Campaign Launch</h3>
                <p className="text-sm text-gray-700">Execute multi-channel campaigns with precision timing and strategic coordination.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md border-l-4" style={{ borderColor: '#00403d' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#00403d' }}>5. Growth & Optimization</h3>
                <p className="text-sm text-gray-700">Monitor performance and continuously optimize for maximum ROI and sustainable growth.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md border-l-4" style={{ borderColor: '#00403d' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#00403d' }}>6. Analytics & Reporting</h3>
                <p className="text-sm text-gray-700">Track key metrics and provide transparent reporting to measure success and inform decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Unimportant Section */}
      <section id="why-choose" className="py-20 px-4" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container mx-auto px-2 sm:px-4" style={{ backgroundColor: '#00403d', borderRadius: '1rem sm:2rem', padding: '1.5rem 1rem sm:2rem 1rem' }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16" style={{ color: '#d9ff00' }}>
            Why Choose Momentumm Media
          </h2>
          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-8 mb-12 sm:mb-16">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2" style={{ color: '#d9ff00' }}>
                <CountUp end={500} suffix="+" />
              </div>
              <p className="text-sm sm:text-base" style={{ color: '#fff', fontWeight: 600 }}>Satisfied Clients</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2" style={{ color: '#d9ff00' }}>
                <CountUp end={250} suffix="%" />
              </div>
              <p className="text-sm sm:text-base" style={{ color: '#fff', fontWeight: 600 }}>Average ROI Increase</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2" style={{ color: '#d9ff00' }}>
                <CountUp end={1} suffix=" Cr+" />
              </div>
              <p className="text-sm sm:text-base" style={{ color: '#fff', fontWeight: 600 }}>Ad Spend Managed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2" style={{ color: '#d9ff00' }}>
                <CountUp end={98} suffix="%" />
              </div>
              <p className="text-sm sm:text-base" style={{ color: '#fff', fontWeight: 600 }}>Client Satisfaction</p>
            </div>
            <div className="text-center col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2" style={{ color: '#d9ff00' }}>
                <CountUp end={5} suffix="+" />
              </div>
              <p className="text-sm sm:text-base" style={{ color: '#fff', fontWeight: 600 }}>Years of Excellence</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <div className="text-center p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#d9ff00' }}>Certified Expertise</h3>
              <p className="text-sm sm:text-base" style={{ color: '#fff' }}>A team of skilled professionals with certifications in leading marketing platforms and methodologies.</p>
            </div>
            <div className="text-center p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#d9ff00' }}>End-to-End Partnership</h3>
              <p className="text-sm sm:text-base" style={{ color: '#fff' }}>We manage your marketing initiatives from planning to execution, ensuring complete alignment with your business objectives.</p>
            </div>
            <div className="text-center p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#d9ff00' }}>Strategy-Led Execution</h3>
              <p className="text-sm sm:text-base" style={{ color: '#fff' }}>Our work is grounded in detailed planning, clear KPIs, and consistent measurement to ensure your investments generate meaningful results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel Section - Trusted Brands */}
      <section id="clients" style={{ position: 'relative', zIndex: 10 }}>
        <LogoCarouselDemo />
      </section>

      {/* Case Studies - Interactive Stagger Cards */}
      <section id="case-studies" style={{ position: 'relative', zIndex: 10 }}>
        {/* Desktop: Interactive Stagger Cards */}
        <div className="hidden md:block">
          <StaggerTestimonials />
        </div>
        
        {/* Mobile: Simple Text Layout */}
        <div className="block md:hidden py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#00403d' }}>
              Client Success Stories
            </h2>
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2" style={{ color: '#00403d' }}>Skinspree Clinic</h3>
                <p className="text-sm text-gray-700 mb-3">"Momentumm Media turned our marketing into a reliable growth engine. We saw a 150% rise in qualified leads in just 6 months with 35% lower cost per lead."</p>
                <div className="text-xs" style={{ color: '#00403d' }}>
                  <strong>Results:</strong> 150% rise in qualified leads, 35% lower cost per lead
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2" style={{ color: '#00403d' }}>AIM</h3>
                <p className="text-sm text-gray-700 mb-3">"They brought structure and strategy that finally delivered real growth. Our conversion rate increased by 200% and average order value by 45%."</p>
                <div className="text-xs" style={{ color: '#00403d' }}>
                  <strong>Results:</strong> 200% higher conversion rate, 45% increase in AOV
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2" style={{ color: '#00403d' }}>Core Brain</h3>
                <p className="text-sm text-gray-700 mb-3">"We finally understood where our marketing spend was going—and what it delivered. 250% ROI growth and 1 Cr+ ad spend managed efficiently."</p>
                <div className="text-xs" style={{ color: '#00403d' }}>
                  <strong>Results:</strong> 250% ROI growth, 1 Cr+ ad spend managed
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2" style={{ color: '#00403d' }}>Enmuse</h3>
                <p className="text-sm text-gray-700 mb-3">"They helped us connect fashion with emotion—backed by measurable results. 3X engagement rate and 40% drop in cost per acquisition."</p>
                <div className="text-xs" style={{ color: '#00403d' }}>
                  <strong>Results:</strong> 3X engagement rate, 40% drop in CAC
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2" style={{ color: '#00403d' }}>Justin Photography</h3>
                <p className="text-sm text-gray-700 mb-3">"Momentumm Media helped us turn our passion into a full-fledged business. 180% rise in inbound leads from high-value clients and 2.5X growth in social engagement."</p>
                <div className="text-xs" style={{ color: '#00403d' }}>
                  <strong>Results:</strong> 180% rise in inbound leads, 2.5X social engagement
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Blog Section - Unimportant Section */}
      <section id="blog" className="py-12 px-4" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16" style={{ color: '#ffffff' }}>
            Latest Insights
          </h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <SpotlightCard 
              className="p-6 cursor-pointer"
              backgroundColor="#ffffff"
              spotlightColor="rgba(0, 64, 61, 0.1)"
              borderColor="rgba(0, 64, 61, 0.2)"
              onClick={() => window.location.href = '/blog/measuring-marketing-roi'}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#00403d' }}>
                Measuring Marketing ROI: A Practical Framework
              </h3>
              <p className="mb-4" style={{ color: '#000000' }}>
                Marketing is an investment, not an expense. Learn how to measure its true impact with our practical framework for evaluating marketing ROI.
              </p>
              <Button 
                className="button-gradient-effect font-semibold"
                style={{ backgroundColor: '#00403d', color: '#d9ff00' }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = '/blog/measuring-marketing-roi';
                }}
              >
                Read More
              </Button>
            </SpotlightCard>

            <SpotlightCard 
              className="p-6 cursor-pointer"
              backgroundColor="#ffffff"
              spotlightColor="rgba(0, 64, 61, 0.1)"
              borderColor="rgba(0, 64, 61, 0.2)"
              onClick={() => window.location.href = '/blog/building-cohesive-brand-strategy'}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#00403d' }}>
                Building a Cohesive Brand Strategy
              </h3>
              <p className="mb-4" style={{ color: '#000000' }}>
                A strong brand is more than a logo. Discover our evergreen approach to building a brand strategy that aligns your organization and resonates with your audience.
              </p>
              <Button 
                className="button-gradient-effect font-semibold"
                style={{ backgroundColor: '#00403d', color: '#d9ff00' }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = '/blog/building-cohesive-brand-strategy';
                }}
              >
                Read More
              </Button>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Call to Action - Important Section */}
      <section id="contact" className="py-12 px-4" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container mx-auto px-2 sm:px-4 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#ffffff' }}>
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto px-4" style={{ color: '#ffffff' }}>
            Let's discuss how our marketing solutions can help you achieve your business goals.
          </p>
            <Button 
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
            style={{ backgroundColor: '#00403d', color: '#d9ff00' }}
            onClick={() => window.open('https://wa.me/919408266191?text=I%20am%20interested%20in%20a%20discovery%20call%20with%20Momentumm%20Media', '_blank')}
          >
            Get Your Free Consultation
          </Button>
        </div>
      </section>

      {/* Footer - Modern Single Block */}
      <footer className="footer-modern py-6 sm:py-8 px-4">
        <div className="footer-modern-bg flex flex-col items-center justify-center px-2 sm:px-4 py-6 sm:py-8" style={{ boxShadow: '0 8px 32px rgba(0,64,61,0.15)', borderRadius: '1rem sm:2rem', background: 'none' }}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center" style={{ color: '#d9ff00' }}>
            Let's Grow Together
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-12 sm:mb-18 text-center px-4" style={{ color: '#ffffff' }}>
            If you've come this far, you're serious about growth. Let's discuss how we can make it happen.
          </p>
          <div className="mb-4 sm:mb-6">
            <MomentummSocialLinks className="text-[#d9ff00]" />
          </div>
          <div className="footer-modern-contact text-center mb-3 sm:mb-4">
            <p className="text-base sm:text-xl font-bold flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 px-4" style={{ color: '#d9ff00' }}>
              <span className="flex items-center gap-2">
                <span className="footer-modern-contact-icon">📧</span>
                <span className="text-sm sm:text-base break-all">momentummmediaofficial@gmail.com</span>
              </span>
              <span className="hidden sm:inline mx-4">|</span>
              <span className="flex items-center gap-2">
                <span className="footer-modern-contact-icon">📞</span>
                <span>+91 94082 66191</span>
              </span>
            </p>
          </div>
          <div className="text-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#d9ff00]/20 w-full">
            <p className="text-xs sm:text-sm font-semibold px-4" style={{ color: '#d9ff00' }}>
              © {new Date().getFullYear()} Momentumm Media. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

export default App;





