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
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-medium text-[#1a1a1a] leading-tight mb-4 sm:mb-6">
              Guided by<br/>industry<br/>veterans
            </h2>
            <p className="text-lg sm:text-xl text-[#1a1a1a]/70 mb-8 sm:mb-10 max-w-lg">
              Clarifyed is mentored by senior AI/ML leaders from one of India's largest edtech platforms — bringing deep expertise in AI, data science, and scalable learning systems to every decision we make.
            </p>
            <div className="flex items-center gap-8 text-[#1a1a1a]">
              <span className="text-3xl font-serif italic">Mentored</span>
              <span className="text-2xl font-medium flex items-center gap-2"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M6 12h12"/></svg> by the best</span>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-[240px] sm:h-[320px] md:h-[400px] rounded-tl-[5rem] rounded-br-[5rem] sm:rounded-tl-[8rem] sm:rounded-br-[8rem] md:rounded-tl-[10rem] md:rounded-br-[10rem] overflow-hidden"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop" alt="Team collaboration session with mentors" loading="lazy" className="w-full h-full object-cover"
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
              <span className="text-5xl font-medium">10+</span>
            </div>
            <p className="text-lg">Years of AI/ML expertise</p>
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
              <span className="text-5xl font-medium">50M+</span>
            </div>
            <p className="text-lg">Learners impacted</p>
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
              <span className="text-5xl font-medium">C-suite</span>
            </div>
            <p className="text-lg">Leadership experience</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
