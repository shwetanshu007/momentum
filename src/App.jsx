import React, { useEffect } from 'react';
import SimpleStackingServices from './components/SimpleStackingServices.jsx';
import CaseStudiesCarousel from './components/CaseStudiesCarousel.jsx';
import ZigzagCoreValues from './components/ZigzagCoreValues.jsx';

import { Button } from '@/components/ui/button.jsx';
import GooeyNav from './components/GooeyNav';
import GooeyBackground from './components/GooeyBackground.jsx';
import SpotlightCard from './components/SpotlightCard';
import CountUp from './components/CountUp';
import './App.css';

function App() {
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
    <div className="site-bg min-h-screen">
      {/* Replace GooeyNav with a nav bar that has logo on the left */}
      <nav className="w-full flex items-center justify-between px-6 py-4" style={{ background: 'transparent', position: 'relative', zIndex: 20 }}>
        <div className="flex items-center">
          {/* Logo removed */}
        </div>
        <div className="flex-1 flex justify-end">
          <GooeyNav />
        </div>
      </nav>

      {/* Hero Section - Important Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#00403d', position: 'relative', overflow: 'hidden' }}>
        <GooeyBackground />
        <div className="container mx-auto px-4 text-center flex items-center justify-center min-h-screen" style={{ height: '100vh', position: 'relative', zIndex: 1 }}>
          <div className="w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#d9ff00' }}>
              Accelerate Your Brand Momentumm
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-bold" style={{ color: '#f3f4f6', letterSpacing: '0.01em' }}>
              A full-service marketing agency helping brands achieve scalable growth through data-driven strategy, expert execution, and a relentless focus on performance.
            </p>
            <Button 
              className="button-gradient-effect text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: '#d9ff00', color: '#00403d' }}
              onClick={() => window.open('https://wa.me/919408266191?text=I%20am%20interested%20in%20a%20discovery%20call%20with%20Momentumm%20Media', '_blank')}
            >
              Start Your Free Discovery Call
            </Button>
          </div>
        </div>
      </section>

      {/* Our Services - Important Section */}
      <section id="services" className="py-20" style={{ backgroundColor: '#00403d' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#d9ff00' }}>
            Our Services
          </h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto" style={{ color: '#ffffff' }}>
            Integrated marketing solutions designed to drive measurable outcomes for your business.
          </p>
          <SimpleStackingServices />
        </div>
      </section>

      {/* About Us Section - Redesigned */}
      <section id="about" className="py-20" style={{ backgroundColor: '#b3cccc' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-8" style={{ color: '#00403d', letterSpacing: '-1px' }}>
            About <span className="text-[#00403d]">Momentumm Media</span>
          </h2>
          <p className="text-2xl text-center mb-12 max-w-4xl mx-auto font-medium" style={{ color: '#00403d' }}>
            A full-service marketing agency helping brands achieve scalable growth through data-driven strategy, expert execution, and a relentless focus on performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center min-h-[260px]">
              <div className="mb-4">
                <span className="inline-block bg-[#00403d] p-5 rounded-2xl shadow-md">
                  {/* Target Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="40" height="40">
                    <circle cx="16" cy="16" r="14" stroke="#fff" strokeWidth="2.5" fill="none" />
                    <circle cx="16" cy="16" r="7" stroke="#fff" strokeWidth="2.5" fill="none" />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#00403d]">Our Mission</h3>
              <p className="text-lg text-center text-[#00403d] font-medium">To empower businesses with strategic marketing solutions that deliver measurable, sustainable growth through disciplined planning and expert execution.</p>
            </div>
            {/* Vision Card */}
            <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center min-h-[260px]">
              <div className="mb-4">
                <span className="inline-block bg-[#00403d] p-5 rounded-2xl shadow-md">
                  {/* Eye Icon - improved */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40" width="40" height="40">
                    <path d="M4 20C7.5 12.5 15 7 20 7C25 7 32.5 12.5 36 20C32.5 27.5 25 33 20 33C15 33 7.5 27.5 4 20Z" stroke="#fff" strokeWidth="2.5" fill="none"/>
                    <circle cx="20" cy="20" r="6" stroke="#fff" strokeWidth="2.5" fill="none"/>
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#00403d]">Our Vision</h3>
              <p className="text-lg text-center text-[#00403d] font-medium">To be the trusted partner for brands seeking consistent, impactful marketing outcomes in an evolving landscape.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values - Zigzag River Animation */}
      <ZigzagCoreValues />

      {/* Why Choose Us - Unimportant Section */}
      <section id="why-choose" className="py-20" style={{ backgroundColor: '#00403d' }}>
        <div className="container mx-auto px-4" style={{ backgroundColor: '#00403d', borderRadius: '2rem', padding: '2rem 1rem' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#d9ff00' }}>
            Why Choose Momentumm Media
          </h2>
          {/* Stats Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#d9ff00' }}>
                <CountUp end={500} suffix="+" />
              </div>
              <p style={{ color: '#fff', fontWeight: 600 }}>Satisfied Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#d9ff00' }}>
                <CountUp end={250} suffix="%" />
              </div>
              <p style={{ color: '#fff', fontWeight: 600 }}>Average ROI Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#d9ff00' }}>
                <CountUp end={1} suffix=" Cr+" />
              </div>
              <p style={{ color: '#fff', fontWeight: 600 }}>Ad Spend Managed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#d9ff00' }}>
                <CountUp end={98} suffix="%" />
              </div>
              <p style={{ color: '#fff', fontWeight: 600 }}>Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#d9ff00' }}>
                <CountUp end={5} suffix="+" />
              </div>
              <p style={{ color: '#fff', fontWeight: 600 }}>Years of Excellence</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Removed duplicate Our Services block */}
            <div className="text-center p-6">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#d9ff00' }}>Certified Expertise</h3>
              <p style={{ color: '#fff' }}>A team of skilled professionals with certifications in leading marketing platforms and methodologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - Horizontal Scrollable Section */}
      <section id="case-studies" className="py-20" style={{ backgroundColor: '#e4e9e9' }}>
        <div className="container mx-auto px-4 flex flex-col items-center justify-center" style={{minHeight: '480px', height: '480px', paddingTop: '0', paddingBottom: '0', position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center', marginBottom: '320px'}}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2" style={{ color: '#00403d', marginTop: '0' }}>
            Case Studies
          </h2>
          <div className="flex justify-center items-center flex-1" style={{height: '320px', maxHeight: '320px', overflow: 'visible', width: '100%', marginTop: '0'}}>
            {/* Sleek animated carousel */}
            <CaseStudiesCarousel />
          </div>
        </div>
      </section>

      {/* Testimonials - Unimportant Section */}
      <section id="testimonials" className="py-20" style={{ backgroundColor: '#e4e9e9' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#00403d' }}>
            What Our Clients Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <SpotlightCard 
              className="p-8"
              backgroundColor="#ffffff"
              spotlightColor="rgba(0, 64, 61, 0.1)"
              borderColor="rgba(0, 64, 61, 0.2)"
            >
              <p className="text-lg mb-6" style={{ color: '#000000' }}>
                "Momentumm Media provided a clear strategy, exceptional execution, and consistent communication. Our lead quality and volume improved significantly."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-bold" style={{ color: '#00403d' }}>Aryan</p>
                  <p className="text-sm" style={{ color: '#000000' }}>CFO, AIM</p>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard 
              className="p-8"
              backgroundColor="#ffffff"
              spotlightColor="rgba(0, 64, 61, 0.1)"
              borderColor="rgba(0, 64, 61, 0.2)"
            >
              <p className="text-lg mb-6" style={{ color: '#000000' }}>
                "They function as an extension of our team, delivering results while maintaining complete transparency. A reliable partner for any business serious about growth."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-bold" style={{ color: '#00403d' }}>Harshal Chaudhary</p>
                  <p className="text-sm" style={{ color: '#000000' }}>Founder, Core Brain</p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Blog Section - Unimportant Section */}
      <section id="blog" className="py-20" style={{ backgroundColor: '#e4e9e9' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#00403d' }}>
            Latest Insights
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <SpotlightCard 
              className="p-6"
              backgroundColor="#ffffff"
              spotlightColor="rgba(0, 64, 61, 0.1)"
              borderColor="rgba(0, 64, 61, 0.2)"
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
              >
                Read More
              </Button>
            </SpotlightCard>

            <SpotlightCard 
              className="p-6"
              backgroundColor="#ffffff"
              spotlightColor="rgba(0, 64, 61, 0.1)"
              borderColor="rgba(0, 64, 61, 0.2)"
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
              >
                Read More
              </Button>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Call to Action - Important Section */}
      <section id="contact" className="py-20" style={{ backgroundColor: '#d9ff00' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'linear-gradient(90deg, #00403d 0%, #d9ff00 100%)', background: 'linear-gradient(90deg, #00403d 0%, #d9ff00 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: '#00403d' }}>
            Let's discuss how our marketing solutions can help you achieve your business goals.
          </p>
          <Button 
            className="button-gradient-effect text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 mr-4 mb-4"
            style={{ backgroundColor: '#00403d', color: '#d9ff00' }}
            onClick={() => window.open('https://wa.me/919408266191?text=I%20am%20interested%20in%20a%20discovery%20call%20with%20Momentumm%20Media', '_blank')}
          >
            Get Your Free Consultation
          </Button>
        </div>
      </section>

      {/* Footer - Modern Single Block */}
      <footer className="footer-modern py-16">
        <div className="footer-modern-bg flex flex-col items-center justify-center px-4 py-12" style={{ boxShadow: '0 8px 32px rgba(0,64,61,0.15)', borderRadius: '2rem', background: 'none' }}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: '#d9ff00' }}>
            Let's Grow Together
          </h3>
          <p className="text-lg md:text-xl mb-6 text-center" style={{ color: '#ffffff' }}>
            If you've come this far, you're serious about growth. Let's discuss how we can make it happen.
          </p>
          <div className="flex space-x-6 mb-6">
            <a href="https://www.facebook.com/share/1EZRtgvZBz/" target="_blank" rel="noopener noreferrer" style={{ color: '#d9ff00', background: 'none', fontSize: '2rem', display: 'flex', alignItems: 'center' }}>
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.733-.592-1.325-1.325-1.325z"/></svg>
            </a>
            <a href="https://www.instagram.com/momentummmediaofficial?igsh=eTFtdHI4MjE5MWxn" target="_blank" rel="noopener noreferrer" style={{ color: '#d9ff00', background: 'none', fontSize: '2rem', display: 'flex', alignItems: 'center' }}>
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.011-3.584.069-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.661 1.308-.974.974-1.25 2.385-1.308 3.661-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.308 3.661.974.974 2.385 1.25 3.661 1.308 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.661-1.308.974-.974 1.25-2.385 1.308-3.661.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.308-3.661-.974-.974-2.385-1.25-3.661-1.308-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
          </div>
          <div className="footer-modern-contact text-center mb-4">
            <p className="text-xl font-bold" style={{ color: '#d9ff00' }}>
              <span className="footer-modern-contact-icon">📧</span> momentummmediaofficial@gmail.com
              <span className="mx-4">|</span>
              <span className="footer-modern-contact-icon">📞</span> +91 94082 66191
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;





