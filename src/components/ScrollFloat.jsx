import { useScrollFloat } from './useScrollFloat';
import React from 'react';

export function ScrollFloat({ children, yStart = 40, yEnd = 0, duration = 0.8, delay = 0, as = 'div', className = '', style = {} }) {
  const ref = useScrollFloat({ yStart, yEnd, duration, delay });
  const Tag = as;
  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
