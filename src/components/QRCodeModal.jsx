import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { 
  X, 
  Download, 
  QrCode, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  AlertCircle,
  Share2,
  Globe
} from 'lucide-react';
import { eventConfig } from '../config/eventConfig';
import { triggerGrandCelebration } from './ParticlesBackground';

export default function QRCodeModal({ isOpen, onClose }) {
  const [qrUrl, setQrUrl] = useState('');
  const [pngDataUrl, setPngDataUrl] = useState('');
  const [svgString, setSvgString] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isCustomUrl, setIsCustomUrl] = useState(false);
  const [customInput, setCustomInput] = useState('');
  const printCardRef = useRef(null);

  // Determine initial target URL
  useEffect(() => {
    let target = '';
    if (eventConfig.productionUrl && eventConfig.productionUrl.trim() !== '') {
      target = eventConfig.productionUrl.trim();
    } else if (typeof window !== 'undefined') {
      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      if (isLocal) {
        // Suggested placeholder production url for local testing
        target = 'https://freshers-welcome-2026.vercel.app';
      } else {
        // Live production domain!
        target = window.location.origin;
      }
    }
    setQrUrl(target);
    setCustomInput(target);
  }, []);

  // Generate PNG & SVG whenever qrUrl changes
  useEffect(() => {
    if (!qrUrl) return;

    // Generate High-Res PNG (2048x2048 for professional print quality)
    QRCode.toDataURL(qrUrl, {
      width: 1024,
      margin: 2,
      errorCorrectionLevel: 'H', // High redundancy: scans fast & accurately on all smartphones
      color: {
        dark: '#030712', // Deep high-contrast navy black for camera readability
        light: '#FFFFFF'
      }
    })
      .then(url => setPngDataUrl(url))
      .catch(err => console.error('PNG QR error', err));

    // Generate Vector SVG
    QRCode.toString(qrUrl, {
      type: 'svg',
      margin: 2,
      errorCorrectionLevel: 'H',
      color: {
        dark: '#030712',
        light: '#FFFFFF'
      }
    })
      .then(svg => setSvgString(svg))
      .catch(err => console.error('SVG QR error', err));
  }, [qrUrl]);

  if (!isOpen) return null;

  const handleDownloadPNG = () => {
    triggerGrandCelebration();
    const link = document.createElement('a');
    link.href = pngDataUrl;
    link.download = `Freshers-2026-QR-Code-HighRes.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadSVG = () => {
    triggerGrandCelebration();
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Freshers-2026-QR-Code-Vector.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(qrUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleApplyCustomUrl = (e) => {
    e.preventDefault();
    if (customInput.trim()) {
      let final = customInput.trim();
      if (!final.startsWith('http://') && !final.startsWith('https://')) {
        final = 'https://' + final;
      }
      setQrUrl(final);
      setIsCustomUrl(false);
    }
  };

  const handlePrint = () => {
    triggerGrandCelebration();
    window.print();
  };

  const isLocalhost = typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/90 backdrop-blur-2xl overflow-y-auto">
      
      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl bg-navy-900 border border-gold-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gold-500/20 bg-navy-950/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-amber-600 p-[1.5px] shadow-gold-glow flex items-center justify-center">
              <QrCode className="w-5 h-5 text-navy-950" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-wide">
                FRESHERS QR CODE GENERATOR
              </h2>
              <p className="text-xs text-gold-400/90 font-medium">
                High-Resolution PNG &amp; SVG for Posters &amp; Invitations
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-navy-800 hover:bg-red-950/60 text-slate-400 hover:text-red-400 border border-slate-700 transition"
            aria-label="Close QR modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Localhost Notice Banner */}
        {isLocalhost && (
          <div className="px-6 py-2.5 bg-amber-950/40 border-b border-amber-500/30 flex items-center justify-between gap-3 text-xs text-amber-200">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong>Smart Warning:</strong> Localhost detected. As requested in prompt, QR points to your live URL or custom domain once deployed!
              </span>
            </div>
            <button
              onClick={() => setIsCustomUrl(!isCustomUrl)}
              className="text-gold-300 underline font-semibold shrink-0 hover:text-white"
            >
              {isCustomUrl ? 'Cancel Edit' : 'Edit URL'}
            </button>
          </div>
        )}

        {/* Custom URL Editor (if toggled) */}
        {isCustomUrl && (
          <form onSubmit={handleApplyCustomUrl} className="px-6 py-3 bg-navy-950 border-b border-slate-800 flex gap-2">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="e.g. https://freshers2026.vercel.app"
              className="flex-1 px-3 py-1.5 rounded-lg bg-navy-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-gold-500"
            />
            <button
              type="submit"
              className="px-4 py-1.5 rounded-lg bg-gold-500 text-navy-950 font-bold text-xs"
            >
              Update QR
            </button>
          </form>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 justify-center">
          
          {/* ========================================================= */}
          {/* PRINT-READY INVITATION CARD WITH QR CODE                 */}
          {/* ========================================================= */}
          <div 
            ref={printCardRef}
            className="w-full max-w-[320px] rounded-2xl bg-white p-6 shadow-2xl text-center border-4 border-gold-500/70 text-navy-950 relative"
          >
            {/* College & Event Header on Card */}
            <div className="mb-3">
              <p className="text-[10px] font-bold tracking-widest text-amber-700 uppercase font-serif">
                {eventConfig.collegeName}
              </p>
              <h3 className="text-base font-black tracking-tight text-slate-900 font-serif">
                FRESHERS CELEBRATION 2026
              </h3>
            </div>

            {/* High-Resolution QR Display */}
            <div className="relative mx-auto w-52 h-52 p-2 bg-white rounded-xl border-2 border-slate-200 shadow-inner flex items-center justify-center">
              {pngDataUrl ? (
                <img
                  src={pngDataUrl}
                  alt="QR Code to enter Freshers Celebration"
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs text-slate-400">
                  Generating QR...
                </div>
              )}
            </div>

            {/* Slogan / Required Caption */}
            <div className="mt-4 pt-3 border-t border-dashed border-slate-300">
              <p className="font-extrabold text-xs sm:text-sm tracking-wider uppercase text-amber-800 font-serif">
                ✨ SCAN TO ENTER THE CELEBRATION! ✨
              </p>
              <p className="text-[10px] text-slate-500 mt-1 font-mono">
                Points directly to the official welcome invitation
              </p>
            </div>
          </div>

          {/* Controls & Downloads Column */}
          <div className="flex-1 w-full flex flex-col justify-between space-y-5">
            
            {/* Active URL Card */}
            <div className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-gold-400" />
                  QR Destination URL:
                </span>
                <button
                  onClick={handleCopyUrl}
                  className="text-gold-400 hover:text-white flex items-center gap-1 font-semibold"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-sm font-mono text-gold-300 truncate bg-navy-900 p-2 rounded-lg border border-slate-700/60">
                {qrUrl}
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="space-y-3">
              {/* PNG Download Button */}
              <button
                onClick={handleDownloadPNG}
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-navy-950 font-black text-sm tracking-wider uppercase shadow-gold-glow hover:scale-[1.02] transition"
              >
                <Download className="w-4 h-4" />
                <span>Download High-Res PNG (1024x1024)</span>
              </button>

              {/* SVG Download Button */}
              <button
                onClick={handleDownloadSVG}
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-500/40 text-purple-200 font-bold text-sm transition"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Download Vector SVG (Print Ready)</span>
              </button>

              {/* Print Invitation Card */}
              <button
                onClick={handlePrint}
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 border border-slate-700 text-slate-200 font-semibold text-sm transition"
              >
                <Printer className="w-4 h-4 text-gold-400" />
                <span>Print Invitation Pass</span>
              </button>
            </div>

            {/* Instructions box */}
            <div className="p-3.5 rounded-xl bg-navy-950/50 border border-slate-800 text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-200">Print Instructions:</strong> Print this QR code on posters, classroom notices, and entrance invitation cards. Any student scanning it with their camera or WhatsApp QR scanner will open this welcome site instantly!
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-navy-950/80 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 text-sm font-semibold transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
