import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Users, Briefcase, Phone, Star } from "lucide-react";

export function MomentummFloatingNav() {
  const navItems = [
    {
      name: "Services",
      link: "#services", 
      icon: <Briefcase className="h-4 w-4 text-white/90" />,
    },
    {
      name: "Process",
      link: "#about",
      icon: <Users className="h-4 w-4 text-white/90" />,
    },
    {
      name: "Blog",
      link: "#blog",
      icon: <Star className="h-4 w-4 text-white/90" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <Phone className="h-4 w-4 text-white/90" />,
    },
  ];

  return (
    <FloatingNav 
      navItems={navItems}
      className="bg-[#00403d]/95 backdrop-blur-md border-[#d9ff00]/30 shadow-xl"
    />
  );
}