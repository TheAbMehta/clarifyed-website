import React from 'react';
import { Marquee } from '../ui/marquee';

type Brand = {
  name: string;
  // Rendered inside a 96x96 / 64x64 box. The icon is expected to size itself via width/height 100%.
  icon: React.ReactNode;
};

// YouTube — red rounded rect with white play triangle (official brand mark).
const YouTubeIcon = (
  <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" aria-hidden="true">
    <rect x="4" y="14" width="56" height="36" rx="9" fill="#FF0000" />
    <polygon points="27,24 27,40 42,32" fill="#ffffff" />
  </svg>
);

// Desmos — dark teal square with a sine-like curve (approximation of the Desmos calculator mark).
const DesmosIcon = (
  <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" aria-hidden="true">
    <rect x="6" y="6" width="52" height="52" rx="10" fill="#107EB9" />
    <path
      d="M12 36 C 20 16, 28 16, 32 32 S 44 48, 52 28"
      stroke="#ffffff"
      strokeWidth="3.5"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

// Lectures — graduation cap.
const LecturesIcon = (
  <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" aria-hidden="true">
    <path d="M32 12 L6 26 L32 40 L58 26 Z" fill="#1f3b2d" stroke="#e8e3d5" strokeWidth="1.5" />
    <path d="M16 32 V44 Q32 54 48 44 V32" fill="none" stroke="#1f3b2d" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M54 26 V42" stroke="#1f3b2d" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="54" cy="44" r="2.5" fill="#1f3b2d" />
  </svg>
);

// Textbook PDFs — red book with "PDF" label.
const TextbookPDFIcon = (
  <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" aria-hidden="true">
    <path
      d="M14 8 H 46 A 4 4 0 0 1 50 12 V 52 A 4 4 0 0 1 46 56 H 14 A 0 0 0 0 1 14 56 Z"
      fill="#c23b22"
    />
    <path d="M14 8 V 56" stroke="#8a2416" strokeWidth="2" />
    <rect x="20" y="32" width="24" height="14" rx="2" fill="#ffffff" />
    <text
      x="32"
      y="43"
      textAnchor="middle"
      fontFamily="Outfit, sans-serif"
      fontSize="9"
      fontWeight="800"
      fill="#c23b22"
    >
      PDF
    </text>
  </svg>
);

// Notes — lined notebook with a pencil.
const NotesIcon = (
  <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" aria-hidden="true">
    <rect x="12" y="8" width="36" height="48" rx="3" fill="#f4f1e6" stroke="#1a1a1a" strokeWidth="2" />
    <path d="M20 20 H 42 M20 28 H 42 M20 36 H 42 M20 44 H 34" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />
    <path
      d="M44 36 L 56 24 L 60 28 L 48 40 L 42 42 Z"
      fill="#e8705b"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

// Audio — waveform bars.
const AudioIcon = (
  <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" aria-hidden="true">
    <g stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round">
      <line x1="12" y1="32" x2="12" y2="32" />
      <line x1="20" y1="24" x2="20" y2="40" />
      <line x1="28" y1="16" x2="28" y2="48" />
      <line x1="36" y1="12" x2="36" y2="52" />
      <line x1="44" y1="20" x2="44" y2="44" />
      <line x1="52" y1="26" x2="52" y2="38" />
    </g>
  </svg>
);

const brands: Brand[] = [
  { name: 'Desmos', icon: DesmosIcon },
  { name: 'YouTube', icon: YouTubeIcon },
  { name: 'Lectures', icon: LecturesIcon },
  { name: 'Textbook PDFs', icon: TextbookPDFIcon },
  { name: 'Notes', icon: NotesIcon },
  { name: 'Audio', icon: AudioIcon },
];

const row1 = brands.slice(0, 3);
const row2 = brands.slice(3, 6);

export default function Integrations() {
  return (
    <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center overflow-hidden">
      <div className="z-10 relative">
        <p className="text-[#a3a3a3] text-lg mb-4">Plugs in. Levels up.</p>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium mb-6 sm:mb-8 leading-tight text-white">
          Works with what<br/>you already<br/>use.
        </h2>
        <p className="text-lg sm:text-xl text-[#a3a3a3] max-w-md">
          YouTube, Desmos, lectures, textbook PDFs, notes, audio — everything you learn from, pulled onto one whiteboard.
        </p>
      </div>

      <div className="relative h-[340px] sm:h-[400px] md:h-[600px] w-full flex items-center justify-end -mx-6 md:mx-0 pr-0 md:-mr-12 lg:-mr-24">
        <div
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 100%)',
            WebkitMaskImage: '-webkit-linear-gradient(left, transparent, black 15%, black 100%)',
          }}
          className="w-full h-full flex flex-col justify-center gap-4 md:gap-5"
        >
          <div className="w-[120%] absolute -right-[10%] flex flex-col gap-4 md:gap-5">
            {/* Row 1 */}
            <Marquee duration={35} repeat={5} className="[--gap:1rem] md:[--gap:1.25rem]">
              {row1.map((brand, i) => (
                <div
                  key={`r1-${i}`}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-[200px] md:h-[200px] shrink-0 bg-[#f4f1e6] rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-center justify-center gap-2 sm:gap-3 transition-transform hover:scale-105 cursor-pointer shadow-lg overflow-hidden group"
                >
                  {brand.icon}
                  <span className="text-[#1a1a1a] font-semibold text-sm md:text-base tracking-tight opacity-90 group-hover:opacity-100 transition-opacity">
                    {brand.name}
                  </span>
                </div>
              ))}
            </Marquee>

            {/* Row 2 */}
            <Marquee duration={40} repeat={5} reverse className="[--gap:1rem] md:[--gap:1.25rem]">
              {row2.map((brand, i) => (
                <div
                  key={`r2-${i}`}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-[200px] md:h-[200px] shrink-0 bg-[#f4f1e6] rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-center justify-center gap-2 sm:gap-3 transition-transform hover:scale-105 cursor-pointer shadow-lg overflow-hidden group"
                >
                  {brand.icon}
                  <span className="text-[#1a1a1a] font-semibold text-sm md:text-base tracking-tight opacity-90 group-hover:opacity-100 transition-opacity">
                    {brand.name}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
