"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 1,
    testimonial: "They brought structure and strategy that finally delivered real growth. Our conversion rate increased by 200% and average order value by 45%. The revamped landing pages and targeted Performance Marketing campaigns transformed our entire sales funnel from top to bottom.",
    by: "AIM",
    challenge: "Low conversions and limited visibility in competitive retail market",
    results: "200% higher conversion rate, 45% increase in AOV, 2X WhatsApp engagement",
    approach: "Campaign audits, landing page optimization, Performance & WhatsApp Marketing",
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 3,
    testimonial: "They helped us connect fashion with emotion—backed by measurable results. 3X engagement rate and 40% drop in cost per acquisition. The refined storytelling and optimized influencer collaborations using analytics brought our brand vision to life while driving real business growth.",
    by: "Enmuse",
    challenge: "Strong visuals but low brand recall and engagement rates",
    results: "3X engagement rate, 60% higher website traffic, 40% drop in CAC",
    approach: "Emotional messaging, Meta & Google Ads, optimized influencer campaigns",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 0,
    testimonial: "Momentumm Media turned our marketing into a reliable growth engine. We saw a 150% rise in qualified leads in just 6 months with 35% lower cost per lead. Their strategic approach to SEO, PPC, and WhatsApp Marketing campaigns brought us consistent, high-quality prospects while optimizing our budget efficiently.",
    by: "Skinspree Clinic",
    challenge: "Stagnant leads despite high ad spend and inconsistent messaging",
    results: "150% rise in qualified leads, 35% lower cost per lead",
    approach: "Unified brand strategy, SEO, PPC & WhatsApp Marketing",
    imgSrc: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 2,
    testimonial: "We finally understood where our marketing spend was going—and what it delivered. 250% ROI growth and 1 Cr+ ad spend managed efficiently. Their transparent attribution framework gave us clear insights into every rupee spent and the results it generated across all channels.",
    by: "Core Brain",
    challenge: "Fragmented marketing efforts and unclear ROI tracking across channels",
    results: "250% ROI growth, 1 Cr+ ad spend managed efficiently",
    approach: "Clear KPIs, integrated SEO, PPC, Email & Social Media campaigns",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 4,
    testimonial: "Momentumm Media helped us turn our passion into a full-fledged business with the right audience. 180% rise in inbound leads from high-value clients and 2.5X growth in social engagement. The cohesive visual identity and targeted Instagram campaigns finally connected us with our ideal clients.",
    by: "Justin Photography",
    challenge: "Struggled to attract premium clients and lacked digital visibility despite great work",
    results: "180% rise in inbound leads, 2.5X social growth, 70% more website inquiries",
    approach: "Visual identity design, Instagram & Meta ad campaigns, local SEO optimization",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }
];

const TestimonialCard = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;
  
  // Reduced gap positioning logic
  const getTranslateX = () => {
    return (cardSize / 1.8) * position;
  };

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-[#00403d] text-[#d9ff00] border-[#d9ff00]" 
          : "z-0 bg-white text-[#00403d] border-[#00403d]/30 hover:border-[#d9ff00]/70"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${getTranslateX()}px)
          translateY(${isCenter ? -40 : position % 2 ? 25 : -25}px)
          rotate(${isCenter ? 0 : position % 2 ? 1.5 : -1.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px #d9ff00" : "0px 4px 12px rgba(0,64,61,0.1)"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
          backgroundColor: isCenter ? '#d9ff00' : '#00403d'
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by}
        className="mb-4 h-12 w-12 rounded-full object-cover object-center border-2"
        style={{
          borderColor: isCenter ? '#d9ff00' : '#00403d',
          boxShadow: isCenter ? "3px 3px 0px #00403d" : "3px 3px 0px #f0f0f0"
        }}
      />
      <div className="flex-1">
        <h3 className={cn(
          "text-xs sm:text-sm font-medium mb-3 leading-tight line-clamp-4",
          isCenter ? "text-[#d9ff00]" : "text-[#00403d]"
        )}>
          "{testimonial.testimonial.slice(0, isCenter ? 280 : 180)}..."
        </h3>
        
        {isCenter && (
          <div className="mb-3 text-xs text-[#d9ff00]/80">
            <p className="mb-1"><strong>Challenge:</strong> {testimonial.challenge}</p>
            <p><strong>Approach:</strong> {testimonial.approach}</p>
          </div>
        )}
      </div>
      
      <div className={cn(
        "absolute bottom-6 left-6 right-6",
        isCenter ? "text-[#d9ff00]/90" : "text-[#00403d]/70"
      )}>
        <p className="text-xs font-semibold mb-1">
          - {testimonial.by}
        </p>
        <p className="text-xs font-bold">
          {testimonial.results}
        </p>
      </div>
    </div>
  );
};

export const StaggerTestimonials = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      const viewportWidth = window.innerWidth;
      if (matches) {
        // Desktop: adjust size based on viewport width
        setCardSize(Math.min(420, viewportWidth * 0.25));
      } else {
        // Mobile
        setCardSize(Math.min(320, viewportWidth * 0.8));
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="w-full py-20" style={{ position: 'relative', zIndex: 10 }}>
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#d9ff00]">
            Client Success Stories
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Real results from real clients. See how we've transformed businesses across industries with data-driven strategies.
          </p>
        </div>
        
        <div
          className="relative flex items-center justify-center mx-auto"
          style={{ width: '1550px', height: 650, marginTop: '2rem', overflow: 'visible' }}
        >
          {testimonialsList.map((testimonial, index) => {
            const position = testimonialsList.length % 2
              ? index - (testimonialsList.length + 1) / 2
              : index - testimonialsList.length / 2;
            return (
              <TestimonialCard
                key={testimonial.tempId}
                testimonial={testimonial}
                handleMove={handleMove}
                position={position}
                cardSize={cardSize}
              />
            );
          })}
        </div>
        
        {/* Navigation buttons positioned relative to entire section */}
        <div className="flex justify-center mt-4">
          <div className="flex gap-4">
            <button
              onClick={() => handleMove(-1)}
              className={cn(
                "flex h-12 w-12 items-center justify-center text-xl transition-all duration-300 rounded-full",
                "bg-white border-2 border-[#00403d] text-[#00403d] hover:bg-[#00403d] hover:text-[#d9ff00]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9ff00] focus-visible:ring-offset-2",
                "transform hover:scale-110"
              )}
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => handleMove(1)}
              className={cn(
                "flex h-12 w-12 items-center justify-center text-xl transition-all duration-300 rounded-full",
                "bg-white border-2 border-[#00403d] text-[#00403d] hover:bg-[#00403d] hover:text-[#d9ff00]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9ff00] focus-visible:ring-offset-2",
                "transform hover:scale-110"
              )}
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};