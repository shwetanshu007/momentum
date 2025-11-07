import React from 'react';
import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader";

export default function TestHero() {
  return (
    <div>
      <HeroSection 
        title="Accelerate Your Brand with"
        highlightText="Momentumm Media"
        description="Transform your digital presence with strategic marketing solutions designed to drive measurable growth and lasting impact."
        buttonText="Free Discovery Call"
        colors={["#00403d", "#d9ff00", "#b3cccc", "#004a44", "#b8e600", "#9bb8bb"]} // Your brand colors
        distortion={1.2}
        speed={0.6}
        onButtonClick={() => console.log('Discovery call clicked!')}
      />
    </div>
  );
}