"use client";

import React, { useEffect, useState } from "react";
import { Lock, Sparkles, Check, Clock } from "lucide-react";

interface NotificationItem {
  name: string;
  action: string;
}

// Data pools to build 100 unique notifications
const firstNames = [
  "Richard", "Sarah", "David", "Amanda", "Michael", "Jessica", "James", "Emily", "Robert", "Ashley",
  "Brian", "Megan", "Christopher", "Hannah", "Joshua", "Rachel", "Matthew", "Samantha", "Andrew", "Nicole",
  "Daniel", "Lauren", "Kevin", "Victoria", "Brandon", "Stephanie", "Justin", "Brittany", "Tyler", "Alyssa",
  "Alexander", "Elizabeth", "Ethan", "Taylor", "Jacob", "Alexis", "William", "Kayla", "Anthony", "Brianna",
  "Joseph", "Olivia", "Jonathan", "Sophia", "Samuel", "Grace", "Benjamin", "Chloe", "Nicholas", "Natalie",
  "Christian", "Madison", "Jackson", "Ella", "Gabriel", "Avery", "Logan", "Evelyn", "Lucas", "Mia",
  "Noah", "Harper", "Liam", "Camila", "Mason", "Gianna", "Oliver", "Abigail", "Elijah", "Emily",
  "Aiden", "Ella", "Jameson", "Scarlett", "Carter", "Aria", "Julian", "Hailey", "Henry", "Kaylee",
  "Wyatt", "Lily", "Owen", "Addison", "Caleb", "Aubrey", "Nathan", "Ellie", "Ryan", "Stella",
  "Jack", "Nora", "Hunter", "Zoe", "Levi", "Hannah", "Isaac", "Leah", "Luke", "Lucy"
];

const lastInitials = ["A.", "B.", "C.", "D.", "E.", "F.", "G.", "H.", "K.", "L.", "M.", "N.", "P.", "R.", "S.", "T.", "V.", "W."];

const actions = [
  "just claimed a $1000 Apple coupon!",
  "just claimed a $1000 Apple gift card!",
  "just unlocked reward eligibility!",
  "just completed the review survey!",
  "just verified eligibility!"
];

// Dynamically generate 100 people claiming rewards
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
      {/* Sticky Top Bar Container with iOS Safe Area Protection */}
      <div 
        className="sticky top-0 z-50 w-full bg-[#969696] border-b border-[#969696]/30 pb-2.5 px-2 sm:px-4 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md"
        style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 14px)" }}
      >
        {/* Sparkle Overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <Sparkles 
            className="absolute left-[3%] sm:left-[8%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white animate-pulse" 
            strokeWidth={1.5}
          />
          <Sparkles 
            className="absolute right-[3%] sm:right-[8%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white animate-pulse" 
            strokeWidth={1.5}
          />
        </div>

        {/* Ultra-Clean Single-Line Headline */}
        <div className="relative z-10 flex items-center justify-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[#000000] text-[11px] sm:text-[12px] font-bold tracking-tight text-center leading-none">
            {/* Lock Icon */}
            <Lock className="w-3.5 h-3.5 text-[#000000] shrink-0" strokeWidth={2.5} />

            <span className="whitespace-nowrap">Your spot is reserved for:</span>
            
            {/* Dark Red Countdown Pill */}
            <span className="inline-flex items-center gap-1 bg-[#111111] text-red-400 px-2 py-0.5 rounded-md font-mono text-[11px] sm:text-[12px] font-bold shadow-sm shrink-0">
              <Clock className="w-3 h-3 text-red-400 animate-pulse" />
              <span>{formatTime(timeLeft)}</span>
            </span>

            {/* Separator Bullet */}
            <span className="text-black/40 font-normal select-none">•</span>

            {/* Social Proof Text */}
            <span className="font-semibold text-black/90 whitespace-nowrap">
              1,400+ verified today
            </span>
          </div>
        </div>

        {/* Shimmer Bottom Border */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffffff] to-transparent w-full opacity-50 overflow-hidden">
          <div className="absolute inset-0 bg-white/20 animate-shine"></div>
        </div>
      </div>

      {/* Floating Bottom-Left Social Proof Toast (Non-Intrusive) */}
      {currentNotif && (
        <div
          className={`fixed bottom-4 left-3 right-3 sm:left-4 sm:right-auto z-[9999] max-w-sm flex items-center gap-2.5 rounded-xl border-l-[4px] border-[#10B981] bg-white/95 backdrop-blur-md px-3.5 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-300 ease-in-out ${
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
