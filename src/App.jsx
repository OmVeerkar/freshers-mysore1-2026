import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import AudioPlayer from './components/AudioPlayer';
import HeroSection from './components/HeroSection';
import FlyerSection from './components/FlyerSection';
import FlyerModal from './components/FlyerModal';
import QRCodeModal from './components/QRCodeModal';
import SocialShareModal from './components/SocialShareModal';
import Footer from './components/Footer';

export default function App() {
  const [flyerModalOpen, setFlyerModalOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col relative selection:bg-gold-500/30 selection:text-gold-300">
      
      {/* Interactive Celebratory Particles Canvas */}
      <ParticlesBackground />

      {/* Background Celebration Music Controller */}
      <AudioPlayer />

      {/* Navigation Header */}
      <Navbar 
        onOpenFlyer={() => setFlyerModalOpen(true)}
        onOpenQR={() => setQrModalOpen(true)}
        onOpenShare={() => setShareModalOpen(true)}
      />

      {/* Main Content */}
      <main id="home" className="flex-1">
        
        {/* Welcome Landing Section */}
        <HeroSection 
          onOpenFlyer={() => setFlyerModalOpen(true)}
          onOpenQR={() => setQrModalOpen(true)}
        />

        {/* Official Flyer Section */}
        <FlyerSection 
          onOpenFlyer={() => setFlyerModalOpen(true)}
          onOpenQR={() => setQrModalOpen(true)}
          onOpenShare={() => setShareModalOpen(true)}
        />

      </main>

      {/* Footer */}
      <Footer 
        onOpenFlyer={() => setFlyerModalOpen(true)}
        onOpenQR={() => setQrModalOpen(true)}
      />

      {/* Modals & Fullscreen Overlays */}
      <FlyerModal 
        isOpen={flyerModalOpen} 
        onClose={() => setFlyerModalOpen(false)} 
      />

      <QRCodeModal 
        isOpen={qrModalOpen} 
        onClose={() => setQrModalOpen(false)} 
      />

      <SocialShareModal 
        isOpen={shareModalOpen} 
        onClose={() => setShareModalOpen(false)}
        onOpenQR={() => setQrModalOpen(true)}
      />

    </div>
  );
}
