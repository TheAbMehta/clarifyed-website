import React, { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import LogoCloud from './components/sections/LogoCloud';
import ClarifyedFeatures from './components/sections/ClarifyedFeatures';
import Platform from './components/sections/Platform';
import Roles from './components/sections/Roles';
import Architecture from './components/sections/Architecture';
import ThinkDifferent from './components/sections/ThinkDifferent';
import Assessment from './components/sections/Assessment';
import Testimonials from './components/sections/Testimonials';
import Team from './components/sections/Team';
import CaseStudy from './components/sections/CaseStudy';
import Integrations from './components/sections/Integrations';
import CTA from './components/sections/CTA';
import VideoDemos from './components/sections/VideoDemos';
import FAQ from './components/sections/FAQ';
import Terms from './components/pages/Terms';
import PrivacyPolicy from './components/pages/PrivacyPolicy';

type Route = 'home' | 'terms' | 'privacy';

function resolveRoute(hash: string): Route {
  if (hash === '#/terms') return 'terms';
  if (hash === '#/privacy-policy') return 'privacy';
  return 'home';
}

export default function App() {
  const [route, setRoute] = useState<Route>(() =>
    typeof window === 'undefined' ? 'home' : resolveRoute(window.location.hash)
  );

  // Keep route in sync with hash changes, and reset scroll when navigating between pages.
  useEffect(() => {
    const sync = () => {
      const next = resolveRoute(window.location.hash);
      setRoute((prev) => {
        if (prev !== next) window.scrollTo(0, 0);
        return next;
      });
    };
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  // Smooth scrolling for in-page anchor links. Route hashes (#/…) are left to the router above.
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (
        anchor &&
        anchor.hash &&
        anchor.hash.startsWith('#') &&
        !anchor.hash.startsWith('#/') &&
        anchor.origin === window.location.origin
      ) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          // Adjust offset for the fixed header
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f4f4f0] font-sans selection:bg-[#e8705b] selection:text-white">
      <a href="#main-content" className="skip-to-content shadow-lg px-4 py-2 bg-[#e8705b] text-white rounded-full absolute -top-16 left-4 focus:top-4 transition-all z-50 focus:outline-none focus-visible:ring-4 ring-white/50">Skip to content</a>

      <Navbar />

      <main id="main-content" className="pt-24 sm:pt-32">
        {route === 'home' && (
          <>
            <Hero />
            <LogoCloud />
            <ClarifyedFeatures />
            <Platform />
            <Roles />
            <Architecture />
            <VideoDemos />
            <ThinkDifferent />
            <Assessment />
            <Testimonials />
            <Team />
            <CaseStudy />
            <Integrations />
            <CTA />
            <FAQ />
          </>
        )}
        {route === 'terms' && <Terms />}
        {route === 'privacy' && <PrivacyPolicy />}
      </main>

      <Footer />
    </div>
  );
}
