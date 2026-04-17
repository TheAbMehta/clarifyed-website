import React from "react";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { Marquee } from "../ui/marquee";

/* ──────────────── Custom SVG visuals for the new feature cards ──────────────── */

const GraphsVisual = () => (
  <svg viewBox="0 0 64 64" className="size-10" fill="none" aria-hidden="true">
    <line x1="10" y1="54" x2="56" y2="54" stroke="#e8705b" strokeOpacity="0.4" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="10" y1="10" x2="10" y2="54" stroke="#e8705b" strokeOpacity="0.4" strokeWidth="1.4" strokeLinecap="round" />
    <motion.path
      d="M 12 46 Q 22 28 30 34 T 44 22 L 54 14"
      stroke="#e8705b" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    />
    <motion.circle
      cx="30" cy="34" r="2.4" fill="#e8705b"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ transformOrigin: "30px 34px", transformBox: "fill-box" as any }}
    />
    <motion.circle
      cx="44" cy="22" r="2.4" fill="#e8705b"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.95, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ transformOrigin: "44px 22px", transformBox: "fill-box" as any }}
    />
  </svg>
);

const FlashcardsVisual = () => (
  <svg viewBox="0 0 64 64" className="size-10" fill="none" aria-hidden="true">
    {/* back card (rotated further) */}
    <rect
      x="14" y="14" width="32" height="40" rx="4"
      fill="rgba(232,112,91,0.08)" stroke="#e8705b" strokeOpacity="0.45" strokeWidth="1.4"
      transform="rotate(-9 30 34)"
    />
    {/* middle card */}
    <rect
      x="16" y="13" width="32" height="40" rx="4"
      fill="rgba(232,112,91,0.12)" stroke="#e8705b" strokeOpacity="0.7" strokeWidth="1.5"
      transform="rotate(-3 32 33)"
    />
    {/* front card with content */}
    <rect
      x="18" y="12" width="32" height="40" rx="4"
      fill="rgba(232,112,91,0.18)" stroke="#e8705b" strokeWidth="1.7"
    />
    <line x1="24" y1="22" x2="44" y2="22" stroke="#e8705b" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="24" y1="30" x2="40" y2="30" stroke="#e8705b" strokeOpacity="0.6" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="24" y1="36" x2="42" y2="36" stroke="#e8705b" strokeOpacity="0.6" strokeWidth="1.3" strokeLinecap="round" />
    {/* shimmer pulse along the front card edge */}
    <motion.rect
      x="18" y="12" width="32" height="40" rx="4"
      fill="none" stroke="#e8705b" strokeWidth="1.4"
      animate={{ opacity: [0, 0.9, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
);

const MeetingVisual = () => {
  const tiles = [
    { x: 6, y: 6 },
    { x: 34, y: 6 },
    { x: 6, y: 34 },
    { x: 34, y: 34 },
  ];
  return (
    <svg viewBox="0 0 64 64" className="size-10" fill="none" aria-hidden="true">
      {tiles.map((t, i) => (
        <g key={i}>
          <rect
            x={t.x} y={t.y} width="24" height="24" rx="3"
            fill="rgba(232,112,91,0.12)" stroke="#e8705b" strokeOpacity="0.65" strokeWidth="1.4"
          />
          {/* head + shoulders */}
          <circle cx={t.x + 12} cy={t.y + 9} r="2.8" fill="#e8705b" opacity="0.75" />
          <path
            d={`M ${t.x + 4} ${t.y + 22} Q ${t.x + 12} ${t.y + 14} ${t.x + 20} ${t.y + 22}`}
            stroke="#e8705b" strokeOpacity="0.7" strokeWidth="1.4" fill="none" strokeLinecap="round"
          />
        </g>
      ))}
      {/* "active speaker" pulse on top-left tile */}
      <motion.circle
        cx="18" cy="15"
        stroke="#e8705b" strokeWidth="1.4" fill="none"
        animate={{ r: [3, 8, 3], opacity: [0.9, 0, 0.9] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
};

const VoiceTextVisual = () => (
  <svg viewBox="0 0 64 64" className="size-10" fill="none" aria-hidden="true">
    {/* Speech bubble */}
    <path
      d="M 8 12 L 56 12 Q 60 12 60 16 L 60 38 Q 60 42 56 42 L 32 42 L 22 50 L 22 42 L 8 42 Q 4 42 4 38 L 4 16 Q 4 12 8 12 Z"
      fill="rgba(232,112,91,0.12)" stroke="#e8705b" strokeWidth="1.6"
    />
    {/* Animated waveform bars */}
    {[
      { x: 14, base: [25, 29], anim: [[27, 23, 27], [27, 31, 27]], dur: 1.0, delay: 0 },
      { x: 19, base: [21, 33], anim: [[21, 25, 21], [33, 29, 33]], dur: 1.2, delay: 0.1 },
      { x: 24, base: [17, 37], anim: [[17, 22, 17], [37, 32, 37]], dur: 0.85, delay: 0.2 },
      { x: 29, base: [19, 35], anim: [[19, 24, 19], [35, 30, 35]], dur: 1.05, delay: 0.3 },
      { x: 34, base: [22, 32], anim: [[22, 26, 22], [32, 28, 32]], dur: 1.25, delay: 0.4 },
      { x: 39, base: [24, 30], anim: [[24, 26, 24], [30, 28, 30]], dur: 1.4, delay: 0.5 },
    ].map((bar, i) => (
      <motion.line
        key={i}
        x1={bar.x} x2={bar.x}
        y1={bar.base[0]} y2={bar.base[1]}
        stroke="#e8705b" strokeWidth="2.2" strokeLinecap="round"
        animate={{ y1: bar.anim[0], y2: bar.anim[1] }}
        transition={{ duration: bar.dur, repeat: Infinity, ease: "easeInOut", delay: bar.delay }}
      />
    ))}
    {/* "T" mark for the text option */}
    <text
      x="46" y="33" fill="#e8705b" fontSize="13" fontWeight="700"
      fontFamily="Outfit, sans-serif"
    >T</text>
  </svg>
);

const marqueeData = [
  "How do I balance this chemical equation?",
  "Why does the curve approach zero?",
  "Can you explain eigenvectors visually?",
  "What's the intuition behind this formula?",
  "Show me the step-by-step derivation.",
  "Let's review what I missed last week.",
  "I don't understand projectile motion.",
  "Can we graph this function together?",
  "Why is the derivative positive here?",
  "Explain this concept like I'm 5.",
  "How does this connect to what we learned?",
  "Can you create a flashcard for this?",
];

type Feature = {
  title: string;
  description: string;
  visual: React.ReactNode;
};

const features: Feature[] = [
  {
    description:
      "Plot any function, derivative, or dataset. Live, draggable graphs sit alongside the AI's notes on the canvas.",
    visual: <GraphsVisual />,
    title: "Live Graphs",
  },
  {
    description:
      "Auto-generated decks for spaced recall — built from the concepts you've already touched, not generic libraries.",
    visual: <FlashcardsVisual />,
    title: "Flashcards",
  },
  {
    description:
      "Virtual rooms where the AI moderates voice discussions and writes corrections on the whiteboard in real time.",
    visual: <MeetingVisual />,
    title: "Meeting Mode",
  },
  {
    description:
      "Talk to your tutor or type — the AI hears both and answers on the canvas. Switch modes whenever you want.",
    visual: <VoiceTextVisual />,
    title: "Voice & Text",
  },
];

export default function ClarifyedFeatures() {
  const m1 = marqueeData.slice(0, marqueeData.length / 3);
  const m2 = marqueeData.slice(
    marqueeData.length / 3,
    (marqueeData.length / 3) * 2
  );
  const m3 = marqueeData.slice((marqueeData.length / 3) * 2);

  return (
    <section id="features" className="relative bg-[#1a1a1a] pt-20 sm:pt-40 text-[#f4f4f0]">
      <div className="mx-auto max-w-full">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-4 px-5 text-center md:px-10">
          <h2 className="max-w-3xl font-medium text-4xl sm:text-5xl lg:text-6xl text-white">
            Removing the roadblocks to your understanding
          </h2>
          <p className="max-w-2xl text-base md:text-lg text-neutral-400">
            It's easy to get lost in a sea of generic chatbot answers. We filter out the noise, providing interactive, personalized, side-by-side tutoring that actually helps you learn.
          </p>
          <div 
            className="relative mx-auto mt-12 w-full max-w-5xl overflow-hidden"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
          >
            <div className="flex w-full flex-col space-y-4 py-2">
              <Marquee duration={80} repeat={5}>
                {m1.map((q) => (
                  <Badge
                    className="rounded-none border-[#333333] bg-[#222222] text-[#f4f4f0] px-4 py-2 font-medium tracking-wide shadow-sm"
                    key={q}
                    size="lg"
                    variant="outline"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>

              <Marquee
                duration={90}
                repeat={5}
                reverse
              >
                {m2.map((q) => (
                  <Badge
                    className="rounded-none border-[#333333] bg-[#222222] text-[#f4f4f0] px-4 py-2 font-medium tracking-wide shadow-sm"
                    key={q}
                    size="lg"
                    variant="outline"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>

              <Marquee duration={85} repeat={5}>
                {m3.map((q) => (
                  <Badge
                    className="rounded-none border-[#333333] bg-[#222222] text-[#f4f4f0] px-4 py-2 font-medium tracking-wide shadow-sm"
                    key={q}
                    size="lg"
                    variant="outline"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 divide-y divide-dashed divide-neutral-800 border-t border-neutral-800 border-dashed sm:grid-cols-2 sm:divide-x lg:grid-cols-4 max-w-7xl mx-auto border-x border-b">
          {features.map((feature) => (
            <div
              className="group flex flex-col gap-5 px-5 py-8 lg:px-8 lg:py-12 transition-colors hover:bg-[#222222]/50"
              key={feature.title}
            >
              <div className="p-3 bg-[#e8705b]/10 w-fit rounded-lg ring-1 ring-[#e8705b]/20 flex items-center justify-center">
                {feature.visual}
              </div>

              <div className="flex flex-col gap-2 pt-6 lg:pt-10">
                <h3 className="font-semibold text-2xl tracking-tight text-white">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-neutral-400 font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
