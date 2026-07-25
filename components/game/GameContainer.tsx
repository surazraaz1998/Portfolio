'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const GameCanvas = dynamic(() => import('./GameCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-slate-200">
      <Loader2 className="w-10 h-10 text-sky-400 animate-spin mb-4" />
      <span className="font-mono text-sm tracking-wider text-sky-400">Loading 2D Game Engine...</span>
    </div>
  ),
});

interface GameContainerProps {
  isOpen: boolean;
  onClose: () => void;
  onConnectPortal: () => void;
}

export const GameContainer: React.FC<GameContainerProps> = ({
  isOpen,
  onClose,
  onConnectPortal,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-slate-950 flex flex-col"
        >
          <GameCanvas onClose={onClose} onConnectPortal={onConnectPortal} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
