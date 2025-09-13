import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ServiceCard({ title, desc, items }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, boxShadow: '0 0px 0px rgba(0,64,61,0.0)', y: 40, opacity: 0.7 }}
      animate={inView ? { scale: 1.04, boxShadow: '0 12px 32px rgba(0,64,61,0.15)', y: 0, opacity: 1 } : { scale: 0.95, boxShadow: '0 0px 0px rgba(0,64,61,0.0)', y: 40, opacity: 0.7 }}
      transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
      style={{ borderRadius: '1.5rem', background: '#d9ff00', border: '2px solid rgba(0,64,61,0.3)', padding: '1.5rem', minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', boxShadow: inView ? '0 12px 32px rgba(0,64,61,0.15)' : 'none' }}
    >
      <h3 className="text-2xl font-bold mb-4" style={{ color: '#00403d' }}>{title}</h3>
      <p className="mb-4" style={{ color: '#00403d' }}>{desc}</p>
      <ul className="space-y-2 mb-6" style={{ color: '#00403d' }}>
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
