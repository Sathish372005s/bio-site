"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight, Play } from "lucide-react";
import ReelShowcase from "./ReelShowcase";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  return (
    <header className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8  pb-16 md:pt-6 md:pb-12 flex flex-col justify-start">
      {/* HEADER BAR */}
      <div className="w-full flex justify-between items-center py-4 mb-8 md:mb-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          {/* Logo design */}
          <div className="font-serif text-2xl md:text-3xl font-black tracking-widest text-white flex items-center">
            <img
              src="/logo.webp"
              alt="FLA Reels"
              className="w-60 h-30 "
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a 
            href="https://www.flareels.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-gold to-amber-500 text-black font-semibold text-sm hover:shadow-[0_0_15px_#f5c76b] transition-all duration-300 transform hover:scale-[1.03]"
          >
            Book Now
          </a>
        </motion.div>
      </div>

      {/* HERO CONTENT - SPLIT LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* LEFT SIDE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Highlight Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_10px_rgba(245,199,107,0.1)]">
            <Zap size={12} className="fill-gold" />
            <span>Delivered in Minutes ⚡</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] text-white mb-6">
            FAST STORIES.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
              FASTER REACH.
            </span>
          </h1>

          {/* Subheading Bullet points */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm md:text-base text-zinc-300 font-medium mb-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Professional DSLR Shoot
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Mac Studio Editing
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Instant Reel Delivery
            </span>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-xl mb-10">
            We help brands, businesses and creators publish high-quality reels instantly during events, launches and celebrations. Get premium quality with lightning turnarounds.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="https://www.flareels.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-gold to-amber-500 text-black font-bold text-center hover:shadow-[0_0_25px_#f5c76b] transition-all duration-300 flex justify-center items-center gap-2 transform hover:scale-[1.03]"
            >
              <span>Book Your Shoot</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://www.flareels.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-gold/30 hover:border-gold text-white font-semibold text-center hover:bg-gold/5 transition-all duration-300 flex justify-center items-center gap-2 transform hover:scale-[1.03]"
            >
              <Play size={16} className="text-gold fill-gold/20" />
              <span>Explore Services</span>
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE (Phone Mockup Reel Showcase) */}
        <div className="lg:col-span-5 flex justify-center items-center w-full">
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}

