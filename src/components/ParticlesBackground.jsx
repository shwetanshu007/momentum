

import React, { useRef, useEffect } from 'react';

const ParticlesBackground = ({ children, className = "" }) => {
  const bgRef = useRef(null);

  useEffect(() => {
    const el = bgRef.current;
    if (el) {
      el.style.background = 'linear-gradient(120deg, #00403d 0%, #b3cfcd 50%, #d9ff00 100%)';
    }
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

