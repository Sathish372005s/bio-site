"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "Every second matters. Every reel converts.",
  "Shoot fast. Edit faster. Deliver instantly.",
  "Turning moments into momentum.",
  "Capture. Create. Publish.",
  "Speed meets storytelling."
];

export default function QuoteSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 text-center select-none relative overflow-hidden">
      {/* Decorative quotes icons */}
      <span className="absolute top-0 left-[10%] text-gold/10 font-serif text-8xl md:text-9xl pointer-events-none select-none">
        “
      </span>
      <span className="absolute bottom-0 right-[10%] text-gold/10 font-serif text-8xl md:text-9xl pointer-events-none select-none">
        ”
      </span>

      <div className="relative min-h-[90px] md:min-h-[120px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full px-8"
          >
            <blockquote className="font-serif text-lg sm:text-2xl md:text-3xl font-light italic tracking-wider text-zinc-100 leading-relaxed">
              &ldquo;{quotes[index]}&rdquo;
            </blockquote>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Underline indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-gold shadow-[0_0_8px_#f5c76b]" : "w-2 bg-zinc-800 hover:bg-zinc-700"
            }`}
            aria-label={`Go to quote ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
