import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Share2, 
  MessageCircle, 
  Send, 
  Sparkles,
  QrCode
} from 'lucide-react';
import { eventConfig } from '../config/eventConfig';
import { triggerGrandCelebration } from './ParticlesBackground';

export default function SocialShareModal({ isOpen, onClose, onOpenQR }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://freshers-welcome-2026.vercel.app';
  const shareText = `${eventConfig.share.title}\n\n${eventConfig.tagline}\n\nCheck out the official invitation and flyer here: ${currentUrl}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: eventConfig.share.title,
          text: eventConfig.tagline,
          url: currentUrl,
        });
        triggerGrandCelebration();
      } catch (err) {
        console.log('Share dismissed', err);
      }
    } else {
      handleCopy();
    }
  };

  const shareWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const shareTelegram = () => {
    const url = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const shareX = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-2xl">
      <div className="relative w-full max-w-md bg-navy-900 border border-gold-500/40 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-navy-800 text-slate-400 hover:text-white transition"
          aria-label="Close Share Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 to-amber-600 p-[1.5px] mx-auto mb-4 shadow-gold-glow flex items-center justify-center">
            <Share2 className="w-7 h-7 text-navy-950" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-white mb-2">
            Share The Invitation
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Send this welcome website to your classmates, WhatsApp groups, and batchmates!
          </p>
        </div>

        {/* Share buttons grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          
          {/* WhatsApp */}
          <button
            onClick={shareWhatsApp}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold text-xs sm:text-sm transition"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </button>

          {/* Telegram */}
          <button
            onClick={shareTelegram}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-sky-600/20 hover:bg-sky-600/30 border border-sky-500/40 text-sky-300 font-bold text-xs sm:text-sm transition"
          >
            <Send className="w-4 h-4 text-sky-400" />
            <span>Telegram</span>
          </button>

          {/* Native Device Share */}
          <button
            onClick={handleNativeShare}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-purple-300 font-bold text-xs sm:text-sm transition"
          >
            <Share2 className="w-4 h-4 text-purple-400" />
            <span>Device Share</span>
          </button>

          {/* QR Code Pass */}
          <button
            onClick={() => {
              onClose();
              onOpenQR();
            }}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-amber-600/20 hover:bg-amber-600/30 border border-gold-500/40 text-gold-300 font-bold text-xs sm:text-sm transition"
          >
            <QrCode className="w-4 h-4 text-gold-400" />
            <span>Show QR</span>
          </button>

        </div>

        {/* Copy Link input */}
        <div className="p-3 rounded-2xl bg-navy-950 border border-slate-800 flex items-center justify-between gap-2">
          <input
            type="text"
            readOnly
            value={currentUrl}
            className="bg-transparent text-xs text-slate-300 font-mono truncate flex-1 focus:outline-none"
          />
          <button
            onClick={handleCopy}
            className="shrink-0 px-3.5 py-1.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs flex items-center gap-1 transition"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
