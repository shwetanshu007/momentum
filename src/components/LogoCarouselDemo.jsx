import React from "react";
import GradientHeading from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";

// Import SVG logos from assets
import Logo1 from "@/assets/Logos/1.svg?react";
import Logo2 from "@/assets/Logos/2.svg?react";
import Logo3 from "@/assets/Logos/3.svg?react";
import Logo4 from "@/assets/Logos/4.svg?react";
import Logo6 from "@/assets/Logos/6.svg?react";
import Logo7 from "@/assets/Logos/7.svg?react";
import Logo8 from "@/assets/Logos/8.svg?react";
import Logo9 from "@/assets/Logos/9.svg?react";
import Logo10 from "@/assets/Logos/10.svg?react";
import Logo11 from "@/assets/Logos/11.svg?react";
import Logo12 from "@/assets/Logos/12.svg?react";
import Logo13 from "@/assets/Logos/13.svg?react";
import Logo14 from "@/assets/Logos/14.svg?react";

// Array with your actual logos
const allLogos = [
  { name: "Logo 1", id: 1, img: Logo1 },
  { name: "Logo 2", id: 2, img: Logo2 },
  { name: "Logo 3", id: 3, img: Logo3 },
  { name: "Logo 4", id: 4, img: Logo4 },
  { name: "Logo 6", id: 6, img: Logo6 },
  { name: "Logo 7", id: 7, img: Logo7 },
  { name: "Logo 8", id: 8, img: Logo8 },
  { name: "Logo 9", id: 9, img: Logo9 },
  { name: "Logo 10", id: 10, img: Logo10 },
  { name: "Logo 11", id: 11, img: Logo11 },
  { name: "Logo 12", id: 12, img: Logo12 },
  { name: "Logo 13", id: 13, img: Logo13 },
  { name: "Logo 14", id: 14, img: Logo14 },
];

export function LogoCarouselDemo() {
  return (
    <div className="space-y-8 py-24">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
        <div className="text-center">
          <GradientHeading variant="secondary" size="sm">
            Trusted by Leading Brands
          </GradientHeading>
          <h2 className="text-3xl md:text-5xl font-bold" style={{ color: '#d9ff00' }}>
            Our Valued Clients
          </h2>
        </div>

        <LogoCarousel columnCount={3} logos={allLogos} /> 
      </div>
    </div>
  );
}

export default LogoCarouselDemo;
