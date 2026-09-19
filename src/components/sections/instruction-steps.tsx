"use client";

import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface Step {
  number: number;
  title: string;
  subtitle: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Start the review",
    subtitle: "Tap the button below to begin",
  },
  {
    number: 2,
    title: "Enter basic details",
    subtitle: "Valid name and email required",
  },
  {
    number: 3,
    title: "Complete the short survey",
    subtitle: "Answer a few quick questions",
  },
  {
    number: 4,
    title: "Review available partner offers",
    subtitle: "Complete 3 to 5 required deals",
  },
  {
    number: 5,
    title: "Check your reward eligibility",
    subtitle: "Receive your $1000 Apple reward once verified",
  },
];

export default function InstructionSteps() {
  return (
    <section className="relative w-full max-w-md mx-auto px-4 sm:px-5 mb-6 mt-3">
      {/* Steps Card Wrapper */}
      <div className="relative rounded-[1.5rem] sm:rounded-[2rem] p-3.5 sm:p-5 bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-xl overflow-hidden transition-all duration-300">
        {/* Decorative Background Texture */}
        <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden pointer-events-none">
          <img
            src="https://i.imgur.com/OnQ1OUT.png"
            alt=""
            className="w-full h-full object-cover opacity-5"
          />
        </div>

        {/* Dynamic Step List */}
        <div className="relative z-10 space-y-2.5 sm:space-y-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-3 group/item animate-in fade-in slide-in-from-left duration-500 fill-mode-both"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Number Badge */}
              <div className="relative flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-black text-white font-bold text-xs sm:text-sm shadow-md group-hover/item:scale-105 transition-transform duration-200 mt-0.5">
                {step.number}
              </div>

              {/* Step Title & Subtext */}
              <div className="flex-1 border-b border-gray-100 pb-2.5 last:border-0 last:pb-0">
                <p className="text-gray-900 text-[13px] sm:text-[14px] font-bold tracking-tight leading-snug">
                  {step.title}
                </p>
                <p className="text-gray-500 text-[11px] sm:text-[12px] font-medium leading-tight mt-0.5">
                  {step.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* High-Converting Primary CTA Button */}
        <div className="relative z-10 mt-5 pt-2">
          <button
            type="button"
            onClick={() => {
              // Action handler or navigation logic
            }}
            className="w-full relative group overflow-hidden flex items-center justify-center gap-2 bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.98] text-white font-bold text-base sm:text-lg py-3.5 px-6 rounded-2xl shadow-lg shadow-[#0071E3]/25 transition-all duration-200 cursor-pointer"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -left-full group-hover:animate-shine" />

            <span>START REVIEW</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </button>

          {/* Trust Micro-Copy below CTA */}
          <div className="flex items-center justify-center gap-1.5 mt-2.5 text-[10px] sm:text-[11px] text-gray-500 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>No purchase required &bull; Eligibility terms apply</span>
          </div>
        </div>
      </div>
    </section>
  );
}
