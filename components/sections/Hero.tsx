'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Gamepad2, ArrowDown, Sparkles, Terminal, Code2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { PROFILE_DATA } from '../../data/profile';

const HeroBackgroundCanvas = dynamic(() => import('../3d/HeroBackgroundCanvas'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-hero-gradient opacity-30" />,
});

interface HeroProps {
  onPlayGame: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPlayGame }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PROFILE_DATA.taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-hero-gradient">
      {/* 3D Canvas Background */}
      <HeroBackgroundCanvas />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-sky-500/30 text-sky-400 text-xs font-mono mb-8 backdrop-blur-md shadow-glow"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Available for High-Impact Software Developer Roles</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 font-sans"
        >
          Hi, I&apos;m <span className="text-gradient">Suraj Raj</span>
        </motion.h1>

        {/* Rotating Role Titles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-12 sm:h-16 flex items-center justify-center my-3"
        >
          <motion.p
            key={roleIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="text-xl sm:text-3xl font-mono text-sky-400 font-semibold flex items-center gap-2"
          >
            <Terminal className="w-6 h-6 text-indigo-400 shrink-0" />
            <span>{PROFILE_DATA.taglines[roleIndex]}</span>
          </motion.p>
        </motion.div>

        {/* Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed mb-10"
        >
          Architecting resilient full-stack applications with <strong className="text-white">React</strong>, <strong className="text-white">TypeScript</strong>, <strong className="text-white">Next.js</strong>, and <strong className="text-white">Python FastAPI</strong>. Delivering sub-100ms API performance, security compliance, and 60fps web experiences.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button
            variant="game"
            size="lg"
            icon={<Gamepad2 className="w-5 h-5 text-emerald-950" />}
            onClick={onPlayGame}
            className="w-full sm:w-auto text-sm tracking-wider shadow-lg"
          >
            Play My Journey (2D Game)
          </Button>

          <a href="#experience" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              icon={<ArrowDown className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Skip to Resume View
            </Button>
          </a>
        </motion.div>

        {/* Impact Metric Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 w-full max-w-3xl"
        >
          {PROFILE_DATA.stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-panel p-4 rounded-xl text-center border border-slate-800 hover:border-sky-500/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
