"use client";
import { useState, useRef } from "react";
import { Badge } from "./badge";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

export default function MomentummRadialTimeline({ timelineData }) {
  const [expandedItems, setExpandedItems] = useState({});
  const [viewMode, _setViewMode] = useState("orbital");
  const [rotationOffset, setRotationOffset] = useState(0);



  const [centerOffset, _setCenterOffset] = useState({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState(null);
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const nodeRefs = useRef({});

  const handleContainerClick = (e) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
    }
  };

  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
      }

      return newState;
    });
  };



  const centerViewOnNode = (nodeId) => {
    if (viewMode !== "orbital") return;
    
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    if (nodeIndex === -1) return;
    
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    const newOffset = -targetAngle;
    
    setRotationOffset(newOffset);
  };

  const calculateNodePosition = (index, total) => {
    // Start at top (270 degrees) and add current rotation
    const baseAngle = (index / total) * 360 - 90; // -90 to start at top
    const angle = baseAngle + (rotationOffset || 0);
    const radius = 320;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = 150;
    const opacity = 1;

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId) => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId) => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "completed":
        return "text-[#00403d] bg-[#d9ff00] border-[#d9ff00]";
      case "in-progress":
        return "text-[#d9ff00] bg-[#00403d] border-[#d9ff00]";
      case "pending":
        return "text-[#b3cccc] bg-[#00403d]/60 border-[#b3cccc]/50";
      default:
        return "text-[#b3cccc] bg-[#00403d]/40 border-[#b3cccc]/50";
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center overflow-visible py-20"
      style={{ 
        backgroundColor: 'transparent',
      }}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y - 90}px)`,
          }}
        >
          {/* Center neon heading */}
          <div className="absolute flex items-center justify-center z-10">
            <h2 className="text-4xl font-extrabold text-center px-4 text-[#d9ff00] drop-shadow-[0_0_10px_#d9ff00] drop-shadow-[0_0_20px_#d9ff00]">
              Our Proven Process
            </h2>
          </div>

          <div className="absolute w-[640px] h-[640px] rounded-full border border-[#d9ff00]/20"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);

            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >


                <div
                  className={`
                  w-16 h-16 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-[#d9ff00] text-[#00403d]"
                      : isRelated
                      ? "bg-[#d9ff00]/70 text-[#00403d]"
                      : "bg-[#00403d] text-[#d9ff00]"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-[#d9ff00] shadow-lg shadow-[#d9ff00]/30"
                      : isRelated
                      ? "border-[#d9ff00] animate-pulse"
                      : "border-[#d9ff00]/40"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-150" : ""}
                `}
                >
                  <Icon size={24} />
                </div>

                <div
                  className={`
                  absolute top-20 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-xs font-bold tracking-wider text-center
                  transition-all duration-300
                  ${isExpanded ? "text-[#d9ff00] scale-125" : "text-white"}
                `}
                >
                  {index + 1}. {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-16 left-1/2 -translate-x-1/2 w-72 bg-[#00403d]/95 backdrop-blur-lg border-[#d9ff00]/30 shadow-xl shadow-[#d9ff00]/10 overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-[#d9ff00]/50"></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge
                          className={`px-2 text-xs ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          Phase {item.id}
                        </Badge>
                        <span className="text-xs font-mono text-[#b3cccc]">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-sm mt-2 text-[#d9ff00]">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-[#b3cccc]">
                      <p className="leading-relaxed">{item.content}</p>
                      <div className="flex justify-end mt-2">
                        <button className="text-[#00403d] hover:text-[#d9ff00] transition-colors duration-200">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}