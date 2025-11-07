import React, { useRef, useEffect } from 'react';

// Gooey blob colors
const blobColors = [
  '#d9ff00', // Neon yellow
  '#b3cfcd', // Mint
  '#00403d', // Pine green
];



const GooeyBackground = () => {
  const svgRef = useRef(null);
  const blobs = useRef([
    { x: 300, y: 200, r: 80, dx: 0, dy: 0 },
    { x: 600, y: 300, r: 100, dx: 0, dy: 0 },
    { x: 500, y: 100, r: 60, dx: 0, dy: 0 },
  ]);
  useEffect(() => {
    let frame;
    const animate = () => {
      blobs.current.forEach((blob, i) => {
        // Autonomous blob movement without mouse interaction
        const time = Date.now() * 0.001;
        const dx = Math.sin(time * (0.5 + i * 0.1)) * 2;
        const dy = Math.cos(time * (0.3 + i * 0.08)) * 2;
        blob.x += dx * 0.3;
        blob.y += dy * 0.3;
        
        // Keep blobs within bounds
        if (blob.x < 50) blob.x = 50;
        if (blob.x > 750) blob.x = 750;
        if (blob.y < 50) blob.y = 50;
        if (blob.y > 550) blob.y = 550;
      });
      if (svgRef.current) {
        const circles = svgRef.current.querySelectorAll('circle');
        blobs.current.forEach((blob, i) => {
          circles[i].setAttribute('cx', blob.x);
          circles[i].setAttribute('cy', blob.y);
        });
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none',
    }}>
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
            <feColorMatrix in="blur" mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
        {blobs.current.map((blob, i) => (
          <circle
            key={i}
            cx={blob.x}
            cy={blob.y}
            r={blob.r}
            fill={blobColors[i % blobColors.length]}
            filter="url(#gooey)"
            opacity="0.7"
          />
        ))}
      </svg>
    </div>
  );
};

export default GooeyBackground;
