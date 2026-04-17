import React from 'react';
import { motion } from 'motion/react';

const sections = [
  {
    title: "1. Overview",
    body: "This is placeholder privacy copy for Clarifyed. Every paragraph is scaffolding for the real, counsel-reviewed policy that will replace it before public launch. Nothing on this page should be read as a binding description of how data actually moves through the product today.",
  },
  {
    title: "2. Information We Collect",
    body: "Eventually, we will collect what you'd expect: the account you create, the sessions you run on the whiteboard, what you write and derive, and basic device and network metadata to keep the service reliable. The final policy will list every field, why we need it, and how long it stays around.",
  },
  {
    title: "3. How We Use Your Data",
    body: "We use session data to render the tutor you see, keep your knowledge graph current, send the occasional product email, and improve how the AI teaches. We do not sell student data, and the binding policy will say so unambiguously.",
  },
  {
    title: "4. Knowledge Graph & Learning History",
    body: "Your knowledge graph is built passively as you learn. It belongs to you — export, rebuild, or delete it at any time. The full policy will describe the export format, the deletion timelines, and how pseudonymized versions (if any) might be used for model training with explicit opt-in.",
  },
  {
    title: "5. Sharing with Third Parties",
    body: "We rely on vendors for hosting, analytics, payment processing, transactional email, and AI inference. Each is contractually bound to handle your data for those specific purposes only. The production policy will name them and link their policies.",
  },
  {
    title: "6. Cookies & Local Storage",
    body: "Clarifyed uses cookies and browser storage to keep you signed in, remember your preferences, and measure how well the product teaches. A granular consent surface will be part of the real policy along with a list of what each cookie does.",
  },
  {
    title: "7. Data Security",
    body: "Data is encrypted in transit and at rest. Access to production systems is audited and limited to engineers on call. Incident response commitments — notification windows, forensics, user communication — will be fleshed out in the binding version.",
  },
  {
    title: "8. Your Rights",
    body: "Depending on where you live, you may have the right to access, correct, export, or delete your data, and to object to certain processing. The final policy will route those requests through a dedicated endpoint with verified identity checks.",
  },
  {
    title: "9. Children's Privacy",
    body: "Clarifyed is designed to be safe for learners under 18 with parental or school consent. The real policy will describe age gates, parental controls, and the regional frameworks (COPPA, GDPR-K, and equivalents) that apply.",
  },
  {
    title: "10. Changes to This Policy",
    body: "We'll update this page as the product evolves. When the binding version ships, material changes will be announced in-product and by email, with a revision history preserved for transparency.",
  },
  {
    title: "11. Contact",
    body: "Reach the privacy desk at privacy@clarifyed.ai. Once the production policy ships, a data protection officer will be named here with a dedicated contact channel.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 sm:pt-40 pb-20 sm:pb-32 px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#a3a3a3] text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 sm:mb-4">Legal — Draft</p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-4 sm:mb-6 text-[#f4f4f0]">Privacy Policy</h1>
        <p className="text-[#a3a3a3] text-base sm:text-lg leading-relaxed mb-10 sm:mb-12">
          Placeholder privacy copy for the Clarifyed platform. This page is a boilerplate scaffold — the final, reviewed
          policy will replace it before public launch. Last updated: <span className="text-white/80">pending.</span>
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
        <a href="#/terms" className="hover:text-white transition-colors">
          Terms of Service →
        </a>
      </div>
    </div>
  );
}
