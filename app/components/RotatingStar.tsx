"use client";

import React from "react";

interface RotatingStarProps {
  className?: string;
  size: number;
  reverse?: boolean;
}

export default function RotatingStar({ 
  className = "", 
  size, 
  reverse = false 
}: RotatingStarProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`absolute opacity-25 pointer-events-none -z-10 ${
        reverse ? "animate-spin-reverse-slow" : "animate-spin-slow"
      } ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-gold"
      >
        {/* Cinematic Sparkle / 4-pointed star curve */}
        <path
          d="M50 0 C 50 35, 65 50, 100 50 C 65 50, 50 65, 50 100 C 50 65, 35 50, 0 50 C 35 50, 50 35, 50 0 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        {/* Subtle center ring/dot */}
        <circle cx="50" cy="50" r="2" fill="currentColor" className="opacity-70" />
        <circle cx="50" cy="50" r="6" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />
      </svg>
    </div>
  );
}
