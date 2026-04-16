import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function CaseStudy() {
  return (
    <section className="bg-[#7a9eb1] rounded-t-[3rem] p-6 md:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-medium text-[#1a1a1a] leading-tight mb-6">
              From struggling<br/>with calculus to<br/>mastering it
            </h2>
            <p className="text-xl text-[#1a1a1a]/70 mb-10 max-w-lg">
              Greenwood Academy deployed Clarifyed across their math department — unlocking personalized tutoring for every student and transforming learning outcomes.
            </p>
            <div className="flex items-center gap-8 text-[#1a1a1a]">
              <span className="text-3xl font-serif italic">Greenwood</span>
              <span className="text-2xl font-medium flex items-center gap-2"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M6 12h12"/></svg> Academy</span>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-[400px] rounded-tl-[10rem] rounded-br-[10rem] overflow-hidden"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop" alt="Students collaborating at Greenwood Academy" loading="lazy" className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-[#1a1a1a]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#8ebf9e] flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <span className="text-5xl font-medium">100%</span>
            </div>
            <p className="text-lg">Concept coverage</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-[#1a1a1a]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#8ebf9e] flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <span className="text-5xl font-medium">3x</span>
            </div>
            <p className="text-lg">Faster learning</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-[#1a1a1a]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#8ebf9e] flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <span className="text-5xl font-medium">94%</span>
            </div>
            <p className="text-lg">Retention rate</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
