import { useRef, Suspense } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = "/bouquet.glb";

function BouquetModel() {
  const { scene } = useGLTF(MODEL_URL);
  const meshRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={meshRef} object={scene} scale={2.2} position={[0, -0.5, 0]} />;
}

export default function Bouquet3D() {
  return (
    <div className="w-full h-full flex flex-col">
      <Canvas camera={{ position: [0, 1, 4], fov: 60 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <directionalLight position={[-5, 5, -5]} intensity={1} />
        <Suspense fallback={null}>
          <BouquetModel />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={2}
          maxDistance={8}
        />
      </Canvas>
      <p className="text-center text-xs text-muted-foreground mt-2 select-none">
        🖱️ Drag to rotate &nbsp;·&nbsp; Scroll to zoom
      </p>
    </div>
  );
}
