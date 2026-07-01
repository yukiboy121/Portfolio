"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 300;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#6C63FF"),
      new THREE.Color("#00E5FF"),
      new THREE.Color("#A855F7"),
      new THREE.Color("#1e1b4b"),
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function GlowingSphere({
  position,
  color,
  size,
  speed,
}: {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.15;
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[size, 1]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.15}
          wireframe
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

function TorusShape({
  position,
  color,
  size,
  speed,
}: {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.2;
  });

  return (
    <Float speed={speed * 0.8} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[size, size * 0.25, 16, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.1}
          wireframe
          emissive={color}
          emissiveIntensity={0.08}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0" style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.15} />
          <pointLight position={[15, 15, 15]} intensity={0.3} color="#6C63FF" />
          <pointLight position={[-15, -10, 5]} intensity={0.2} color="#00E5FF" />
          <pointLight position={[0, 15, -15]} intensity={0.15} color="#A855F7" />

          <GlowingSphere position={[-6, 4, -5]} color="#6C63FF" size={1.2} speed={1.2} />
          <GlowingSphere position={[7, -3, -8]} color="#00E5FF" size={0.8} speed={1.5} />
          <GlowingSphere position={[5, 5, -6]} color="#A855F7" size={0.6} speed={1.8} />
          
          <TorusShape position={[-5, -4, -7]} color="#6C63FF" size={1.0} speed={1.0} />
          <TorusShape position={[6, 2, -10]} color="#00E5FF" size={0.7} speed={1.3} />

          <GlowingSphere position={[-8, 0, -10]} color="#A855F7" size={0.5} speed={2.0} />
          <GlowingSphere position={[0, 7, -12]} color="#6C63FF" size={0.4} speed={1.6} />

          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
}
