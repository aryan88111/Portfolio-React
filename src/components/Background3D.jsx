import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleField = () => {
  const ref = useRef();
  
  // Create particles in a custom pattern
  const particles = useMemo(() => {
    const points = new Float32Array(3000 * 3);
    for (let i = 0; i < points.length; i += 3) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 2;
      points[i] = Math.cos(angle) * radius;     // x
      points[i + 1] = Math.sin(angle) * radius; // y
      points[i + 2] = (Math.random() - 0.5) * 2;// z
    }
    return points;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.2;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8a2be2"
        size={0.008}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={2}
      />
    </Points>
  );
};

const Background3D = () => {
  return (
    <div className="background-3d">
      <Canvas
        camera={{ position: [0, 0, 2] }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default Background3D;
