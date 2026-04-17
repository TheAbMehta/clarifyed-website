import React from 'react';
import { motion } from 'motion/react';

export default function Assessment() {
  return (
    <section className="grid md:grid-cols-2 min-h-[600px]">
      <div className="bg-[#e8705b] relative overflow-hidden flex items-center justify-center p-12">
         {/* Complex wireframe graphic */}
         <motion.svg 
           animate={{ rotate: 360 }}
           transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
           className="w-full max-w-md opacity-80" viewBox="0 0 400 400" fill="none"
         >
           {Array.from({length: 6}).map((_, i) => (
             <ellipse key={i} cx="200" cy="200" rx={80 + i * 20} ry="180" transform={`rotate(${i * 30} 200 200)`} stroke="white" strokeWidth="1" />
           ))}
           <circle cx="120" cy="150" r="8" fill="#3b82f6" />
           <circle cx="280" cy="200" r="8" fill="#10b981" />
         </motion.svg>
      </div>
      <div className="bg-[#9ca3af] p-16 md:p-24 flex flex-col justify-center">
        <h2 className="text-5xl md:text-6xl font-medium text-[#1a1a1a] mb-8 leading-tight">
          Assessment That<br/>Truly Understands
        </h2>
        <p className="text-xl text-[#1a1a1a]/80 max-w-md leading-relaxed">
          100% coverage of every concept. Real-time misconception detection. Spaced repetition woven naturally into every lesson — no flashcard decks needed.
        </p>
      </div>
    </section>
  );
}
