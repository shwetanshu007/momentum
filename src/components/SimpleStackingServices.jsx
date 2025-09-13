import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: 1,
    title: 'Strategy & Branding',
    description: 'Develop a strong, differentiated brand presence through comprehensive brand strategy, visual identity design, and market positioning.',
    details: ['Brand Strategy & Positioning', 'Visual Identity & Logo Design', 'Brand Guidelines', 'Market Research'],
    color: '#d9ff00' // Primary accent color
  },
  {
    id: 2,
    title: 'Performance Marketing',
    description: 'Results-driven campaigns focused on maximizing ROI through data-driven strategies and continuous optimization.',
    details: ['Conversion Rate Optimization', 'Paid Media Strategy', 'Funnel Development', 'Attribution & Measurement'],
    color: '#00403d' // Primary brand color
  },
  {
    id: 3,
    title: 'Social Media & Content',
    description: 'Build meaningful connections with your audience through strategic content creation and social media management.',
    details: ['Content Strategy & Creation', 'Social Media Management', 'Influencer Partnerships', 'Video Production'],
    color: '#b3cccc' // Secondary color
  },
  {
    id: 4,
    title: 'Community & Reputation',
    description: 'Safeguard and strengthen your brand\'s reputation through proactive community engagement and crisis management.',
    details: ['Reputation Monitoring', 'Community Engagement', 'Crisis Communications', 'PR Strategy'],
    color: '#d9ff00' // Primary accent color
  },
  {
    id: 5,
    title: 'Training & Consulting',
    description: 'Empower your team with best-practice marketing expertise through customized workshops and strategic consulting.',
    details: ['Customized Workshops', 'Strategy Consulting', 'Process Optimization', 'Team Development'],
    color: '#00403d' // Primary brand color
  },
  {
    id: 6,
    title: 'Analytics & Insights',
    description: 'Data-driven insights to optimize performance and measure success across all marketing initiatives.',
    details: ['Performance Analytics', 'Market Research', 'Competitor Analysis', 'ROI Measurement'],
    color: '#b3cccc' // Secondary color
  }
];

const SimpleStackingServices = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const endElementRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = cardsRef.current.filter(Boolean);
    console.log('Setting up stacking cards effect for', cards.length, 'cards');

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Recreate the stacking effect with normal order (first card on top)
    cards.forEach((card, i) => {
      const titleStrip = card.querySelector('.title-strip');
      
      // Scale animation based on normal index for proper stacking
      gsap.to(card, {
        scale: () => 0.8 + i * 0.035,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top-=" + 40 * i + " 40%",
          end: "top 20%",
          scrub: true
        }
      });

      // Pin each card with normal z-index
      ScrollTrigger.create({
        trigger: card,
        start: "top-=" + 40 * i + " 40%",
        end: "top center",
        endTrigger: endElementRef.current,
        pin: true,
        pinSpacing: false,
        id: "card-" + i,
        onUpdate: (self) => {
          // Show title strip when card is pinned and scaled
          const progress = self.progress;
          if (titleStrip) {
            gsap.set(titleStrip, {
              opacity: progress > 0.1 ? 1 : 0,
              display: progress > 0.1 ? 'flex' : 'none'
            });
          }
        }
      });

      // Set z-index for proper stacking order (first card = highest z-index)
      gsap.set(card, {
        zIndex: cards.length - i
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{ 
        padding: '2rem 2rem 25rem 2rem', // Significantly increased bottom padding to ensure no overlap
        width: '100%',
        position: 'relative'
      }}
    >
      {services.map((service, index) => (
        <div
          key={service.id}
          ref={el => (cardsRef.current[index] = el)}
          style={{
            border: service.color === '#b3cccc' ? '2px solid rgba(0,64,61,0.2)' : 'none',
            background: service.color === '#00403d' 
              ? 'linear-gradient(135deg, #00403d, #004a44)' 
              : service.color === '#d9ff00'
              ? 'linear-gradient(135deg, #d9ff00, #b8e600)'
              : 'linear-gradient(135deg, #b3cccc, #9bb8bb)',
            color: service.color === '#00403d' ? '#ffffff' : '#00403d',
            height: '20rem',
            width: '100%',
            borderRadius: '3rem',
            margin: '30px 0',
            transformOrigin: 'top center',
            padding: '0', // Remove padding to control title strip
            boxSizing: 'border-box',
            position: 'relative',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
            overflow: 'hidden'
          }}
        >
          {/* Title Strip - Only visible when stacked */}
          <div 
            className="title-strip"
            style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '60px',
            background: service.color === '#00403d' 
              ? 'rgba(217, 255, 0, 0.95)' 
              : service.color === '#d9ff00'
              ? 'rgba(0, 64, 61, 0.95)'
              : 'rgba(0, 64, 61, 0.85)',
            borderRadius: '3rem 3rem 0 0',
            display: 'none', // Hidden by default
            opacity: 0,
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2.5rem',
            zIndex: 10,
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h3 style={{
              fontSize: '1.4rem',
              fontWeight: '700',
              color: service.color === '#00403d' ? '#00403d' : '#ffffff',
              margin: '0',
              lineHeight: '1'
            }}>
              {service.title}
            </h3>
            
            {/* Card number in title strip */}
            <div style={{
              fontSize: '1.8rem',
              fontWeight: '900',
              color: service.color === '#00403d' ? '#00403d' : '#ffffff',
              fontFamily: 'Arial Black, sans-serif',
              opacity: 0.7
            }}>
              {service.id}
            </div>
          </div>
          {/* Glass effect overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: service.color === '#00403d' 
                ? 'linear-gradient(135deg, rgba(217, 255, 0, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.03) 100%)',
              borderRadius: '3rem',
              pointerEvents: 'none'
            }}
          />

          {/* Main card content - adjust for dynamic title strip */}
          <div style={{ 
            position: 'relative', 
            zIndex: 2,
            padding: '3rem', // Full padding when title strip is hidden
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: service.color === '#00403d' ? '#d9ff00' : '#00403d',
                margin: '0 0 1rem 0',
                lineHeight: '1.2'
              }}>
                {service.title}
              </h3>
              
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.5',
                color: service.color === '#00403d' ? '#ffffff' : '#00403d',
                opacity: 0.9,
                margin: '0 0 2rem 0'
              }}>
                {service.description}
              </p>
            </div>

            {/* Service details as bullet points */}
            <div style={{
              marginTop: 'auto'
            }}>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.8rem'
              }}>
                {service.details.map((detail, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: service.color === '#00403d' ? '#d9ff00' : '#00403d',
                      display: 'flex',
                      alignItems: 'center',
                      lineHeight: '1.4'
                    }}
                  >
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: service.color === '#00403d' ? '#d9ff00' : '#00403d',
                      marginRight: '0.8rem',
                      flexShrink: 0
                    }}></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
      
      {/* End element for scroll trigger */}
      <div 
        ref={endElementRef}
        style={{
          width: '100%',
          height: '1px',
          borderTop: '1px solid transparent'
        }}
      />
    </div>
  );
};

export default SimpleStackingServices;
