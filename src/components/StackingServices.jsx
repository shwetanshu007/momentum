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
    title: 'Performance Marketing',
    color: '#6366f1'
  },
  {
    id: 2,
    title: 'Brand Strategy',
    color: '#8b5cf6'
  },
  {
    id: 3,
    title: 'Content & Social',
    color: '#06b6d4'
  },
  {
    id: 4,
    title: 'Web & Creative',
    color: '#10b981'
  },
  {
    id: 5,
    title: 'Analytics & Insights',
    color: '#f59e0b'
  },
  {
    id: 6,
    title: 'Growth Optimization',
    color: '#ef4444'
  }
];

const StackingServices = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = cardsRef.current;
    console.log('StackingServices mounted, cards:', cards.length);

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Create scroll-triggered animations for each card
    cards.forEach((card) => {
      if (!card) return;

      console.log('Setting up animations for card:', card);

      // Initial state - cards start slightly below
      gsap.set(card, {
        y: 0,
        opacity: 1,
        scale: 1
      });

      // Create ScrollTrigger for each card
      ScrollTrigger.create({
        trigger: card,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          console.log('Card entering viewport');
          gsap.to(card, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out'
          });
        },
        onLeave: () => {
          gsap.to(card, {
            y: -50,
            scale: 0.95,
            duration: 0.5,
            ease: 'power2.in'
          });
        },
        onEnterBack: () => {
          gsap.to(card, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out'
          });
        }
      });

      // Pin each card for a moment
      ScrollTrigger.create({
        trigger: card,
        start: 'top 20%',
        end: 'bottom 20%',
        pin: true,
        pinSpacing: false,
        anticipatePin: 1
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const containerStyle = {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    backgroundColor: 'rgba(255, 0, 0, 0.2)', // Debug color
    minHeight: '200px' // Ensure it has height
  };

  const cardStyle = {
    width: '100%',
    height: '300px',
    margin: '60px 0',
    borderRadius: '24px',
    position: 'relative',
    transformStyle: 'preserve-3d',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
    overflow: 'hidden',
    transition: 'all 0.3s ease'
  };

  const cardInnerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    zIndex: 2
  };

  const numberStyle = {
    fontSize: '4rem',
    fontWeight: '900',
    color: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    top: '20px',
    right: '30px',
    fontFamily: 'Arial Black, sans-serif',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
    lineHeight: '1.2',
    margin: '0',
    zIndex: 3,
    position: 'relative'
  };

  return (
    <div ref={containerRef} style={containerStyle}>
      <h2 style={{color: 'white', textAlign: 'center', marginBottom: '20px'}}>
        Debug: StackingServices Component Loaded
      </h2>
      {services.map((service, index) => (
        <div
          key={service.id}
          ref={el => (cardsRef.current[index] = el)}
          style={{
            ...cardStyle,
            background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
          }}
        >
          {/* Glass effect overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(0, 0, 0, 0.1) 100%)',
              borderRadius: '24px',
              pointerEvents: 'none'
            }}
          />
          {/* Shadow effect */}
          <div
            style={{
              position: 'absolute',
              top: '-2px',
              left: '-2px',
              right: '-2px',
              bottom: '-2px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1))',
              borderRadius: '26px',
              zIndex: -1,
              filter: 'blur(8px)',
              opacity: 0.6
            }}
          />
          <div style={cardInnerStyle}>
            <div style={numberStyle}>{service.id}</div>
            <h3 style={titleStyle}>{service.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackingServices;
