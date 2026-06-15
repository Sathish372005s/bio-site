"use client";

import React from "react";
import OrangeGlow from "./OrangeGlow";
import GridLines from "./GridLines";
import RotatingStar from "./RotatingStar";

interface BackgroundWrapperProps {
  children: React.ReactNode;
}

export default function BackgroundWrapper({ children }: BackgroundWrapperProps) {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f3f4f6] overflow-x-hidden selection:bg-gold selection:text-black">
      {/* Subtle Cinematic Grain/Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none -z-10" />
      
      {/* 4 Vertical Grid Lines with Laser Pulses */}
      <GridLines />
      
      {/* Golden Glows (Center, Top Right, Bottom Center) */}
      <OrangeGlow 
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
        size="w-[350px] h-[350px] md:w-[650px] md:h-[650px]" 
      />
      <OrangeGlow 
        className="-top-40 -right-40 md:-top-60 md:-right-60" 
        size="w-[300px] h-[300px] md:w-[550px] md:h-[550px]" 
      />
      <OrangeGlow 
        className="-bottom-40 left-1/2 -translate-x-1/2 md:-bottom-60" 
        size="w-[300px] h-[300px] md:w-[600px] md:h-[600px]" 
      />
      
      {/* Decorative Rotating Stars (Top Left 120px, Bottom Right 90px) */}
      <RotatingStar className="top-[12%] left-[4%] sm:left-[8%] md:left-[12%]" size={120} />
      <RotatingStar className="bottom-[15%] right-[4%] sm:right-[8%] md:right-[12%]" size={90} reverse />
      
      {/* Upper Content Layer */}
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}
