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
    <section ref={architectureRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#a3a3a3] text-lg mb-4">The Architecture of Intelligent Tutoring</p>
          <h2 className="text-5xl md:text-7xl font-medium mb-8 leading-tight">
            Built for What's<br/>Next.<br/>Already.
          </h2>
          <p className="text-xl text-[#a3a3a3] max-w-md">
            Whiteboard canvas, knowledge graphs, video generation, and interactive widgets — all working together.
          </p>
        </div>
        <div className="relative h-[500px]">
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
            className="absolute top-20 right-8 w-4/5 bg-[#8ebf9e] rounded-[2rem] p-10 h-80 shadow-2xl z-20"
          >
            <div className="grid grid-cols-2 gap-2 w-12 mb-8">
              <div className="w-4 h-4 rounded-full bg-[#e8705b]"></div>
              <div className="w-4 h-4 rounded-full bg-[#e8705b]"></div>
              <div className="w-4 h-4 rounded-full bg-black/20"></div>
              <div className="w-4 h-4 rounded-full bg-black/20"></div>
            </div>
            <h3 className="text-4xl font-medium text-[#1a1a1a] leading-tight">
              Smart that makes you smarter
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
