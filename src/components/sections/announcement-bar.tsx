"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Sparkles, Users } from "lucide-react";

const AnnouncementBar = () => {
  const messages = [
    "Official Apple Rewards Partner Verification • Secure Session",
    "Over 1,400+ participants completed verification today",
    "Verified & Protected Participant Portal"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000); // Rotates every 4 seconds
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="sticky top-0 z-50 w-full bg-[#969696] border-b border-[#969696]/30 py-1.5 px-4 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md">
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <Sparkles className="absolute left-[10%] top-1/2 -translate-y-1/2 w-4 h-4 text-white animate-pulse" strokeWidth={1.5} />
        <Sparkles className="absolute right-[10%] top-1/2 -translate-y-1/2 w-4 h-4 text-white animate-pulse" strokeWidth={1.5} />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center justify-center gap-2 text-center transition-opacity duration-500">
            <ShieldCheck className="w-3.5 h-3.5 text-[#000000] shrink-0" strokeWidth={2.5} />
            <p className="text-[#000000] text-[12px] font-bold tracking-tight text-center">
              {messages[currentIndex]}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-0.5">
          <div className="h-[1px] w-4 bg-[#000000]"></div>
          <p className="text-[#000000] text-[9px] uppercase tracking-[0.15em] font-bold">
            No Purchase Required &bull; Terms Apply
          </p>
          <div className="h-[1px] w-4 bg-[#000000]"></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#000001] to-transparent w-full opacity-50 overflow-hidden">
        <div className="absolute inset-0 bg-white/20 animate-shine"></div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
