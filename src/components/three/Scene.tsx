"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 200;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#7c6dff"),
      new THREE.Color("#00d4ff"),
      new THREE.Color("#b44aff"),
    ];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.008;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.005) * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function GlowingIcosahedron({
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
    meshRef.current.rotation.x =
      state.clock.elapsedTime * speed * 0.15;
    meshRef.current.rotation.y =
      state.clock.elapsedTime * speed * 0.2;
  });

  return (
    <Float speed={speed * 0.6} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[size, 1]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.12}
          wireframe
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

function GlowingTorus({
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
    meshRef.current.rotation.x =
      state.clock.elapsedTime * speed * 0.2;
    meshRef.current.rotation.z =
      state.clock.elapsedTime * speed * 0.15;
  });

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[size, size * 0.3, 16, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.08}
          wireframe
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0" style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 18], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight
            position={[15, 15, 15]}
            intensity={0.4}
            color="#7c6dff"
          />
          <pointLight
            position={[-15, -10, 5]}
            intensity={0.3}
            color="#00d4ff"
          />
          <pointLight
            position={[0, 15, -15]}
            intensity={0.2}
            color="#b44aff"
          />

          <GlowingIcosahedron
            position={[-7, 5, -6]}
            color="#7c6dff"
            size={1.0}
            speed={1.0}
          />
          <GlowingIcosahedron
            position={[8, -4, -9]}
            color="#00d4ff"
            size={0.7}
            speed={1.3}
          />
          <GlowingIcosahedron
            position={[6, 6, -7]}
            color="#b44aff"
            size={0.5}
            speed={1.6}
          />
          <GlowingTorus
            position={[-6, -5, -8]}
            color="#7c6dff"
            size={0.9}
            speed={0.8}
          />
          <GlowingTorus
            position={[7, 3, -11]}
            color="#00d4ff"
            size={0.6}
            speed={1.1}
          />
          <GlowingIcosahedron
            position={[-9, 0, -11]}
            color="#b44aff"
            size={0.4}
            speed={1.8}
          />
          <GlowingIcosahedron
            position={[0, 8, -13]}
            color="#7c6dff"
            size={0.35}
            speed={1.4}
          />
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
}
