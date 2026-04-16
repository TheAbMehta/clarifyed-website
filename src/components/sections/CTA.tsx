import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function CTA() {
  const ctaRef = useRef<HTMLElement>(null);
  const { scrollYProgress: ctaScrollProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });

  const ballX = useTransform(ctaScrollProgress, (p) => {
    const progress = Math.max(0, Math.min(1, (p - 0.2) / 0.6));
    const angle = progress * Math.PI * 8; // 4 rotations
    const radius = 550 * (1 - progress);
    return 600 + radius * Math.cos(angle);
  });

  const ballY = useTransform(ctaScrollProgress, (p) => {
    const progress = Math.max(0, Math.min(1, (p - 0.2) / 0.6));
    const angle = progress * Math.PI * 8;
    const radius = 180 * (1 - progress);
    // Add a slight dip to the Y position to match the curved lines
    const dip = 60 * Math.sin(progress * Math.PI);
    return 250 + radius * Math.sin(angle) + dip * (1 - progress);
  });

  const ballRadius = useTransform(ctaScrollProgress, (p) => {
    const progress = Math.max(0, Math.min(1, (p - 0.2) / 0.6));
    return 15 * (1 - progress) + 2;
  });

  return (
    <section ref={ctaRef} id="contact" className="bg-[#e8705b] pt-20 md:pt-32 pb-32 md:pb-64 px-6 text-center relative overflow-hidden flex flex-col items-center justify-start min-h-[70vh] md:min-h-[90vh]">
      <div className="relative z-10 mb-24">
        <h2 className="text-5xl md:text-7xl font-medium text-[#1a1a1a] mb-6">
          Built to fit today.<br/>Ready for tomorrow
        </h2>
        <p className="text-xl text-[#1a1a1a]/80 max-w-2xl mx-auto mb-10">
          The best teacher you ever had, available anytime. Start learning on the whiteboard today.
        </p>
        <button className="px-8 py-4 rounded-full text-lg bg-[#9ca3af] text-[#1a1a1a] font-medium hover:bg-[#8b929e] transition-all">
          Get Started
        </button>
      </div>
      
      {/* Gravity well graphic */}
      <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[500px] opacity-40 pointer-events-none hidden md:block">
        <svg viewBox="0 0 1200 500" fill="none">
          {/* Concentric ellipses getting denser at the center */}
          <ellipse cx="600" cy="250" rx="550" ry="180" stroke="#1a1a1a" strokeWidth="1" />
          <ellipse cx="600" cy="250" rx="450" ry="145" stroke="#1a1a1a" strokeWidth="1" />
          <ellipse cx="600" cy="250" rx="350" ry="110" stroke="#1a1a1a" strokeWidth="1" />
          <ellipse cx="600" cy="250" rx="250" ry="75" stroke="#1a1a1a" strokeWidth="1" />
          <ellipse cx="600" cy="250" rx="150" ry="40" stroke="#1a1a1a" strokeWidth="1" />
          <ellipse cx="600" cy="250" rx="80" ry="18" stroke="#1a1a1a" strokeWidth="1" />
          <ellipse cx="600" cy="250" rx="30" ry="5" stroke="#1a1a1a" strokeWidth="1" />
          
          {/* Radial lines curving into the center */}
          {Array.from({length: 16}).map((_, i) => {
            const angle = (i * Math.PI) / 8;
            const startX = 600 + 550 * Math.cos(angle);
            const startY = 250 + 180 * Math.sin(angle);
            const endX = 600 + 30 * Math.cos(angle);
            const endY = 250 + 5 * Math.sin(angle);
            // Draw a curve that dips down slightly to create the gravity well effect
            const cpX = 600 + 200 * Math.cos(angle);
            const cpY = 250 + 100 * Math.sin(angle) + 60; // Add Y offset for the dip
            
            return (
              <path 
                key={i} 
                d={`M ${startX} ${startY} Q ${cpX} ${cpY} ${endX} ${endY}`} 
                stroke="#1a1a1a" 
                strokeWidth="1" 
              />
            );
          })}
          <motion.circle 
            cx={ballX} 
            cy={ballY} 
            r={ballRadius} 
            fill="white" 
            className="shadow-[0_0_30px_white]" 
          />
        </svg>
      </div>
    </section>
  );
}
