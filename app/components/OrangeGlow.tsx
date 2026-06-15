"use client";

import React from "react";

interface OrangeGlowProps {
  className?: string;
  size?: string;
}

export default function OrangeGlow({ 
  className = "", 
  size = "w-[300px] h-[300px] md:w-[500px] md:h-[500px]" 
}: OrangeGlowProps) {
  return (
    <div
      className={`absolute rounded-full bg-[radial-gradient(circle,rgba(245,199,107,0.15)_0%,rgba(245,199,107,0)_70%)] opacity-35 blur-[180px] md:blur-[240px] pointer-events-none -z-10 animate-pulse-glow ${size} ${className}`}
    />
  );
}
