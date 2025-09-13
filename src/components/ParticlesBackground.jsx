

import React, { useRef, useEffect } from 'react';

const ParticlesBackground = ({ children, className = "" }) => {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const el = bgRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.background = `radial-gradient(circle at ${x}px ${y}px, #d9ff00 0%, #b3cfcd 40%, #00403d 100%)`;
    };
    const el = bgRef.current;
    if (el) {
      el.style.background = 'linear-gradient(120deg, #00403d 0%, #b3cfcd 50%, #d9ff00 100%)';
      el.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (el) el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={bgRef} className={`absolute inset-0 w-full h-full ${className}`} style={{ zIndex: 1, transition: 'background 0.3s' }}>
      <div className="relative" style={{ zIndex: 2, position: 'relative' }}>
        {children}
      </div>
    </div>
  );
};

export default ParticlesBackground;

