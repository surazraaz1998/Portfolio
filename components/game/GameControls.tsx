'use client';

import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react';
import { ControlsState } from '../../types/game';

interface GameControlsProps {
  controls: ControlsState;
  setControls: React.Dispatch<React.SetStateAction<ControlsState>>;
}

export const GameControls: React.FC<GameControlsProps> = ({ controls, setControls }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowRight', 'KeyD'].includes(e.code)) {
        setControls((c) => ({ ...c, right: true }));
      }
      if (['ArrowLeft', 'KeyA'].includes(e.code)) {
        setControls((c) => ({ ...c, left: true }));
      }
      if (['ArrowUp', 'KeyW', 'Space'].includes(e.code)) {
        e.preventDefault();
        setControls((c) => ({ ...c, jump: true }));
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (['ArrowRight', 'KeyD'].includes(e.code)) {
        setControls((c) => ({ ...c, right: false }));
      }
      if (['ArrowLeft', 'KeyA'].includes(e.code)) {
        setControls((c) => ({ ...c, left: false }));
      }
      if (['ArrowUp', 'KeyW', 'Space'].includes(e.code)) {
        setControls((c) => ({ ...c, jump: false }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [setControls]);

  return (
    <div data-testid="game-touch-controls-bar" className="absolute bottom-6 left-0 right-0 z-30 pointer-events-none px-6 flex items-center justify-between">
      {/* On-screen Directional Touch Controls for Mobile / Touchscreens */}
      <div data-testid="game-touch-directional-group" className="pointer-events-auto flex items-center gap-3">
        <button
          data-testid="btn-touch-move-left"
          onTouchStart={() => setControls((c) => ({ ...c, left: true }))}
          onTouchEnd={() => setControls((c) => ({ ...c, left: false }))}
          onMouseDown={() => setControls((c) => ({ ...c, left: true }))}
          onMouseUp={() => setControls((c) => ({ ...c, left: false }))}
          className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center text-slate-200 border border-slate-700 active:scale-95 active:bg-sky-500/20 select-none"
          aria-label="Move Left"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <button
          data-testid="btn-touch-move-right"
          onTouchStart={() => setControls((c) => ({ ...c, right: true }))}
          onTouchEnd={() => setControls((c) => ({ ...c, right: false }))}
          onMouseDown={() => setControls((c) => ({ ...c, right: true }))}
          onMouseUp={() => setControls((c) => ({ ...c, right: false }))}
          className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center text-slate-200 border border-slate-700 active:scale-95 active:bg-sky-500/20 select-none"
          aria-label="Move Right"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* On-screen Jump Touch Button */}
      <div data-testid="game-touch-jump-group" className="pointer-events-auto">
        <button
          data-testid="btn-touch-jump"
          onTouchStart={() => setControls((c) => ({ ...c, jump: true }))}
          onTouchEnd={() => setControls((c) => ({ ...c, jump: false }))}
          onMouseDown={() => setControls((c) => ({ ...c, jump: true }))}
          onMouseUp={() => setControls((c) => ({ ...c, jump: false }))}
          className="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold border border-sky-400/40 shadow-glow active:scale-95 select-none"
          aria-label="Jump"
        >
          <ArrowUp className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};
