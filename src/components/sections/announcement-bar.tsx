"use client";

import React, { useEffect, useState } from "react";
import { Lock, Sparkles, Check } from "lucide-react";

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
          className={`fixed top-4 right-4 z-[9999] flex items-center gap-3 rounded-2xl border-l-[6px] border-[#10B981] bg-white px-4 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-500 ease-in-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-6 opacity-0 pointer-events-none"
          }`}
        >
          {/* Green Checkmark Circle */}
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-white">
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
