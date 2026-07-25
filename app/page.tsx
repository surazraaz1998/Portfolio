'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { Experience } from '../components/sections/Experience';
import { Education } from '../components/sections/Education';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/layout/Footer';
import { GameContainer } from '../components/game/GameContainer';
import { useGameStore } from '../components/game/useGameStore';

export default function Home() {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const resetGame = useGameStore((s) => s.resetGame);

  const handleOpenGame = () => {
    resetGame();
    setIsGameOpen(true);
  };

  const handleCloseGame = () => {
    setIsGameOpen(false);
  };

  const handleConnectPortal = () => {
    setIsGameOpen(false);
    // Smooth scroll down to contact section
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen bg-bg-dark text-slate-100 overflow-x-hidden selection:bg-sky-500/30 selection:text-white">
      {/* Sticky Blurred Glass Navigation */}
      <Navbar onPlayGame={handleOpenGame} />

      {/* Hero Section */}
      <Hero onPlayGame={handleOpenGame} />

      {/* Experience Timeline */}
      <Experience />

      {/* Academic Education */}
      <Education />

      {/* Technical Skills & Radar Chart */}
      <Skills />

      {/* Featured Projects Showcase */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Lazy Loaded 2D Game Overlay */}
      <GameContainer
        isOpen={isGameOpen}
        onClose={handleCloseGame}
        onConnectPortal={handleConnectPortal}
      />
    </main>
  );
}
