import { useRef, useState, useEffect, useMemo } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { BufferAttribute } from "three";
import { useLoader } from "@react-three/fiber";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrthographicCamera,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";

const GlobeMesh = ({ count = 1000 }) => {
  const ref: any = useRef<THREE.Mesh>(null!);
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.z += 0.005));

  const vertices = [];

  for (let i = 0; i < 10000; i++) {
    const x = THREE.MathUtils.randFloatSpread(2000);
    const y = THREE.MathUtils.randFloatSpread(2000);
    const z = THREE.MathUtils.randFloatSpread(2000);

    vertices.push(x, y, z);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );

  const material = new THREE.PointsMaterial({ color: "black" });

  material.size = window.innerWidth / 3080;
  const points = useMemo(() => {
    const p = new Array(count).fill(0).map((v) => (0.1 - Math.random()) * 3.5);
    return new BufferAttribute(new Float32Array(p), 3);
  }, [count]);

  return (
    <points
      material={material}
      visible
      castShadow
      ref={ref}
      position={[
        window.innerWidth / 160,
        window.innerWidth / -140,
        window.innerWidth / 160,
      ]}
    >
      <directionalLight intensity={4} />

      <sphereBufferGeometry
        attach="geometry"
        args={[window.innerWidth / 130, 40, 42]}
      >
        {" "}
      </sphereBufferGeometry>

      <meshBasicMaterial wireframe={true} color="red"></meshBasicMaterial>
    </points>
  );
};

export default function ThreePage() {
  return (
    <div className=" w-full h-screen overflow-hidden hidden lg:block z-20">
      {typeof window !== "undefined" && (
        <Canvas
          camera={{
            position: [-40, 0, 0],
            fov: 10,
            aspect: window.innerWidth / window.innerHeight,
            isPerspectiveCamera: true,
            left: 10,
          }}
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          {" "}
          <PerspectiveCamera
            position={[-60, 19, 2]}
            fov={10}
            makeDefault={true}
          />
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            shadow-mapSize-width={1050}
            shadow-mapSize-height={1050}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
            intensity={1.4}
          ></directionalLight>
          <OrbitControls
            makeDefault
            dampingFactor={0.3}
            enableZoom={false}
            enablePan={false}
            enabled={false}
          />
          <ambientLight color={"white"} intensity={1}></ambientLight>
          <GlobeMesh></GlobeMesh>
        </Canvas>
      )}
    </div>
  );
}
