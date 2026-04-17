import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Architecture() {
  const architectureRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: architectureRef,
    offset: ["start end", "end start"]
  });
  
  const architectureY1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const architectureY2 = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={architectureRef} className="py-20 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div>
          <p className="text-[#a3a3a3] text-lg mb-4">AI-Generated Explainer Videos</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium mb-6 sm:mb-8 leading-tight">
            Six minutes of<br/>lesson.<br/>In three.
          </h2>
          <p className="text-lg sm:text-xl text-[#a3a3a3] max-w-md mb-8">
            Manim-accurate explainer videos, written by coding models and played inline on the whiteboard. Every equation and animation is mathematically exact — never AI-hallucinated.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <div className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-[#a3a3a3]">
              <span className="text-[#e8705b] font-medium tracking-tight">5–6 min</span> output
            </div>
            <div className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-[#a3a3a3]">
              <span className="text-[#e8705b] font-medium tracking-tight">~3 min</span> to render
            </div>
            <div className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-[#a3a3a3]">
              <span className="text-[#e8705b] font-medium tracking-tight">Manim</span>-accurate
            </div>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[500px]">
          {/* Stacked Cards */}
          <motion.div style={{ y: architectureY1 }} className="absolute top-0 right-0 w-4/5 h-80 z-0">
            <motion.div 
              initial={{ rotate: 0, x: 0, y: 0 }}
              whileInView={{ rotate: 6, x: 20, y: -10 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full h-full bg-[#6b8280] rounded-[2rem] p-10 origin-bottom-right opacity-50"
            ></motion.div>
          </motion.div>
          <motion.div style={{ y: architectureY2 }} className="absolute top-10 right-4 w-4/5 h-80 z-10">
            <motion.div 
              initial={{ rotate: 0, x: 0, y: 0 }}
              whileInView={{ rotate: 3, x: 10, y: -5 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full h-full bg-[#7a9eb1] rounded-[2rem] p-10 origin-bottom-right opacity-80"
            ></motion.div>
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute top-20 right-8 w-4/5 bg-[#8ebf9e] rounded-[2rem] p-7 h-80 shadow-2xl z-20 overflow-hidden flex flex-col"
          >
            {/* Window chrome */}
            <div className="flex items-center justify-between mb-4">
              <div className="grid grid-cols-2 gap-2 w-12">
                <div className="w-4 h-4 rounded-full bg-[#e8705b]"></div>
                <div className="w-4 h-4 rounded-full bg-[#e8705b]"></div>
                <div className="w-4 h-4 rounded-full bg-black/20"></div>
                <div className="w-4 h-4 rounded-full bg-black/20"></div>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.15em] text-[#1a1a1a]/50 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/60 animate-pulse" />
                manim_render.mp4
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-[26px] md:text-3xl font-medium text-[#1a1a1a] leading-[1.1] mb-4">
              Watch the math<br/>animate itself.
            </h3>

            {/* Manim-style animation canvas */}
            <div className="flex-1 relative rounded-xl bg-[#1a1a1a]/10 border border-[#1a1a1a]/15 overflow-hidden">
              <svg
                viewBox="0 0 300 120"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                {/* Background grid */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <line
                    key={`vgrid-${i}`}
                    x1={20 + i * 65} y1="14" x2={20 + i * 65} y2="106"
                    stroke="#1a1a1a" strokeOpacity="0.08" strokeWidth="0.8"
                  />
                ))}
                {Array.from({ length: 3 }).map((_, i) => (
                  <line
                    key={`hgrid-${i}`}
                    x1="16" y1={28 + i * 28} x2="284" y2={28 + i * 28}
                    stroke="#1a1a1a" strokeOpacity="0.08" strokeWidth="0.8"
                  />
                ))}

                {/* Equation label (fades in/out) */}
                <motion.text
                  x="22" y="25"
                  fill="#1a1a1a" fontSize="13"
                  fontFamily="math, ui-serif, serif" fontStyle="italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0, 0.9, 0.9, 0] }}
                  transition={{ duration: 5, times: [0, 0.08, 0.18, 0.88, 1], repeat: Infinity, ease: "easeInOut" }}
                >
                  f(x) = x²
                </motion.text>

                {/* Axes: draw in, hold, fade out */}
                <motion.line
                  x1="20" y1="100" x2="280" y2="100"
                  stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 0, 1, 1, 1],
                    opacity: [0, 0.45, 0.45, 0.45, 0]
                  }}
                  transition={{ duration: 5, times: [0, 0.08, 0.22, 0.9, 1], repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.line
                  x1="150" y1="14" x2="150" y2="108"
                  stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 0, 1, 1, 1],
                    opacity: [0, 0.45, 0.45, 0.45, 0]
                  }}
                  transition={{ duration: 5, times: [0, 0.08, 0.22, 0.9, 1], repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Arrow heads on axes */}
                <motion.path
                  d="M 275 96 L 282 100 L 275 104"
                  stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0, 0.45, 0.45, 0] }}
                  transition={{ duration: 5, times: [0, 0.22, 0.28, 0.9, 1], repeat: Infinity }}
                />
                <motion.path
                  d="M 146 20 L 150 14 L 154 20"
                  stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0, 0.45, 0.45, 0] }}
                  transition={{ duration: 5, times: [0, 0.22, 0.28, 0.9, 1], repeat: Infinity }}
                />

                {/* Parabola: draws stroke-by-stroke */}
                <motion.path
                  d="M 40 20 Q 150 180 260 20"
                  stroke="#1a1a1a" strokeWidth="2.4" strokeLinecap="round" fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 0, 1, 1, 1],
                    opacity: [0, 0.9, 0.9, 0.9, 0]
                  }}
                  transition={{ duration: 5, times: [0, 0.22, 0.6, 0.9, 1], repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Vertex dot: pops in after curve */}
                <motion.circle
                  cx="150" cy="100" r="4"
                  fill="#e8705b" stroke="#1a1a1a" strokeWidth="1.2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 0, 0, 1, 1, 0],
                    opacity: [0, 0, 0, 1, 1, 0]
                  }}
                  transition={{ duration: 5, times: [0, 0.55, 0.6, 0.68, 0.9, 1], repeat: Infinity, ease: [0.34, 1.56, 0.64, 1] }}
                  style={{ transformOrigin: '150px 100px', transformBox: 'fill-box' as any }}
                />

                {/* Vertex label */}
                <motion.text
                  x="156" y="96"
                  fill="#1a1a1a" fontSize="9"
                  fontFamily="math, ui-serif, serif" fontStyle="italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0, 0, 0.7, 0.7, 0] }}
                  transition={{ duration: 5, times: [0, 0.6, 0.68, 0.74, 0.9, 1], repeat: Infinity }}
                >
                  vertex
                </motion.text>
              </svg>

              {/* Timeline / progress bar */}
              <div className="absolute bottom-2 left-3 right-3 flex items-center gap-2">
                <div className="relative flex-1 h-[3px] rounded-full bg-[#1a1a1a]/15 overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-[#1a1a1a]/70 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: ['0%', '100%', '100%'] }}
                    transition={{ duration: 5, times: [0, 0.9, 1], repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <span className="text-[9px] font-mono tracking-wider text-[#1a1a1a]/50">03:00</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
