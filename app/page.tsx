"use client";

import React from "react";
import BackgroundWrapper from "./components/BackgroundWrapper";
import HeroSection from "./components/HeroSection";
import QuoteSection from "./components/QuoteSection";
import OwnerSection from "./components/OwnerSection";
import Footer from "./components/Footer";
import ReelShowcase from "./components/ReelShowcase";

export default function Home() {
  return (
    <BackgroundWrapper>
      {/* 1. Hero & Header Section */}
      <HeroSection />

      {/* 2. Connect & Philosophy (Social Links + Rotating Quotes) */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <div className="lg:col-span-6 w-full">
          <ReelShowcase />
        </div>
        <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left h-full">
          <div className="mb-4">
            <span className="text-gold text-xs font-bold uppercase tracking-widest block">
              Speed Meets Narrative
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-black text-white mt-1">
              THE FLA MANIFESTO
            </h3>
            <div className="w-12 h-[2px] bg-gold mt-3 mx-auto lg:mx-0" />
          </div>
          <QuoteSection />
        </div>
      </section>

      {/* 3. Owner & Statement Section */}
      <OwnerSection />

      {/* 4. Production Workflow / Timeline Section */}
 

      {/* 5. Testimonials Carousel Section */}


      {/* 7. Footer & WhatsApp CTA Section */}
      <Footer />
    </BackgroundWrapper>
  );
}
