'use client';

import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import { Player } from './Player';
import { ParallaxBackground } from './ParallaxBackground';
import { ZoneEnvironment, ZONE_BOUNDS } from './ZoneEnvironment';
import { CollectibleOrb } from './CollectibleOrb';
import { ControlsState } from '../../types/game';
import { useGameStore } from './useGameStore';

interface GameSceneProps {
  controls: ControlsState;
  onConnectPortal: () => void;
}

export const GameScene: React.FC<GameSceneProps> = ({ controls, onConnectPortal }) => {
  const positionRef = useRef({ x: 0, y: -1.2, vy: 0, isGrounded: true });
  const cameraRef = useRef<any>(null);
  const hasReachedPortalRef = useRef(false);

  const setCurrentZone = useGameStore((s) => s.setCurrentZone);
  const currentZone = useGameStore((s) => s.currentZone);

  // Teleport Event Listener for Quick Zone Skipping
  useEffect(() => {
    const handleTeleport = (e: any) => {
      if (e.detail && typeof e.detail.x === 'number') {
        positionRef.current.x = e.detail.x;
        positionRef.current.y = -1.2;
        positionRef.current.vy = 0;
        hasReachedPortalRef.current = false;
      }
    };
    window.addEventListener('teleport-player', handleTeleport);
    return () => window.removeEventListener('teleport-player', handleTeleport);
  }, []);

  // Collectible Orbs Data aligned with Suraj Raj's Resume
  const collectibles = [
    {
      id: 'stat-jenkins',
      x: 12,
      y: 0.5,
      title: 'Jenkins CI/CD',
      value: '-40% Release Overhead',
      description: 'Led jQuery -> React.js migration & Jenkins CI/CD at Capgemini',
      zoneId: 1,
    },
    {
      id: 'stat-webpack',
      x: 34,
      y: 0.5,
      title: 'Webpack Optimization',
      value: '-25% Page Load Time',
      description: 'Configured code-splitting, tree-shaking & dynamic imports at Newgen',
      zoneId: 2,
    },
    {
      id: 'stat-aes',
      x: 48,
      y: 0.8,
      title: 'AES Payload Security',
      value: 'CERT-IN Compliant',
      description: 'CryptoJS AES encryption & 30% vulnerability reduction',
      zoneId: 2,
      projectId: 'bam-security-suite',
    },
    {
      id: 'stat-gmp',
      x: 68,
      y: 0.5,
      title: 'Next.js SSR',
      value: '500K+ MAU',
      description: 'Scaled parking platform with +18% Lighthouse score boost',
      zoneId: 3,
      projectId: 'pulseboard',
    },
    {
      id: 'stat-coverage',
      x: 78,
      y: 0.8,
      title: '85%+ Coverage',
      value: 'Jest & RTL',
      description: 'Cut regression defects via unit testing at GetMyParking',
      zoneId: 3,
    },
    {
      id: 'stat-opex',
      x: 98,
      y: 0.5,
      title: 'Opex360 Analytics',
      value: 'Warner Bros. Discovery',
      description: 'Real-time $M-scale expenditure monitoring platform',
      zoneId: 4,
      projectId: 'opex360',
    },
    {
      id: 'stat-fastapi',
      x: 108,
      y: 0.8,
      title: 'Python FastAPI',
      value: 'Pydantic v2 Models',
      description: 'Sub-100ms API architecture & auto-generated OpenAPI docs',
      zoneId: 4,
    },
    {
      id: 'stat-constellation',
      x: 112,
      y: 0.5,
      title: '5+ Years Experience',
      value: 'Full Stack Engineer',
      description: 'Synthesizing React, Next.js, TypeScript & FastAPI mastery',
      zoneId: 4,
    },
  ];

  useFrame((_, delta) => {
    const playerPos = positionRef.current;

    // Smooth Orthographic Camera Follow
    if (cameraRef.current) {
      const targetCamX = Math.max(8, playerPos.x + 4);
      cameraRef.current.position.x += (targetCamX - cameraRef.current.position.x) * (delta * 4);
    }

    // Determine current zone & calculate progress percentage
    const totalLength = 130;
    const currentPercent = Math.min(100, Math.max(0, (playerPos.x / totalLength) * 100));
    useGameStore.setState({ progressPercent: currentPercent });

    const activeZone = ZONE_BOUNDS.find((z) => playerPos.x >= z.startX && playerPos.x < z.endX);
    if (activeZone && activeZone.zoneId !== currentZone) {
      setCurrentZone(activeZone.zoneId);
    }

    // Check Connect Portal Entrance Trigger (End of timeline)
    if (playerPos.x >= 118 && !hasReachedPortalRef.current) {
      hasReachedPortalRef.current = true;
      onConnectPortal();
    }
  });

  return (
    <>
      <OrthographicCamera
        ref={cameraRef}
        makeDefault
        position={[8, 2.2, 11.5]}
        zoom={46}
        near={0.1}
        far={1000}
      />

      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 20, 15]} intensity={1} color="#f8fafc" castShadow />
      <pointLight position={[positionRef.current.x, positionRef.current.y + 1, 2]} intensity={1.5} color="#38bdf8" />

      {/* Parallax Background Layers */}
      <ParallaxBackground playerX={positionRef.current.x} currentZone={currentZone} />

      {/* Ground Platforms & Zone Banners */}
      <ZoneEnvironment playerX={positionRef.current.x} onReachPortal={onConnectPortal} />

      {/* Player Character */}
      <Player controls={controls} positionRef={positionRef} />

      {/* Collectibles */}
      {collectibles.map((item) => (
        <CollectibleOrb
          key={item.id}
          {...item}
          playerX={positionRef.current.x}
          playerY={positionRef.current.y}
        />
      ))}
    </>
  );
};
