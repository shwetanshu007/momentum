import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const serviceContent = [
  {
    title: 'Strategy & Branding',
    description: 'Develop a strong, differentiated brand presence.',
    content: (
      <ul className="space-y-2 mt-6 text-[#00403d] text-lg font-medium">
        <li>• Brand Strategy & Positioning</li>
        <li>• Visual Identity & Logo Design</li>
        <li>• Brand Guidelines</li>
        <li>• Market Research</li>
      </ul>
    ),
  },
  {
    title: 'Community & Reputation',
    description: 'Build trust and loyalty with authentic engagement and reputation management.',
    content: (
      <ul className="space-y-2 mt-6 text-[#00403d] text-lg font-medium">
        <li>• Social Media Management</li>
        <li>• Influencer Partnerships</li>
        <li>• Online Reputation</li>
        <li>• Community Building</li>
      </ul>
    ),
  },
  {
    title: 'Performance Marketing',
    description: 'Results-driven campaigns focused on maximizing ROI.',
    content: (
      <ul className="space-y-2 mt-6 text-[#00403d] text-lg font-medium">
        <li>• Conversion Rate Optimization</li>
        <li>• Paid Media Strategy</li>
        <li>• Funnel Development</li>
        <li>• Attribution & Measurement</li>
      </ul>
    ),
  },
  {
    title: 'Social Media & Content',
    description: 'Build meaningful connections with your audience.',
    content: (
      <ul className="space-y-2 mt-6 text-[#00403d] text-lg font-medium">
        <li>• Content Strategy & Creation</li>
        <li>• Social Media Management</li>
        <li>• Influencer Partnerships</li>
        <li>• Video Production</li>
      </ul>
    ),
  },
  {
    title: 'Community & Reputation',
    description: "Safeguard and strengthen your brand's reputation.",
    content: (
      <ul className="space-y-2 mt-6 text-[#00403d] text-lg font-medium">
        <li>• Reputation Monitoring</li>
        <li>• Community Engagement</li>
        <li>• Crisis Communications</li>
        <li>• PR Strategy</li>
      </ul>
    ),
  },
  {
    title: 'Training & Consulting',
    description: 'Empower your team with best-practice marketing expertise.',
    content: (
      <ul className="space-y-2 mt-6 text-[#00403d] text-lg font-medium">
        <li>• Customized Workshops</li>
        <li>• Strategy Consulting</li>
        <li>• Process Optimization</li>
      </ul>
    ),
  },
];

export default function StickyScrollServices() {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref, offset: ["start start", "end start"] });
  const cardLength = serviceContent.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = serviceContent.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  // Optional: background gradient for sticky preview
  const linearGradients = [
    "linear-gradient(to bottom right, #d9ff00, #00403d)",
    "linear-gradient(to bottom right, #b3cccc, #00403d)",
    "linear-gradient(to bottom right, #e4e9e9, #00403d)",
  ];
  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);
  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{ background: backgroundGradient }}
      className="relative flex flex-col lg:flex-row h-[36rem] justify-center space-x-0 lg:space-x-10 overflow-y-auto rounded-2xl p-6 md:p-10"
      ref={ref}
      style={{ background: backgroundGradient }}
    >
      <div className="flex-1 flex flex-col items-start px-2 md:px-4 max-w-2xl">
        {serviceContent.map((item, index) => (
          <div key={item.title + index} className="my-20">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-[#00403d]"
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-xl mt-6 max-w-lg text-[#00403d] font-semibold"
            >
              {item.description}
            </motion.p>
            {activeCard === index && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
              >
                {item.content}
              </motion.div>
            )}
          </div>
        ))}
        <div className="h-40" />
      </div>
      <div
        style={{ background: backgroundGradient }}
        className="sticky top-10 hidden h-60 w-80 overflow-hidden rounded-2xl bg-white lg:block shadow-xl"
      >
        {serviceContent[activeCard].content}
      </div>
    </motion.div>
  );
}
