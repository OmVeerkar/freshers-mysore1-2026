/**
 * Web Audio API Celebration Ambient Synthesizer
 * Plays a warm, celebratory, harmonic chord sequence and gentle melodic chimes.
 * Works 100% reliably in any browser without needing external audio files or bandwidth!
 */

class CelebrationSynth {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.intervalId = null;
    this.masterGain = null;
    this.volume = 0.22; // Gentle, elegant ambient volume
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return false;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return true;
  }

  // Play a gentle bell/chime note with rich harmonic warmth
  playNote(freq, timeOffset = 0, duration = 2.2, gainFactor = 1.0) {
    if (!this.ctx || !this.isPlaying) return;
    const startTime = this.ctx.currentTime + timeOffset;

    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    // Gentle warm sine + triangle blend
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, startTime);

    // Subtle gentle vibrato
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.setValueAtTime(4.5, startTime);
    lfoGain.gain.setValueAtTime(1.5, startTime);
    lfo.connect(osc.frequency);
    lfo.start(startTime);
    lfo.stop(startTime + duration);

    // Envelope: quick gentle attack, soft exponential decay
    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.linearRampToValueAtTime(0.12 * gainFactor, startTime + 0.08);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  // Play an uplifting, warm, majestic chord progression
  // (Cmaj9 -> Gmaj9 -> Am7 -> Fadd9) - standard celebratory emotional progression
  start() {
    if (this.isPlaying) return;
    const ready = this.init();
    if (!ready) return;

    this.isPlaying = true;

    // Harmonic frequency table (Hz)
    const chords = [
      // Chord 1: C Major 9 (Celebratory, bright)
      [261.63, 329.63, 392.00, 493.88, 587.33],
      // Chord 2: G Major add9 (Inspiring, open)
      [196.00, 246.94, 293.66, 392.00, 440.00],
      // Chord 3: A Minor 9 (Warm, nostalgic, college bonding)
      [220.00, 261.63, 329.63, 392.00, 493.88],
      // Chord 4: F Major 7 (Lush, welcoming)
      [174.61, 220.00, 261.63, 329.63, 392.00],
    ];

    let currentChordIndex = 0;

    const playArpeggio = () => {
      if (!this.isPlaying || !this.ctx) return;
      const currentChord = chords[currentChordIndex];

      // Arpeggiate chord notes with slight stagger
      currentChord.forEach((freq, idx) => {
        this.playNote(freq, idx * 0.28, 3.2, 0.9);
      });

      // Add a sparkling high chime on random beats
      const highChimes = [659.25, 783.99, 987.77, 1046.50];
      const randomChime = highChimes[Math.floor(Math.random() * highChimes.length)];
      this.playNote(randomChime, 1.4, 2.0, 0.5);

      currentChordIndex = (currentChordIndex + 1) % chords.length;
    };

    // Play first chord immediately
    playArpeggio();

    // Schedule next chord every 3 seconds
    this.intervalId = setInterval(playArpeggio, 3000);
  }

  stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const celebrationSynth = new CelebrationSynth();
