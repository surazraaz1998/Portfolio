'use client';

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { useGameStore } from './useGameStore';

interface CollectibleOrbProps {
  id: string;
  x: number;
  y: number;
  title: string;
  value: string;
  description: string;
  zoneId: number;
  projectId?: string;
  playerX: number;
  playerY: number;
}

export const CollectibleOrb: React.FC<CollectibleOrbProps> = ({
  id,
  x,
  y,
  title,
  value,
  description,
  zoneId,
  projectId,
  playerX,
  playerY,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [collected, setCollected] = useState(false);
  const addScore = useGameStore((s) => s.addScore);
  const unlockStat = useGameStore((s) => s.unlockStat);
  const openProjectModal = useGameStore((s) => s.openProjectModal);

  useFrame((state) => {
    if (collected) return;

    // Floating rotation animation
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.03;
      meshRef.current.position.y = y + Math.sin(state.clock.getElapsedTime() * 3 + x) * 0.15;
    }

    // AABB / Distance Collision Check with Player
    const dx = Math.abs(playerX - x);
    const dy = Math.abs(playerY - y);

    if (dx < 1.2 && dy < 1.2) {
      setCollected(true);
      addScore(100);
      unlockStat({
        id,
        title,
        value,
        description,
        zoneId,
        timestamp: Date.now(),
      });
      if (projectId) {
        openProjectModal(projectId);
      }
    }
  });

  if (collected) return null;

  return (
    <group position={[x, y, 0]}>
      <mesh
        ref={meshRef}
        onClick={() => {
          setCollected(true);
          addScore(100);
          unlockStat({ id, title, value, description, zoneId, timestamp: Date.now() });
          if (projectId) openProjectModal(projectId);
        }}
      >
        <octahedronGeometry args={[0.45, 0]} />
        <meshStandardMaterial
          color="#34d399"
          emissive="#059669"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      <Text position={[0, 0.7, 0]} fontSize={0.3} color="#34d399" anchorX="center">
        {title}
      </Text>
    </group>
  );
};
