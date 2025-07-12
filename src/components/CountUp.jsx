import React from 'react';
import CountUpAnimation from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CountUp = ({ end, duration = 2, suffix = "", prefix = "", className = "" }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={className}>
      {inView && (
        <CountUpAnimation
          start={0}
          end={end}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
          separator=","
        />
      )}
    </div>
  );
};

export default CountUp;

