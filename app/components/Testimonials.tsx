"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Event Director, Vibe Media",
      text: "Absolutely mind-blown! We had reels delivered to our phones while the event was still going. The DSLR quality was gorgeous and our Instagram engagement spiked 300% that night.",
      rating: 5,
    },
    {
      name: "Marcus Thorne",
      role: "Founder, Luxe Fashion Co.",
      text: "FLA Reels is a game changer. For our product launch, they edited and delivered five promotional clips in under an hour. Highly professional team and work ethic.",
      rating: 5,
    },
    {
      name: "Elena & David",
      role: "Newlyweds",
      text: "We were able to share professional highlights of our wedding vows with guests who couldn't attend, before the reception even started! Unbelievable service.",
      rating: 5,
    },
    {
      name: "Coach Ryan",
      role: "Fitness Creator",
      text: "I shoot a week's worth of content in one morning. The speed of edit and instant turnaround lets me stay ahead of my content calendar effortlessly.",
      rating: 5,
    },
    {
      name: "Clara Zhang",
      role: "Marketing Head, TechSummit",
      text: "Our attendees were amazed when we published recap reels of the panel discussions 10 minutes after they finished. Highly recommend for high-profile summits.",
      rating: 5,
    },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="testimonials" className="w-full py-20 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16 px-4">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-wider">
          CLIENT LOVE
        </h2>
        <p className="text-gold uppercase tracking-widest text-xs font-semibold mt-3">
          What creators and brands say about our speed
        </p>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
      </div>

      {/* Infinite Horizontal Carousel */}
      <div className="w-full flex items-center overflow-hidden py-4 select-none relative mask-gradient">
        {/* Shadow Overlays to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-15 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-15 pointer-events-none" />

        <motion.div
          animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
          onHoverStart={() => setIsPaused(true)}
          onHoverEnd={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-6 w-max px-4"
        >
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[300px] sm:w-[360px] flex-shrink-0 glass-panel p-6 sm:p-8 rounded-[24px] border border-gold/10 hover:border-gold/30 hover:bg-zinc-950/60 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Quote Icon & Rating */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-gold/40">
                    <Quote size={24} className="fill-current" />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-zinc-300 text-sm font-light leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              {/* Author details */}
              <div className="border-t border-zinc-900 pt-4 mt-auto">
                <h4 className="font-bold text-white text-sm">
                  {testimonial.name}
                </h4>
                <p className="text-gold/80 text-xs font-medium mt-0.5">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
