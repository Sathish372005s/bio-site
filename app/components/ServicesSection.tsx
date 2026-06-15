"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Heart, Briefcase, Sparkles, User, Share2 } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Event Reels",
      description: "Capture the essence of your events, exhibitions, and parties with fast edits made to share instantly.",
      icon: Calendar,
    },
    {
      title: "Wedding Highlights",
      description: "Cinematic, luxury summaries of your special moments, edited on-site so you can share highlights instantly.",
      icon: Heart,
    },
    {
      title: "Business Promotions",
      description: "High-conversion vertical promotions for local businesses, brand storytelling, and corporate messaging.",
      icon: Briefcase,
    },
    {
      title: "Product Launch Reels",
      description: "Dynamic showcase of product reveals, feature walk-throughs, and unpacking clips that convert views to orders.",
      icon: Sparkles,
    },
    {
      title: "Creator Content",
      description: "We handle the camera and technical editing so you can focus entirely on presenting and scripting your best ideas.",
      icon: User,
    },
    {
      title: "Social Media Coverage",
      description: "Full-day instant capture, edit, and post cycles to dominate social media algorithms during live announcements.",
      icon: Share2,
    },
  ];

  return (
    <section id="services" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-wider">
          PREMIUM SERVICES
        </h2>
        <p className="text-gold uppercase tracking-widest text-xs font-semibold mt-3">
          Cinematic Production • Instant Delivery
        </p>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                borderColor: "rgba(245, 199, 107, 0.4)",
                boxShadow: "0 10px 30px -10px rgba(245, 199, 107, 0.15)",
              }}
              className="group flex flex-col p-8 rounded-[24px] bg-zinc-950/40 border border-zinc-900 hover:bg-zinc-950/70 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-black transition-all duration-300">
                <IconComponent size={24} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
