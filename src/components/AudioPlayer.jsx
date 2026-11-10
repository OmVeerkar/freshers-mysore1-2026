import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { celebrationSynth } from '../utils/audioSynthesizer';
import { eventConfig } from '../config/eventConfig';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef(null);

  // Check if custom audio file exists or fallback to synthesizer
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        setShowPrompt(false);
        // Start synthetic ambient celebration chimes
        celebrationSynth.start();
        setIsPlaying(true);
        window.removeEventListener('click', handleFirstInteraction);
        window.removeEventListener('keydown', handleFirstInteraction);
        window.removeEventListener('touchstart', handleFirstInteraction);
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      celebrationSynth.stop();
    };
  }, [hasInteracted]);

  const toggleAudio = (e) => {
    e.stopPropagation();
    setShowPrompt(false);
    setHasInteracted(true);
    if (isPlaying) {
      celebrationSynth.stop();
      setIsPlaying(false);
    } else {
      celebrationSynth.start();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Gentle Floating Hint */}
      {showPrompt && !isPlaying && (
        <div 
          onClick={toggleAudio}
          className="hidden sm:flex items-center gap-2 bg-navy-900/90 border border-gold-500/40 text-gold-300 text-xs px-3.5 py-2 rounded-full shadow-lg backdrop-blur-md animate-bounce cursor-pointer hover:border-gold-400 transition"
        >
          <Music className="w-3.5 h-3.5 animate-spin" />
          <span>Tap to enjoy celebration music 🎵</span>
        </div>
      )}

      {/* Main Floating Audio Control Pill */}
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? "Mute celebration music" : "Play celebration music"}
        title={isPlaying ? "Mute celebration music" : "Play celebration music"}
        className={`group relative flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300 backdrop-blur-xl border ${
          isPlaying
            ? 'bg-gradient-to-r from-purple-900/80 to-navy-900/90 border-gold-500/50 shadow-gold-glow text-gold-300'
            : 'bg-navy-900/80 border-slate-700/60 text-slate-400 hover:text-gold-300 hover:border-gold-500/30'
        }`}
      >
        {isPlaying ? (
          <>
            <div className="flex items-center gap-1 h-4">
              <span className="w-1 bg-gold-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3" />
              <span className="w-1 bg-gold-400 rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-4" />
              <span className="w-1 bg-gold-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-2" />
            </div>
            <Volume2 className="w-5 h-5 text-gold-400 group-hover:scale-110 transition" />
            <span className="text-xs font-semibold tracking-wide hidden md:inline">MUSIC ON</span>
          </>
        ) : (
          <>
            <VolumeX className="w-5 h-5 group-hover:scale-110 transition" />
            <span className="text-xs font-medium tracking-wide hidden md:inline">MUSIC OFF</span>
          </>
        )}
      </button>
    </div>
  );
}
