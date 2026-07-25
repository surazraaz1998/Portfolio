'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, ExternalLink, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { PROFILE_DATA } from '../../data/profile';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-white">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Back Link & Title */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <Link href="/" className="group flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Portfolio</span>
            </Link>

            <div className="h-6 w-px bg-slate-800 hidden sm:block" />

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h1 className="text-base font-bold text-slate-100 flex items-center gap-2">
                  <span>{PROFILE_DATA.name} — Resume</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-normal">
                    Verified
                  </span>
                </h1>
                <p className="text-xs font-mono text-slate-400">Senior Software Engineer • {PROFILE_DATA.stats[0].value} Experience</p>
              </div>
            </div>
          </div>

          {/* Right: Actions (Download PDF & Open in New Tab) */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={PROFILE_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              <Button variant="outline" size="sm" icon={<ExternalLink className="w-3.5 h-3.5" />}>
                Open Raw PDF
              </Button>
            </a>

            <a
              href={PROFILE_DATA.resumeUrl}
              download="Suraj_Raj_Resume.pdf"
            >
              <Button
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
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 flex flex-col gap-6">
        {/* Quick Highlights Bar */}
        <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2 text-sky-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Official Candidate Document for Recruiters & Hiring Managers</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              React & TypeScript
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Python FastAPI
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Warner Bros. Discovery
            </span>
          </div>
        </div>

        {/* Embedded Interactive PDF Viewer */}
        <div className="relative flex-1 w-full min-h-[75vh] sm:min-h-[82vh] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
          <iframe
            src={`${PROFILE_DATA.resumeUrl}#toolbar=1&navpanes=0&view=FitH`}
            className="w-full h-full min-h-[75vh] sm:min-h-[82vh] border-0"
            title={`${PROFILE_DATA.name} Resume PDF`}
          />

          {/* Mobile Fallback Banner */}
          <div className="sm:hidden p-4 bg-slate-900 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-400 mb-3">
              Viewing on mobile? You can download or open the full PDF directly:
            </p>
            <div className="flex items-center justify-center gap-3">
              <a href={PROFILE_DATA.resumeUrl} download="Suraj_Raj_Resume.pdf">
                <Button variant="primary" size="sm" icon={<Download className="w-4 h-4" />}>
                  Download Resume PDF
                </Button>
              </a>
              <a href={PROFILE_DATA.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" icon={<ExternalLink className="w-3.5 h-3.5" />}>
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
