"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, Zap, TrendingUp, Compass, ArrowRight } from "lucide-react";

export default function OwnerSection() {
  return (
    <section id="owner" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-28 relative">
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Owner Portrait + Floating Glass Cards */}
        <div className="lg:col-span-6 flex justify-center items-center relative w-full max-w-md mx-auto lg:max-w-none">
          <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] md:w-[360px] md:h-[460px] rounded-[32px] border border-gold/20 p-2  shadow-2xl">
            {/* Owner Image */}
            <div className="w-full h-full rounded-[24px] overflow-hidden relative">
              <img
                src="/antooju.jpeg"
                alt="FLA Reels Lead Videographer"
                className="w-full h-full object-cover "
                loading="lazy"
              />

            </div>
            
            {/* FLOATING GLASS CARDS */}
            {/* Card 1: 🎬 Professional Shoot (Top Left) */}
            <div className="absolute -top-6 -left-8 sm:-left-12 z-20 glass-panel px-4 py-2.5 rounded-2xl flex items-center gap-2 border border-gold/25 shadow-lg animate-float-slow">
              <span className="text-gold"><Camera size={14} /></span>
              <span className="text-white text-xs md:text-sm font-semibold whitespace-nowrap">🎬 Professional Shoot</span>
            </div>

            {/* Card 2: ⚡ Quick Delivery (Top Right) */}
            <div className="absolute top-10 -right-8 sm:-right-12 z-20 glass-panel px-4 py-2.5 rounded-2xl flex items-center gap-2 border border-gold/25 shadow-lg animate-float-medium">
              <span className="text-gold"><Zap size={14} className="fill-gold/20" /></span>
              <span className="text-white text-xs md:text-sm font-semibold whitespace-nowrap">⚡ Quick Delivery</span>
            </div>

            {/* Card 3: 📈 Social Growth (Bottom Left) */}
            <div className="absolute bottom-16 -left-8 sm:-left-12 z-20 glass-panel px-4 py-2.5 rounded-2xl flex items-center gap-2 border border-gold/25 shadow-lg animate-float-fast">
              <span className="text-gold"><TrendingUp size={14} /></span>
              <span className="text-white text-xs md:text-sm font-semibold whitespace-nowrap">📈 Social Growth</span>
            </div>

            {/* Card 4: 🚀 Brand Reach (Bottom Right) */}
            <div className="absolute -bottom-6 -right-6 sm:-right-8 z-20 glass-panel px-4 py-2.5 rounded-2xl flex items-center gap-2 border border-gold/25 shadow-lg animate-float-slow">
              <span className="text-gold"><Compass size={14} /></span>
              <span className="text-white text-xs md:text-sm font-semibold whitespace-nowrap">🚀 Brand Reach</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Statement + Details */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 flex flex-col items-start text-left"
        >
          {/* Logo overlay element */}
          <div className="font-serif text-5xl sm:text-7xl font-extrabold tracking-widest text-zinc-900/40 select-none leading-none mb-4">
            FLA REELS
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-6">
            Your Event. Your Story.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
              Delivered Before The Crowd Leaves.
            </span>
          </h2>

          <div className="w-16 h-[2px] bg-gold mb-8" />

          <p className="text-zinc-400 font-light leading-relaxed mb-6">
            From luxury weddings to high-profile business launches, our dedicated team captures cinematic content on professional DSLR gear, edits on Mac Studio powerhouses, and serves them to you directly during the event.
          </p>

          <p className="text-zinc-500 text-sm font-light mb-10">
            Publish high-impact recap clips while the excitement is peak, capturing virality and engaging audiences instantly when it matters most.
          </p>

          <a 
            href="https://www.flareels.com/contact" 
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-full bg-transparent border-2 border-gold text-gold font-bold text-center hover:bg-gold hover:text-black transition-all duration-300 flex items-center gap-2 transform hover:scale-[1.03]"
          >
            <span>Book Your Shoot</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
