import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ParticleBackground() {
  const points = useRef<THREE.Points>(null);

  // Generate particles
  const particleCount = 3500;
  const positions = new Float32Array(particleCount * 3);
  
  for(let i = 0; i < particleCount; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 2000;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y += 0.0002;
      points.current.rotation.x += 0.00008;

      // Subtle camera tilt towards mouse
      state.camera.position.x += ((state.pointer.x * 150) - state.camera.position.x) * 0.05;
      state.camera.position.y += ((state.pointer.y * 150) - state.camera.position.y) * 0.05;
      state.camera.lookAt(0, 0, 0);
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={1.0}
        color={0xffffff}
        transparent={true}
        opacity={0.25}
        sizeAttenuation={true}
      />
    </points>
  );
}
