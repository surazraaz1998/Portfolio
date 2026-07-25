'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ControlsState } from '../../types/game';

interface PlayerProps {
  controls: ControlsState;
  positionRef: React.MutableRefObject<{ x: number; y: number; vy: number; isGrounded: boolean }>;
}

export const Player: React.FC<PlayerProps> = ({ controls, positionRef }) => {
  const meshRef = useRef<THREE.Group>(null);
  const glowMeshRef = useRef<THREE.Mesh>(null);

  // Limb & Head Refs for running & jumping animations
  const headRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);

  const speed = 0.18;
  const gravity = -0.015;
  const jumpForce = 0.35;
  const groundY = -1.2;

  useFrame((state, delta) => {
    const pos = positionRef.current;
    const isRunning = controls.right || controls.left;

    // Left/Right Horizontal Movement
    if (controls.right) {
      pos.x += speed;
    }
    if (controls.left) {
      pos.x = Math.max(0, pos.x - speed);
    }

    // Jump Physics
    if (controls.jump && pos.isGrounded) {
      pos.vy = jumpForce;
      pos.isGrounded = false;
    }

    // Apply Gravity
    pos.vy += gravity;
    pos.y += pos.vy;

    // Ground Collision
    if (pos.y <= groundY) {
      pos.y = groundY;
      pos.vy = 0;
      pos.isGrounded = true;
    }

    // Update Three.js Player Position & Stride Bounce
    const time = state.clock.getElapsedTime();
    const runCycle = time * 14;

    if (meshRef.current) {
      const runBounce = isRunning && pos.isGrounded ? Math.abs(Math.sin(runCycle)) * 0.08 : 0;
      meshRef.current.position.set(pos.x, pos.y + runBounce, 0);

      // Smooth facing rotation & lean forward into movement direction
      const targetRotationY = controls.right ? 0.45 : controls.left ? -0.45 : 0;
      const targetRotationZ = controls.right ? -0.15 : controls.left ? 0.15 : 0;

      meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * delta * 10;
      meshRef.current.rotation.z += (targetRotationZ - meshRef.current.rotation.z) * delta * 10;
    }

    if (glowMeshRef.current) {
      glowMeshRef.current.position.set(pos.x, groundY - 0.5, 0);
    }

    // Limb Animations (Running Stride vs Jump)
    if (pos.isGrounded) {
      if (isRunning) {
        if (leftArmRef.current) leftArmRef.current.rotation.x = -Math.sin(runCycle) * 0.8;
        if (rightArmRef.current) rightArmRef.current.rotation.x = Math.sin(runCycle) * 0.8;
        if (leftLegRef.current) leftLegRef.current.rotation.x = Math.sin(runCycle) * 0.9;
        if (rightLegRef.current) rightLegRef.current.rotation.x = -Math.sin(runCycle) * 0.9;
      } else {
        const idleBreath = Math.sin(time * 3) * 0.05;
        if (leftArmRef.current) leftArmRef.current.rotation.x = idleBreath;
        if (rightArmRef.current) rightArmRef.current.rotation.x = -idleBreath;
        if (leftLegRef.current) leftLegRef.current.rotation.x = 0;
        if (rightLegRef.current) rightLegRef.current.rotation.x = 0;
      }
    } else {
      if (leftArmRef.current) leftArmRef.current.rotation.z = 0.6;
      if (rightArmRef.current) rightArmRef.current.rotation.z = -0.6;
      if (leftLegRef.current) leftLegRef.current.rotation.x = -0.6;
      if (rightLegRef.current) rightLegRef.current.rotation.x = 0.6;
    }
  });

  return (
    <group>
      {/* Ground Shadow Ring */}
      <mesh ref={glowMeshRef} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.2, 0.8, 32]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.3} />
      </mesh>

      {/* --- SURAJ RAJ 3D CARTOON CHARACTER (Pure 3D Stylized Model) --- */}
      <group ref={meshRef} position={[0, groundY, 0]}>

        {/* 1. CARTOON HEAD & FACIAL FEATURES */}
        <group ref={headRef} position={[0, 0.92, 0]}>
          {/* Head Base Sphere */}
          <mesh castShadow>
            <sphereGeometry args={[0.38, 32, 32]} />
            <meshStandardMaterial color="#f3b28f" roughness={0.4} />
          </mesh>

          {/* 3D Dark Eyes with Pupil Shine */}
          <group position={[0, 0.06, 0.33]}>
            {/* Left Eye */}
            <mesh position={[-0.12, 0, 0]}>
              <sphereGeometry args={[0.045, 16, 16]} />
              <meshBasicMaterial color="#1e1917" />
            </mesh>
            <mesh position={[-0.105, 0.015, 0.035]}>
              <sphereGeometry args={[0.015, 8, 8]} />
              <meshBasicMaterial color="#ffffff" />
            </mesh>

            {/* Right Eye */}
            <mesh position={[0.12, 0, 0]}>
              <sphereGeometry args={[0.045, 16, 16]} />
              <meshBasicMaterial color="#1e1917" />
            </mesh>
            <mesh position={[0.135, 0.015, 0.035]}>
              <sphereGeometry args={[0.015, 8, 8]} />
              <meshBasicMaterial color="#ffffff" />
            </mesh>
          </group>

          {/* 3D Eyebrows */}
          <mesh position={[-0.12, 0.14, 0.33]} rotation={[0, 0, 0.12]}>
            <boxGeometry args={[0.1, 0.025, 0.02]} />
            <meshStandardMaterial color="#1f1917" />
          </mesh>
          <mesh position={[0.12, 0.14, 0.33]} rotation={[0, 0, -0.12]}>
            <boxGeometry args={[0.1, 0.025, 0.02]} />
            <meshStandardMaterial color="#1f1917" />
          </mesh>

          {/* 3D Cartoon Nose */}
          <mesh position={[0, 0.01, 0.36]}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshStandardMaterial color="#ebad80" roughness={0.5} />
          </mesh>

          {/* 3D Mustache */}
          <mesh position={[0, -0.06, 0.35]}>
            <boxGeometry args={[0.18, 0.04, 0.03]} />
            <meshStandardMaterial color="#26201e" roughness={0.9} />
          </mesh>

          {/* 3D Beard Torus Frame */}
          <mesh position={[0, -0.14, 0.08]} rotation={[Math.PI, 0, 0]} castShadow>
            <torusGeometry args={[0.24, 0.07, 12, 24, Math.PI]} />
            <meshStandardMaterial color="#26201e" roughness={0.9} />
          </mesh>

          {/* 3D Dark Curly Hair Volume */}
          <group position={[0, 0.18, 0]}>
            <mesh position={[0, 0.12, -0.04]} castShadow>
              <sphereGeometry args={[0.4, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.7]} />
              <meshStandardMaterial color="#1f1917" roughness={0.8} />
            </mesh>
            {/* Top Hair Curls */}
            <mesh position={[0, 0.32, 0.1]} castShadow>
              <dodecahedronGeometry args={[0.16]} />
              <meshStandardMaterial color="#1f1917" roughness={0.9} />
            </mesh>
            <mesh position={[-0.16, 0.3, 0.14]} castShadow>
              <dodecahedronGeometry args={[0.13]} />
              <meshStandardMaterial color="#1f1917" roughness={0.9} />
            </mesh>
            <mesh position={[0.16, 0.3, 0.14]} castShadow>
              <dodecahedronGeometry args={[0.13]} />
              <meshStandardMaterial color="#1f1917" roughness={0.9} />
            </mesh>
          </group>

          {/* Cartoon Ears */}
          <mesh position={[-0.4, 0, 0]}>
            <sphereGeometry args={[0.08, 12, 12]} />
            <meshStandardMaterial color="#f3b28f" />
          </mesh>
          <mesh position={[0.4, 0, 0]}>
            <sphereGeometry args={[0.08, 12, 12]} />
            <meshStandardMaterial color="#f3b28f" />
          </mesh>
        </group>

        {/* 2. NECK */}
        <mesh position={[0, 0.54, 0]} castShadow>
          <cylinderGeometry args={[0.11, 0.13, 0.14, 16]} />
          <meshStandardMaterial color="#f3b28f" roughness={0.5} />
        </mesh>

        {/* 3. TORSO (White Tee Outfit matching Suraj's photo) */}
        <mesh position={[0, 0.28, 0]} castShadow>
          <cylinderGeometry args={[0.23, 0.25, 0.42, 16]} />
          <meshStandardMaterial color="#ffffff" roughness={0.3} />
        </mesh>

        {/* Tee Sleeves */}
        <mesh position={[-0.26, 0.38, 0]} rotation={[0, 0, 0.3]}>
          <cylinderGeometry args={[0.09, 0.1, 0.16, 12]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0.26, 0.38, 0]} rotation={[0, 0, -0.3]}>
          <cylinderGeometry args={[0.09, 0.1, 0.16, 12]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* 4. ARMS & SILVER WATCH */}
        {/* Left Arm with Silver Watch */}
        <group ref={leftArmRef} position={[-0.3, 0.38, 0]}>
          <mesh position={[0, -0.18, 0]} castShadow>
            <cylinderGeometry args={[0.065, 0.055, 0.34, 12]} />
            <meshStandardMaterial color="#f3b28f" roughness={0.5} />
          </mesh>
          {/* Silver Watch on Left Wrist */}
          <mesh position={[0, -0.31, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.07, 0.018, 12, 24]} />
            <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>

        {/* Right Arm */}
        <group ref={rightArmRef} position={[0.3, 0.38, 0]}>
          <mesh position={[0, -0.18, 0]} castShadow>
            <cylinderGeometry args={[0.065, 0.055, 0.34, 12]} />
            <meshStandardMaterial color="#f3b28f" roughness={0.5} />
          </mesh>
        </group>

        {/* 5. LEGS & JEANS */}
        {/* Left Denim Blue Leg */}
        <group ref={leftLegRef} position={[-0.13, 0.05, 0]}>
          <mesh position={[0, -0.22, 0]} castShadow>
            <cylinderGeometry args={[0.095, 0.075, 0.42, 16]} />
            <meshStandardMaterial color="#2563eb" roughness={0.6} />
          </mesh>
          {/* Left Sneaker */}
          <mesh position={[0, -0.45, 0.06]} castShadow>
            <boxGeometry args={[0.13, 0.1, 0.28]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.2} />
          </mesh>
          {/* Cyan Sole Accent */}
          <mesh position={[0, -0.5, 0.06]}>
            <boxGeometry args={[0.14, 0.035, 0.3]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
        </group>

        {/* Right Denim Blue Leg */}
        <group ref={rightLegRef} position={[0.13, 0.05, 0]}>
          <mesh position={[0, -0.22, 0]} castShadow>
            <cylinderGeometry args={[0.095, 0.075, 0.42, 16]} />
            <meshStandardMaterial color="#2563eb" roughness={0.6} />
          </mesh>
          {/* Right Sneaker */}
          <mesh position={[0, -0.45, 0.06]} castShadow>
            <boxGeometry args={[0.13, 0.1, 0.28]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.2} />
          </mesh>
          {/* Cyan Sole Accent */}
          <mesh position={[0, -0.5, 0.06]}>
            <boxGeometry args={[0.14, 0.035, 0.3]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
        </group>
      </group>
    </group>
  );
};
