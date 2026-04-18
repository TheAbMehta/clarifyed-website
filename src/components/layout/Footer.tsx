import React, { useState } from 'react';
import { Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

// X (formerly Twitter) brand mark — lucide does not ship this glyph.
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailLoading(true);
    setEmailError(null);

    const form = e.currentTarget;
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;

    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || import.meta.env.VITE_EMAILJS_SERVICE_ID === 'your_service_id') {
      setEmailError('Email service not configured yet.');
      setEmailLoading(false);
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { subscriber_email: emailInput.value },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setEmailSubmitted(true);
    } catch {
      setEmailError('Something went wrong. Please try again.');
    } finally {
      setEmailLoading(false);
    }
  };

  return (
    <footer id="company" className="relative bg-[#0d0d0d] pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* Premium ambient background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 md:gap-8 mb-24">
          
          {/* Brand Col */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-8 pr-0 md:pr-12">
            <img src={`${import.meta.env.BASE_URL}Footer_clarifyed.png`} alt="Clarifyed Logo" className="h-20 w-auto object-contain -ml-2 self-start" />
            <p className="text-xl text-[#a3a3a3] font-light leading-relaxed">
              Whiteboard-native AI tutoring.<br/>Real learning, delivered stroke by stroke.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.linkedin.com/company/teenageworks?originalSubdomain=in" target="_blank" rel="noopener noreferrer" aria-label="Teenage Works on LinkedIn" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-white/70">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/teenage_works" target="_blank" rel="noopener noreferrer" aria-label="Teenage Works on X" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-white/70">
                <XIcon className="w-[18px] h-[18px]" />
              </a>
              <a href="https://instagram.com/clarifyed.ai" target="_blank" rel="noopener noreferrer" aria-label="Clarifyed on Instagram" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-white/70">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@TeenageWorks" target="_blank" rel="noopener noreferrer" aria-label="Teenage Works on YouTube" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-white/70">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Cols */}
          <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-sm font-semibold tracking-wider text-white uppercase mb-8 opacity-90">Resources</h4>
              <ul className="space-y-5 text-[#a3a3a3]">
                <li><a href="#resources" className="hover:text-white hover:translate-x-1 block transition-all">Blog</a></li>
                <li><a href="#resources" className="hover:text-white hover:translate-x-1 block transition-all">Help Center</a></li>
                <li><a href="#resources" className="hover:text-white hover:translate-x-1 block transition-all">Trust Center</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold tracking-wider text-white uppercase mb-8 opacity-90">Company</h4>
              <ul className="space-y-5 text-[#a3a3a3]">
                <li><a href="https://teenage.works/#team" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-1 block transition-all">About Us</a></li>
                <li><a href="#/privacy-policy" className="hover:text-white hover:translate-x-1 block transition-all">Privacy Policy</a></li>
                <li><a href="#/terms" className="hover:text-white hover:translate-x-1 block transition-all">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Subscribe & Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          
          <div className="max-w-md w-full">
            <h4 className="text-xl font-medium mb-3 text-white">Join the future of learning.</h4>
            {emailSubmitted ? (
              <p className="text-[#8ebf9e] text-lg font-medium mt-4">Thanks! You're on the list.</p>
            ) : (
              <form onSubmit={handleEmailSubmit} className="relative mt-4">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  disabled={emailLoading}
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-5 pr-14 sm:pl-6 sm:pr-32 py-4 text-white focus:outline-none focus:border-[#e8705b]/50 focus:bg-white/10 transition-all disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={emailLoading}
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#e8705b] hover:bg-[#d6604d] text-white px-4 sm:px-6 rounded-full font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {emailLoading ? '...' : (
                    <>
                      <span className="hidden sm:inline">Subscribe</span>
                      <ArrowRight className="w-4 h-4 sm:ml-1 sm:-mr-1" />
                    </>
                  )}
                </button>
                {emailError && <p className="text-[#e8705b] text-sm mt-3 absolute -bottom-6 left-4">{emailError}</p>}
              </form>
            )}
          </div>
          
          <div className="flex flex-col md:items-end gap-3 text-sm text-[#a3a3a3]">
            <a
              href="https://teenage.works/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              aria-label="A product of Teenage Works"
            >
              <span className="text-xs uppercase tracking-wider text-[#a3a3a3]">A product of</span>
              <img src={`${import.meta.env.BASE_URL}tw_logo.png`} alt="Teenage Works" className="h-7 w-auto" />
            </a>
            <p>© 2026 Teenage Works Private Limited.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
