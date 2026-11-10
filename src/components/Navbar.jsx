import React, { useState } from 'react';
import { Sparkles, QrCode, FileText, Share2, Menu, X, Calendar } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';
import { triggerGrandCelebration } from './ParticlesBackground';

export default function Navbar({ onOpenFlyer, onOpenQR, onOpenShare }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-navy-950/80 backdrop-blur-xl border-b border-gold-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a 
          href="#home" 
          onClick={triggerGrandCelebration}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-400 to-amber-600 p-[1.5px] shadow-gold-glow group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-navy-900 rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-gold-400 animate-pulse" />
            </div>
          </div>
          <div className="text-left">
            <span className="block text-xs font-bold tracking-widest text-gold-400 uppercase font-serif">
              {eventConfig.collegeName || "COLLEGE FRESHERS"}
            </span>
            <span className="block text-base sm:text-lg font-black tracking-tight text-white group-hover:text-gold-300 transition">
              FRESHERS 2026
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a 
            href="#welcome" 
            className="text-slate-300 hover:text-gold-400 transition"
          >
            Welcome Message
          </a>
          <button 
            onClick={onOpenFlyer}
            className="text-slate-300 hover:text-gold-400 transition flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4 text-purple-400" />
            Freshers Flyer
          </button>
          <a 
            href="#highlights" 
            className="text-slate-300 hover:text-gold-400 transition"
          >
            Party Highlights
          </a>
          <a 
            href="#schedule" 
            className="text-slate-300 hover:text-gold-400 transition flex items-center gap-1.5"
          >
            <Calendar className="w-4 h-4 text-gold-400" />
            Schedule
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenShare}
            className="p-2.5 rounded-full bg-navy-800/80 border border-slate-700/60 text-slate-300 hover:text-gold-400 hover:border-gold-500/40 transition"
            title="Share with batchmates"
          >
            <Share2 className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenQR}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/60 to-navy-900/90 border border-gold-500/40 text-gold-300 hover:text-white hover:border-gold-400 transition shadow-sm text-xs font-bold tracking-wider uppercase"
          >
            <QrCode className="w-4 h-4 text-gold-400" />
            <span>Scan / Print QR</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-navy-800 border border-slate-700 text-slate-300 hover:text-gold-400"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950/95 border-b border-gold-500/20 px-6 py-6 space-y-4 backdrop-blur-2xl">
          <a
            href="#welcome"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-gold-400 py-1 font-medium"
          >
            Welcome Message
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenFlyer();
            }}
            className="w-full text-left flex items-center gap-2 text-slate-200 hover:text-gold-400 py-1 font-medium"
          >
            <FileText className="w-4 h-4 text-purple-400" />
            Freshers Flyer
          </button>
          <a
            href="#highlights"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-gold-400 py-1 font-medium"
          >
            Party Highlights
          </a>
          <a
            href="#schedule"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-gold-400 py-1 font-medium"
          >
            Schedule & Venue
          </a>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQR();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gold-500 text-navy-950 font-bold text-sm shadow-gold-glow"
            >
              <QrCode className="w-4 h-4" />
              <span>Get Website QR Code</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShare();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-navy-800 border border-slate-700 text-slate-200 font-semibold text-sm"
            >
              <Share2 className="w-4 h-4 text-purple-400" />
              <span>Share With Friends</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
