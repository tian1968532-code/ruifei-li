/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

// 1. Web Design Mockup (Browser with Yellow Pointer, matches Card 1)
export const WebDesignMockup: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-full aspect-[4/3] bg-[#EFEFEF] rounded-t-3xl border-b-2 border-black/10 p-5 flex flex-col justify-start select-none overflow-hidden ${className}`}>
      {/* Browser Window Header */}
      <div className="w-full bg-white border-4 border-black rounded-2xl p-4 flex flex-col gap-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
        {/* Browser Top Controls */}
        <div className="flex items-center gap-1.5 border-b-2 border-black/15 pb-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5A5F] border border-black/30"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFB800] border border-black/30"></div>
          <div className="w-3 h-3 rounded-full bg-[#4ADE80] border border-black/30"></div>
          <div className="h-2 w-24 bg-gray-100 rounded-full ml-3"></div>
        </div>

        {/* Browser Body Mock */}
        <div className="grid grid-cols-12 gap-3 pt-1">
          {/* Left panel */}
          <div className="col-span-7 flex flex-col gap-2.5">
            <div className="h-3 w-11/12 bg-black rounded-sm"></div>
            <div className="h-1.5 w-4/5 bg-gray-300 rounded-sm"></div>
            <div className="h-1.5 w-2/3 bg-gray-300 rounded-sm"></div>
            <div className="h-4 w-12 bg-black rounded-md mt-1"></div>
          </div>

          {/* Right selected container */}
          <div className="col-span-5 relative">
            <div className="w-full aspect-square bg-[#3B82F6] border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex items-center justify-center">
              <div className="w-3/4 h-3/4 border-2 border-dashed border-white/50 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Browser Footer layout details */}
        <div className="grid grid-cols-3 gap-3 pt-3 border-t-2 border-black/10 mt-1">
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-4 h-4 rounded-full border-2 border-black flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            </div>
            <div className="h-1.5 w-10 bg-black rounded-sm"></div>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-[#3B82F6] border-2 border-black"></div>
            <div className="h-1.5 w-10 bg-black rounded-sm"></div>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-4 h-4 rounded-full border-2 border-black"></div>
            <div className="h-1.5 w-10 bg-black rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Floating Yellow Designer Pointer Cursor (Matches Image 1 exactly!) */}
      <div className="absolute right-3 bottom-8 xl:right-6 xl:bottom-12 z-20 pointer-events-none transform rotate-[80deg] scale-110 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 3V20L10.5 14L18.5 19L21 15L13.5 10.5L19.5 4.5H4.5Z" fill="#FFC043" stroke="black" strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

// 2. UI/UX Design Mockup (Mobile phone with measuring boxes, matches Card 2)
export const UIUXDesignMockup: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-full aspect-[4/3] bg-[#EFEFEF] rounded-t-3xl border-b-2 border-black/10 p-5 flex items-center justify-center select-none overflow-hidden ${className}`}>
      {/* Outer bounding box anchors (Matches Image 1 Center card with blue corner points) */}
      <div className="absolute top-4 bottom-4 left-8 right-8 border border-black/20 pointer-events-none">
        <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 bg-[#4F46E5] border-2 border-black rounded-xs shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]"></div>
        <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#4F46E5] border-2 border-black rounded-xs shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]"></div>
        <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 bg-[#4F46E5] border-2 border-black rounded-xs shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]"></div>
        <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 bg-[#4F46E5] border-2 border-black rounded-xs shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]"></div>
      </div>

      {/* Mobile Device Container */}
      <div className="w-[150px] sm:w-[170px] aspect-[9/18] bg-white border-4 border-black rounded-[28px] p-2.5 flex flex-col justify-start shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative">
        {/* Notch Area */}
        <div className="w-16 h-4 bg-black rounded-b-lg mx-auto top-0 left-1/2 -translate-x-1/2 absolute flex items-center justify-center gap-1 px-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B]"></div>
          <div className="w-4 h-1 bg-gray-600 rounded-full"></div>
        </div>

        {/* Screen layout mockup */}
        <div className="flex flex-col gap-2 pt-4 h-full">
          {/* Top content bar */}
          <div className="flex justify-between items-center-center px-1">
            <div className="h-1.5 w-6 bg-black rounded-full"></div>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            </div>
          </div>

          {/* Floating Pink Banner Card (Matches Image 1 center card floating card) */}
          <div className="w-full bg-[#FF6B6B] border-3 border-black rounded-xl p-2.5 mt-1 shadow-[2.5px_2.5px_0px_rgba(0,0,0,1)] flex items-center justify-center text-white font-extrabold text-[10px]">
            <div className="h-4 w-full bg-white/20 rounded-md"></div>
          </div>

          {/* Mobile Grid */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            {/* Grid item 1 with active Plus icon */}
            <div className="aspect-square border-3 border-black rounded-xl bg-white flex items-center justify-center hover:bg-red-50 transition-colors shadow-[2px_2px_0px_rgba(0,0,0,1)] relative">
              <div className="w-6 h-6 rounded-full bg-[#FF6B6B] border-2 border-black flex items-center justify-center text-white font-black text-xs">+</div>
            </div>
            {/* Grid item 2 */}
            <div className="aspect-square border-3 border-black rounded-xl bg-white/50 border-dashed"></div>
          </div>

          {/* Bottom navigation bar indicator */}
          <div className="mt-auto h-2.5 w-18 bg-black rounded-full mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

// 3. Product Design Mockup (Smartwatch + Ruler, matches Card 3)
export const ProductDesignMockup: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-full aspect-[4/3] bg-[#EFEFEF] rounded-t-3xl border-b-2 border-black/10 p-5 flex items-center justify-center gap-4 select-none overflow-hidden ${className}`}>
      {/* Smartwatch container */}
      <div className="relative flex flex-col items-center">
        {/* Watch upper strap link */}
        <div className="w-14 h-8 bg-black border-4 border-black rounded-t-xl -mb-1 shadow-[2.5px_0px_0px_rgba(0,0,0,1)]"></div>

        {/* Sizable Watch body */}
        <div className="w-[120px] aspect-square bg-white border-4 border-black rounded-[36px] flex flex-col items-center justify-center p-3 relative shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] z-10 hover:scale-105 transition-transform">
          {/* Smart indicator (green dot + stroke, matches Image 1 Card 3) */}
          <div className="absolute top-4 left-4 flex gap-1 items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] animate-pulse"></div>
            <div className="h-1 w-6 bg-black rounded-sm"></div>
          </div>

          {/* Watch central widget - green box interface */}
          <div className="w-5/6 h-1/2 bg-[#4ADE80]/15 border-3 border-[#4ADE80] rounded-2xl flex items-center justify-center relative overflow-hidden mt-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#4ADE80]/10 to-transparent"></div>
            <div className="w-4/5 h-3/5 bg-[#4ADE80] border-3 border-black rounded-xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"></div>
          </div>

          {/* Watch details below */}
          <div className="flex flex-col items-center gap-1.5 mt-2.5 w-full">
            <div className="h-1.5 w-1/3 bg-black rounded-md"></div>
            <div className="h-1 w-1/2 bg-gray-300 rounded-md"></div>
          </div>
        </div>

        {/* Watch lower strap link */}
        <div className="w-14 h-8 bg-black border-4 border-black rounded-b-xl -mt-1 shadow-[2.5px_0px_0px_rgba(0,0,0,1)]"></div>
      </div>

      {/* Vertical Physical Designer Measuring Ruler (Matches Image 1 Card 3 right side!) */}
      <div className="w-[44px] h-[160px] bg-white border-4 border-black rounded-2xl p-1.5 flex flex-col justify-between items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {/* Ruler segments */}
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-full flex justify-end items-center gap-1.5 pr-1">
            <div className={`h-[2px] bg-black ${i % 2 === 0 ? 'w-full' : 'w-2/3'}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 4. Custom Cartoon Avatar Portrait in Yellow Rounded Card (From Hero Section - Image 3)
export const CartoonAvatarHero: React.FC<{ mood?: string; className?: string }> = ({ mood = "creative", className = "" }) => {
  return (
    <div className={`aspect-square w-full rounded-[36px] bg-[#FFC043]/90 border-4 border-black p-6 flex items-center justify-center shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative select-none overflow-hidden ${className}`}>
      {/* Absolute layout grid lines or dots patterns behind the character */}
      <div className="absolute inset-0 opacity-10 flex flex-col justify-around py-3">
        <div className="w-screen border-b border-black"></div>
        <div className="w-screen border-b border-black"></div>
        <div className="w-screen border-b border-black"></div>
      </div>
      <div className="absolute inset-0 opacity-10 flex justify-around px-3">
        <div className="h-screen border-r border-black"></div>
        <div className="h-screen border-r border-black"></div>
        <div className="h-screen border-r border-black"></div>
      </div>

      {/* SVG Cartoon Character representing John Carter perfectly! */}
      <svg className="w-11/12 h-11/12 z-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* HAIR BACK */}
        <path d="M50 120C40 100 45 60 70 45C95 30 145 35 155 60C165 85 155 110 150 120" stroke="black" strokeWidth="5.5" fill="black" strokeLinecap="round" />

        {/* EARS */}
        <circle cx="50" cy="110" r="14" fill="#FFE5D9" stroke="black" strokeWidth="5" />
        <circle cx="50" cy="110" r="6" fill="#ECC8B5" />
        <circle cx="150" cy="110" r="14" fill="#FFE5D9" stroke="black" strokeWidth="5" />
        <circle cx="150" cy="110" r="6" fill="#ECC8B5" />

        {/* FACE / HEAD SKIN */}
        <path d="M55 100C55 70 65 65 100 65C135 65 145 70 145 100C145 135 130 155 100 155C70 155 55 135 55 100Z" fill="#FFE5D9" stroke="black" strokeWidth="5" />

        {/* EYES */}
        {/* Playful, cute cartoon eyes */}
        <ellipse cx="80" cy="98" rx="7" ry="9" fill="black" />
        <circle cx="78" cy="95" r="2.5" fill="white" />
        <ellipse cx="120" cy="98" rx="7" ry="9" fill="black" />
        <circle cx="118" cy="95" r="2.5" fill="white shadow" />

        {/* EYEBROWS */}
        <path d="M70 85C75 81 83 81 88 84" stroke="black" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <path d="M130 85C125 81 117 81 112 84" stroke="black" strokeWidth="4.5" strokeLinecap="round" fill="none" />

        {/* NOSE */}
        <path d="M96 95C96 112 104 112 104 95" stroke="black" strokeWidth="4" strokeLinecap="round" fill="none" />

        {/* BEARD WRAP AND MOUTH */}
        {/* Solid Beard background */}
        <path d="M55 110C55 135 60 155 100 155C140 155 145 135 145 110C145 125 140 144 100 144C60 144 55 125 55 110Z" fill="black" stroke="black" strokeWidth="4" />
        {/* Beard cheeks */}
        <path d="M55 108C55 125 70 144 100 144C130 144 145 125 145 108C145 120 135 132 100 132C65 132 55 120 55 108Z" fill="black" />
        
        {/* Smiling Mouth */}
        <path d="M85 115C85 127 115 127 115 115Z" fill="white" stroke="black" strokeWidth="4.5" strokeLinejoin="round" />

        {/* RED COLLAR & CLOTHES */}
        {/* Collar Neck */}
        <rect x="80" y="148" width="40" height="20" rx="10" fill="#FF6B6B" stroke="black" strokeWidth="5" />
        <line x1="100" y1="148" x2="100" y2="168" stroke="black" strokeWidth="3" />

        {/* Red Shirt Body under the neck */}
        <path d="M40 190C40 170 60 160 100 160C140 160 160 170 160 190" stroke="black" strokeWidth="5.5" fill="#FF5A5F" />
        
        {/* Cute Yellow Orange Dot-Prints on Clothes (Matches picture exactly!) */}
        <circle cx="65" cy="178" r="5" fill="#FFC043" stroke="black" strokeWidth="2" />
        <circle cx="100" cy="184" r="5" fill="#FFC043" stroke="black" strokeWidth="2" />
        <circle cx="135" cy="175" r="5" fill="#FFC043" stroke="black" strokeWidth="2" />
      </svg>
    </div>
  );
};

// 5. About Me Left Side Circle Avatar Portrait (Working on Laptop, From Image 2)
export const CartoonAvatarAbout: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative aspect-square w-full rounded-full bg-[#FF6B6B] border-4 border-black flex items-end justify-center shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden select-none ${className}`}>
      {/* Circle background with grid lines */}
      <div className="absolute inset-0 opacity-15 flex flex-col justify-around py-4">
        <div className="w-full border-b-2 border-black"></div>
        <div className="w-full border-b-2 border-black"></div>
      </div>

      {/* SVG vector representing image 2 (A cartoon character typing on computer) */}
      <svg className="w-4/5 h-4/5 z-10 translate-y-2 translate-x-3" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* character shirt sleeve */}
        <path d="M20 140C20 120 40 110 80 110C120 110 140 120 140 140" stroke="black" strokeWidth="5" fill="#FFC043" />
        {/* Shirt Orange dots */}
        <circle cx="45" cy="122" r="4" fill="#FF6B6B" stroke="black" strokeWidth="1.5" />
        <circle cx="80" cy="128" r="4" fill="#FF6B6B" stroke="black" strokeWidth="1.5" />
        <circle cx="115" cy="120" r="4" fill="#FF6B6B" stroke="black" strokeWidth="1.5" />

        {/* character neck collar */}
        <rect x="68" y="100" width="24" height="15" rx="6" fill="#FFC043" stroke="black" strokeWidth="4.5" />

        {/* character face skin */}
        <path d="M50 70C50 48 58 44 80 44C102 44 110 48 110 70C110 92 100 102 80 102C60 102 50 92 50 70Z" fill="#FFE5D9" stroke="black" strokeWidth="4.5" />

        {/* Hair */}
        <path d="M46 68C38 55 42 28 62 18C82 8 110 12 118 30C126 48 118 64 114 68" stroke="black" strokeWidth="5" fill="black" />

        {/* EYES */}
        <ellipse cx="68" cy="68" rx="5" ry="6" fill="black" />
        <circle cx="66" cy="66" r="1.5" fill="white" />
        <ellipse cx="92" cy="68" rx="5" ry="6" fill="black" />
        <circle cx="90" cy="66" r="1.5" fill="white" />

        {/* BEARD WRAP */}
        <path d="M50 76C50 92 54 102 80 102C106 102 110 92 110 76C110 86 106 96 80 96C54 96 50 86 50 76Z" fill="black" stroke="black" strokeWidth="4" />
        {/* smile */}
        <path d="M72 82C72 90 88 90 88 82Z" fill="white" stroke="black" strokeWidth="3" />

        {/* Hand typing on keyboard */}
        <path d="M120 145C110 145 105 135 110 125C115 115 130 115 135 125" stroke="black" strokeWidth="4.5" fill="#FFE5D9" />
        <rect x="112" y="128" width="18" height="6" rx="2" fill="#FFE5D9" stroke="black" strokeWidth="3" />
        <rect x="115" y="132" width="16" height="6" rx="2" fill="#FFE5D9" stroke="black" strokeWidth="3" />

        {/* Laptop */}
        {/* Laptop Body */}
        <path d="M140 105L190 105L195 145L135 145Z" fill="black" stroke="black" strokeWidth="4.5" strokeLinejoin="round" />
        {/* Laptop keyboard highlight line */}
        <line x1="145" y1="140" x2="185" y2="140" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
        {/* Laptop screen logo */}
        <circle cx="168" cy="122" r="5" fill="none" stroke="white" strokeWidth="3" />
      </svg>
    </div>
  );
};
