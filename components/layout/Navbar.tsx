'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, FileText, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { PROFILE_DATA } from '../../data/profile';

import Link from 'next/link';

interface NavbarProps {
  onPlayGame: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPlayGame }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Articles', href: '#articles' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      data-testid="navbar-header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? 'py-3 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg'
          : 'py-5 bg-transparent'
        }`}
    >
      <div data-testid="navbar-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Custom Avatar Brand Logo */}
        <a data-testid="navbar-logo-link" href="#hero" className="flex items-center gap-3 group">
          <div data-testid="navbar-avatar-wrapper" className="relative w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-sky-400 via-indigo-500 to-rose-400 shadow-glow group-hover:scale-105 transition-all duration-300">
            <div data-testid="navbar-avatar-inner" className="w-full h-full rounded-full overflow-hidden bg-slate-900">
              <img
                data-testid="navbar-avatar-img"
                src="/avatar.jpg"
                alt="Suraj Raj"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span data-testid="navbar-status-dot" className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950 shadow-sm" />
          </div>
          <div data-testid="navbar-brand-text">
            <span data-testid="navbar-brand-name" className="font-bold text-lg text-slate-100 tracking-tight font-sans">
              Suraj<span data-testid="navbar-brand-suffix" className="text-sky-400">.Raj</span>
            </span>
            <span data-testid="navbar-brand-title" className="block text-[10px] font-mono text-slate-400 tracking-wider uppercase">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav data-testid="navbar-desktop-nav" className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              data-testid={`nav-link-${link.name.toLowerCase()}`}
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-slate-800/80 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div data-testid="navbar-desktop-actions" className="hidden sm:flex items-center gap-3">
          <Button
            data-testid="btn-play-journey-desktop"
            variant="game"
            size="sm"
            icon={<Gamepad2 className="w-4 h-4 text-emerald-950" />}
            onClick={onPlayGame}
          >
            Play Journey
          </Button>

          <Link data-testid="nav-resume-link" href="/resume">
            <Button data-testid="btn-resume-desktop" variant="outline" size="sm" icon={<FileText className="w-3.5 h-3.5" />}>
              Resume
            </Button>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div data-testid="navbar-mobile-controls" className="flex sm:hidden items-center gap-2">
          <Button data-testid="btn-play-journey-mobile" variant="game" size="sm" onClick={onPlayGame} icon={<Gamepad2 className="w-3.5 h-3.5" />}>
            Play
          </Button>
          <button
            data-testid="btn-toggle-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div data-testid="navbar-mobile-drawer" className="sm:hidden glass-panel border-b border-slate-800 px-4 py-6 mt-3 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-200 hover:text-sky-400 py-2 border-b border-slate-800/50"
            >
              {link.name}
            </a>
          ))}
          <div data-testid="mobile-drawer-actions" className="flex flex-col gap-2 pt-2">
            <Link data-testid="mobile-nav-resume-link" href="/resume" onClick={() => setMobileMenuOpen(false)}>
              <Button data-testid="btn-resume-mobile-drawer" variant="outline" size="sm" className="w-full" icon={<FileText className="w-4 h-4" />}>
                View Resume PDF
              </Button>
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
};
