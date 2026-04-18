import React from 'react';
import { motion } from 'motion/react';

/**
 * Handwritten AI Notes
 * Italic-serif "AI-written" equations + handwritten underline/arrow flourishes on ruled paper.
 */
const HandwrittenIllustration = () => (
  <svg viewBox="0 0 240 160" className="w-full h-full" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
    {/* Notebook paper */}
    <rect
      x="20" y="12" width="200" height="136" rx="10"
      fill="rgba(255,255,255,0.2)"
      stroke="rgba(255,255,255,0.55)" strokeWidth="1.2"
    />
    {/* Red margin line */}
    <line x1="46" y1="12" x2="46" y2="148" stroke="#e8705b" strokeOpacity="0.55" strokeWidth="1" />
    {/* Two punch holes */}
    <circle cx="34" cy="40" r="2.5" fill="rgba(26,26,26,0.2)" />
    <circle cx="34" cy="120" r="2.5" fill="rgba(26,26,26,0.2)" />

    {/* Ruled lines */}
    {[50, 80, 110, 136].map((y) => (
      <line key={y} x1="54" y1={y} x2="216" y2={y} stroke="rgba(26,26,26,0.12)" strokeWidth="0.8" />
    ))}

    {/* Equation 1 */}
    <motion.text
      x="58" y="46" fill="white"
      fontFamily="'Georgia', 'Times New Roman', serif" fontStyle="italic"
      fontSize="16" fontWeight="500"
      initial={{ opacity: 0, x: -6 }}
      whileInView={{ opacity: 0.95, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      f(x) = x² + 2x
    </motion.text>

    {/* Wavy handwritten underline for equation 1 */}
    <motion.path
      d="M 58 54 Q 74 50 94 54 Q 114 58 134 53 L 150 54"
      stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay: 0.9, ease: "easeInOut" }}
    />

    {/* Equation 2 */}
    <motion.text
      x="58" y="76" fill="white"
      fontFamily="'Georgia', 'Times New Roman', serif" fontStyle="italic"
      fontSize="16" fontWeight="500"
      initial={{ opacity: 0, x: -6 }}
      whileInView={{ opacity: 0.95, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 1.6 }}
    >
      f ′(x) = 2x + 2
    </motion.text>

    {/* Curved arrow linking the two equations (showing derivation) */}
    <motion.path
      d="M 160 52 C 178 52 184 62 176 74"
      stroke="#1a1a1a" strokeWidth="1.6" strokeLinecap="round" fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 2.2 }}
    />
    {/* Arrow head */}
    <motion.path
      d="M 172 70 L 176 76 L 182 72"
      stroke="#1a1a1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 2.9 }}
    />

    {/* Handwritten note-taking squiggle (third line) */}
    <motion.path
      d="M 58 104 Q 70 98 82 104 T 108 104 Q 120 98 132 104 T 162 104 L 180 104"
      stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, delay: 3.1, ease: "easeInOut" }}
    />

    {/* Check mark */}
    <motion.path
      d="M 58 130 L 64 136 L 76 124"
      stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 3.6 }}
    />
  </svg>
);

/**
 * Interactives
 * A graph inside a panel, a dot that genuinely tracks the curve,
 * a slider underneath whose thumb moves in lock-step with the dot.
 */
const InteractivesIllustration = () => {
  // Points sampled along: M 28 88 Q 70 24 120 58 T 212 32
  // These keep the dot truly on the curve instead of cutting corners.
  const cx = [28, 49.5, 72, 95.5, 120, 144.5, 168, 190.5, 212, 190.5, 168, 144.5, 120, 95.5, 72, 49.5, 28];
  const cy = [88, 62, 48.5, 47, 58, 69, 68.5, 56, 32, 56, 68.5, 69, 58, 47, 48.5, 62, 88];
  // Slider thumb tracks the same horizontal sweep for visual sync
  const sliderX = cx;

  return (
    <svg viewBox="0 0 240 160" className="w-full h-full" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      {/* Graph panel */}
      <rect
        x="18" y="10" width="204" height="108" rx="10"
        fill="rgba(255,255,255,0.22)"
        stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"
      />

      {/* Grid */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={`v${i}`}
          x1={60 + i * 40} y1="20" x2={60 + i * 40} y2="108"
          stroke="rgba(26,26,26,0.1)" strokeWidth="0.8"
        />
      ))}
      {[0, 1, 2].map((i) => (
        <line
          key={`h${i}`}
          x1="28" y1={40 + i * 24} x2="212" y2={40 + i * 24}
          stroke="rgba(26,26,26,0.1)" strokeWidth="0.8"
        />
      ))}

      {/* Axes */}
      <line x1="28" y1="88" x2="212" y2="88" stroke="rgba(26,26,26,0.55)" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="120" y1="20" x2="120" y2="108" stroke="rgba(26,26,26,0.55)" strokeWidth="1.6" strokeLinecap="round" />

      {/* Curve */}
      <motion.path
        d="M 28 88 Q 70 24 120 58 T 212 32"
        stroke="white" strokeWidth="2.8" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Dot following the curve */}
      <motion.circle
        r="6.5" fill="#1a1a1a" stroke="white" strokeWidth="2"
        animate={{ cx, cy }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Slider track */}
      <rect x="28" y="134" width="184" height="5" rx="2.5" fill="rgba(26,26,26,0.22)" />

      {/* Slider fill */}
      <motion.rect
        x="28" y="134" height="5" rx="2.5" fill="#1a1a1a"
        animate={{ width: sliderX.map((v) => v - 28) }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Slider thumb — mirrors dot's x */}
      <motion.circle
        r="7.5" cy="136.5" fill="white" stroke="#1a1a1a" strokeWidth="1.6"
        animate={{ cx: sliderX }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
};

/**
 * Mindmaps
 * A central hub with 5 satellite nodes. Each connector draws in, each satellite
 * pops in with a spring, then a gentle breathing loop keeps it alive.
 */
const MindmapIllustration = () => {
  const nodes = [
    { cx: 60, cy: 40, r: 11 },
    { cx: 188, cy: 44, r: 13 },
    { cx: 42, cy: 118, r: 10 },
    { cx: 198, cy: 122, r: 12 },
    { cx: 124, cy: 22, r: 9 },
  ];

  const paths = [
    "M 120 82 Q 92 60 60 40",
    "M 120 82 Q 156 60 188 44",
    "M 120 82 Q 74 102 42 118",
    "M 120 82 Q 166 104 198 122",
    "M 120 82 Q 121 50 124 22",
  ];

  return (
    <svg viewBox="0 0 240 160" className="w-full h-full" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      {/* Soft halo behind the hub */}
      <circle cx="120" cy="82" r="62" fill="rgba(255,255,255,0.06)" />
      <circle cx="120" cy="82" r="40" fill="rgba(255,255,255,0.08)" />

      {/* Connectors */}
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="rgba(255,255,255,0.85)" strokeWidth="1.6" strokeLinecap="round" fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 + i * 0.12, ease: "easeOut" }}
        />
      ))}

      {/* Satellite nodes — pop in, then gently breathe */}
      {nodes.map((n, i) => (
        <motion.g
          key={`sat-${i}`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ transformOrigin: `${n.cx}px ${n.cy}px`, transformBox: "fill-box" as any }}
        >
          <motion.circle
            cx={n.cx} cy={n.cy} r={n.r}
            fill="rgba(255,255,255,0.4)" stroke="white" strokeWidth="1.5"
            animate={{ r: [n.r, n.r + 1.2, n.r] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          />
          <circle cx={n.cx} cy={n.cy} r={n.r * 0.35} fill="#1a1a1a" opacity="0.8" />
        </motion.g>
      ))}

      {/* Central hub */}
      <motion.circle
        cx="120" cy="82" r="20"
        fill="white" stroke="#1a1a1a" strokeWidth="1.8"
        animate={{ r: [20, 22, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Hub glyph: 4-pointed star */}
      <motion.path
        d="M 120 72 L 122 80 L 130 82 L 122 84 L 120 92 L 118 84 L 110 82 L 118 80 Z"
        fill="#1a1a1a"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ transformOrigin: "120px 82px", transformBox: "fill-box" as any }}
      />
    </svg>
  );
};

/**
 * Diagrams
 * Classic right-triangle figure with angle arc, right-angle marker, and geometric labels.
 * Hypotenuse is part of the triangle path — no duplicate overlay line.
 */
const DiagramIllustration = () => (
  <svg viewBox="0 0 240 160" className="w-full h-full" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
    {/* Faint grid */}
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <line
        key={`g-v-${i}`}
        x1={40 + i * 32} y1="16" x2={40 + i * 32} y2="142"
        stroke="rgba(26,26,26,0.07)" strokeWidth="0.6"
      />
    ))}
    {[0, 1, 2, 3].map((i) => (
      <line
        key={`g-h-${i}`}
        x1="24" y1={34 + i * 28} x2="216" y2={34 + i * 28}
        stroke="rgba(26,26,26,0.07)" strokeWidth="0.6"
      />
    ))}

    {/* Equation (top-left) */}
    <motion.text
      x="30" y="28" fill="#1a1a1a" fontSize="13" fontStyle="italic"
      fontFamily="'Georgia', 'Times New Roman', serif" fontWeight="500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.9 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      a² + b² = c²
    </motion.text>

    {/* Triangle */}
    <motion.path
      d="M 52 130 L 192 130 L 192 50 Z"
      stroke="white" strokeWidth="2.8" strokeLinejoin="round" strokeLinecap="round"
      fill="rgba(255,255,255,0.15)"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, ease: "easeInOut", delay: 0.1 }}
    />

    {/* Right angle marker at (192, 130) — opens into the triangle */}
    <motion.path
      d="M 180 130 L 180 118 L 192 118"
      stroke="white" strokeWidth="1.8" fill="none" strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 1.6 }}
    />

    {/* Angle θ arc at (52, 130). For legs a=140, b=80: angle ≈ 29.74°.
        At radius r=22, start on horizontal (74, 130); end on hypotenuse direction (71, 119). */}
    <motion.path
      d="M 74 130 A 22 22 0 0 0 71 119"
      stroke="#1a1a1a" strokeWidth="1.6" fill="none" strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 1.9 }}
    />

    {/* θ label inside the arc */}
    <motion.text
      x="81" y="126" fill="#1a1a1a" fontSize="11" fontStyle="italic"
      fontFamily="'Georgia', 'Times New Roman', serif"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 2.5 }}
    >θ</motion.text>

    {/* Leg labels */}
    <motion.text
      x="118" y="146" fill="#1a1a1a" fontSize="14" fontStyle="italic"
      fontFamily="'Georgia', 'Times New Roman', serif" fontWeight="600"
      initial={{ opacity: 0, y: 4 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 2.2 }}
    >a</motion.text>
    <motion.text
      x="200" y="94" fill="#1a1a1a" fontSize="14" fontStyle="italic"
      fontFamily="'Georgia', 'Times New Roman', serif" fontWeight="600"
      initial={{ opacity: 0, x: 4 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 2.35 }}
    >b</motion.text>
    <motion.text
      x="106" y="82" fill="white" fontSize="14" fontStyle="italic"
      fontFamily="'Georgia', 'Times New Roman', serif" fontWeight="700"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 2.5 }}
    >c</motion.text>

    {/* Vertex dots for polish */}
    <circle cx="52" cy="130" r="3" fill="#1a1a1a" />
    <circle cx="192" cy="130" r="3" fill="#1a1a1a" />
    <circle cx="192" cy="50" r="3" fill="#1a1a1a" />
  </svg>
);

/**
 * Memory
 * A brain-like node network representing the persistent knowledge graph / spaced repetition system.
 */
const MemoryIllustration = () => {
  const pulseNodes = [
    { cx: 60, cy: 50, r: 8 },
    { cx: 180, cy: 40, r: 10 },
    { cx: 40, cy: 110, r: 7 },
    { cx: 200, cy: 105, r: 9 },
    { cx: 130, cy: 30, r: 6 },
    { cx: 100, cy: 130, r: 8 },
    { cx: 170, cy: 130, r: 7 },
  ];

  const connections = [
    "M 120 80 L 60 50", "M 120 80 L 180 40", "M 120 80 L 40 110",
    "M 120 80 L 200 105", "M 120 80 L 130 30", "M 120 80 L 100 130",
    "M 120 80 L 170 130", "M 60 50 L 130 30", "M 180 40 L 200 105",
    "M 40 110 L 100 130", "M 170 130 L 200 105",
  ];

  return (
    <svg viewBox="0 0 240 160" className="w-full h-full" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      {/* Connections */}
      {connections.map((d, i) => (
        <motion.path
          key={i} d={d}
          stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
        />
      ))}

      {/* Satellite nodes with pulse */}
      {pulseNodes.map((n, i) => (
        <motion.circle
          key={i} cx={n.cx} cy={n.cy} r={n.r}
          fill="rgba(255,255,255,0.35)" stroke="white" strokeWidth="1.5"
          animate={{ r: [n.r, n.r + 1.5, n.r], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
        />
      ))}

      {/* Central hub — brain */}
      <motion.circle
        cx="120" cy="80" r="22"
        fill="white" stroke="#1a1a1a" strokeWidth="2"
        animate={{ r: [22, 24, 22] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Brain icon inside hub (Tabler) */}
      <motion.g
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ transformOrigin: "120px 80px", transformBox: "fill-box" as any }}
      >
        <g transform="translate(108, 68) scale(1)" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" />
          <path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" />
          <path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" />
          <path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" />
          <path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5" />
          <path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" />
        </g>
      </motion.g>
    </svg>
  );
};

/**
 * Desmos Graphs
 * Embedded Desmos-style graphing calculator with multiple colored curves and axis labels.
 */
const DesmosGraphIllustration = () => (
  <svg viewBox="0 0 240 160" className="w-full h-full" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
    {/* Panel */}
    <rect x="16" y="8" width="208" height="144" rx="10" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />

    {/* Grid */}
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <line key={`v${i}`} x1={48 + i * 32} y1="16" x2={48 + i * 32} y2="144" stroke="rgba(26,26,26,0.08)" strokeWidth="0.6" />
    ))}
    {[0, 1, 2, 3, 4].map((i) => (
      <line key={`h${i}`} x1="24" y1={30 + i * 26} x2="216" y2={30 + i * 26} stroke="rgba(26,26,26,0.08)" strokeWidth="0.6" />
    ))}

    {/* Axes */}
    <line x1="24" y1="82" x2="216" y2="82" stroke="rgba(26,26,26,0.5)" strokeWidth="1.4" />
    <line x1="120" y1="16" x2="120" y2="144" stroke="rgba(26,26,26,0.5)" strokeWidth="1.4" />

    {/* Parabola (blue) y = x² */}
    <motion.path
      d="M 40 140 Q 80 20 120 82 Q 160 140 200 20"
      stroke="#2d70b3" strokeWidth="2.8" strokeLinecap="round" fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    />

    {/* Sine wave (red) */}
    <motion.path
      d="M 24 82 Q 48 40 72 82 Q 96 124 120 82 Q 144 40 168 82 Q 192 124 216 82"
      stroke="#c74440" strokeWidth="2.4" strokeLinecap="round" fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
    />

    {/* Linear (green) */}
    <motion.path
      d="M 24 130 L 216 34"
      stroke="#388c46" strokeWidth="2" strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
    />

    {/* Axis labels */}
    <text x="210" y="78" fill="#1a1a1a" fontSize="11" fontStyle="italic" fontFamily="'Georgia', serif" opacity="0.7">x</text>
    <text x="124" y="22" fill="#1a1a1a" fontSize="11" fontStyle="italic" fontFamily="'Georgia', serif" opacity="0.7">y</text>
  </svg>
);

type CardConfig = {
  title: string;
  description: string;
  bg: string;
  shadow: string;
  illustration: React.ReactNode;
};

const cards: CardConfig[] = [
  {
    title: "Handwritten AI Notes",
    description: "Stroke-by-stroke notes in a handwritten style — equations, arrows, and pointers, drawn the way a real tutor would at the board.",
    bg: "bg-[#6b8280]",
    shadow: "hover:shadow-[#6b8280]/20",
    illustration: <HandwrittenIllustration />,
  },
  {
    title: "Interactives",
    description: "Embedded Desmos widgets, MCQs, and draggable graphs. Move the slider and watch the math respond — right on the canvas.",
    bg: "bg-[#8ebf9e]",
    shadow: "hover:shadow-[#8ebf9e]/20",
    illustration: <InteractivesIllustration />,
  },
  {
    title: "Mindmaps",
    description: "Auto-generated concept maps that tie every topic you've learned into one visual web — so nothing ever feels disconnected.",
    bg: "bg-[#7a9eb1]",
    shadow: "hover:shadow-[#7a9eb1]/20",
    illustration: <MindmapIllustration />,
  },
  {
    title: "Diagrams",
    description: "Visual explanations, labeled figures, and geometry drawn by the AI — always accurate, always tied to the lesson at hand.",
    bg: "bg-[#c697c9]",
    shadow: "hover:shadow-[#c697c9]/20",
    illustration: <DiagramIllustration />,
  },
  {
    title: "Memory",
    description: "A persistent knowledge graph tracks everything you've mastered, every gap, and every misconception — so the AI never forgets where you left off.",
    bg: "bg-[#b07d62]",
    shadow: "hover:shadow-[#b07d62]/20",
    illustration: <MemoryIllustration />,
  },
  {
    title: "Desmos Graphs",
    description: "Live, interactive Desmos graphs embedded right on the canvas. Plot functions, drag points, and explore math visually in real time.",
    bg: "bg-[#5a8a6e]",
    shadow: "hover:shadow-[#5a8a6e]/20",
    illustration: <DesmosGraphIllustration />,
  },
];

export default function Roles() {
  return (
    <section id="roles" className="py-32 px-6 bg-[#9ca3af]/10">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#a3a3a3] text-lg mb-4">Lives on the Whiteboard</p>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-medium mb-6 max-w-3xl leading-tight">
          Writing. Drawing.<br/>Connecting. Teaching.
        </h2>
        <p className="text-xl text-[#a3a3a3] max-w-2xl mb-16">
          Every lesson shows up as handwriting, sketches, and visual maps on the canvas — never as a paragraph of chat.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`${card.bg} rounded-[2rem] p-8 md:p-10 relative overflow-hidden group flex flex-col min-h-[460px] hover:shadow-2xl ${card.shadow} transition-shadow duration-300`}
            >
              <h3 className="text-3xl md:text-4xl font-medium mb-5 text-[#1a1a1a] relative z-10">{card.title}</h3>
              <p className="text-base md:text-lg text-[#1a1a1a]/80 max-w-sm leading-relaxed relative z-10">
                {card.description}
              </p>

              <div className="mt-auto pt-6 h-48 md:h-56 -mx-2 -mb-2 relative z-0">
                {card.illustration}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
