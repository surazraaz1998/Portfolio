'use client';

import React from 'react';
import { Volume2, VolumeX, X, SkipForward, Sparkles, Award } from 'lucide-react';
import { useGameStore } from './useGameStore';
import { Toast } from '../ui/Toast';
import { CAREER_ZONES } from '../../data/timeline';

interface GameUIProps {
  onClose: () => void;
  onSkipToZone: (zoneId: number) => void;
}

export const GameUI: React.FC<GameUIProps> = ({ onClose, onSkipToZone }) => {
  const currentZone = useGameStore((s) => s.currentZone);
  const score = useGameStore((s) => s.score);
  const progressPercent = useGameStore((s) => s.progressPercent);
  const isMuted = useGameStore((s) => s.isMuted);
  const setMuted = useGameStore((s) => s.setMuted);
  const unlockedStats = useGameStore((s) => s.unlockedStats);

  const activeZoneObj = CAREER_ZONES.find((z) => z.id === currentZone) || CAREER_ZONES[0];

  return (
    <>
      {/* Top HUD Bar */}
      <div className="absolute top-4 left-4 right-4 z-40 flex items-center justify-between gap-4 pointer-events-none">
        {/* Left: Zone & Progress Info */}
        <div className="pointer-events-auto flex items-center gap-3 glass-panel p-2.5 rounded-2xl border border-slate-800">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-slate-950 text-sm shadow-sm"
            style={{ backgroundColor: activeZoneObj.color }}
          >
            Z{currentZone}
          </div>
          <div>
            <div className="text-xs font-mono text-slate-200 font-bold flex items-center gap-1.5">
              <span>{activeZoneObj.company}</span>
              <span className="text-[10px] text-slate-400 font-normal">({activeZoneObj.period})</span>
            </div>
            <div className="text-[10px] font-mono text-sky-400 truncate max-w-[180px] sm:max-w-xs">
              {activeZoneObj.theme}
            </div>
          </div>
        </div>

        {/* Center: Journey Progress Bar */}
        <div className="pointer-events-auto hidden md:flex flex-col items-center gap-1 glass-panel px-6 py-2 rounded-full border border-slate-800 min-w-[240px]">
          <div className="flex items-center justify-between w-full text-[11px] font-mono text-slate-300">
            <span>Career Journey</span>
            <span className="text-emerald-400 font-bold">{Math.round(progressPercent)}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
            />
          </div>
        </div>

        {/* Right: Quick Skip, Mute & Exit Controls */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Quick Zone Skip Dropdown */}
          <div className="relative">
            <select
              value={currentZone}
              onChange={(e) => onSkipToZone(Number(e.target.value))}
              className="bg-slate-900/90 text-slate-200 border border-slate-800 text-xs font-mono px-3 py-2 rounded-xl focus:outline-none focus:border-sky-500 cursor-pointer appearance-none pr-7"
            >
              {CAREER_ZONES.map((z) => (
                <option key={z.id} value={z.id}>
                  Skip to Z{z.id}: {z.company}
                </option>
              ))}
            </select>
            <SkipForward className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
          </div>

          {/* Sound Mute */}
          <button
            onClick={() => setMuted(!isMuted)}
            className="p-2 rounded-xl glass-panel text-slate-400 hover:text-slate-200 border border-slate-800"
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Exit Game */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-rose-400 transition-colors"
            aria-label="Exit Game"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Keyboard Controls Instructions Banner */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none hidden sm:block">
        <div className="glass-panel px-4 py-1.5 rounded-full border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-3">
          <span>
            Move: <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">←</kbd>{' '}
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">→</kbd> or{' '}
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">A</kbd>{' '}
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">D</kbd>
          </span>
          <span>•</span>
          <span>
            Jump:{' '}
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">Space</kbd> or{' '}
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">↑</kbd>
          </span>
        </div>
      </div>

      {/* Non-blocking Unlocked Toast Popups */}
      <Toast stats={unlockedStats} onDismiss={() => {}} />
    </>
  );
};
