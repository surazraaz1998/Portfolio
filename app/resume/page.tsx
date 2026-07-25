'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, ExternalLink, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { PROFILE_DATA } from '../../data/profile';

export default function ResumePage() {
  return (
    <div data-testid="resume-page-container" className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-white">
      {/* Top Sticky Header */}
      <header data-testid="resume-header" className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-4">
        <div data-testid="resume-header-content" className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Back Link & Title */}
          <div data-testid="resume-header-left" className="flex items-center gap-4 w-full sm:w-auto">
            <Link data-testid="resume-back-link" href="/" className="group flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span data-testid="resume-back-text">Back to Portfolio</span>
            </Link>

            <div data-testid="resume-header-divider" className="h-6 w-px bg-slate-800 hidden sm:block" />

            <div data-testid="resume-header-title-box" className="flex items-center gap-2.5">
              <div data-testid="resume-icon-wrapper" className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <FileText className="w-4 h-4" />
              </div>
              <div data-testid="resume-title-text-group">
                <h1 data-testid="resume-title" className="text-base font-bold text-slate-100 flex items-center gap-2">
                  <span data-testid="resume-title-name">{PROFILE_DATA.name} — Resume</span>
                  <span data-testid="resume-badge-verified" className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-normal">
                    Verified
                  </span>
                </h1>
                <p data-testid="resume-subtitle" className="text-xs font-mono text-slate-400">Senior Software Engineer • {PROFILE_DATA.stats[0].value} Experience</p>
              </div>
            </div>
          </div>

          {/* Right: Actions (Download PDF & Open in New Tab) */}
          <div data-testid="resume-header-actions" className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              data-testid="resume-raw-pdf-link"
              href={PROFILE_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              <Button data-testid="btn-open-raw-pdf" variant="outline" size="sm" icon={<ExternalLink className="w-3.5 h-3.5" />}>
                Open Raw PDF
              </Button>
            </a>

            <a
              data-testid="resume-download-pdf-link"
              href={PROFILE_DATA.resumeUrl}
              download="suraj.raj.pdf"
            >
              <Button
                data-testid="btn-download-pdf-header"
                variant="primary"
                size="sm"
                icon={<Download className="w-4 h-4" />}
                className="shadow-glow tracking-wider font-semibold"
              >
                Download PDF
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Main Resume Viewer Container */}
      <main data-testid="resume-main-content" className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 flex flex-col gap-6">
        {/* Quick Highlights Bar */}
        <div data-testid="resume-highlights-bar" className="glass-panel p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300">
          <div data-testid="resume-official-notice" className="flex items-center gap-2 text-sky-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span data-testid="resume-notice-text">Official Candidate Document for Recruiters & Hiring Managers</span>
          </div>

          <div data-testid="resume-skills-chips" className="flex items-center gap-4 text-slate-400">
            <span data-testid="chip-skill-react" className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              React & TypeScript
            </span>
            <span data-testid="chip-skill-fastapi" className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Python FastAPI
            </span>
            <span data-testid="chip-skill-wbd" className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              System Design and AI Automation
            </span>
          </div>
        </div>

        {/* Embedded Interactive PDF Viewer */}
        <div data-testid="resume-iframe-container" className="relative flex-1 w-full min-h-[75vh] sm:min-h-[82vh] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
          <iframe
            data-testid="resume-pdf-iframe"
            src={`${PROFILE_DATA.resumeUrl}#toolbar=1&navpanes=0&view=FitH`}
            className="w-full h-full min-h-[75vh] sm:min-h-[82vh] border-0"
            title={`${PROFILE_DATA.name} Resume PDF`}
          />

          {/* Mobile Fallback Banner */}
          <div data-testid="resume-mobile-fallback-banner" className="sm:hidden p-4 bg-slate-900 border-t border-slate-800 text-center">
            <p data-testid="resume-mobile-notice" className="text-xs text-slate-400 mb-3">
              Viewing on mobile? You can download or open the full PDF directly:
            </p>
            <div data-testid="resume-mobile-actions" className="flex items-center justify-center gap-3">
              <a data-testid="resume-mobile-download-link" href={PROFILE_DATA.resumeUrl} download="suraj.raj.pdf">
                <Button data-testid="btn-download-pdf-mobile" variant="primary" size="sm" icon={<Download className="w-4 h-4" />}>
                  Download Resume PDF
                </Button>
              </a>
              <a data-testid="resume-mobile-fullscreen-link" href={PROFILE_DATA.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Button data-testid="btn-fullscreen-mobile" variant="outline" size="sm" icon={<ExternalLink className="w-3.5 h-3.5" />}>
                  Open Fullscreen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
