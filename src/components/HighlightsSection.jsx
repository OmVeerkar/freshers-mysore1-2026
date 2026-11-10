import React from 'react';
import { 
  Music, 
  Crown, 
  Gamepad2, 
  Utensils, 
  Camera, 
  HeartHandshake, 
  Sparkles 
} from 'lucide-react';
import { triggerGrandCelebration } from './ParticlesBackground';

const highlights = [
  {
    icon: Music,
    tag: "BEATS & BASS",
    title: "High-Energy DJ & Dance Floor",
    desc: "An electric musical journey with top chartbusters, pulsating laser lights, and smoke effects to dance your heart out.",
    color: "from-purple-500/20 to-indigo-500/10",
    border: "border-purple-500/30",
    iconColor: "text-purple-400"
  },
  {
    icon: Crown,
    tag: "THE ROYAL CROWNING",
    title: "Mr. & Miss Fresher 2026",
    desc: "The spotlight awaits you! Show off your charisma, wit, and runway presence to win the coveted royal crown and prizes.",
    color: "from-amber-500/20 to-gold-500/10",
    border: "border-gold-500/30",
    iconColor: "text-gold-400"
  },
  {
    icon: Gamepad2,
    tag: "NON-STOP FUN",
    title: "Ice-Breakers & Fun Games",
    desc: "Hilarious team activities and interactive games designed to dissolve all nervousness and spark brand-new friendships instantly.",
    color: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/30",
    iconColor: "text-pink-400"
  },
  {
    icon: Utensils,
    tag: "CULINARY TREATS",
    title: "Grand Feast & Refreshments",
    desc: "A delectable spread of appetizers, mouth-watering gourmet dishes, refreshing mocktails, and decadent celebration desserts.",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400"
  },
  {
    icon: Camera,
    tag: "CAPTURE THE MOMENT",
    title: "360° Glam Booth & Red Carpet",
    desc: "Step onto the red carpet! Professional photographers and slow-motion video booths to capture your first iconic college memories.",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/30",
    iconColor: "text-cyan-400"
  },
  {
    icon: HeartHandshake,
    tag: "COLLEGE FAMILY",
    title: "Senior Mentorship & Bonds",
    desc: "More than just a party — this is where you meet your future study partners, project teammates, and lifelong guides.",
    color: "from-violet-500/20 to-fuchsia-500/10",
    border: "border-violet-500/30",
    iconColor: "text-violet-400"
  }
];

export default function HighlightsSection({ onOpenFlyer }) {
  return (
    <section id="highlights" className="py-24 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-950/60 border border-gold-500/30 text-gold-300 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>WHAT AWAITS YOU</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 mb-5 leading-tight">
            AN EXTRAORDINARY NIGHT OF <span className="text-gradient-gold">CELEBRATION</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We have planned an evening packed with thrills, laughter, music, and unforgettable moments. 
            Here is a sneak peek into the grand celebration!
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`glass-card glass-card-hover rounded-3xl p-8 relative overflow-hidden group border ${item.border}`}
              >
                {/* Background Tint Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 group-hover:opacity-70 transition duration-300`} />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Top Row: Icon & Tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-navy-950/80 border border-slate-700/60 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-gold-500/50 transition-all duration-300">
                        <Icon className={`w-7 h-7 ${item.iconColor}`} />
                      </div>
                      <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase bg-navy-950/60 px-3 py-1 rounded-full border border-slate-800">
                        {item.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom subtle indicator */}
                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-gold-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Included in Freshers Pass</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Teaser below grid */}
        <div className="mt-16 text-center">
          <div className="inline-block p-1 rounded-3xl bg-gradient-to-r from-gold-500/40 via-purple-500/40 to-gold-500/40">
            <div className="bg-navy-950/95 px-8 py-6 rounded-[22px] flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <div className="text-left">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                  Want to see the complete event schedule &amp; themes?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Click below to view and download the official Freshers Flyer.
                </p>
              </div>
              <button
                onClick={() => {
                  triggerGrandCelebration();
                  onOpenFlyer();
                }}
                className="shrink-0 px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm shadow-gold-glow transition"
              >
                🎉 Open Freshers Flyer
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
