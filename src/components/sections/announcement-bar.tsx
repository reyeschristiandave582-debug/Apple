"use client";

import React, { useEffect, useState } from "react";
import { Lock, Sparkles, Check } from "lucide-react";

interface NotificationItem {
  name: string;
  action: string;
}

const notifications: NotificationItem[] = [
  { name: "Richard L.", action: "just claimed a $1000 Apple coupon!" },
  { name: "Sarah M.", action: "just claimed a $1000 Apple gift card!" },
  { name: "David K.", action: "just unlocked reward eligibility!" },
  { name: "Amanda T.", action: "just claimed a $500 Amazon gift card!" },
  { name: "Michael B.", action: "just completed the review survey!" },
  { name: "Jessica W.", action: "just claimed a $1000 Apple coupon!" },
  { name: "James P.", action: "just verified eligibility!" },
  { name: "Emily R.", action: "just claimed a $1000 Apple gift card!" },
  { name: "Robert H.", action: "just claimed a $250 Walmart card!" },
  { name: "Ashley C.", action: "just unlocked reward eligibility!" },
  { name: "Brian G.", action: "just completed the review survey!" },
  { name: "Megan S.", action: "just claimed a $1000 Apple coupon!" },
  { name: "Christopher D.", action: "just claimed a $500 Amazon gift card!" },
  { name: "Hannah K.", action: "just verified eligibility!" },
  { name: "Joshua L.", action: "just claimed a $1000 Apple gift card!" },
  { name: "Rachel E.", action: "just claimed a $250 Walmart card!" },
  { name: "Matthew V.", action: "just unlocked reward eligibility!" },
  { name: "Samantha N.", action: "just completed the review survey!" },
  { name: "Andrew F.", action: "just claimed a $1000 Apple coupon!" },
  { name: "Nicole B.", action: "just claimed a $500 Amazon gift card!" },
  { name: "Daniel R.", action: "just verified eligibility!" },
  { name: "Lauren M.", action: "just claimed a $1000 Apple gift card!" },
  { name: "Kevin P.", action: "just claimed a $1000 Apple coupon!" },
  { name: "Victoria S.", action: "just verified eligibility!" },
  { name: "Brandon T.", action: "just completed the review survey!" },
  { name: "Stephanie H.", action: "just claimed a $1000 Apple gift card!" },
  { name: "Justin A.", action: "just unlocked reward eligibility!" },
  { name: "Brittany D.", action: "just claimed a $1000 Apple coupon!" },
  { name: "Tyler G.", action: "just claimed a $500 Amazon gift card!" },
  { name: "Alyssa C.", action: "just verified eligibility!" },
];

/**
 * AnnouncementBar Component
 * 
 * A sticky top bar combining 256-Bit SSL encryption trust with live participation social proof
 * and dynamic floating social proof toast notifications.
 */
const AnnouncementBar = () => {
  const [currentNotif, setCurrentNotif] = useState<NotificationItem | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

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

    // Trigger initial notification after 2 seconds
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
      {/* Top Banner Bar */}
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

      {/* Floating Live Social Proof Notification */}
      {currentNotif && (
        <div
          className={`fixed top-4 right-4 z-[9999] flex items-center gap-3 rounded-2xl border-l-[6px] border-[#d30000] bg-white px-4 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-500 ease-in-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-6 opacity-0 pointer-events-none"
          }`}
        >
          {/* Checkmark Icon Circle */}
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d30000] text-white">
            <Check className="w-4 h-4" strokeWidth={3} />
          </div>

          {/* Notification Text */}
          <div className="text-xs sm:text-sm text-[#333333]">
            <span className="font-bold">{currentNotif.name} </span>
            <span>{currentNotif.action}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default AnnouncementBar;
