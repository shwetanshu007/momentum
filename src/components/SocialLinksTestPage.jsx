import React from 'react';
import { SocialLinks } from "@/components/ui/social-links";
import { MomentummSocialLinks } from "./MomentummSocialLinks";

// Test page to showcase the SocialLinks component variations
export default function SocialLinksTestPage() {
  const genericSocials = [
    {
      name: "Instagram",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
    },
    {
      name: "LinkedIn",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png",
    },
    {
      name: "Twitter",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png",
    },
  ]

  return (
    <div className="min-h-screen bg-[#00403d] p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#d9ff00] mb-4">
            Social Links Component Demo
          </h1>
          <p className="text-white/80 text-lg">
            Interactive social media links with hover animations
          </p>
        </div>

        {/* Momentumm Branded Version */}
        <section className="bg-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#d9ff00] mb-6 text-center">
            Momentumm Media Social Links (Branded)
          </h2>
          <MomentummSocialLinks className="text-[#d9ff00]" />
        </section>

        {/* Generic Version with Custom Gap */}
        <section className="bg-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#d9ff00] mb-6 text-center">
            Generic Social Links (Custom Gap)
          </h2>
          <SocialLinks 
            socials={genericSocials} 
            className="gap-8 text-[#d9ff00]" 
          />
        </section>

        {/* Compact Version */}
        <section className="bg-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#d9ff00] mb-6 text-center">
            Compact Version (No Gap)
          </h2>
          <SocialLinks 
            socials={genericSocials.slice(0, 2)} 
            className="gap-0 text-[#d9ff00]" 
          />
        </section>

        {/* Usage Instructions */}
        <section className="bg-white/5 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#d9ff00] mb-4">
            How to Use
          </h2>
          <div className="text-white/80 space-y-4">
            <p><strong>Basic Usage:</strong> Hover over the social media names to see animated icons appear</p>
            <p><strong>Click:</strong> Click on social names to navigate (when click handlers are configured)</p>
            <p><strong>Customization:</strong> Adjust gap, colors, and styling via className prop</p>
          </div>
        </section>

      </div>
    </div>
  );
}