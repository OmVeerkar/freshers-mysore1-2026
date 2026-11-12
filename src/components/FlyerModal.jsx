import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Sparkles, 
  FileText, 
  ArrowLeft, 
  AlertCircle,
  Check
} from 'lucide-react';
import { eventConfig } from '../config/eventConfig';
import { triggerGrandCelebration } from './ParticlesBackground';

export default function FlyerModal({ isOpen, onClose }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [copied, setCopied] = useState(false);
  // Allow toggling test preview so seniors can see both states instantly
  const [testModeEnabled, setTestModeEnabled] = useState(eventConfig.flyer.enabled);

  // Reset zoom on open
  useEffect(() => {
    if (isOpen) {
      setZoomLevel(1);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const flyer = eventConfig.flyer;
  const isFlyerReady = testModeEnabled;

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.6));
  const handleResetZoom = () => setZoomLevel(1);

  const sampleFlyerSrc = '/assets/sample-flyer.svg';
  const effectiveSrc = isFlyerReady ? (flyer.src || sampleFlyerSrc) : '/assets/fresher-flyer-placeholder.svg';

  const handleDownload = () => {
    triggerGrandCelebration();
    const link = document.createElement('a');
    link.href = effectiveSrc;
    link.download = isFlyerReady ? flyer.downloadFileName : 'Freshers-Flyer-Coming-Soon.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyInstructions = () => {
    navigator.clipboard.writeText(
      "To update flyer: Drop your image/pdf into public/assets/ and set enabled: true in src/config/eventConfig.js"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-navy-950/90 backdrop-blur-2xl overflow-y-auto">
      
      {/* Container Box */}
      <div className="relative w-full max-w-5xl bg-navy-900 border border-gold-500/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gold-500/20 bg-navy-950/90">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition"
            >
              <ArrowLeft className="w-4 h-4 text-gold-400" />
              <span>Back to Home</span>
            </button>
            <div className="hidden sm:block">
              <h2 className="text-sm sm:text-base font-bold text-white tracking-wide">
                {isFlyerReady ? flyer.title : "OFFICIAL FRESHERS FLYER PREVIEW"}
              </h2>
              <p className="text-xs text-gold-400/80 font-mono">
                {isFlyerReady ? `Format: ${flyer.type.toUpperCase()}` : "Status: Coming Soon"}
              </p>
            </div>
          </div>

          {/* Action Buttons in Header */}
          <div className="flex items-center gap-2">
            {/* Quick senior preview toggle */}
            <button
              onClick={() => setTestModeEnabled(!testModeEnabled)}
              title="Toggle preview between Coming Soon placeholder and Sample Flyer"
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-purple-950/80 border border-purple-500/40 text-purple-300 hover:text-white transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Preview State: {testModeEnabled ? "Active Flyer" : "Coming Soon"}</span>
            </button>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-navy-950 font-bold text-xs sm:text-sm shadow-gold-glow hover:scale-105 transition"
            >
              <Download className="w-4 h-4" />
              <span className="hidden xs:inline">Download</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-navy-800 hover:bg-red-950/60 text-slate-400 hover:text-red-400 border border-slate-700 transition"
              aria-label="Close flyer viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Zoom Controls Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-2 bg-navy-950/60 border-b border-slate-800/80 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-medium text-slate-300">Zoom: {Math.round(zoomLevel * 100)}%</span>
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 2.5}
              className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 disabled:opacity-40 text-slate-200"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.6}
              className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 disabled:opacity-40 text-slate-200"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-200"
              title="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <div className="text-right text-gold-400/80 text-[11px] hidden sm:block">
            {isFlyerReady ? "Tip: Click download for full print quality" : "Replace file in public/assets to publish"}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center bg-navy-950/50 min-h-[400px]">
          {isFlyerReady ? (
            /* ========================================================= */
            /* CASE A: OFFICIAL FLYER IS LOADED                          */
            /* ========================================================= */
            flyer.type === 'pdf' ? (
              <div 
                className="w-full h-full min-h-[600px] flex flex-col items-center justify-center transition-transform duration-200"
                style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
              >
                <object
                  data={effectiveSrc}
                  type="application/pdf"
                  className="w-full h-[650px] rounded-2xl border border-gold-500/30 shadow-2xl"
                >
                  <div className="text-center p-8 bg-navy-900 rounded-2xl border border-slate-700">
                    <FileText className="w-16 h-16 text-gold-400 mx-auto mb-4" />
                    <p className="text-lg font-bold text-white mb-2">PDF Flyer Preview</p>
                    <p className="text-sm text-slate-400 mb-4">Your browser may not support inline PDF viewing.</p>
                    <a
                      href={effectiveSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500 text-navy-950 font-bold"
                    >
                      <Download className="w-4 h-4" />
                      Open / Download PDF Flyer
                    </a>
                  </div>
                </object>
              </div>
            ) : (
              <div 
                className="transition-transform duration-200 flex items-center justify-center"
                style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
              >
                <img
                  src={effectiveSrc}
                  alt="Official Freshers Party Flyer"
                  className="max-w-full max-h-[75vh] w-auto h-auto rounded-2xl border-2 border-gold-400/40 shadow-2xl object-contain"
                />
              </div>
            )
          ) : (
            /* ========================================================= */
            /* CASE B: PLACEHOLDER (COMING SOON)                         */
            /* ========================================================= */
            <div 
              className="max-w-2xl w-full flex flex-col items-center text-center transition-transform duration-200"
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
            >
              {/* Flyer Artwork Card */}
              <div className="w-full rounded-3xl bg-gradient-to-b from-navy-850 to-navy-950 border-2 border-gold-500/40 p-6 sm:p-10 shadow-gold-glow relative overflow-hidden">
                
                {/* Glow rings */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-400 to-amber-600 p-[2px] mx-auto mb-6 shadow-gold-glow">
                  <div className="w-full h-full bg-navy-900 rounded-[14px] flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-gold-400 animate-spin" />
                  </div>
                </div>

                <div className="inline-block px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-400/40 text-purple-300 text-xs font-bold tracking-widest uppercase mb-4">
                  OFFICIAL INVITATION PENDING
                </div>

                {/* EXACT REQUIRED TEXT */}
                <h3 className="font-serif text-2xl sm:text-4xl font-black text-gradient-gold tracking-wide mb-4">
                  {flyer.placeholderMessage}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-lg mx-auto">
                  {flyer.placeholderDescription}
                </p>

                {/* Vector Graphic Teaser */}
                <div className="mb-6 rounded-2xl overflow-hidden border border-gold-500/20 bg-navy-950/60 p-2">
                  <img
                    src="/assets/fresher-flyer-placeholder.svg"
                    alt="Official Freshers Flyer Coming Soon Placeholder"
                    className="w-full max-h-[320px] object-contain rounded-xl"
                  />
                </div>

                {/* Senior replacement instructions card */}
                <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/30 text-left text-xs text-slate-300 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-bold text-gold-300">
                      <AlertCircle className="w-4 h-4 text-gold-400" />
                      <span>SENIOR INSTRUCTIONS: How to add the official flyer</span>
                    </div>
                    <button
                      onClick={copyInstructions}
                      className="text-purple-300 hover:text-white flex items-center gap-1 font-semibold"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : null}
                      <span>{copied ? "Copied!" : "Copy steps"}</span>
                    </button>
                  </div>
                  <p className="text-slate-300">
                    1. Save your flyer image or PDF in: <code className="bg-navy-900 px-1.5 py-0.5 rounded text-gold-300">public/assets/fresher-flyer.png</code> (or <code className="bg-navy-900 px-1.5 py-0.5 rounded text-gold-300">.pdf</code>).
                  </p>
                  <p className="text-slate-300">
                    2. In <code className="bg-navy-900 px-1.5 py-0.5 rounded text-gold-300">src/config/eventConfig.js</code>, switch <code className="bg-navy-900 px-1.5 py-0.5 rounded text-gold-300">enabled: true</code>.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-4 bg-navy-950/90 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
            <span>Need full resolution for print? Click the Download button above.</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 font-semibold"
          >
            Close &amp; Return to Welcome Page
          </button>
        </div>

      </div>
    </div>
  );
}
