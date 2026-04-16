import React, { useState } from 'react';
import { Linkedin, Twitter, Facebook, Instagram, Youtube, User, BookOpen, Building2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
    <footer id="company" className="bg-[#1a1a1a] pt-32 pb-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="28" height="20" rx="3" stroke="#f4f4f0" strokeWidth="3" fill="none"/>
                <path d="M12 16 L18 12 L24 16 L30 10" stroke="#e8705b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <line x1="14" y1="30" x2="26" y2="30" stroke="#f4f4f0" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              <span className="text-3xl font-medium tracking-tight">Clarifyed</span>
            </div>
            <p className="text-[#a3a3a3] mb-8">
              Whiteboard-native AI tutoring.<br/>Real learning, delivered.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-medium text-[#a3a3a3] mb-6">For</h4>
            <ul className="space-y-4 text-[#f4f4f0]/80">
              <li><a href="#roles" className="flex items-center gap-2 hover:text-white transition-colors"><User className="w-4 h-4" /> Students</a></li>
              <li><a href="#roles" className="flex items-center gap-2 hover:text-white transition-colors"><User className="w-4 h-4" /> Teachers</a></li>
              <li><a href="#roles" className="flex items-center gap-2 hover:text-white transition-colors"><User className="w-4 h-4" /> Schools</a></li>
              <li><a href="#roles" className="flex items-center gap-2 hover:text-white transition-colors"><User className="w-4 h-4" /> Parents</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium text-[#a3a3a3] mb-6">Knowledge</h4>
            <ul className="space-y-4 text-[#f4f4f0]/80">
              <li><a href="#resources" className="flex items-center gap-2 hover:text-white transition-colors"><BookOpen className="w-4 h-4" /> Blog</a></li>
              <li><a href="#resources" className="flex items-center gap-2 hover:text-white transition-colors"><BookOpen className="w-4 h-4" /> Trust Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium text-[#a3a3a3] mb-6">Company</h4>
            <ul className="space-y-4 text-[#f4f4f0]/80">
              <li><a href="#company" className="flex items-center gap-2 hover:text-white transition-colors"><Building2 className="w-4 h-4" /> About Us</a></li>
              <li><a href="#company" className="flex items-center gap-2 hover:text-white transition-colors"><Building2 className="w-4 h-4" /> Careers</a></li>
              <li><a href="#company" className="flex items-center gap-2 hover:text-white transition-colors"><Building2 className="w-4 h-4" /> Partners</a></li>
              <li><a href="#privacy-policy" className="flex items-center gap-2 hover:text-white transition-colors"><Building2 className="w-4 h-4" /> Privacy Policy</a></li>
              <li><a href="#terms" className="flex items-center gap-2 hover:text-white transition-colors"><Building2 className="w-4 h-4" /> Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-md w-full">
            <h4 className="text-3xl font-medium mb-2">Stay Updated</h4>
            <p className="text-[#a3a3a3] mb-6">Get the latest on AI-powered learning and whiteboard tutoring.</p>
            {emailSubmitted ? (
              <p className="text-[#8ebf9e] text-lg font-medium">Thanks! You're on the list.</p>
            ) : (
              <form onSubmit={handleEmailSubmit} className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <input type="email" required placeholder="Your email" aria-label="Email address" disabled={emailLoading} className="bg-transparent border border-white/20 rounded-lg px-4 py-3 flex-1 focus:outline-none focus:border-[#e8705b] transition-colors focus-visible:outline-2 focus-visible:outline-[#e8705b] focus-visible:outline-offset-2 disabled:opacity-50" />
                  <button type="submit" disabled={emailLoading} className="bg-[#f4f4f0] text-[#1a1a1a] px-6 py-3 rounded-lg font-medium hover:bg-white transition-colors focus-visible:outline-2 focus-visible:outline-[#e8705b] focus-visible:outline-offset-2 disabled:opacity-50">
                    {emailLoading ? 'Sending...' : 'Subscribe'}
                  </button>
                </div>
                {emailError && <p className="text-[#e8705b] text-sm">{emailError}</p>}
              </form>
            )}
          </div>
          
          <p className="text-[#f4f4f0] text-lg">
            © 2026 Teenage Works Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
