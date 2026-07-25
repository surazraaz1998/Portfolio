'use client';

import React from 'react';
import { Volume2, VolumeX, X, SkipForward } from 'lucide-react';
import { useGameStore } from './useGameStore';
import { Toast } from '../ui/Toast';
import { CAREER_ZONES } from '../../data/timeline';

interface GameUIProps {
  onClose: () => void;
  onSkipToZone: (zoneId: number) => void;
}

export const GameUI: React.FC<GameUIProps> = ({ onClose, onSkipToZone }) => {
  const currentZone = useGameStore((s) => s.currentZone);
  const progressPercent = useGameStore((s) => s.progressPercent);
  const isMuted = useGameStore((s) => s.isMuted);
  const setMuted = useGameStore((s) => s.setMuted);
  const unlockedStats = useGameStore((s) => s.unlockedStats);

  const activeZoneObj = CAREER_ZONES.find((z) => z.id === currentZone) || CAREER_ZONES[0];

  return (
    <>
      {/* Top HUD Bar */}
      <div data-testid="game-hud-top" className="absolute top-4 left-4 right-4 z-40 flex items-center justify-between gap-4 pointer-events-none">
        {/* Left: Zone & Progress Info */}
        <div data-testid="game-zone-info-card" className="pointer-events-auto flex items-center gap-3 glass-panel p-2.5 rounded-2xl border border-slate-800">
          <div
            data-testid="game-zone-badge"
            className="w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-slate-950 text-sm shadow-sm"
            style={{ backgroundColor: activeZoneObj.color }}
          >
            Z{currentZone}
          </div>
          <div data-testid="game-zone-text-group">
            <div data-testid="game-company-header" className="text-xs font-mono text-slate-200 font-bold flex items-center gap-1.5">
              <span data-testid="game-company-name">{activeZoneObj.company}</span>
              <span data-testid="game-company-period" className="text-[10px] text-slate-400 font-normal">({activeZoneObj.period})</span>
            </div>
            <div data-testid="game-company-theme" className="text-[10px] font-mono text-sky-400 truncate max-w-[180px] sm:max-w-xs">
              {activeZoneObj.theme}
            </div>
          </div>
        </div>

        {/* Center: Journey Progress Bar */}
        <div data-testid="game-progress-wrapper" className="pointer-events-auto hidden md:flex flex-col items-center gap-1 glass-panel px-6 py-2 rounded-full border border-slate-800 min-w-[240px]">
          <div data-testid="game-progress-header" className="flex items-center justify-between w-full text-[11px] font-mono text-slate-300">
            <span data-testid="game-progress-label">Career Journey</span>
            <span data-testid="game-progress-value" className="text-emerald-400 font-bold">{Math.round(progressPercent)}%</span>
          </div>
          <div data-testid="game-progress-track" className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
            <div
              data-testid="game-progress-fill"
              className="h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
            />
          </div>
        </div>

        {/* Right: Quick Skip, Mute & Exit Controls */}
        <div data-testid="game-hud-controls" className="pointer-events-auto flex items-center gap-2">
          {/* Quick Zone Skip Dropdown */}
          <div data-testid="game-skip-dropdown-wrapper" className="relative">
            <select
              data-testid="select-skip-zone"
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
            data-testid="btn-toggle-sound"
            onClick={() => setMuted(!isMuted)}
            className="p-2 rounded-xl glass-panel text-slate-400 hover:text-slate-200 border border-slate-800"
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX data-testid="icon-sound-muted" className="w-4 h-4" /> : <Volume2 data-testid="icon-sound-active" className="w-4 h-4" />}
          </button>

          {/* Exit Game */}
          <button
            data-testid="btn-exit-game"
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-rose-400 transition-colors"
            aria-label="Exit Game"
          >
            <X data-testid="icon-exit-game" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Keyboard Controls Instructions Banner */}
      <div data-testid="game-controls-instruction-banner" className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none hidden sm:block">
        <div data-testid="game-controls-instruction-content" className="glass-panel px-4 py-1.5 rounded-full border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-3">
          <span data-testid="instruction-move">
            Move: <kbd data-testid="kbd-left" className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">←</kbd>{' '}
            <kbd data-testid="kbd-right" className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">→</kbd> or{' '}
            <kbd data-testid="kbd-a" className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">A</kbd>{' '}
            <kbd data-testid="kbd-d" className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">D</kbd>
          </span>
          <span data-testid="instruction-separator">•</span>
          <span data-testid="instruction-jump">
            Jump:{' '}
            <kbd data-testid="kbd-space" className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">Space</kbd> or{' '}
            <kbd data-testid="kbd-up" className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">↑</kbd>
          </span>
        </div>
      </div>

      {/* Non-blocking Unlocked Toast Popups */}
      <Toast stats={unlockedStats} onDismiss={() => {}} />
    </>
  );
};
