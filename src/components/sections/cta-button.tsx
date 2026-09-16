"use client";

import React from 'react';
import { Star } from 'lucide-react';

/**
 * CTAButton Component
 * 
 * The primary call-to-action button with a high-impact design, 
 * including a shimmering hover effect, star icons, and a pulsing bottom glow.
 */
export default function CTAButton() {
  const url = "https://giftclick.org/aff_c?offer_id=4931&aff_id=200438&source=kapaya";

  const handleClick = (e: React.MouseEvent) => {
    // For Orchids preview environment
    if (typeof window !== 'undefined' && window.parent) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
    }
  };

  return (
    <div className="relative z-10 w-full max-w-md mx-auto px-4 flex flex-col items-center mt-6 mb-0">
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group relative w-[240px] sm:w-full h-[46px] sm:h-[56px] bg-gradient-to-r from-[#595959] via-[#707070] to-[#595959] hover:from-[#4d4d4d] hover:via-[#616161] hover:to-[#4d4d4d] text-white rounded-full flex items-center justify-center gap-2 shadow-[0_6px_25px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden no-underline border border-white/20"
      >
        {/* Shine Animation Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -left-full group-hover:animate-shine pointer-events-none" />

        <div className="flex items-center gap-3 sm:gap-4 relative z-10">
          <Star 
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#ffc220] text-[#ffc220] animate-pulse" 
            style={{ filter: 'drop-shadow(0 0 4px rgba(255,194,32,0.5))' }}
          />

          <span className="text-[13px] sm:text-[15px] font-black uppercase text-white tracking-[0.12em] drop-shadow-sm flex items-center gap-1.5 sm:gap-2">
            START REVIEW
          </span>

          <Star 
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#ffc220] text-[#ffc220] animate-pulse" 
            style={{ filter: 'drop-shadow(0 0 4px rgba(255,194,32,0.5))' }}
          />
        </div>
      </a>

      <p className="mt-3 text-gray-500 text-[10px] sm:text-[11px] font-semibold tracking-tight text-center italic">
        (No purchase required - Eligibility and reward terms apply)
      </p>

      {/* Subtle bottom glow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/15 blur-2xl -z-10 rounded-full opacity-60 pointer-events-none" />
    </div>
  );
}
