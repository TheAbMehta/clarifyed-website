import React from 'react';
import { motion } from 'motion/react';

export default function Roles() {
  return (
    <section id="roles" className="py-32 px-6 bg-[#9ca3af]/10">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#a3a3a3] text-lg mb-4">Built for Every Learner</p>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-medium mb-6 max-w-3xl leading-tight">
          For the people shaping the future
        </h2>
        <p className="text-xl text-[#a3a3a3] max-w-2xl mb-16">
          The next era of education belongs to those who learn by doing, not by reading chatbot replies.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-[#6b8280] rounded-[2rem] p-10 relative overflow-hidden group hover:shadow-2xl hover:shadow-[#6b8280]/20 transition-shadow duration-300"
          >
            <h3 className="text-4xl font-medium mb-6 text-[#1a1a1a]">Students</h3>
            <p className="text-lg text-[#1a1a1a]/80 max-w-sm relative z-10">
              Learn with a personal AI tutor that teaches on a whiteboard — writing notes, drawing diagrams, and correcting you in real time as you solve.
            </p>
            <motion.svg 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 right-0 w-64 h-64 translate-x-1/4 translate-y-1/4 opacity-20 group-hover:scale-110 transition-transform duration-700" viewBox="0 0 200 200" fill="none"
            >
              {Array.from({length: 5}).map((_, i) => (
                <circle key={i} cx="100" cy="100" r={40 + i * 15} stroke="white" strokeWidth="1" />
              ))}
            </motion.svg>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-[#8ebf9e] rounded-[2rem] p-10 relative overflow-hidden group hover:shadow-2xl hover:shadow-[#8ebf9e]/20 transition-shadow duration-300"
          >
            <h3 className="text-4xl font-medium mb-6 text-[#1a1a1a]">Teachers</h3>
            <p className="text-lg text-[#1a1a1a]/80 max-w-sm relative z-10">
              Track every student's understanding through persistent knowledge graphs. See exactly where gaps and misconceptions live, without manual assessment.
            </p>
            <motion.svg 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-10 right-10 w-32 h-32 opacity-20 group-hover:scale-110 transition-transform duration-700 origin-center" viewBox="0 0 100 100" fill="none"
            >
              <circle cx="30" cy="50" r="25" stroke="white" strokeWidth="1" />
              <circle cx="70" cy="50" r="25" stroke="white" strokeWidth="1" />
            </motion.svg>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-[#7a9eb1] rounded-[2rem] p-10 relative overflow-hidden group hover:shadow-2xl hover:shadow-[#7a9eb1]/20 transition-shadow duration-300"
          >
            <h3 className="text-4xl font-medium mb-6 text-[#1a1a1a]">Schools</h3>
            <p className="text-lg text-[#1a1a1a]/80 max-w-sm relative z-10">
              Deploy scalable AI tutoring across classrooms. Every student gets personalized one-on-one teaching without increasing headcount or cost.
            </p>
            <motion.svg 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 right-10 w-48 h-48 translate-y-1/4 opacity-20 group-hover:scale-110 transition-transform duration-700" viewBox="0 0 100 100" fill="none"
            >
              <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="1" />
              <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="1" />
              <circle cx="50" cy="50" r="50" stroke="white" strokeWidth="1" />
            </motion.svg>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-[#c697c9] rounded-[2rem] p-10 relative overflow-hidden group hover:shadow-2xl hover:shadow-[#c697c9]/20 transition-shadow duration-300"
          >
            <h3 className="text-4xl font-medium mb-6 text-[#1a1a1a]">Parents</h3>
            <p className="text-lg text-[#1a1a1a]/80 max-w-sm relative z-10">
              See your child's real learning progress — not just grades. The knowledge graph shows exactly what they've mastered and where they need help.
            </p>
            <motion.svg 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 right-10 w-48 h-48 translate-y-1/4 opacity-20 group-hover:scale-110 transition-transform duration-700 origin-center" viewBox="0 0 100 100" fill="none"
            >
              <path d="M 10 90 Q 50 10 90 90" stroke="white" strokeWidth="1" />
              <path d="M 20 90 Q 50 30 80 90" stroke="white" strokeWidth="1" />
              <path d="M 30 90 Q 50 50 70 90" stroke="white" strokeWidth="1" />
              <ellipse cx="50" cy="90" rx="40" ry="10" stroke="white" strokeWidth="1" />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
