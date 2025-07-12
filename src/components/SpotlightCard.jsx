import React, { useState } from 'react';

const SpotlightCard = ({ 
  children, 
  className = "", 
  spotlightColor = "rgba(217, 255, 0, 0.15)",
  backgroundColor = "#00403d",
  borderColor = "rgba(217, 255, 0, 0.3)"
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`relative overflow-hidden rounded-lg border transition-all duration-300 ${className}`}
      style={{
        backgroundColor,
        borderColor: isHovered ? borderColor : 'transparent',
        borderWidth: '1px',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent)`,
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
          }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;

