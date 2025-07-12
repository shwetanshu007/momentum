import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import GooeyNav from './components/GooeyNav';
import ParticlesBackground from './components/ParticlesBackground';
import SpotlightCard from './components/SpotlightCard';
import CountUp from './components/CountUp';
import './App.css';

function App() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <section id="hero" className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#00403d' }}>
        <ParticlesBackground className="w-full h-full">
          <div className="container mx-auto px-4 text-center flex items-center justify-center min-h-screen" style={{ height: '100vh' }}>
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
        </ParticlesBackground>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 - Pine Green */}
            <SpotlightCard 
              className="p-6"
              backgroundColor="#00403d"
              spotlightColor="rgba(217, 255, 0, 0.15)"
              borderColor="rgba(217, 255, 0, 0.3)"
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#d9ff00' }}>Strategy & Branding</h3>
              <p className="mb-4" style={{ color: '#ffffff' }}>Develop a strong, differentiated brand presence.</p>
              <ul className="space-y-2 mb-6" style={{ color: '#b3cfcd' }}>
                <li>• Brand Strategy & Positioning</li>
                <li>• Visual Identity & Logo Design</li>
                <li>• Brand Guidelines</li>
                <li>• Market Research</li>
              </ul>
            </SpotlightCard>

            {/* Service Card 2 - Neon Yellow */}
            <SpotlightCard 
              className="p-6"
              backgroundColor="#d9ff00"
              spotlightColor="rgba(0, 64, 61, 0.15)"
              borderColor="rgba(0, 64, 61, 0.3)"
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#00403d' }}>Digital Marketing</h3>
              <p className="mb-4" style={{ color: '#00403d' }}>Maximize reach and conversions with precise, data-informed campaigns.</p>
              <ul className="space-y-2 mb-6" style={{ color: '#00403d' }}>
                <li>• SEO & SEM</li>
                <li>• PPC Advertising</li>
                <li>• Email Marketing</li>
                <li>• WhatsApp Marketing</li>
              </ul>
            </SpotlightCard>

            {/* Service Card 3 - Pine Green */}
            <SpotlightCard 
              className="p-6"
              backgroundColor="#00403d"
              spotlightColor="rgba(217, 255, 0, 0.15)"
              borderColor="rgba(217, 255, 0, 0.3)"
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#d9ff00' }}>Performance Marketing</h3>
              <p className="mb-4" style={{ color: '#d9ff00' }}>Results-driven campaigns focused on maximizing ROI.</p>
              <ul className="space-y-2 mb-6" style={{ color: '#d9ff00' }}>
                <li>• Conversion Rate Optimization</li>
                <li>• Paid Media Strategy</li>
                <li>• Funnel Development</li>
                <li>• Attribution & Measurement</li>
              </ul>
            </SpotlightCard>

            {/* Service Card 4 - Neon Yellow */}
            <SpotlightCard 
              className="p-6"
              backgroundColor="#d9ff00"
              spotlightColor="rgba(0, 64, 61, 0.15)"
              borderColor="rgba(0, 64, 61, 0.3)"
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#00403d' }}>Social Media & Content</h3>
              <p className="mb-4" style={{ color: '#00403d' }}>Build meaningful connections with your audience.</p>
              <ul className="space-y-2 mb-6" style={{ color: '#00403d' }}>
                <li>• Content Strategy & Creation</li>
                <li>• Social Media Management</li>
                <li>• Influencer Partnerships</li>
                <li>• Video Production</li>
              </ul>
            </SpotlightCard>

            {/* Service Card 5 - Pine Green */}
            <SpotlightCard 
              className="p-6"
              backgroundColor="#00403d"
              spotlightColor="rgba(217, 255, 0, 0.15)"
              borderColor="rgba(217, 255, 0, 0.3)"
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#d9ff00' }}>Community & Reputation</h3>
              <p className="mb-4" style={{ color: '#ffffff' }}>Safeguard and strengthen your brand's reputation.</p>
              <ul className="space-y-2 mb-6" style={{ color: '#b3cfcd' }}>
                <li>• Reputation Monitoring</li>
                <li>• Community Engagement</li>
                <li>• Crisis Communications</li>
                <li>• PR Strategy</li>
              </ul>
            </SpotlightCard>

            {/* Service Card 6 - Neon Yellow */}
            <SpotlightCard 
              className="p-6"
              backgroundColor="#d9ff00"
              spotlightColor="rgba(0, 64, 61, 0.15)"
              borderColor="rgba(0, 64, 61, 0.3)"
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#00403d' }}>Training & Consulting</h3>
              <p className="mb-4" style={{ color: '#00403d' }}>Empower your team with best-practice marketing expertise.</p>
              <ul className="space-y-2 mb-6" style={{ color: '#00403d' }}>
                <li>• Customized Workshops</li>
                <li>• Strategy Consulting</li>
                <li>• Process Optimization</li>
              </ul>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Unimportant Section */}
      <section id="why-choose" className="py-20" style={{ backgroundColor: '#e4e9e9' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#00403d' }}>
            Why Choose Momentumm Media
          </h2>
          
          {/* Stats Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#00403d' }}>
                <CountUp end={500} suffix="+" />
              </div>
              <p style={{ color: '#000000' }}>Satisfied Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#00403d' }}>
                <CountUp end={250} suffix="%" />
              </div>
              <p style={{ color: '#000000' }}>Average ROI Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#00403d' }}>
                <CountUp end={1} suffix=" Cr+" />
              </div>
              <p style={{ color: '#000000' }}>Ad Spend Managed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#00403d' }}>
                <CountUp end={98} suffix="%" />
              </div>
              <p style={{ color: '#000000' }}>Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#00403d' }}>
                <CountUp end={5} suffix="+" />
              </div>
              <p style={{ color: '#000000' }}>Years of Excellence</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#00403d' }}>End-to-End Partnership</h3>
              <p style={{ color: '#000000' }}>We manage your marketing initiatives from planning to execution, ensuring complete alignment with your business objectives.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#00403d' }}>Strategy-Led Execution</h3>
              <p style={{ color: '#000000' }}>Our work is grounded in detailed planning, clear KPIs, and consistent measurement to ensure your investments generate meaningful results.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#00403d' }}>Certified Expertise</h3>
              <p style={{ color: '#000000' }}>A team of skilled professionals with certifications in leading marketing platforms and methodologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process - Important Section */}
      <section id="process" className="py-20" style={{ backgroundColor: '#00403d' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#d9ff00' }}>
            Our Proven Process
          </h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto" style={{ color: '#ffffff' }}>
            A structured, transparent approach ensuring dependable delivery and measurable outcomes.
          </p>
          <div className="relative mx-auto max-w-5xl">
            <div className="timeline-vertical-alt">
              <div className="timeline-bar-alt"></div>
              {[{
                step: "1",
                title: "Discovery Call",
                description: "An in-depth consultation to understand your business, goals, and challenges.",
                details: ["Business analysis and goal setting", "Target audience definition", "Competitor landscape review"]
              }, {
                step: "2",
                title: "Proposal & Scope",
                description: "A clear, detailed roadmap for engagement.",
                details: ["Custom strategy development", "Defined deliverables and timelines", "Transparent investment breakdown"]
              }, {
                step: "3",
                title: "Onboarding Kit",
                description: "Equipping you with the necessary tools and access.",
                details: ["Project management setup", "Access to platforms and assets", "Team introductions"]
              }, {
                step: "4",
                title: "Kickoff Meeting",
                description: "Aligning all stakeholders before execution.",
                details: ["Strategy presentation", "Timeline confirmation", "Roles and responsibilities"]
              }, {
                step: "5",
                title: "Optimization Cycle",
                description: "Continuous monitoring and refinement for maximum ROI.",
                details: ["Performance tracking", "Campaign adjustments", "Comprehensive reporting"]
              }].map((process, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={index} className={`timeline-step-alt flex flex-col md:flex-row items-center mb-16 relative ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`w-full md:w-1/2 flex ${isLeft ? 'justify-end' : 'justify-start'} md:pr-8 md:pl-8`}>
                      <div className={`timeline-content-alt`} id={`timeline-step-${index}`}>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#00403d' }}>{process.title}</h3>
                        <p className="mb-4 text-lg" style={{ color: '#00403d' }}>{process.description}</p>
                        <ul className="text-base space-y-2" style={{ color: '#00403d' }}>
                          {process.details.map((detail, i) => (
                            <li key={i}>• {detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="timeline-dot-alt absolute left-1/2 md:left-auto md:top-1/2 md:translate-y-[-50%] md:translate-x-0 z-10" style={{ transform: 'translate(-50%, 0)' }}>
                      <span className="bg-gradient-to-br from-[#d9ff00] via-[#b3cfcd] to-[#00403d] border-4 border-[#00403d] w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shadow-xl">{process.step}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - Horizontal Scrollable Section */}
      <section id="case-studies" className="py-20" style={{ backgroundColor: '#e4e9e9' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10" style={{ color: '#00403d' }}>
            Case Studies
          </h2>
          <div className="case-studies-scroll flex overflow-x-auto space-x-8 pb-4" style={{ scrollbarWidth: 'thin', scrollbarColor: '#d9ff00 #b3cfcd' }}>
            {[{
              title: "Aaryan International",
              industry: "Professional Services",
              challenge: "Stagnant lead generation despite significant marketing spend. Existing strategy lacked clear targeting and suffered from inconsistent messaging across channels.",
              approach: [
                "Detailed discovery session to define goals and target audiences",
                "Unified brand strategy with clear positioning",
                "Data-driven digital marketing plan (SEO, PPC, WhatsApp Marketing)",
                "Rigorous performance tracking and regular reporting"
              ],
              results: [
                "150% increase in qualified leads within six months",
                "35% reduction in cost per lead",
                "Improved brand consistency across digital channels",
                "Transparent reporting for better budget allocation"
              ],
              feedback: "Momentumm Media’s structured approach and commitment to transparency transformed our marketing into a reliable growth engine."
            }, {
              title: "AIM",
              industry: "Retail",
              challenge: "Low conversion rates and limited visibility in a competitive market. Campaigns lacked cohesion, and website was underperforming.",
              approach: [
                "In-depth audit to identify conversion bottlenecks",
                "Redesigned landing pages to align with brand strategy",
                "Targeted Performance Marketing campaign",
                "Integrated WhatsApp Marketing for direct engagement"
              ],
              results: [
                "200% improvement in conversion rates",
                "45% increase in average order value",
                "2X higher customer engagement through WhatsApp",
                "Enhanced reporting and strategic budget allocation"
              ],
              feedback: "Momentumm Media provided the clarity and expertise we needed to align our marketing efforts and achieve real, sustainable growth."
            }, {
              title: "Core Brain",
              industry: "Design",
              challenge: "Fragmented marketing approach and difficulty proving ROI to internal stakeholders. Paid campaigns delivered inconsistent results, with unclear attribution.",
              approach: [
                "Comprehensive strategy workshop to clarify goals and KPIs",
                "Integrated marketing plan (SEO, PPC, Email, Social Media)",
                "Performance Marketing framework with clear attribution modeling",
                "Regular, transparent reporting to stakeholders"
              ],
              results: [
                "250% increase in ROI over 12 months",
                "Streamlined, consistent messaging across channels",
                "Improved stakeholder confidence with clear reporting",
                "1 Cr+ ad spend managed efficiently to maximize returns"
              ],
              feedback: "Momentumm Media’s disciplined, KPI-driven approach ensured we knew exactly where our budget was going and what it delivered."
            }].map((cs, idx) => (
              <SpotlightCard 
                key={idx}
                className="case-study-card min-w-[340px] max-w-[340px] md:min-w-[400px] md:max-w-[400px] flex-shrink-0 p-8"
                backgroundColor="#ffffff"
                spotlightColor="rgba(0, 64, 61, 0.1)"
                borderColor="rgba(0, 64, 61, 0.2)"
              >
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#00403d' }}>{cs.title}</h3>
                <p className="text-sm mb-2" style={{ color: '#00403d' }}>Industry: {cs.industry}</p>
                <p className="mb-2" style={{ color: '#000000' }}><strong>Challenge:</strong> {cs.challenge}</p>
                <p className="mb-2" style={{ color: '#000000' }}><strong>Approach:</strong></p>
                <ul className="mb-2 text-sm" style={{ color: '#00403d' }}>
                  {cs.approach.map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
                <p className="mb-2" style={{ color: '#000000' }}><strong>Results:</strong></p>
                <ul className="mb-2 text-sm" style={{ color: '#00403d' }}>
                  {cs.results.map((r, i) => <li key={i}>• {r}</li>)}
                </ul>
                <p className="italic text-sm" style={{ color: '#00403d' }}>“{cs.feedback}”</p>
              </SpotlightCard>
            ))}
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

