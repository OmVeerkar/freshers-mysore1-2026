import React, { useState } from 'react';
import { 
  Sparkles, 
  Download, 
  Maximize2, 
  Share2, 
  Calendar, 
  Clock, 
  MapPin, 
  Check
} from 'lucide-react';
import { eventConfig } from '../config/eventConfig';
import { triggerGrandCelebration } from './ParticlesBackground';

export default function FlyerSection({ onOpenFlyer, onOpenQR, onOpenShare }) {
  const flyer = eventConfig.flyer;
  const flyerSrc = flyer.src || '/assets/florenza-flyer.jpg';
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    triggerGrandCelebration();
    const link = document.createElement('a');
    link.href = flyerSrc;
    link.download = flyer.downloadFileName || 'Florenza-Freshers-Party-2026.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="flyer" className="py-20 md:py-28 relative overflow-hidden">
      
      {/* Background Decorative Glow Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/60 border border-rose-400/40 text-rose-300 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>OFFICIAL INVITATION FLYER</span>
            <Sparkles className="w-4 h-4 text-gold-400" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            FLORENZA <span className="text-gradient-gold">FRESHERS PARTY</span>
          </h2>
          
          <p className="font-serif italic text-lg sm:text-2xl text-gold-300 tracking-wide mb-3">
            &ldquo;Where Fresh Roots Begin to Soar&rdquo;
          </p>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            To the new faces &amp; fresh beginnings: Your seniors cordially invite you to join us for an unforgettable celebration.
          </p>
        </div>

        {/* Main Flyer Display & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Flyer Card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative group w-full max-w-md sm:max-w-lg">
              
              {/* Outer Golden & Rose Aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-gold-400/40 via-rose-400/40 to-amber-500/40 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Main Flyer Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-gold-400/50 bg-navy-950 shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]">
                <img 
                  src={flyerSrc} 
                  alt="Florenza Freshers Party 2026 Invitation Flyer"
                  className="w-full h-auto object-contain cursor-pointer"
                  onClick={() => {
                    triggerGrandCelebration();
                    onOpenFlyer();
                  }}
                  loading="eager"
                />

                {/* Hover overlay hint */}
                <div 
                  onClick={() => {
                    triggerGrandCelebration();
                    onOpenFlyer();
                  }}
                  className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center cursor-pointer"
                >
                  <div className="px-5 py-2.5 rounded-full bg-navy-900/90 border border-gold-400 text-gold-300 font-bold text-sm flex items-center gap-2 shadow-gold-glow">
                    <Maximize2 className="w-4 h-4 text-gold-400" />
                    <span>Click to Zoom &amp; Inspect</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Flyer Quick Actions Bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 w-full max-w-md sm:max-w-lg">
              <button
                onClick={() => {
                  triggerGrandCelebration();
                  onOpenFlyer();
                }}
                className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-navy-900/90 hover:bg-navy-800 border border-gold-500/40 text-gold-300 hover:text-white font-bold text-xs sm:text-sm transition shadow-sm"
              >
                <Maximize2 className="w-4 h-4 text-gold-400" />
                <span>Fullscreen Zoom</span>
              </button>

              <button
                onClick={handleDownload}
                className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-navy-950 font-black text-xs sm:text-sm transition shadow-gold-glow"
              >
                {downloadSuccess ? <Check className="w-4 h-4 text-navy-950" /> : <Download className="w-4 h-4 text-navy-950" />}
                <span>{downloadSuccess ? "Downloaded!" : "Download Flyer"}</span>
              </button>

              {onOpenShare && (
                <button
                  onClick={onOpenShare}
                  className="p-3 rounded-xl bg-navy-900/90 hover:bg-navy-800 border border-slate-700 hover:border-gold-500/40 text-slate-300 hover:text-gold-400 transition"
                  title="Share Invitation Flyer"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Key Details & Invitation Poem (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Elegant Floral Poem Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-gold-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 text-gold-400 font-serif font-bold text-sm tracking-widest uppercase mb-4">
                <Sparkles className="w-4 h-4" />
                <span>The Seniors&apos; Invitation</span>
              </div>

              <blockquote className="font-serif italic text-slate-200 text-base sm:text-lg leading-relaxed mb-6 space-y-3">
                <p>
                  &ldquo;Every grand tree was once a seed that refused to hide in the dirt.
                </p>
                <p>
                  Step into the light, embrace your season, and welcome to your new soil.
                </p>
                <p className="text-gold-300 font-semibold not-italic font-sans text-base">
                  As your journey begins, let&apos;s bloom together.&rdquo;
                </p>
              </blockquote>

              <div className="pt-4 border-t border-gold-500/20 text-xs sm:text-sm text-slate-400 font-medium">
                Official Freshers Welcome Celebration • {eventConfig.collegeName || "JSS CACS MYSURU"}
              </div>
            </div>

            {/* Event Key Highlights Cards */}
            <div className="space-y-3">
              
              {/* Date & Time Card */}
              <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800/80 flex items-center gap-4 hover:border-gold-500/40 transition">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-gold-400 block">
                    DATE &amp; DAY
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white">
                    November 21st
                  </span>
                </div>
              </div>

              {/* Time Card */}
              <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800/80 flex items-center gap-4 hover:border-gold-500/40 transition">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-rose-400" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-rose-400 block">
                    REPORTING TIME
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white">
                    At 10:00 AM
                  </span>
                </div>
              </div>

              {/* Venue Card */}
              <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800/80 flex items-center gap-4 hover:border-gold-500/40 transition">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-purple-400 block">
                    CELEBRATION VENUE
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white">
                    At The Department of Botany
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Join us for the celebration!
                  </span>
                </div>
              </div>

            </div>

            {/* QR / Share Call to action */}
            {onOpenQR && (
              <div className="pt-2">
                <button
                  onClick={onOpenQR}
                  className="w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-2xl bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/40 text-purple-200 hover:text-white font-bold text-xs sm:text-sm transition"
                >
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  <span>Get QR Code for this Invitation</span>
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}