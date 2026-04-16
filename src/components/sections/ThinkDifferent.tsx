import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'motion/react';

export default function ThinkDifferent() {
  const [tdStep, setTdStep] = useState(1);
  const thinkDifferentRef = useRef<HTMLElement>(null);
  const { scrollYProgress: tdProgress } = useScroll({
    target: thinkDifferentRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(tdProgress, "change", (latest) => {
    if (latest < 0.25) setTdStep(1);
    else if (latest < 0.75) setTdStep(2);
    else setTdStep(3);
  });

  const wheelRotation = useTransform(
    tdProgress,
    [0, 0.15, 0.35, 0.65, 0.85, 1],
    [0, 0, -120, -120, -240, -240]
  );

  const counterRotation = useTransform(wheelRotation, (rot) => -rot);

  const orb1BarOpacity = useTransform(wheelRotation, (rot) => Math.max(0, 1 - Math.abs(rot) / 15));
  const orb2BarOpacity = useTransform(wheelRotation, (rot) => Math.max(0, 1 - Math.abs(rot + 120) / 15));
  const orb3BarOpacity = useTransform(wheelRotation, (rot) => Math.max(0, 1 - Math.abs(rot + 240) / 15));

  return (
    <section ref={thinkDifferentRef} className="h-[300vh] relative bg-[#1a1a1a]">
      <div className="sticky top-0 h-screen overflow-hidden relative">
        <div className="absolute top-[5%] md:top-[7%] left-0 right-0 text-center z-20 px-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium mb-1 md:mb-3">Think Different.</h2>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium text-[#a3a3a3]">We Already Built It.</h2>
        </div>

        <div className="absolute top-[25%] md:top-[28%] left-0 right-0 z-20 px-6">
          <div className="max-w-xl mx-auto text-center relative h-32 sm:h-28">
            <AnimatePresence mode="wait">
              {tdStep === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="absolute inset-0 flex flex-col items-center text-center">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-2">Learn</h3>
                  <p className="text-[#a3a3a3] text-sm sm:text-base leading-relaxed">The AI writes on the whiteboard — notes, diagrams, equations, stroke by stroke. Every concept taught visually.</p>
                </motion.div>
              )}
              {tdStep === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="absolute inset-0 flex flex-col items-center text-center">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-2">Adapt</h3>
                  <p className="text-[#a3a3a3] text-sm sm:text-base leading-relaxed">The AI checks your knowledge graph before every lesson. It fills gaps and adjusts difficulty in real time.</p>
                </motion.div>
              )}
              {tdStep === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="absolute inset-0 flex flex-col items-center text-center">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-2">Execute</h3>
                  <p className="text-[#a3a3a3] text-sm sm:text-base leading-relaxed">You pick up the pen and solve on the same canvas. The AI corrects you mid-step in real time.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] sm:w-[1200px] sm:h-[1200px] md:w-[1600px] md:h-[1600px]"
          style={{ top: '58%' }}
        >
          <motion.div
            style={{ rotate: wheelRotation }}
            className="w-full h-full rounded-full border border-white/[0.05] relative"
          >
            {[
              { idx: 1, top: '0%', left: '50%', barOpacity: orb1BarOpacity },
              { idx: 2, top: '75%', left: '93.3%', barOpacity: orb2BarOpacity },
              { idx: 3, top: '75%', left: '6.7%', barOpacity: orb3BarOpacity },
            ].map((orb) => (
              <div
                key={orb.idx}
                className="absolute"
                style={{ top: orb.top, left: orb.left, transform: 'translate(-50%, -50%)' }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#222] border border-white/15 text-white text-xl md:text-2xl font-medium flex items-center justify-center shadow-xl">
                  <motion.span style={{ rotate: counterRotation }}>{orb.idx}</motion.span>
                </div>
                <motion.div
                  style={{
                    opacity: orb.barOpacity,
                    rotate: counterRotation,
                    transformOrigin: 'center bottom',
                    position: 'absolute' as const,
                    bottom: '100%',
                    left: '50%',
                    marginLeft: '-0.5px',
                    paddingBottom: '4px',
                  }}
                >
                  <div style={{ width: '1px', height: '15vh', background: 'linear-gradient(to bottom, #e8705b, transparent)' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e8705b', boxShadow: '0 0 10px rgba(232,112,91,0.5)', position: 'absolute', top: '0', left: '50%', marginLeft: '-4px' }} />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#1a1a1a] from-50% via-[#1a1a1a]/80 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
