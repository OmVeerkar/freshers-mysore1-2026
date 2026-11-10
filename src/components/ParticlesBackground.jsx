import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

/**
 * Fires a celebratory burst of confetti in royal gold and deep purple colors
 */
export const triggerGrandCelebration = () => {
  // Center burst
  confetti({
    particleCount: 80,
    spread: 100,
    origin: { y: 0.6 },
    colors: ['#F59E0B', '#FBBF24', '#9333EA', '#C026D3', '#FEF08A'],
    disableForReducedMotion: true,
  });

  // Left & right cannons
  setTimeout(() => {
    confetti({
      particleCount: 45,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ['#F59E0B', '#FEF08A', '#9333EA'],
    });
    confetti({
      particleCount: 45,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ['#F59E0B', '#FEF08A', '#9333EA'],
    });
  }, 250);
};

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle types: Gold Sparkles, Purple Bokeh, Floating Stars
    const particleCount = Math.min(width < 768 ? 40 : 85, 90);
    const particles = [];

    const colors = [
      'rgba(245, 158, 11, ', // Gold
      'rgba(251, 191, 36, ', // Bright Gold
      'rgba(147, 51, 234, ', // Purple
      'rgba(192, 38, 211, ', // Magenta
      'rgba(254, 240, 138, ' // Pale Gold Sparkle
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.6,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.7 + 0.2,
        speedY: -(Math.random() * 0.45 + 0.15),
        speedX: (Math.random() - 0.5) * 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2,
        isStar: Math.random() > 0.75,
      });
    }

    let tick = 0;

    const render = () => {
      tick += 0.02;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        // Wrap around screen edges
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentOpacity = Math.max(
          0.1,
          p.opacity + Math.sin(tick * 2 + p.pulseOffset) * 0.25
        );

        ctx.fillStyle = `${p.colorBase}${currentOpacity})`;
        ctx.beginPath();

        if (p.isStar) {
          // Draw subtle 4-point golden star sparkle
          const size = p.radius * 2;
          ctx.moveTo(p.x, p.y - size);
          ctx.lineTo(p.x + size * 0.3, p.y);
          ctx.lineTo(p.x, p.y + size);
          ctx.lineTo(p.x - size * 0.3, p.y);
          ctx.closePath();
          ctx.fill();
        } else {
          // Glowing soft circle
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Trigger welcoming burst on page entry
    const timer = setTimeout(() => {
      triggerGrandCelebration();
    }, 800);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-75"
      aria-hidden="true"
    />
  );
}
