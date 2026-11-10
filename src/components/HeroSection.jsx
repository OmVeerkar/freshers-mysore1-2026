import React from 'react';
import { Sparkles, Heart, FileText, QrCode, ArrowDown, Star, PartyPopper } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';
import { triggerGrandCelebration } from './ParticlesBackground';

export default function HeroSection({ onOpenFlyer, onOpenQR }) {
  const handleFlyerClick = () => {
    triggerGrandCelebration();
    onOpenFlyer();
  };

  return (
    <section id="welcome" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Radial Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[850px] h-[400px] sm:h-[600px] bg-purple-900/25 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top VIP Invitation Pill */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-950/80 via-navy-900/90 to-purple-950/80 border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-bold tracking-widest uppercase mb-8 shadow-gold-glow animate-glow-pulse">
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span>OFFICIAL FRESHERS INVITATION • {eventConfig.batchTitle || "CLASS OF 2026"}</span>
          <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
        </div>

        {/* Grand Headline (Master Prompt requirement) */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] mb-8">
          <span className="block text-slate-100 font-sans text-xl sm:text-2xl md:text-3xl font-extrabold tracking-widest uppercase text-gold-400/90 mb-2">
            WELCOME JUNIORS
          </span>
          <span className="text-gradient-gold drop-shadow-md">
            {eventConfig.welcomeHeadline}
          </span>
        </h1>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-gold-400/60" />
          <div className="w-3 h-3 rotate-45 border border-gold-400 bg-gold-500/30" />
          <Star className="w-5 h-5 text-gold-400 fill-gold-400" />
          <div className="w-3 h-3 rotate-45 border border-gold-400 bg-gold-500/30" />
          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-gold-400/60" />
        </div>

        {/* Main Welcome Letter Card (Master Prompt Exact Text Preserved) */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 md:p-12 mb-10 text-left relative overflow-hidden group">
          
          {/* Subtle Golden Glow Corner Ornaments */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl group-hover:bg-gold-500/20 transition-all" />
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-600/15 rounded-full blur-2xl group-hover:bg-purple-600/30 transition-all" />

          {/* Letter Content */}
          <div className="space-y-5 text-slate-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed relative z-10">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-gold-300">
              {eventConfig.welcomeParagraphs[0]}
            </p>

            <p className="text-slate-200/95">
              {eventConfig.welcomeParagraphs[1]}
            </p>

            <p className="text-slate-200/95">
              {eventConfig.welcomeParagraphs[2]}
            </p>

            <p className="text-slate-200/95">
              {eventConfig.welcomeParagraphs[3]}
            </p>

            <p className="text-slate-100 font-semibold text-lg sm:text-xl bg-purple-950/40 p-4 rounded-2xl border border-purple-500/20">
              {eventConfig.welcomeParagraphs[4]}
            </p>
          </div>

          {/* Memorable Slogan Banner (Master Prompt requirement) */}
          <div className="mt-8 pt-8 border-t border-gold-500/25 text-center">
            <div className="inline-block py-3 px-4 sm:px-6 rounded-2xl bg-gradient-to-r from-purple-900/60 via-navy-900/90 to-purple-900/60 border border-gold-500/40 shadow-inner">
              <p className="font-serif text-base sm:text-xl md:text-2xl font-bold tracking-wide text-gradient-gold">
                &ldquo;{eventConfig.slogan}&rdquo;
              </p>
            </div>

            {/* Signature (Master Prompt requirement) */}
            <div className="mt-6 flex items-center justify-center gap-2 text-gold-400 font-serif font-black tracking-widest text-sm sm:text-base uppercase">
              <span>{eventConfig.signature}</span>
            </div>
          </div>
        </div>

        {/* ============================================================= */}
        {/* SECTION 3: MAIN ACTION BUTTON – VIEW FLYER                    */}
        {/* Large, attractive, animated button with high visual impact   */}
        {/* ============================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6">
          <button
            onClick={handleFlyerClick}
            className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-5 rounded-2xl font-black text-lg sm:text-xl tracking-wider uppercase text-navy-950 btn-gold-glow transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gold-400/50"
          >
            {/* Pulsing ring aura */}
            <span className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gold-400 to-amber-500 opacity-60 blur-md group-hover:opacity-100 transition duration-300 animate-pulse" />
            
            <span className="relative flex items-center gap-3">
              <span className="text-2xl animate-bounce">🎉</span>
              <span className="text-navy-950 font-black">VIEW THE FRESHERS FLYER</span>
              <Sparkles className="w-5 h-5 text-navy-950" />
            </span>
          </button>

          <button
            onClick={onOpenQR}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-5 rounded-2xl font-bold text-base sm:text-lg tracking-wider uppercase text-slate-200 bg-navy-900/80 hover:bg-navy-800 border border-gold-500/40 hover:border-gold-400 transition-all shadow-lg hover:shadow-gold-glow"
          >
            <QrCode className="w-5 h-5 text-gold-400" />
            <span>Scan &amp; Save QR</span>
          </button>
        </div>

        {/* Scroll hint */}
        <div className="mt-14 flex flex-col items-center justify-center gap-2 text-slate-400 text-xs tracking-widest uppercase">
          <span>Explore Celebrations Below</span>
          <ArrowDown className="w-4 h-4 text-gold-400 animate-bounce" />
        </div>

      </div>
    </section>
  );
}
