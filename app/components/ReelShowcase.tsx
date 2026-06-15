"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ReelShowcase() {
  return (
    <div className="relative flex justify-center items-center w-full min-h-[450px] md:min-h-[600px] select-none">
      {/* Background Glow Ring around the Phone */}
      <div className="absolute w-[280px] h-[480px] md:w-[320px] md:h-[580px] rounded-[48px] bg-gradient-to-r from-gold/20 via-amber-500/10 to-gold/30 blur-3xl opacity-60 -z-10 animate-pulse-glow" />

      {/* PHONE MOCKUP */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-[280px] aspect-[9/16] md:w-[320px] rounded-[40px] md:rounded-[48px] border-4 border-gold-dark/40 bg-zinc-950 p-[6px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(245,199,107,0.15)] flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Phone Speaker / Notch */}
        <div className="absolute top-0 z-30 w-32 h-[18px] md:h-[22px] bg-zinc-950 rounded-b-2xl border-x border-b border-zinc-900 flex justify-center items-center">
          <div className="w-12 h-1 bg-zinc-800 rounded-full" />
        </div>

        {/* Video Screen Container */}
        <div className="relative w-full h-full rounded-[32px] md:rounded-[40px] overflow-hidden bg-zinc-900 flex items-center justify-center">
          {/* Autoplay Reel Video */}
          <video
            className="w-full h-full object-cover scale-[1.02]"
            src="reel.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='%23050505'/%3E%3Ctext x='50' y='50' fill='%23f5c76b' font-size='4' text-anchor='middle'%3EFLA Reels Showcase%3C/text%3E%3C/svg%3E"
          />

          {/* Glare effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none z-10" />
          
          {/* Bottom Video Progress Bar (Visual Only) */}
          <div className="absolute bottom-2 left-4 right-4 h-1 bg-zinc-800/80 rounded-full overflow-hidden z-20">
            <motion.div 
              className="h-full bg-gold shadow-[0_0_8px_#f5c76b]" 
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

