import React from 'react';
import { Star, Sparkles, Heart, Gift } from 'lucide-react';
import Image from 'next/image';

const AnimatedBackground = () => {
  return (
    <>
      {/* Radial Mask to keep content center crystal clear */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 45%, rgba(255,255,255,0) 80%)'
        }}
      />

      {/* Vector Icon Accent Overlays */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10 z-0">
        <Heart className="absolute top-16 left-3 w-6 h-6 text-green-500 animate-rotate-slow" />
        <Star className="absolute top-44 left-4 w-6 h-6 text-yellow-500 animate-float-spin" />
        <Sparkles className="absolute top-28 right-4 w-6 h-6 text-yellow-500 animate-twinkle" />
        <Gift className="absolute bottom-36 left-4 w-6 h-6 text-green-500 animate-rotate-reverse" />
        <Star className="absolute bottom-52 right-4 w-6 h-6 text-yellow-500 animate-float-gentle" />
        <Heart className="absolute top-[60%] left-2 w-6 h-6 text-green-500 animate-rotate-slow" />
        <Sparkles className="absolute top-[40%] right-3 w-6 h-6 text-yellow-500 animate-float-spin" />
      </div>

      {/* Product & Graphic Image Accent Overlays (Sephora Specific Assets) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.08] z-0">
        <Image
          src="https://i.imgur.com/WyguY7V.png"
          alt=""
          width={100}
          height={100}
          quality={100}
          className="absolute top-12 left-2 w-14 h-14 object-contain animate-float-gentle delay-1000"
        />
        <Image
          src="https://i.imgur.com/K38Fcjd.png"
          alt=""
          width={160}
          height={160}
          quality={100}
          className="absolute top-24 right-2 w-16 h-16 object-contain animate-float-gentle"
        />
        <Image
          src="https://i.imgur.com/7Ni7oOc.png"
          alt=""
          width={160}
          height={160}
          quality={100}
          className="absolute top-[42%] left-2 w-16 h-16 object-contain animate-float-gentle"
        />
        <Image
          src="https://i.imgur.com/2dGIWwB.png"
          alt=""
          width={160}
          height={160}
          quality={100}
          className="absolute top-[78%] right-2 w-16 h-16 object-contain animate-float-gentle"
        />
        <Image
          src="https://i.imgur.com/4p9VUYh.png"
          alt=""
          width={160}
          height={160}
          quality={100}
          className="absolute bottom-20 left-3 w-16 h-16 object-contain animate-float-gentle"
        />
        <Image
          src="https://i.imgur.com/wBDFHJB.png"
          alt=""
          width={80}
          height={80}
          quality={100}
          className="absolute bottom-12 right-3 w-14 h-14 object-contain animate-float-gentle"
        />
      </div>
    </>
  );
};

export default AnimatedBackground;
