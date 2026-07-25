'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleGrid() {
  const count = 65; // Capped for butter-smooth 60fps performance across all devices
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 8 - 2;
      const factor = Math.random() * 0.5 + 0.5;
      const speed = Math.random() * 0.3 + 0.1;
      temp.push({ x, y, z, factor, speed, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const mouseX = state.pointer.x * 3;
    const mouseY = state.pointer.y * 1.5;

    particles.forEach((p, i) => {
      p.mx += (mouseX - p.mx) * 0.02;
      p.my += (mouseY - p.my) * 0.02;

      const px = p.x + Math.sin(time * p.speed + p.factor) * 0.4 + p.mx * 0.15;
      const py = p.y + Math.cos(time * p.speed + p.factor) * 0.4 + p.my * 0.15;
      const pz = p.z + Math.sin(time * 0.5 + i) * 0.2;

      dummy.position.set(px, py, pz);
      const scale = (Math.sin(time * p.speed + p.factor) * 0.2 + 0.8) * 0.1;
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();

      if (meshRef.current) {
        meshRef.current.setMatrixAt(i, dummy.matrix);
      }
    });

    if (meshRef.current) {
      meshRef.current.instanceMatrix.needsUpdate = true;
    }

    if (lightRef.current) {
      lightRef.current.position.x = mouseX;
      lightRef.current.position.y = mouseY;
    }
  });

  return (
    <>
      <pointLight ref={lightRef} intensity={1.2} color="#38bdf8" distance={8} />
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <octahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color="#38bdf8"
          roughness={0.3}
          metalness={0.7}
          emissive="#0f172a"
          emissiveIntensity={0.2}
          wireframe
        />
      </instancedMesh>
    </>
  );
}

export default function HeroBackgroundCanvas() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Pause & unmount WebGL Canvas when scrolled out of view to save 100% GPU/CPU
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 opacity-50 pointer-events-none">
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.6} color="#818cf8" />
          <ParticleGrid />
        </Canvas>
      )}
    </div>
  );
}
