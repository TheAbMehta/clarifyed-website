import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    { q: "How is Clarifyed different from ChatGPT or Khanmigo?", a: "Every AI tutor on the market is a chatbot — you type a question, it types back a paragraph. Clarifyed has no chat interface. The AI teaches on a multi-page whiteboard, writing notes stroke by stroke, drawing diagrams, embedding interactive widgets, and then handing the pen to the student." },
    { q: "What subjects does Clarifyed cover?", a: "Clarifyed works across all STEM subjects — mathematics, physics, chemistry, and biology. The whiteboard-native approach is especially powerful for subjects that require visual reasoning, diagrams, and step-by-step derivations." },
    { q: "Is my child's data private and secure?", a: "Absolutely. All student data, including knowledge graphs and session history, is encrypted and stored securely. We never sell student data to third parties. Parents and teachers have full visibility into what the AI teaches." },
    { q: "Is there a free plan?", a: "Yes. Free-tier students get the full Socratic whiteboard teaching experience with access to every tool. The AI adapts which modalities it uses based on what's most effective. Paid plans unlock richer experiences like AI-generated explainer videos and priority access." },
  ];

  return (
    <section className="py-24 md:py-32 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium mb-16 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqItems.map((item, i) => (
          <div key={i} className="border border-white/10 rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-[#e8705b] focus-visible:outline-offset-[-2px]"
              aria-expanded={openFaq === i}
            >
              <span className="text-lg font-medium pr-4">{item.q}</span>
              <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openFaq === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-[#a3a3a3] leading-relaxed">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
