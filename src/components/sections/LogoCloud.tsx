import React from 'react';
import { motion } from 'motion/react';

export default function LogoCloud() {
  return (
    <section className="border-t border-white/10 py-12 relative z-10 bg-[#1a1a1a] overflow-hidden">
      <div className="flex whitespace-nowrap relative">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-16 px-8 grayscale opacity-50"
        >
          {/* First Set */}
          <span className="text-2xl font-bold tracking-tighter">TechCrunch</span>
          <span className="text-xl font-semibold flex items-center gap-1"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z"/></svg> EdSurge</span>
          <span className="text-2xl font-light tracking-widest">PRODUCT HUNT</span>
          <span className="text-2xl font-serif italic">Forbes Education</span>
          <span className="text-xl font-medium flex items-center gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg> MIT Tech Review</span>
          <div className="flex gap-2">
            <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-xs">YC</span>
            <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-xs">TC</span>
          </div>
          <span className="text-2xl font-bold tracking-tighter">TechCrunch</span>
          <span className="text-2xl font-light tracking-widest">PRODUCT HUNT</span>

          {/* Duplicate Set for Seamless Loop */}
          <span className="text-2xl font-bold tracking-tighter">TechCrunch</span>
          <span className="text-xl font-semibold flex items-center gap-1"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z"/></svg> EdSurge</span>
          <span className="text-2xl font-light tracking-widest">PRODUCT HUNT</span>
          <span className="text-2xl font-serif italic">Forbes Education</span>
          <span className="text-xl font-medium flex items-center gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg> MIT Tech Review</span>
          <div className="flex gap-2">
            <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-xs">YC</span>
            <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-xs">TC</span>
          </div>
          <span className="text-2xl font-bold tracking-tighter">TechCrunch</span>
          <span className="text-2xl font-light tracking-widest">PRODUCT HUNT</span>
        </motion.div>
      </div>
      {/* Gradient Masks for smooth fade on edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10"></div>
    </section>
  );
}
