import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#07090e',
          card: 'rgba(13, 17, 26, 0.75)',
          hover: 'rgba(22, 30, 46, 0.85)',
          glass: 'rgba(15, 23, 42, 0.65)',
        },
        brand: {
          cyan: '#38bdf8',
          violet: '#818cf8',
          emerald: '#34d399',
          amber: '#fbbf24',
          rose: '#f43f5e',
          dark: '#07090e',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 25px -5px rgba(56, 189, 248, 0.3)',
        'glow-violet': '0 0 25px -5px rgba(129, 140, 248, 0.3)',
        'glow-emerald': '0 0 25px -5px rgba(52, 211, 153, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.15) 0%, rgba(129, 140, 248, 0.05) 50%, rgba(7, 9, 14, 1) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        shimmer: 'shimmer 2.5s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
