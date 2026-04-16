import React from 'react';
import { motion } from 'motion/react';

export default function Integrations() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <p className="text-[#a3a3a3] text-lg mb-4">Plugs in. Levels up.</p>
        <h2 className="text-5xl md:text-7xl font-medium mb-8 leading-tight">
          Works with what<br/>you already<br/>use.
        </h2>
        <p className="text-xl text-[#a3a3a3] max-w-md">
          YouTube videos, PDF textbooks, Desmos graphing, Google Classroom — all integrated seamlessly into the whiteboard experience.
        </p>
      </div>
      <div className="relative h-[600px] overflow-hidden">
        {/* Grid of integration logos */}
        <div className="absolute right-0 top-0 grid grid-cols-2 gap-4 w-full md:w-[120%] transform md:rotate-12 md:translate-x-10 md:-translate-y-20">
           {Array.from({length: 8}).map((_, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 0.8, scale: 1 }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               viewport={{ once: true }}
               whileHover={{ opacity: 1, scale: 1.05, rotate: -5 }}
               className="bg-[#9ca3af] rounded-3xl aspect-square flex items-center justify-center p-8 transition-colors cursor-pointer"
             >
               {i === 0 && <span className="text-2xl font-bold text-black">YouTube</span>}
               {i === 1 && <span className="text-2xl font-bold text-black">Desmos</span>}
               {i === 2 && <span className="text-xl font-bold text-black">Google Classroom</span>}
               {i === 3 && <span className="text-3xl font-bold text-black">PDF</span>}
               {i === 4 && <span className="text-2xl font-bold text-black">Notion</span>}
               {i === 5 && <span className="text-2xl font-bold text-black">Drive</span>}
               {i === 6 && <span className="text-xl font-bold text-black">Khan Academy</span>}
               {i === 7 && <span className="text-2xl font-bold text-black">Zoom</span>}
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
