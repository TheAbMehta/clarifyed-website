import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "It feels like having the best tutor in the world sitting right next to me. The AI writes on the whiteboard, draws diagrams, and when I get stuck, it corrects me mid-step. Nothing else comes close.",
      name: "Priya Sharma",
      title: "12th Grade Student, Delhi",
      image: "https://i.pravatar.cc/150?img=47"
    },
    {
      quote: "The knowledge graph is a game-changer. I can see exactly where each student's gaps are, what misconceptions they hold, and what they mastered weeks ago. It's like having X-ray vision into learning.",
      name: "Dr. James Whitfield",
      title: "Physics Teacher, Greenwood Academy",
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      quote: "My daughter went from dreading math to asking for extra sessions. The whiteboard approach feels natural to her — she picks up the pen and solves alongside the AI. Her confidence has completely transformed.",
      name: "Meera Kapoor",
      title: "Parent of a 10th Grader",
      image: "https://i.pravatar.cc/150?img=32"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
      <div className="flex flex-col justify-between">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-medium leading-tight text-[#f4f4f0]/90">
          Loved by the<br/>learners who<br/>lead the way
        </h2>
        <div className="flex items-center gap-4 mt-16">
          <button
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-[#e8705b] focus-visible:outline-offset-2"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-white/50" />
          </button>
          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-[#e8705b] focus-visible:outline-offset-2"
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <div className="flex gap-2 ml-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentTestimonial ? 'bg-[#e8705b] scale-125' : 'bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col"
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl leading-relaxed mb-10 text-[#f4f4f0]/90">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className="w-14 h-14 rounded-full border-2 border-[#e8705b]" />
              <div>
                <h4 className="font-medium text-lg">{testimonials[currentTestimonial].name}</h4>
                <p className="text-[#a3a3a3] text-sm">{testimonials[currentTestimonial].title}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="mt-16 opacity-10 overflow-hidden h-24">
          <p className="text-2xl leading-relaxed">
            "{testimonials[(currentTestimonial + 1) % testimonials.length].quote.substring(0, 120)}..."
          </p>
        </div>
      </div>
    </section>
  );
}
