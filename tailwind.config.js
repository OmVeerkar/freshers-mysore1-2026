/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030712',
          900: '#070B19',
          850: '#0A1026',
          800: '#0E1738',
          700: '#152252',
        },
        gold: {
          300: '#FDE68A',
          400: '#FCD34D',
          500: '#F59E0B',
          600: '#D97706',
          glow: '#FFE066',
        },
        fresher: {
          purple: '#6B21A8',
          'purple-glow': '#9333EA',
          'purple-deep': '#1E0B38',
          magenta: '#C026D3',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cinzel', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'gold-glow': '0 0 25px -3px rgba(245, 158, 11, 0.4), 0 0 10px -2px rgba(245, 158, 11, 0.2)',
        'purple-glow': '0 0 35px -5px rgba(147, 51, 234, 0.45), 0 0 15px -3px rgba(168, 85, 247, 0.3)',
        'card-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}
