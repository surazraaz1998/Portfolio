'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';
import { UnlockedStat } from '../../types/game';

interface ToastProps {
  stats: UnlockedStat[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ stats, onDismiss }) => {
  return (
    <div data-testid="toast-container" className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm pointer-events-none">
      <AnimatePresence>
        {stats.map((stat) => (
          <motion.div
            data-testid={`toast-item-${stat.id}`}
            key={stat.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl glass-panel border border-emerald-500/40 bg-slate-900/90 text-slate-100 shadow-glow-emerald"
          >
            <div data-testid={`toast-icon-${stat.id}`} className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div data-testid={`toast-content-${stat.id}`} className="flex-1 min-w-0">
              <div data-testid={`toast-label-${stat.id}`} className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                Unlocked Achievement
              </div>
              <div data-testid={`toast-title-${stat.id}`} className="font-bold text-sm text-slate-100 mt-0.5">
                {stat.title}: <span data-testid={`toast-value-${stat.id}`} className="text-sky-400">{stat.value}</span>
              </div>
              <div data-testid={`toast-desc-${stat.id}`} className="text-xs text-slate-400 mt-1 line-clamp-2">{stat.description}</div>
            </div>
            <button
              data-testid={`btn-toast-dismiss-${stat.id}`}
              onClick={() => onDismiss(stat.id)}
              className="text-slate-400 hover:text-slate-200 p-1"
              aria-label="Dismiss toast"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
