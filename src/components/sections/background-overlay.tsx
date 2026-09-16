import React from 'react';
import { Star, Sparkles, Heart, Gift } from 'lucide-react';
import Image from 'next/image';

const AnimatedBackground = () => {
  return (
    <>
      {/* 
         POLISH IDEA: CONTENT MASK
         A fixed gradient overlay placed behind your main content wrapper
         (but above the background graphics) to create a clean white space.
         This prevents background icons from bleeding through text.
      */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0) 70%)'
        }}
      />

      {/* Icon Overlays (Vector icons from lucide-react) */}
      {/* I updated colors to use softer tones, adjust to your preference */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-25 z-1">
        <Heart className="absolute top-20 left-10 w-8 h-8 text-premium-green animate-rotate-slow" />
        <Star className="absolute top-40 left-10 w-8 h-8 text-premium-gold animate-float-spin" />
        <Sparkles className="absolute top-32 right-16 w-8 h-8 text-premium-gold animate-twinkle" />
        <Gift className="absolute bottom-40 left-16 w-8 h-8 text-premium-green animate-rotate-reverse" />
        <Star className="absolute bottom-60 right-20 w-8 h-8 text-premium-gold animate-float-gentle" />
        <Heart className="absolute top-[55%] left-8 w-8 h-8 text-premium-green animate-rotate-slow" />
        <Sparkles className="absolute top-[35%] right-12 w-8 h-8 text-premium-gold animate-float-spin" />
      </div>

      {/* Image Overlays (PNG graphics from Imgur) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15 z-1">
          <Image
            src="https://i.imgur.com/UwYPb2o.png"
            alt=""
            width={100}
            height={100}
            quality={100} // Added for maximum crispness
            className="absolute top-20 left-10 w-17 h-17 object-contain animate-float-gentle delay-1000"
          />
          <Image
            src="https://i.imgur.com/daAxfJh.png"
            alt=""
            width={160}
            height={160}
            quality={100}
            className="absolute top-32 right-10 w-20 h-20 object-contain animate-float-gentle"
          />
          <Image
            src="https://i.imgur.com/Er9dpWg.png"
            alt=""
            width={160}
            height={160}
            quality={100}
            className="absolute top-[35%] left-20 w-20 h-20 object-contain animate-float-gentle"
          />
          {/* Changed top-1/1 to top-[85%] to prevent overflow issues */}
          <Image
            src="https://i.imgur.com/m8x2qOs.png"
            alt=""
            width={160}
            height={160}
            quality={100}
            className="absolute top-[85%] right-24 w-20 h-20 object-contain animate-float-gentle"
          />
          <Image
            src="https://i.imgur.com/taIMznS.png"
            alt=""
            width={160}
            height={160}
            quality={100}
            className="absolute bottom-40 left-16 w-20 h-20 object-contain animate-float-gentle"
          />
          <Image
            src="https://i.imgur.com/2QMVnFN.png"
            alt=""
            width={80}
            height={80}
            quality={100}
            className="absolute bottom-32 right-20 w-20 h-20 object-contain animate-float-gentle"
          />
      </div>
    </>
  );
};

export default AnimatedBackground;
