"use client";

import React from "react";

export default function GridLines() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-20 w-full h-full overflow-hidden">
      {/* 4 Vertical Grid Lines aligned with the standard content container */}
      <div className="relative w-full h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between">
        {[
          { delay: "0s", duration: "10s" },
          { delay: "3s", duration: "14s" },
          { delay: "6s", duration: "12s" },
          { delay: "1.5s", duration: "16s" },
        ].map((line, idx) => (
          <div
            key={idx}
            className="relative w-[1px] h-full bg-gradient-to-b from-gold/5 via-gold/20 to-gold/5 opacity-15"
          >
            {/* Animated Laser Pulse Light Ray */}
            <div
              style={{
                animationDelay: line.delay,
                animationDuration: line.duration,
              }}
              className="absolute left-1/2 -translate-x-1/2 w-[2px] h-[250px] bg-gradient-to-b from-transparent via-gold to-transparent shadow-[0_0_15px_#f5c76b] animate-laser"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
