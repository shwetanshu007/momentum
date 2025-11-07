"use client";

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
import MomentummRadialTimeline from "./momentumm-radial-timeline";

const timelineData = [
  {
    id: 1,
    title: "Discovery & Research",
    date: "Phase 1",
    content: "Deep dive into your business, audience, and market to build a foundation for success.",
    category: "Strategy",
    icon: Search,
    relatedIds: [2],
    status: "completed",
    energy: 100,
  },
  {
    id: 2,
    title: "Strategy Development",
    date: "Phase 2",
    content: "Create a comprehensive marketing strategy tailored to your business goals.",
    category: "Planning",
    icon: Target,
    relatedIds: [1, 3],
    status: "completed",
    energy: 95,
  },
  {
    id: 3,
    title: "Creative & Content",
    date: "Phase 3",
    content: "Develop compelling creative assets and content that resonates with your audience.",
    category: "Design",
    icon: Palette,
    relatedIds: [2, 4],
    status: "completed",
    energy: 85,
  },
  {
    id: 4,
    title: "Campaign Implementation",
    date: "Phase 4",
    content: "Launch and execute your marketing campaigns across all relevant channels.",
    category: "Execution",
    icon: Rocket,
    relatedIds: [3, 5],
    status: "completed",
    energy: 70,
  },
  {
    id: 5,
    title: "Performance Optimization",
    date: "Phase 5",
    content: "Monitor, analyze, and optimize campaign performance for maximum ROI.",
    category: "Performance",
    icon: TrendingUp,
    relatedIds: [4, 6],
    status: "completed",
    energy: 60,
  },
  {
    id: 6,
    title: "Scale & Growth",
    date: "Phase 6",
    content: "Scale successful campaigns and explore new growth opportunities.",
    category: "Growth",
    icon: BarChart3,
    relatedIds: [5, 7],
    status: "completed",
    energy: 45,
  },
  {
    id: 7,
    title: "Community Building",
    date: "Phase 7",
    content: "Build and nurture a loyal community around your brand.",
    category: "Engagement",
    icon: Users,
    relatedIds: [6, 8],
    status: "completed",
    energy: 30,
  },
  {
    id: 8,
    title: "Analytics & Insights",
    date: "Phase 8",
    content: "Comprehensive analysis and strategic recommendations for continued growth.",
    category: "Insights",
    icon: LineChart,
    relatedIds: [7, 1],
    status: "completed",
    energy: 20,
  }
];

export function MomentummTimelineDemo() {
  return (
    <div className="w-full">
      <MomentummRadialTimeline timelineData={timelineData} />
    </div>
  );
}

export default MomentummTimelineDemo;