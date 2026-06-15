"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, Cpu, Sliders, Zap, TrendingUp } from "lucide-react";

export default function WhyChooseUs() {
  const steps = [
    {
      step: "01",
      title: "Shoot on DSLR",
      subtitle: "Cinematic Raw Footage",
      description: "We capture high-definition footage on premium DSLR/mirrorless cameras, utilizing prime lenses to achieve elite depth of field and premium colors.",
      icon: Camera,
    },
    {
      step: "02",
      title: "Edit on Mac Studio",
      subtitle: "Lightning-Fast Edits",
      description: "Our on-site editors import footage directly onto Apple Silicon Mac Studio setups, slicing and sync-mastering frames immediately.",
      icon: Cpu,
    },
    {
      step: "03",
      title: "Export Professionally",
      subtitle: "Color-Graded & Mastered",
      description: "Each video is treated with custom cinematic LUTs, noise reduction, and sound mastering to ensure studio-grade playback on mobile screens.",
      icon: Sliders,
    },
    {
      step: "04",
      title: "Deliver Instantly",
      subtitle: "Delivered in 10 Minutes",
      description: "Reels are rendered and delivered directly to your device via high-speed cloud/local shares before the event even concludes.",
      icon: Zap,
    },
    {
      step: "05",
      title: "Publish & Grow",
      subtitle: "Peak Audience Virality",
      description: "Upload your completed reel at the peak of the event excitement, capturing organic traction and event buzz when engagement is highest.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="why-choose-us" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 relative">
      {/* Glow Effect */}
      <div className="absolute top-[30%] right-0 w-72 h-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-wider">
          WHY CHOOSE US
        </h2>
        <p className="text-gold uppercase tracking-widest text-xs font-semibold mt-3">
          Our Lightning Production Workflow
        </p>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
      </div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Vertical Center Line */}
        <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-gold/40 via-gold to-gold/10 pointer-events-none" />

        {/* Timeline Steps */}
        <div className="w-full flex flex-col gap-12 md:gap-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={step.step}
                className="relative flex flex-col md:flex-row items-start md:items-center w-full"
              >
                {/* Node Dot Indicator */}
                <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-gold bg-zinc-950 flex items-center justify-center z-10 shadow-[0_0_12px_rgba(245,199,107,0.4)]">
                  <IconComponent size={14} className="text-gold" />
                </div>

                {/* Card Container */}
                <div 
                  className={`w-full pl-12 md:pl-0 md:w-1/2 flex ${
                    isEven ? "md:justify-end md:pr-12" : "md:justify-start md:pl-12 md:order-2"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full glass-panel p-6 rounded-[20px] border border-gold/10 hover:border-gold/30 hover:bg-zinc-950/50 transition-all duration-300 shadow-xl"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-gold text-xs font-semibold tracking-wider uppercase block">
                          {step.subtitle}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-white mt-0.5">
                          {step.title}
                        </h3>
                      </div>
                      <span className="font-serif text-3xl font-black text-gold/20">
                        {step.step}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm font-light leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Empty block for staggered layout on desktop */}
                <div className="hidden md:block w-1/2 md:order-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
