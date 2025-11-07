import React from 'react';

const SpotlightCard = ({ 
  children, 
  className = "", 
  backgroundColor = "#00403d",
  borderColor = "rgba(217, 255, 0, 0.3)"
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border transition-all duration-300 ${className}`}
      style={{
        backgroundColor,
        borderColor: borderColor,
        borderWidth: '1px',
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;

