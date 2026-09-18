"use client";

import React from "react";
import { Lock, Sparkles } from "lucide-react";

/**
 * AnnouncementBar Component
 * 
 * A sticky top bar combining 256-Bit SSL encryption trust with live participation social proof.
 * Built for Next.js 15, TypeScript, and Tailwind CSS.
 */
const AnnouncementBar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-[#969696] border-b border-[#969696]/30 py-1 px-2 sm:px-4 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md">
      {/* Sparkle Icons Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <Sparkles 
          className="absolute left-[5%] sm:left-[10%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-white animate-pulse" 
          strokeWidth={1.5}
        />
        <Sparkles 
          className="absolute right-[5%] sm:right-[10%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-white animate-pulse" 
          strokeWidth={1.5}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-xl mx-auto">
        {/* Top Row: Security & Social Proof Combined */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-3 w-full">
          <div className="flex items-center justify-center gap-1.5 text-center max-w-full">
            <Lock 
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#000000] shrink-0" 
              strokeWidth={2.5}
            />
            <p className="text-[#000000] text-[10px] xs:text-[11px] sm:text-[12px] font-bold tracking-tight text-center leading-tight">
              256-Bit SSL Secured &bull; Over 1,400+ participants completed verification today
            </p>
          </div>
        </div>

        {/* Bottom Row: Subtext with decorative lines */}
        <div className="flex items-center gap-2 mt-0.5">
          <div className="h-[1px] w-3 sm:w-4 bg-[#000000]"></div>
          <p className="text-[#000000] text-[8px] sm:text-[9px] uppercase tracking-[0.12em] sm:tracking-[0.15em] font-bold whitespace-nowrap">
            Secure Eligibility Check &bull; Privacy Protected
          </p>
          <div className="h-[1px] w-3 sm:w-4 bg-[#000000]"></div>
        </div>
      </div>

      {/* Shimmering Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffffff] to-transparent w-full opacity-50 overflow-hidden">
        <div className="absolute inset-0 bg-white/20 animate-shine"></div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
