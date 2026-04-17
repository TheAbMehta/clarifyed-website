import React from 'react';
import { motion } from 'motion/react';

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing Clarifyed, you agree to the placeholder rules described on this page. This copy is here to mark the spot where a real legal document will eventually live — nothing in it is binding, reviewed by counsel, or intended for production use. Treat it as scaffolding.",
  },
  {
    title: "2. What Clarifyed Is",
    body: "Clarifyed is a whiteboard-native AI tutoring surface. When the real Terms are written, this section will describe which parts of the product the agreement covers — the web app, mobile clients, integrations, and anything else we ship under the Clarifyed name.",
  },
  {
    title: "3. Your Account",
    body: "You're responsible for anything that happens on your account, so keep your credentials to yourself. If you think someone else has gotten hold of them, tell us and we'll sort it out. The final Terms will spell out recovery flows, age limits, and verification details.",
  },
  {
    title: "4. Using the Whiteboard",
    body: "You can use the AI tutor, the canvas, the knowledge graph, and every widget we embed, for your own learning. What you can't do is scrape the system, reverse-engineer it, resell access, or pipe it into automated pipelines outside Clarifyed. The real document will list specifics.",
  },
  {
    title: "5. Content on the Canvas",
    body: "Anything you write, draw, derive, or upload stays yours. We need a limited license to actually show it back to you, sync it across devices, and — if you opt in — train better teaching behaviors from de-identified signals. Detailed scope lands in the final copy.",
  },
  {
    title: "6. Subscriptions & Billing",
    body: "Starter is free forever. Clarifyed Pro is billed monthly or annually. Refund windows, proration rules, trial eligibility, taxes, and what happens when a card fails are all placeholder here; look for the binding version before launch.",
  },
  {
    title: "7. Changes to the Service",
    body: "We ship fast, so features will appear, shift, and occasionally retire. The real Terms will commit to advance notice for any meaningful removal and will point to a changelog covering the last twelve months.",
  },
  {
    title: "8. Disclaimers",
    body: "Clarifyed teaches, quizzes, and corrects, but it is not a replacement for certified instruction, medical advice, or formal credentials. The AI is confident; it is also, occasionally, wrong. Don't bet a diagnosis on it. The production Terms will say the same thing with more lawyer words.",
  },
  {
    title: "9. Termination",
    body: "You can stop using Clarifyed at any time. We can suspend or end access if someone abuses the product, threatens other students, or breaks these (eventual, binding) rules. Final wording will include appeals and data export windows.",
  },
  {
    title: "10. Contact",
    body: "Questions, concerns, or feedback on these draft Terms go to hello@clarifyed.ai. Once the real agreement is published, this address will keep working, alongside a proper support channel.",
  },
];

export default function Terms() {
  return (
    <div className="pt-24 sm:pt-40 pb-20 sm:pb-32 px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#a3a3a3] text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 sm:mb-4">Legal — Draft</p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-4 sm:mb-6 text-[#f4f4f0]">Terms of Service</h1>
        <p className="text-[#a3a3a3] text-base sm:text-lg leading-relaxed mb-10 sm:mb-12">
          Placeholder terms for the Clarifyed platform. This page is a boilerplate scaffold — the final, lawyer-reviewed
          agreement will replace it before public launch. Last updated: <span className="text-white/80">pending.</span>
        </p>
      </motion.div>

      <div className="space-y-8 sm:space-y-10">
        {sections.map((section, i) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
          >
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{section.title}</h2>
            <p className="text-[#a3a3a3] leading-relaxed text-[15px] sm:text-base">{section.body}</p>
          </motion.section>
        ))}
      </div>

      <div className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-white/10 flex items-center justify-between text-sm text-[#a3a3a3]">
        <a href="#/" className="inline-flex items-center gap-2 hover:text-white transition-colors">
          <span>←</span> Back to Clarifyed
        </a>
        <a href="#/privacy-policy" className="hover:text-white transition-colors">
          Privacy Policy →
        </a>
      </div>
    </div>
  );
}
