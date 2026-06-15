"use client";

import React from "react";
import { MessageCircle, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Instagram, Youtube, Facebook } from "./BrandIcons";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="w-full bg-black/80 border-t border-gold/10 relative overflow-hidden mt-16 pt-16 pb-8">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* WHATSAPP INSTANT CTA BANNER */}
        <div className="w-full glass-panel-heavy p-8 md:p-10 rounded-[32px] border border-gold/20 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 shadow-2xl relative overflow-hidden">
          {/* Accent light ray overlay */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-gold/10 to-transparent blur-3xl pointer-events-none" />
          
          <div className="flex flex-col items-start text-left max-w-xl">
            <span className="text-gold text-xs font-bold tracking-widest uppercase mb-2 block">
              Direct Communication Channel
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-white leading-tight">
              Need a reel right now? Message us.
            </h3>
            <p className="text-zinc-400 text-sm font-light mt-2 leading-relaxed">
              Have an active event, product launch, or celebration today? Get a crew dispatched instantly and get your content edited and published in real time.
            </p>
          </div>

          <a
            href="https://api.whatsapp.com/send/?phone=919866695553&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full md:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold to-amber-500 text-black font-bold text-center hover:shadow-[0_0_30px_#f5c76b] transition-all duration-300 flex justify-center items-center gap-2.5 transform hover:scale-[1.03]"
          >
            <MessageCircle size={20} className="fill-black" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* FOOTER DIRECTORY */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-zinc-900">
          
          {/* Logo and Brand Description (Col 1) */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <div className="font-serif text-2xl font-black tracking-widest text-white flex items-center mb-6">
              FLA <span className="font-sans text-gold font-bold ml-1.5 border-l-2 border-gold pl-2 text-xl tracking-normal">REELS</span>
            </div>
            <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-sm">
              Instant cinematic production and DSLR videography for brands, businesses, weddings, and product launches. Edited on-site on Mac Studio and delivered in minutes.
            </p>
          </div>

          {/* Quick Links (Col 2) */}
          <div className="md:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-serif text-sm font-bold tracking-widest text-white uppercase mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href="#" className="text-zinc-400 hover:text-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="https://www.flareels.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-gold transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-zinc-400 hover:text-gold transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-zinc-400 hover:text-gold transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (Col 3) */}
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <h4 className="font-serif text-sm font-bold tracking-widest text-white uppercase mb-6">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-4 text-zinc-400 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold" />
                <a href="mailto:hello@flareels.com" className="hover:text-gold transition-colors">
                  hello@flareels.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold" />
                <a 
                  href="https://api.whatsapp.com/send/?phone=919866695553&text&type=phone_number&app_absent=0" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  +91 98666 95553
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-1" />
                <span>Film City, Goregaon East, Mumbai, Maharashtra 400065</span>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT & CREDITS */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-zinc-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} FLA Reels. All rights reserved.
          </p>

          <div className="flex gap-4 items-center">
            {/* Social Icons */}
            <a 
              href="https://www.instagram.com/weareflareels?igsh=NHU5MGFyajg5NTl6&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-gold hover:bg-zinc-800 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a 
              href="https://www.youtube.com/@flareels.12" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-gold hover:bg-zinc-800 transition-all"
              aria-label="YouTube"
            >
              <Youtube size={16} />
            </a>
            <a 
              href="https://facebook.com/flareels" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-gold hover:bg-zinc-800 transition-all"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>

            {/* Scroll to Top */}
            <button
              onClick={handleScrollToTop}
              className="p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-gold hover:bg-zinc-850 hover:shadow-[0_0_10px_#f5c76b] transition-all ml-4 border border-zinc-800"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
