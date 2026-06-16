"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, ArrowRight, MessageCircle, Folder } from "lucide-react";
import { Whatsapp, Instagram, Youtube, Facebook } from "./BrandIcons";

export default function SocialLinks() {
  const links = [
    {
      name: "WhatsApp",
      label: "Instant Inquiry & Bookings",
      icon: Whatsapp,
      url: "https://api.whatsapp.com/send/?phone=919866695553&text&type=phone_number&app_absent=0",
      color: "hover:text-[#25D366]",
      glowColor: "rgba(37, 211, 102, 0.2)",
    },
    {
      name: "Instagram",
      label: "Portfolio & Recent Reels",
      icon: Instagram,
      url: "https://www.instagram.com/weareflareels?igsh=NHU5MGFyajg5NTl6&utm_source=qr",
      color: "hover:text-[#E1306C]",
      glowColor: "rgba(225, 48, 108, 0.2)",
    },
    {
      name: "YouTube",
      label: "High-Quality Video Showcase",
      icon: Youtube,
      url: "https://www.youtube.com/@flareels.12",
      color: "hover:text-[#FF0000]",
      glowColor: "rgba(255, 0, 0, 0.2)",
    },
    {
      name: "Facebook",
      label: "Updates & Community",
      icon: Facebook,
      url: "https://facebook.com/flareels",
      color: "hover:text-[#1877F2]",
      glowColor: "rgba(24, 119, 242, 0.2)",
    },
    {
      name: "Website",
      label: "Official Services Portfolio",
      icon: Globe,
      url: "https://www.flareels.com/",
      color: "hover:text-gold",
      glowColor: "rgba(245, 199, 107, 0.2)",
    },
    {
      name: "Threads",
      label: "Short updates & Reels",
      icon: MessageCircle,
      url: "https://www.threads.com/@weareflareels",
      color: "hover:text-pink-400",
      glowColor: "rgba(225, 48, 108, 0.08)",
    },
    {
      name: "Drive",
      label: "Shared Assets & Media",
      icon: Folder,
      url: "https://drive.google.com/drive/folders/1OueiesBq7puxNElqEgpj8Nr7CDG1zAGj?usp=share_link",
      color: "hover:text-sky-400",
      glowColor: "rgba(14, 165, 233, 0.08)",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-xl mx-auto glass-panel-heavy p-6 md:p-8 rounded-[28px] border border-gold/15 relative overflow-hidden shadow-2xl"
    >
      {/* Decorative Golden Ambient Back-Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gold/10 blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="font-serif text-2xl font-bold tracking-wider text-white">
          CONNECT WITH US
        </h3>
        <p className="text-xs text-zinc-400 mt-2 font-medium tracking-widest uppercase">
          Choose a channel to start conversion
        </p>
        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
      </div>

      {/* Links List */}
      <div className="flex flex-col gap-4">
        {links.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.015,
                boxShadow: `0 10px 25px -5px ${link.glowColor}`,
                borderColor: "rgba(245, 199, 107, 0.3)"
              }}
              className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-950/40 border border-zinc-900/60 hover:bg-zinc-950/70 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-zinc-900 group-hover:bg-zinc-800 text-zinc-400 ${link.color} transition-all duration-300`}>
                  <IconComponent size={20} />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-semibold text-white group-hover:text-gold transition-colors duration-300">
                    {link.name}
                  </span>
                  <span className="text-xs text-zinc-500 font-light mt-0.5">
                    {link.label}
                  </span>
                </div>
              </div>
              
              <div className="p-2 rounded-lg text-zinc-600 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300">
                <ArrowRight size={16} />
              </div>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}
