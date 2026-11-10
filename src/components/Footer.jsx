import React from 'react';
import { Heart, Sparkles, QrCode, FileText, ArrowUp } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';
import { triggerGrandCelebration } from './ParticlesBackground';

export default function Footer({ onOpenFlyer, onOpenQR }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-950 border-t border-gold-500/20 pt-16 pb-12 overflow-hidden">
      
      {/* Golden top hairline glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Left Brand */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2 text-gold-400">
              <Sparkles className="w-5 h-5 text-gold-400" />
              <span className="font-serif font-black tracking-widest text-lg text-white">
                FRESHERS 2026
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              &ldquo;{eventConfig.slogan}&rdquo;
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300 font-medium">
            <a href="#welcome" className="hover:text-gold-400 transition">
              Welcome
            </a>
            <button 
              onClick={() => {
                triggerGrandCelebration();
                onOpenFlyer();
              }}
              className="hover:text-gold-400 transition flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-purple-400" />
              <span>Flyer</span>
            </button>
            <a href="#highlights" className="hover:text-gold-400 transition">
              Highlights
            </a>
            <a href="#schedule" className="hover:text-gold-400 transition">
              Schedule
            </a>
            <button 
              onClick={onOpenQR}
              className="hover:text-gold-400 transition flex items-center gap-1.5 text-gold-400"
            >
              <QrCode className="w-4 h-4" />
              <span>QR Code</span>
            </button>
          </div>

          {/* Right: Scroll to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 hover:text-white hover:bg-gold-500/20 transition shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Bottom Credits with Master Prompt Requirement */}
        <div className="pt-8 text-center space-y-2">
          <p className="font-serif text-base sm:text-lg font-bold tracking-wider text-slate-200 flex items-center justify-center gap-2">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
            <span className="text-gradient-gold">by Your Seniors</span>
          </p>
          <p className="text-xs text-slate-500">
            {eventConfig.collegeName} • Official Freshers Welcome Portal
          </p>
        </div>

      </div>
    </footer>
  );
}
