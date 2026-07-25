'use client';

import React from 'react';
import { Text } from '@react-three/drei';
import { CAREER_ZONES } from '../../data/timeline';

interface ZoneEnvironmentProps {
  playerX: number;
  onReachPortal: () => void;
}

export const ZONE_BOUNDS = [
  { zoneId: 1, startX: 0, endX: 30 },
  { zoneId: 2, startX: 30, endX: 60 },
  { zoneId: 3, startX: 60, endX: 90 },
  { zoneId: 4, startX: 90, endX: 125 },
];

export const ZoneEnvironment: React.FC<ZoneEnvironmentProps> = ({ playerX, onReachPortal }) => {
  const groundY = -1.75;
  const totalLength = 140;

  return (
    <group>
      {/* Main Ground Platform */}
      <mesh position={[totalLength / 2, groundY, 0]}>
        <boxGeometry args={[totalLength, 0.4, 4]} />
        <meshStandardMaterial color="#1e293b" roughness={0.5} metalness={0.5} />
      </mesh>

      {/* Glowing Ground Accent Edge */}
      <mesh position={[totalLength / 2, groundY + 0.2, 0]}>
        <boxGeometry args={[totalLength, 0.05, 0.2]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>

      {/* Milestone Pillars & Banners per Zone */}
      {CAREER_ZONES.map((zone, idx) => {
        const xPos = idx * 30 + 12;
        return (
          <group key={zone.id} position={[xPos, 1.5, 0]}>
            {/* 3D Pillar */}
            <mesh position={[0, -1.2, -1]}>
              <cylinderGeometry args={[0.3, 0.3, 4, 16]} />
              <meshStandardMaterial color={zone.color} roughness={0.3} metalness={0.8} />
            </mesh>

            {/* Zone Banner Text */}
            <Text
              position={[0, 1.8, 0]}
              fontSize={0.8}
              color={zone.color}
              anchorX="center"
              anchorY="middle"
            >
              {`ZONE ${zone.id}: ${zone.company.toUpperCase()}`}
            </Text>

            <Text
              position={[0, 0.9, 0]}
              fontSize={0.4}
              color="#94a3b8"
              anchorX="center"
              anchorY="middle"
            >
              {zone.theme}
            </Text>
          </group>
        );
      })}

      {/* Connect Portal Gate at the End of Timeline */}
      <group position={[120, 1, 0]}>
        {/* Outer Ring Torus */}
        <mesh rotation={[0, 0, 0]}>
          <torusGeometry args={[2.2, 0.2, 16, 100]} />
          <meshStandardMaterial color="#f43f5e" emissive="#f43f5e" emissiveIntensity={0.8} />
        </mesh>

        <Text position={[0, 3, 0]} fontSize={0.7} color="#f43f5e" anchorX="center">
          CONNECT PORTAL
        </Text>

        <Text position={[0, -2.8, 0]} fontSize={0.4} color="#f8fafc" anchorX="center">
          STEP INSIDE TO GET IN TOUCH
        </Text>
      </group>
    </group>
  );
};
