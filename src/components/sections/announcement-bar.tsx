"use client";

import React, { useEffect, useState } from "react";
import { Lock, Sparkles, Check, Clock } from "lucide-react";

interface NotificationItem {
  name: string;
  action: string;
}

// Data pools with exclusively female first names for Sephora
const firstNames = [
  "Olivia", "Emma", "Charlotte", "Amelia", "Sophia", "Isabella", "Ava", "Mia", "Evelyn", "Harper",
  "Luna", "Camila", "Gianna", "Elizabeth", "Eleanor", "Ella", "Abigail", "Sophia", "Emily", "Hazel",
  "Chloe", "Penelope", "Layla", "Aria", "Nora", "Lily", "Grace", "Willow", "Riley", "Zoey",
  "Ivy", "Aurora", "Lily", "Hannah", "Emery", "Maya", "Kinsley", "Naomi", "Aaliyah", "Elena",
  "Sarah", "Ariana", "Allison", "Gabriella", "Alice", "Madelyn", "Cora", "Ruby", "Eva", "Serenity",
  "Autumn", "Adeline", "Hailey", "Gianna", "Valentina", "Isla", "Eliana", "Quinn", "Nevaeh", "Piper",
  "Sadie", "Melanie", "Clara", "Atlee", "Daisy", "Sienna", "Freya", "Phoebe", "Gemma", "Olive",
  "Genevieve", "Georgia", "Callie", "June", "Rosalie", "Tessa", "Sutton", "Lucia", "Alessia", "Sloane",
  "Colette", "Daphne", "Elsie", "Fiona", "Giselle", "Helena", "Ingrid", "Juliet", "Kendra", "Lorelei",
  "Margot", "Nadia", "Ophelia", "Paige", "Rosie", "Seraphina", "Thea", "Vivian", "Willa", "Yara"
];

const lastInitials = ["A.", "B.", "C.", "D.", "E.", "F.", "G.", "H.", "K.", "L.", "M.", "N.", "P.", "R.", "S.", "T.", "V.", "W."];

const actions = [
  "just claimed a $750 Sephora gift card!",
  "just unlocked reward eligibility!",
  "just completed the review survey!",
  "just verified eligibility!"
];

// Dynamically generate 100 unique female notifications for Sephora
const notifications: NotificationItem[] = Array.from({ length: 100 }, (_, i) => ({
  name: `${firstNames[i % firstNames.length]} ${lastInitials[i % lastInitials.length]}`,
  action: actions[i % actions.length]
}));

/**
 * AnnouncementBar Component
 * 
 * High-converting sticky top bar with countdown timer, security lock,
 * social proof counter, and bottom-anchored dynamic live notifications.
 */
const AnnouncementBar = () => {
  const [currentNotif, setCurrentNotif] = useState<NotificationItem | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // 5-minute persistent timer state (300 seconds)
  const [timeLeft, setTimeLeft] = useState<number>(300);

  // Timer countdown hook
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timerInterval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Social proof notification loop
  useEffect(() => {
    const showRandomNotif = () => {
      const randomIndex = Math.floor(Math.random() * notifications.length);
      setCurrentNotif(notifications[randomIndex]);
      setIsVisible(true);

      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    // Initial trigger after 2 seconds
    const initialTimer = setTimeout(() => {
      showRandomNotif();
    }, 2000);

    // Loop through notifications every 8 seconds
    const interval = setInterval(() => {
      showRandomNotif();
    }, 8000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Sticky Top Bar Container with Black Background & White Text (Original Sephora Theme) */}
      <div 
        className="sticky top-0 z-50 w-full bg-[#000000] border-b border-white/10 py-2 px-1.5 sm:px-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md"
        style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 8px)" }}
      >
        {/* Sparkle Overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <Sparkles 
            className="absolute left-[1%] sm:left-[5%] top-1/2 -translate-y-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 text-white animate-pulse" 
            strokeWidth={1.5}
          />
          <Sparkles 
            className="absolute right-[1%] sm:right-[5%] top-1/2 -translate-y-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 text-white animate-pulse" 
            strokeWidth={1.5}
          />
        </div>

        {/* Ultra-Clean Single-Line Headline */}
        <div className="relative z-10 flex items-center justify-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-1 sm:gap-2 text-[#ffffff] text-[10px] sm:text-[12px] font-bold tracking-tight text-center leading-none">
            {/* Lock Icon */}
            <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#ffffff] shrink-0" strokeWidth={2.5} />

            <span className="whitespace-nowrap">Your spot is reserved for:</span>
            
            {/* Timer Badge (Original Sephora Black/White Theme) */}
            <span className="inline-flex items-center gap-1 bg-[#18181b] border border-white/20 text-[#ffffff] px-1.5 py-0.5 rounded-md font-mono text-[10px] sm:text-[12px] font-bold shadow-sm shrink-0">
              <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#ffffff] animate-pulse" />
              <span>{formatTime(timeLeft)}</span>
            </span>

            {/* Separator Bullet */}
            <span className="text-white/40 font-normal select-none hidden min-[360px]:inline">•</span>

            {/* Social Proof Text */}
            <span className="font-semibold text-white/90 whitespace-nowrap hidden min-[360px]:inline">
              1,400+ verified today
            </span>
          </div>
        </div>

        {/* Shimmer Bottom Border */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffffff] to-transparent w-full opacity-30 overflow-hidden">
          <div className="absolute inset-0 bg-white/20 animate-shine"></div>
        </div>
      </div>

      {/* Floating Bottom Social Proof Toast */}
      {currentNotif && (
        <div
          className={`fixed bottom-6 left-3 right-3 sm:left-4 sm:right-auto z-[9999] max-w-sm flex items-center gap-2.5 rounded-xl border-l-[4px] border-[#10B981] bg-white/95 backdrop-blur-md px-3.5 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-300 ease-in-out ${
            isVisible
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "translate-y-4 opacity-0 pointer-events-none"
          }`}
        >
          {/* Green Check Icon Circle */}
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-white">
            <Check className="w-3 h-3" strokeWidth={3} />
          </div>

          {/* Toast Text */}
          <div className="text-[11px] sm:text-xs text-[#333333] truncate">
            <span className="font-bold">{currentNotif.name} </span>
            <span className="text-[#555555]">{currentNotif.action}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default AnnouncementBar;
