import React, { useState } from 'react';
import SpotlightCard from './SpotlightCard';

const caseStudies = [
  {
    title: "Aaryan International",
    industry: "Professional Services",
    challenge: "Stagnant lead generation despite significant marketing spend. Existing strategy lacked clear targeting and suffered from inconsistent messaging across channels.",
    approach: [
      "Detailed discovery session to define goals and target audiences",
      "Unified brand strategy with clear positioning",
      "Data-driven digital marketing plan (SEO, PPC, WhatsApp Marketing)",
      "Rigorous performance tracking and regular reporting"
    ],
    results: [
      "150% increase in qualified leads within six months",
      "35% reduction in cost per lead",
      "Improved brand consistency across digital channels",
      "Transparent reporting for better budget allocation"
    ],
    feedback: "Momentumm Media’s structured approach and commitment to transparency transformed our marketing into a reliable growth engine."
  },
  {
    title: "AIM",
    industry: "Retail",
    challenge: "Low conversion rates and limited visibility in a competitive market. Campaigns lacked cohesion, and website was underperforming.",
    approach: [
      "In-depth audit to identify conversion bottlenecks",
      "Redesigned landing pages to align with brand strategy",
      "Targeted Performance Marketing campaign",
      "Integrated WhatsApp Marketing for direct engagement"
    ],
    results: [
      "200% improvement in conversion rates",
      "45% increase in average order value",
      "2X higher customer engagement through WhatsApp",
      "Enhanced reporting and strategic budget allocation"
    ],
    feedback: "Momentumm Media provided the clarity and expertise we needed to align our marketing efforts and achieve real, sustainable growth."
  },
  {
    title: "Core Brain",
    industry: "Design",
    challenge: "Fragmented marketing approach and difficulty proving ROI to internal stakeholders. Paid campaigns delivered inconsistent results, with unclear attribution.",
    approach: [
      "Comprehensive strategy workshop to clarify goals and KPIs",
      "Integrated marketing plan (SEO, PPC, Email, Social Media)",
      "Performance Marketing framework with clear attribution modeling",
      "Regular, transparent reporting to stakeholders"
    ],
    results: [
      "250% increase in ROI over 12 months",
      "Streamlined, consistent messaging across channels",
      "Improved stakeholder confidence with clear reporting",
      "1 Cr+ ad spend managed efficiently to maximize returns"
    ],
    feedback: "Momentumm Media’s disciplined, KPI-driven approach ensured we knew exactly where our budget was going and what it delivered."
  }
];

export default function CaseStudiesCarousel() {
  const [active, setActive] = useState(1); // Center card

  // Circular carousel logic
  const handleCardClick = (idx) => {
    setActive(idx);
  };

  // Helper to get circular offset
  const getOffset = (idx) => {
    const n = caseStudies.length;
    let offset = idx - active;
    if (offset > n / 2) offset -= n;
    if (offset < -n / 2) offset += n;
    return offset;
  };

  return (
    <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto py-0" style={{overflow: 'visible', minHeight: '220px'}}>
      {caseStudies.map((cs, idx) => {
        // Calculate position and zIndex
        const isActive = idx === active;
        const offset = getOffset(idx);
        const angle = offset * 30; // degrees for circular effect
        const radius = 220;
        const x = Math.sin((angle * Math.PI) / 180) * radius;
        const y = Math.cos((angle * Math.PI) / 180) * 40; // raise cards a bit
        const scale = isActive ? 1 : 0.8;
        const zIndex = isActive ? 30 : 20 - Math.abs(offset);
        const boxShadow = isActive ? '0 8px 32px rgba(0,64,61,0.18)' : '0 2px 12px rgba(0,64,61,0.10)';
        return (
          <div
            key={idx}
            className="absolute left-1/2 transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)] cursor-pointer"
            style={{
              top: `calc(10% + ${y}px)`,
              transform: `translateX(-50%) translateX(${x}px) scale(${scale})`,
              zIndex,
              boxShadow,
              opacity: isActive ? 1 : 0.7,
              filter: isActive ? 'none' : 'blur(0.5px)',
              maxWidth: '320px',
              width: '100%',
              minWidth: '220px',
            }}
            onClick={() => handleCardClick(idx)}
          >
            <SpotlightCard 
              className="case-study-card w-full min-w-[220px] max-w-[320px] flex-shrink-0 p-4 md:p-6"
              backgroundColor="#ffffff"
              spotlightColor="rgba(0, 64, 61, 0.1)"
              borderColor="rgba(0, 64, 61, 0.2)"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#00403d' }}>{cs.title}</h3>
              <p className="text-xs md:text-sm mb-2" style={{ color: '#00403d' }}>Industry: {cs.industry}</p>
              <p className="mb-2 text-xs md:text-sm" style={{ color: '#000000' }}><strong>Challenge:</strong> {cs.challenge}</p>
              <p className="mb-2 text-xs md:text-sm" style={{ color: '#000000' }}><strong>Approach:</strong></p>
              <ul className="mb-2 text-xs md:text-sm" style={{ color: '#00403d' }}>
                {cs.approach.map((a, i) => <li key={i}>• {a}</li>)}
              </ul>
              <p className="mb-2 text-xs md:text-sm" style={{ color: '#000000' }}><strong>Results:</strong></p>
              <ul className="mb-2 text-xs md:text-sm" style={{ color: '#00403d' }}>
                {cs.results.map((r, i) => <li key={i}>• {r}</li>)}
              </ul>
              <p className="italic text-xs md:text-sm" style={{ color: '#00403d' }}>“{cs.feedback}”</p>
            </SpotlightCard>
          </div>
        );
      })}
    </div>
  );
}
