import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const coreValues = [
  {
    id: 1,
    title: 'Innovation',
    description: 'Continually evolving to deliver superior strategies.',
    color: '#d9ff00',
    position: 20 // Position along path (percentage)
  },
  {
    id: 2,
    title: 'Integrity',
    description: 'Transparent, ethical, and accountable in every engagement.',
    color: '#b39ddb',
    position: 35
  },
  {
    id: 3,
    title: 'Engagement',
    description: 'Building meaningful, long-term client relationships.',
    color: '#00403d',
    position: 50
  },
  {
    id: 4,
    title: 'Excellence',
    description: 'Delivering quality, precision, and attention to detail.',
    color: '#d9ff00',
    position: 65
  },
  {
    id: 5,
    title: 'Growth',
    description: 'Driving sustained success for our clients and our organization.',
    color: '#b39ddb',
    position: 80
  },
  {
    id: 6,
    title: 'Results',
    description: 'Focused on measurable outcomes and tangible business impact.',
    color: '#00403d',
    position: 95
  }
];

const SCurveCoreValues = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const pointsRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current || !pathRef.current) return;

    const path = pathRef.current;
    const points = pointsRef.current.filter(Boolean);

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Set initial path state
    gsap.set(path, {
      strokeDasharray: path.getTotalLength(),
      strokeDashoffset: path.getTotalLength()
    });

    // Set initial points and labels state
    points.forEach((point, index) => {
      gsap.set(point, {
        scale: 0,
        opacity: 0
      });
      
      // Also set labels (which are at index + 6)
      if (pointsRef.current[index + 6]) {
        gsap.set(pointsRef.current[index + 6], {
          scale: 0,
          opacity: 0
        });
      }
    });

    // Animate path drawing
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        scroller: document.body
      }
    });

    // Animate points and labels appearing
    points.forEach((point, index) => {
      const label = pointsRef.current[index + 6];
      
      gsap.to(point, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: `${10 + index * 15}% center`,
          end: `${25 + index * 15}% center`,
          toggleActions: "play none none reverse",
          scroller: document.body
        }
      });
      
      // Animate label if it exists
      if (label) {
        gsap.to(label, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: `${10 + index * 15}% center`,
            end: `${25 + index * 15}% center`,
            toggleActions: "play none none reverse",
            scroller: document.body
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Generate smooth wavy path similar to CodePen
  const generateWavyPath = () => {
    const width = 600;
    const height = 2000;
    const centerX = width / 2;
    const amplitude = 200; // Wave amplitude
    
    return `M ${centerX} 50 
            C ${centerX + amplitude} 200, ${centerX - amplitude} 350, ${centerX} 500
            C ${centerX + amplitude} 650, ${centerX - amplitude} 800, ${centerX} 950
            C ${centerX + amplitude} 1100, ${centerX - amplitude} 1250, ${centerX} 1400
            C ${centerX + amplitude} 1550, ${centerX - amplitude} 1700, ${centerX} 1850
            L ${centerX} ${height - 50}`;
  };

  return (
    <div
      ref={containerRef}
      style={{
        padding: '6rem 2rem 8rem 2rem',
        backgroundColor: '#b3cccc',
        position: 'relative',
        minHeight: '200vh',
        overflow: 'hidden'
      }}
    >
      {/* Title */}
      <h3 
        style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '6rem',
          color: '#d9ff00',
          textShadow: '2px 2px 4px rgba(0, 64, 61, 0.3)'
        }}
      >
        Our Core Values
      </h3>

      {/* SVG Path and Points */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',
        position: 'relative',
        height: '2000px'
      }}>
        <svg
          width="600"
          height="2000"
          viewBox="0 0 600 2000"
          style={{ position: 'absolute' }}
        >
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#d9ff00', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#00403d', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#b39ddb', stopOpacity: 1}} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Main animated path */}
          <path
            ref={pathRef}
            d={generateWavyPath()}
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="6"
            filter="url(#glow)"
            opacity="0.8"
          />
          
          {/* Core value points */}
          {coreValues.map((value, index) => {
            // Calculate approximate point positions along the wavy path
            const progress = value.position / 100;
            const y = 50 + (progress * 1900); // Distribute along path height
            
            // Calculate x position based on the wave pattern
            const waveProgress = progress * 4; // 4 wave cycles
            const amplitude = 200;
            const centerX = 300;
            let x = centerX;
            
            if (waveProgress < 1) {
              x = centerX + Math.sin(waveProgress * Math.PI) * amplitude;
            } else if (waveProgress < 2) {
              x = centerX - Math.sin((waveProgress - 1) * Math.PI) * amplitude;
            } else if (waveProgress < 3) {
              x = centerX + Math.sin((waveProgress - 2) * Math.PI) * amplitude;
            } else {
              x = centerX - Math.sin((waveProgress - 3) * Math.PI) * amplitude;
            }
            
            return (
              <g key={value.id}>
                {/* Point circle */}
                <circle
                  ref={el => (pointsRef.current[index] = el)}
                  cx={x}
                  cy={y}
                  r="15"
                  fill={value.color}
                  stroke="#ffffff"
                  strokeWidth="3"
                  filter="url(#glow)"
                  style={{ cursor: 'pointer' }}
                />
                
                {/* Point number */}
                <text
                  x={x}
                  y={y + 5}
                  textAnchor="middle"
                  fill={value.color === '#d9ff00' ? '#00403d' : '#ffffff'}
                  fontSize="12"
                  fontWeight="bold"
                  style={{ pointerEvents: 'none' }}
                >
                  {value.id}
                </text>
                
                {/* Value label connected to point */}
                <g>
                  {/* Connection line */}
                  <line
                    x1={x}
                    y1={y}
                    x2={x < 300 ? x - 80 : x + 80}
                    y2={y}
                    stroke={value.color}
                    strokeWidth="2"
                    opacity="0.7"
                  />
                  
                  {/* Label background */}
                  <rect
                    x={x < 300 ? x - 200 : x + 100}
                    y={y - 30}
                    width="180"
                    height="60"
                    rx="10"
                    fill="rgba(255, 255, 255, 0.95)"
                    stroke={value.color}
                    strokeWidth="1"
                    filter="url(#glow)"
                    ref={el => {
                      if (el) pointsRef.current[index + 6] = el;
                    }}
                  />
                  
                  {/* Title text */}
                  <text
                    x={x < 300 ? x - 110 : x + 190}
                    y={y - 10}
                    textAnchor="middle"
                    fill={value.color}
                    fontSize="14"
                    fontWeight="bold"
                  >
                    {value.title}
                  </text>
                  
                  {/* Description text */}
                  <foreignObject
                    x={x < 300 ? x - 190 : x + 110}
                    y={y - 5}
                    width="160"
                    height="40"
                  >
                    <p style={{
                      fontSize: '10px',
                      color: '#00403d',
                      margin: 0,
                      lineHeight: 1.2,
                      textAlign: 'center'
                    }}>
                      {value.description}
                    </p>
                  </foreignObject>
                </g>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default SCurveCoreValues;