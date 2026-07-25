'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParallaxBackgroundProps {
  playerX: number;
  currentZone: number;
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ playerX, currentZone }) => {
  const bgFarRef = useRef<THREE.Mesh>(null);
  const bgMidRef = useRef<THREE.Mesh>(null);

  // Colors per zone
  const zoneColors = [
    '#0f172a', // Zone 1 Capgemini - Deep Slate/Cyan
    '#1e1b4b', // Zone 2 Newgen - Security Violet
    '#064e3b', // Zone 3 GMP - Scale Emerald
    '#451a03', // Zone 4 Gramener - Dashboard Amber
    '#4c0519', // Zone 5 Portal - Rose Constellation
  ];

  const targetColor = new THREE.Color(zoneColors[Math.min(currentZone - 1, 4)]);

  useFrame((_, delta) => {
    // Parallax scrolling offset
    if (bgFarRef.current) {
      bgFarRef.current.position.x = playerX * 0.9;
      // Smooth color transition
      (bgFarRef.current.material as THREE.MeshBasicMaterial).color.lerp(targetColor, delta * 2);
    }
    if (bgMidRef.current) {
      bgMidRef.current.position.x = playerX * 0.6;
    }
  });

  return (
    <group>
      {/* Far Background Plane */}
      <mesh ref={bgFarRef} position={[0, 2, -10]}>
        <planeGeometry args={[120, 40]} />
        <meshBasicMaterial color="#0f172a" />
      </mesh>

      {/* Midground Wireframe Parallax Grid */}
      <mesh ref={bgMidRef} position={[0, -1, -5]} rotation={[-Math.PI / 3, 0, 0]}>
        <planeGeometry args={[150, 40, 30, 20]} />
        <meshBasicMaterial color="#334155" wireframe transparent opacity={0.3} />
      </mesh>
    </group>
  );
};
