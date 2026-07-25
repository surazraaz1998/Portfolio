'use client';

import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GameScene } from './GameScene';
import { GameControls } from './GameControls';
import { GameUI } from './GameUI';
import { ControlsState } from '../../types/game';

interface GameCanvasProps {
  onClose: () => void;
  onConnectPortal: () => void;
}

export const GameCanvas: React.FC<GameCanvasProps> = ({ onClose, onConnectPortal }) => {
  const [controls, setControls] = useState<ControlsState>({
    left: false,
    right: false,
    jump: false,
  });

  const handleSkipToZone = (zoneId: number) => {
    // Quick zone skip teleport logic
    const xPosMap: Record<number, number> = {
      1: 2,
      2: 32,
      3: 62,
      4: 92,
    };
    const targetX = xPosMap[zoneId] || 2;
    // Dispatch custom zone skip position update event or reload scene target
    window.dispatchEvent(new CustomEvent('teleport-player', { detail: { x: targetX } }));
  };

  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden select-none">
      {/* Top HUD UI & Controls */}
      <GameUI onClose={onClose} onSkipToZone={handleSkipToZone} />

      {/* R3F 3D Game Canvas */}
      <Canvas
        gl={{ alpha: false, antialias: true }}
        className="w-full h-full game-canvas-active"
      >
        <Suspense fallback={null}>
          <GameScene controls={controls} onConnectPortal={onConnectPortal} />
        </Suspense>
      </Canvas>

      {/* Touch & Keyboard Overlay */}
      <GameControls controls={controls} setControls={setControls} />
    </div>
  );
};

export default GameCanvas;
