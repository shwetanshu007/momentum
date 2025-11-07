"use client";

import { Badge } from "./badge";
import { Card } from "./card";
import { 
  Target, 
  Search, 
  Palette, 
  Rocket,
  TrendingUp,
  BarChart3,
  Users,
  LineChart
} from "lucide-react";

const timelineData = [
  {
    phase: "Phase 1",
    title: "Discovery & Research",
    description: "Deep dive into your business, audience, and market to build a foundation for success.",
    icon: Search,
    deliverables: ["Market Analysis", "Audience Research", "Competitor Audit"]
  },
  {
    phase: "Phase 2", 
    title: "Strategy Development",
    description: "Create a comprehensive marketing strategy tailored to your business goals.",
    icon: Target,
    deliverables: ["Marketing Strategy", "Content Calendar", "KPI Framework"]
  },
  {
    phase: "Phase 3",
    title: "Creative & Content",
    description: "Develop compelling creative assets and content that resonates with your audience.",
    icon: Palette,
    deliverables: ["Brand Assets", "Content Creation", "Visual Identity"]
  },
  {
    phase: "Phase 4",
    title: "Campaign Implementation",
    description: "Launch and execute your marketing campaigns across all relevant channels.",
    icon: Rocket,
    deliverables: ["Campaign Launch", "Channel Setup", "Initial Deployment"]
  },
  {
    phase: "Phase 5",
    title: "Performance Optimization",
    description: "Monitor, analyze, and optimize campaign performance for maximum ROI.",
    icon: TrendingUp,
    deliverables: ["Performance Reports", "A/B Testing", "Optimization"]
  },
  {
    phase: "Phase 6",
    title: "Scale & Growth",
    description: "Scale successful campaigns and explore new growth opportunities.",
    icon: BarChart3,
    deliverables: ["Scaling Strategy", "New Channels", "Growth Tactics"]
  },
  {
    phase: "Phase 7",
    title: "Community Building",
    description: "Build and nurture a loyal community around your brand.",
    icon: Users,
    deliverables: ["Community Strategy", "Engagement Programs", "Brand Advocacy"]
  },
  {
    phase: "Phase 8",
    title: "Analytics & Insights",
    description: "Comprehensive analysis and strategic recommendations for continued growth.",
    icon: LineChart,
    deliverables: ["Comprehensive Reports", "Strategic Insights", "Future Roadmap"]
  }
];

export default function MomentummSimpleTimeline() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#00403d]">
      <div className="relative z-10 flex items-center justify-center">
        <svg width="1000" height="1000" className="absolute">
          {/* Outer decorative ring */}
          <circle
            cx="500"
            cy="500"
            r="450"
            fill="none"
            stroke="rgba(217, 255, 0, 0.2)"
            strokeWidth="2"
            strokeDasharray="10,5"
          />
          
          {/* Main circle path */}
          <circle
            cx="500"
            cy="500"
            r="400"
            fill="none"
            stroke="rgba(217, 255, 0, 0.4)"
            strokeWidth="3"
          />

          {/* Timeline nodes */}
          {timelineData.map((item, index) => {
            const angle = (index * 45) - 90; // 8 items, 45° apart, no rotation
            const x = 500 + 400 * Math.cos((angle * Math.PI) / 180);
            const y = 500 + 400 * Math.sin((angle * Math.PI) / 180);

            return (
              <g key={index}>
                {/* Connection line */}
                <line
                  x1="500"
                  y1="500"
                  x2={x}
                  y2={y}
                  stroke="rgba(217, 255, 0, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="5,3"
                />
                
                {/* Node circle */}
                <circle
                  cx={x}
                  cy={y}
                  r="35"
                  fill="#d9ff00"
                  stroke="#00403d"
                  strokeWidth="3"
                  className="cursor-pointer transition-all duration-300 hover:r-40"
                />
                
                {/* Icon */}
                <foreignObject x={x - 18} y={y - 18} width="36" height="36">
                  <item.icon className="w-9 h-9 text-[#00403d]" />
                </foreignObject>
              </g>
            );
          })}
        </svg>

        {/* Center title */}
        <div className="absolute flex items-center justify-center w-48 h-48 bg-[#d9ff00] rounded-full border-4 border-[#00403d] shadow-xl">
          <span className="text-lg font-bold text-[#00403d] text-center px-4">Our Proven Process</span>
        </div>

        {/* Timeline Cards */}
        {timelineData.map((item, index) => {
          const angle = (index * 45) - 90; // 8 items, 45° apart, no rotation
          const cardX = 500 + 480 * Math.cos((angle * Math.PI) / 180);
          const cardY = 500 + 480 * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: `${cardX}px`,
                top: `${cardY}px`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Card className="w-80 bg-white/95 backdrop-blur-sm border-2 border-[#d9ff00] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[#00403d] rounded-lg">
                      <item.icon className="w-7 h-7 text-[#d9ff00]" />
                    </div>
                    <div>
                      <Badge variant="outline" className="text-sm bg-[#d9ff00] text-[#00403d] border-[#00403d] font-semibold">
                        {item.phase}
                      </Badge>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-xl text-[#00403d] mb-3">{item.title}</h3>
                  <p className="text-base text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {item.deliverables?.map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-[#d9ff00] rounded-full"></div>
                      ))}
                    </div>
                    <button className="text-[#00403d] hover:text-[#d9ff00] transition-colors duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}