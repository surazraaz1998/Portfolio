import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Code2 } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-200">Suraj Raj</span>
              <p className="text-xs text-slate-400 font-mono">Senior Full Stack Developer</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-slate-400 hover:text-sky-400 transition-colors p-2 rounded-lg bg-slate-900 border border-slate-800"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Suraj Raj. Built with Next.js, React Three Fiber & Tailwind CSS.</p>
          <p className="font-mono text-[11px]">Lighthouse 100 • Production Grade</p>
        </div>
      </div>
    </footer>
  );
};
