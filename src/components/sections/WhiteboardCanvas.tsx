import React from 'react';
import { motion } from 'motion/react';

export default function WhiteboardCanvas() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      className="mt-24 relative max-w-5xl mx-auto h-[350px] md:h-[450px] rounded-[2rem] border border-white/15 bg-[#141414] shadow-2xl overflow-hidden flex items-center justify-center group"
    >
      {/* Subtle glowing orb behind canvas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#e8705b]/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

      {/* Mock Window Header */}
      <div className="absolute top-0 left-0 w-full h-10 border-b border-white/5 bg-[#1a1a1a]/80 backdrop-blur-md flex items-center px-4 z-20">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="mx-auto text-xs font-medium text-white/40 tracking-wider">Clarifyed Whiteboard Space</div>
      </div>

      {/* Toolbar Sidebar */}
      <div className="absolute left-4 top-16 bottom-4 w-12 rounded-xl bg-[#1a1a1a]/80 backdrop-blur-md border border-white/5 flex flex-col items-center py-4 gap-4 z-20">
        {/* Mock tools */}
        <div className="w-6 h-6 rounded bg-[#e8705b]/20 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e8705b" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
        </div>
        <div className="w-6 h-6 rounded hover:bg-white/5 flex items-center justify-center transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
        </div>
        <div className="w-6 h-6 rounded hover:bg-white/5 flex items-center justify-center transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
        </div>
      </div>

      {/* Dot Grid Background */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />

      {/* SVG Educational Content Container */}
      <div className="w-full h-full relative mt-10 ml-16 z-10">
        <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Group 1: Quadratic Equations */}
          <motion.g
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 1, 0, 0, 1] }}
            transition={{ duration: 15, repeat: Infinity, times: [0, 0.45, 0.5, 0.95, 1], ease: "linear" }}
          >
            {/* Equation text */}
            <motion.text
              x="60" y="50"
              fill="#f4f4f0"
              fontSize="20"
              fontFamily="math, serif"
              fontStyle="italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 14 }}
            >
              f(x) = ax² + bx + c
            </motion.text>

            {/* AI Writing Simulation - Underline */}
            <motion.line
              x1="55" y1="60" x2="220" y2="60"
              stroke="#e8705b"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatDelay: 14.2 }}
            />

            {/* Parabola curve */}
            <motion.path
              d="M 80 280 Q 110 240 140 190 Q 170 140 200 120 Q 230 100 260 120 Q 290 140 320 190 Q 350 240 380 280"
              stroke="#e8705b"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 13 }}
            />

            {/* Axes */}
            <motion.line
              x1="40" y1="280" x2="420" y2="280"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1, repeat: Infinity, repeatDelay: 14 }}
            />
            <motion.line
              x1="230" y1="310" x2="230" y2="40"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1, repeat: Infinity, repeatDelay: 14 }}
            />

            {/* Axis labels */}
            <motion.text x="415" y="300" fill="rgba(255,255,255,0.5)" fontSize="14" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.5, repeat: Infinity, repeatDelay: 14.5 }}>x</motion.text>
            <motion.text x="240" y="50" fill="rgba(255,255,255,0.5)" fontSize="14" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.5, repeat: Infinity, repeatDelay: 14.5 }}>y</motion.text>

            {/* Vertex annotation text */}
            <motion.text
              x="260" y="105"
              fill="#8ebf9e"
              fontSize="14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3, repeat: Infinity, repeatDelay: 14.5 }}
            >
              vertex (-b/2a, f(-b/2a))
            </motion.text>
            
            {/* Vertex Point */}
            <motion.circle
              cx="230" cy="110" r="4"
              fill="#8ebf9e"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 2.8, type: "spring", stiffness: 200, repeat: Infinity, repeatDelay: 14.7 }}
            />

            {/* Student correction marker */}
            <motion.path
                d="M 120 160 L 140 180 M 140 160 L 120 180"
                stroke="#ff5f56"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 4.5, repeat: Infinity, repeatDelay: 14.7 }}
            />
            <motion.text
              x="90" y="150"
              fill="#ff5f56"
              fontSize="12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 4.8, repeat: Infinity, repeatDelay: 14.5 }}
            >
              Watch intercept!
            </motion.text>
          </motion.g>

          {/* Group 2: Right Triangle / Physics */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{ duration: 15, repeat: Infinity, times: [0, 0.45, 0.5, 0.95, 1], ease: "linear" }}
          >
             {/* Right Triangle */}
             <motion.path
                d="M 450 250 L 650 250 L 650 100 Z"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="2"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 8, ease: "easeInOut", repeat: Infinity, repeatDelay: 13.5 }}
              />

              {/* Right angle square */}
              <motion.path
                d="M 630 250 L 630 230 L 650 230"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, delay: 9.5, repeat: Infinity, repeatDelay: 14.6 }}
              />

              {/* Labels */}
              <motion.text x="540" y="270" fill="rgba(255,255,255,0.6)" fontSize="16" fontStyle="italic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 9.2, duration: 0.5, repeat: Infinity, repeatDelay: 14.5 }}>a</motion.text>
              <motion.text x="665" y="180" fill="rgba(255,255,255,0.6)" fontSize="16" fontStyle="italic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 9.2, duration: 0.5, repeat: Infinity, repeatDelay: 14.5 }}>b</motion.text>
              <motion.text x="525" y="160" fill="#e8705b" fontSize="16" fontStyle="italic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 9.2, duration: 0.5, repeat: Infinity, repeatDelay: 14.5 }}>c</motion.text>

              {/* Pythagorean theorem equation */}
              <motion.text
                x="450" y="60"
                fill="#f4f4f0"
                fontSize="18"
                fontFamily="math, serif"
                fontStyle="italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 1, delay: 10, repeat: Infinity, repeatDelay: 14 }}
              >
                a² + b² = c²
              </motion.text>

              <motion.text
                x="450" y="85"
                fill="#8ebf9e"
                fontSize="14"
                fontFamily="math, serif"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 1, delay: 11, repeat: Infinity, repeatDelay: 14 }}
              >
                Therefore, c = √(a² + b²)
              </motion.text>
          </motion.g>
        </svg>

        {/* Animated Cursors */}
        {/* AI Tutor Cursor */}
        <motion.div
          animate={{
            x: [0, 160, 260, 230, 100, 480, 500, 0],
            y: [0, 100, 60, -10, 40, 20, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] flex items-center gap-1.5 z-20 pointer-events-none filter drop-shadow-xl"
        >
          <svg width="18" height="22" viewBox="0 0 14 18" fill="#e8705b" className="relative -top-1 -left-1">
            <path d="M0 0 L14 10 L6 10 L8 18 L5 18 L3 10 L0 13 Z" stroke="white" strokeWidth="1" strokeLinejoin="round" />
          </svg>
          <span className="text-[10px] md:text-xs bg-[#e8705b] text-white px-2 py-0.5 rounded-full whitespace-nowrap shadow-lg font-medium tracking-wide">AI Tutor</span>
        </motion.div>

        {/* Student Cursor */}
        <motion.div
          animate={{
            x: [400, 200, 100, 120, 500, 600, 400],
            y: [200, 250, 100, 140, 200, 150, 200]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] left-[30%] flex items-center gap-1.5 z-20 pointer-events-none filter drop-shadow-xl"
        >
          <svg width="18" height="22" viewBox="0 0 14 18" fill="#8ebf9e" className="relative -top-1 -left-1">
            <path d="M0 0 L14 10 L6 10 L8 18 L5 18 L3 10 L0 13 Z" stroke="white" strokeWidth="1" strokeLinejoin="round" />
          </svg>
          <span className="text-[10px] md:text-xs bg-[#8ebf9e] text-[#1a1a1a] px-2 py-0.5 rounded-full whitespace-nowrap shadow-lg font-medium tracking-wide">Student 1</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
