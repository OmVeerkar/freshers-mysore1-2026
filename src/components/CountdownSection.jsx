import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Sparkles, Shirt, ShieldCheck, Bell } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

export default function CountdownSection({ onOpenShare }) {
  const { eventDetails } = eventConfig;
  const hasEventDate = !!eventDetails.eventDate;

  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    if (!hasEventDate) return;

    const targetDate = new Date(eventDetails.eventDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [hasEventDate, eventDetails.eventDate]);

  return (
    <section id="schedule" className="py-20 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-950/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-widest uppercase mb-4">
            <Calendar className="w-3.5 h-3.5 text-gold-400" />
            <span>EVENT INFORMATION &amp; SCHEDULE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 mb-4">
            COUNTDOWN TO <span className="text-gradient-gold">THE CELEBRATION</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Mark your calendars! Get ready for an electrifying day designed exclusively for your grand welcome.
          </p>
        </div>

        {/* ============================================================= */}
        {/* COUNTDOWN TIMER (Shown if eventDate is set)                  */}
        {/* ============================================================= */}
        {hasEventDate ? (
          <div className="glass-card rounded-3xl p-8 sm:p-12 mb-12 text-center border-gold-500/30 shadow-gold-glow">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-gold-400 uppercase mb-8">
              {timeLeft.isExpired ? "THE CELEBRATION IS LIVE RIGHT NOW!" : "TIME REMAINING UNTIL GATES OPEN"}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
              {[
                { label: 'DAYS', value: timeLeft.days },
                { label: 'HOURS', value: timeLeft.hours },
                { label: 'MINUTES', value: timeLeft.minutes },
                { label: 'SECONDS', value: timeLeft.seconds },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-navy-950/80 rounded-2xl p-5 sm:p-6 border border-gold-500/30 shadow-inner flex flex-col items-center justify-center"
                >
                  <span className="font-serif text-3xl sm:text-5xl font-black text-gradient-gold">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold tracking-widest text-slate-400 uppercase mt-2">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ============================================================= */
          /* COUNTDOWN PLACEHOLDER (When date is not announced yet)        */
          /* ============================================================= */
          <div className="glass-card rounded-3xl p-8 sm:p-10 mb-12 text-center border-purple-500/30 relative overflow-hidden">
            <div className="max-w-xl mx-auto space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-900/50 border border-purple-500/40 mx-auto flex items-center justify-center">
                <Clock className="w-7 h-7 text-gold-400 animate-pulse" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-100">
                Official Date &amp; Countdown Announcement Dropping Soon!
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                The seniors organizing team is locking in the best date and auditorium availability. 
                Keep this website bookmarked or share it with batchmates to stay notified!
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenShare}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-900/60 hover:bg-purple-800 border border-purple-500/40 text-purple-200 text-xs sm:text-sm font-semibold transition"
                >
                  <Bell className="w-4 h-4 text-gold-400" />
                  <span>Share with Friends to Stay Updated</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================= */}
        {/* EVENT SCHEDULE & VENUE DETAILS CARDS                          */}
        {/* ============================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Date & Time */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mb-5">
                <Calendar className="w-6 h-6 text-gold-400" />
              </div>
              <h4 className="text-xs font-bold tracking-widest text-gold-400 uppercase mb-2">DATE &amp; TIME</h4>
              <p className="text-xl font-bold text-white mb-2">{eventDetails.dateDisplay}</p>
              <p className="text-sm text-slate-400 flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>{eventDetails.timeDisplay}</span>
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
              * Official timings will be highlighted on the flyer
            </div>
          </div>

          {/* Card 2: Venue */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-xs font-bold tracking-widest text-gold-400 uppercase mb-2">LOCATION / VENUE</h4>
              <p className="text-xl font-bold text-white mb-2">{eventDetails.venueDisplay}</p>
              <p className="text-sm text-slate-400">
                Grand Stage, Banquet Hall &amp; Outdoor Photo Zones
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
              * Campus parking &amp; welcome reception at entrance
            </div>
          </div>

          {/* Card 3: Dress Code & Entry */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-5">
                <Shirt className="w-6 h-6 text-gold-400" />
              </div>
              <h4 className="text-xs font-bold tracking-widest text-gold-400 uppercase mb-2">DRESS CODE &amp; ENTRY</h4>
              <p className="text-xl font-bold text-white mb-2">{eventDetails.dressCode}</p>
              <p className="text-sm text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span>{eventDetails.entryRequirement}</span>
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
              * Exclusive entry for all registered first-year juniors
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
