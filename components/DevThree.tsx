import { Canvas, useFrame } from "@react-three/fiber";
import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";

import { useRef, useState, useEffect, useMemo } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { BufferAttribute } from "three";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

import { Box, Edges, OrbitControls } from "@react-three/drei";
import React from "react";

const Rings = (props: {
  position?: [x: number, y: number, b: number];
  rotation?: [x: number, y: number, b: number];
  size?: [x: number, y: number, b: number];
  color?: string;
  wireframe?: boolean;
}) => {
  const geometry = props.size
    ? new THREE.RingGeometry(props.size[0], props.size[1], props.size[2])
    : new THREE.RingGeometry(6, 14, 32);

  const material = new THREE.MeshBasicMaterial({
    color: props.color ? props.color : "red",
    side: THREE.DoubleSide,
    combine: THREE.MixOperation,
    transparent: true,
    opacity: 0.5,
    refractionRatio: 0.5,
    wireframe: props.wireframe ? props.wireframe : false,
  });

  const Lambertmaterial = new THREE.MeshLambertMaterial({
    color: props.color ? props.color : "green",
  });

  const MetalMaterial = new THREE.MeshPhysicalMaterial({
    metalness: 0.5,
    clearcoat: 0.6,
    color: props.color ? props.color : "green",
  });

  const depthMaterial = new THREE.MeshDepthMaterial({
    side: THREE.DoubleSide,
  });

  const rehal = new THREE.PointsMaterial({
    color: props.color ? props.color : "black",
  });
  rehal.size = 1;
  const mesh = new THREE.Mesh(geometry, material);
  const ref1 = useRef<THREE.Mesh>(null!);
  const ref2 = useRef<THREE.Points>(null!);
  const vet = new THREE.Vector3(1, 0, 0);
  const ang = Math.PI / 2;

  const MeshObj = (
    <mesh
      ref={ref1}
      material={material}
      geometry={geometry}
      position={props.position ? props.position : [1, 5, 7]}
      rotation={props.rotation ? props.rotation : [-Math.PI / 2, 0, 0]}
    >
      <directionalLight intensity={0.5} />

      <ringBufferGeometry
        args={props.size ? props.size : [5, 14, 32]}
      ></ringBufferGeometry>

      <meshBasicMaterial
        color={props.color ? props.color : "red"}
        transparent={true}
        opacity={0.5}
      ></meshBasicMaterial>
    </mesh>
  );

  return <>{MeshObj}</>;
};

const PointRings = (props: {
  position?: [x: number, y: number, b: number];
  rotation?: [x: number, y: number, b: number];
  size?: [x: number, y: number, b: number];
  color?: string;
  type?: string;
  oposite?: boolean;
  rotateSpeed?: number;
}) => {
  const geometry = new THREE.RingGeometry(6, 14, 32);

  const rehal = new THREE.PointsMaterial({
    color: props.color ? props.color : "black",
    transparent: true,
    opacity: 0,
  });
  rehal.size = 0.5;

  const ref1 = useRef<THREE.Mesh>(null!);
  const ref2 = useRef<THREE.Points>(null!);
  const vet = new THREE.Vector3(1, 0, 0);
  const ang = Math.PI / 2;
  useFrame(() => {
    let rotateSpeed = props.rotateSpeed ? props.rotateSpeed : 0.008;
    ref2.current.rotation.z = props.oposite
      ? ref2.current.rotation.z - rotateSpeed
      : rotateSpeed + ref2.current.rotation.z;
  });
  const PointsObj = (
    <points
      ref={ref2}
      material={rehal}
      geometry={geometry}
      position={props.position ? props.position : [1, 5, 7]}
      rotation={props.rotation ? props.rotation : [-Math.PI / 2, 0, 0]}
    >
      <directionalLight intensity={0.4} />

      <ringBufferGeometry
        attach="geometry"
        args={props.size ? props.size : [5, 14, 32]}
      ></ringBufferGeometry>
    </points>
  );

  return <>{PointsObj}</>;
};

const GlobeMesh = ({ count = 1000 }) => {
  const ref2: any = useRef<THREE.Mesh>(null!);
  useFrame(() => (ref2.current.rotation.x = ref2.current.rotation.z += 0.01));

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

  const material = new THREE.PointsMaterial({ color: "red" });
  material.size = 2;
  const points = useMemo(() => {
    const p = new Array(count).fill(0).map((v) => (0.1 - Math.random()) * 3.5);
    return new BufferAttribute(new Float32Array(p), 3);
  }, [count]);

  return (
    <points
      material={material}
      visible
      castShadow
      ref={ref2}
      position={[10, 10, 10]}
    >
      <Edges></Edges>
      <directionalLight intensity={0.5} />

      <sphereBufferGeometry attach="geometry" args={[20, 32, 42]}>
        {" "}
      </sphereBufferGeometry>

      <meshBasicMaterial color={"#d1d5db"}></meshBasicMaterial>
    </points>
  );
};

const BoxMesh = (props: { place: [x: number, y: number, z: number] }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    mesh.current.rotation.y = mesh.current.rotation.z += 0.01;
  });

  const material = new THREE.MeshLambertMaterial({
    color: "black",
    reflectivity: 2,
  });
  const MetalMaterial = new THREE.MeshPhysicalMaterial({
    metalness: 1,
    clearcoat: 2,
    reflectivity: 1,

    color: "gray",
  });

  const Toon = new THREE.MeshToonMaterial({ color: "black" });
  const Depth = new THREE.MeshDepthMaterial({});
  return (
    <mesh material={material} ref={mesh} position={props.place} castShadow>
      <Edges color={"white"}></Edges>
      <icosahedronBufferGeometry args={[3, 1]}></icosahedronBufferGeometry>
      <meshDepthMaterial
        depthTest={true}
        attach={"material"}
        colorWrite={true}
      ></meshDepthMaterial>
    </mesh>
  );
};

const SaturnSpeaks = (props: {
  position?: [x: number, y: number, z: number];
  size?: [x: number, y: number, z: number];
  color?: string;
}) => {
  const material = new THREE.PointsMaterial({
    color: props.color ? props.color : "black",
  });
  material.size = 0.5;
  return (
    <points
      position={props.position ? props.position : [0, 0, 0]}
      material={material}
    >
      <directionalLight intensity={0.5} />

      <sphereBufferGeometry
        attach="geometry"
        args={props.size ? props.size : [10, 32, 42]}
      >
        {" "}
      </sphereBufferGeometry>

      <meshBasicMaterial color={"#d1d5db"}></meshBasicMaterial>
    </points>
  );
};

export default function DevThree() {
  return (
    <div className="flex w-full h-screen items-center justify-center border ">
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
          <group>
            <PointRings
              key={"1"}
              size={[6, 13, 40]}
              position={[0, 0, 0]}
              rotation={[Math.PI / 2, 7, 6]}
              color="white"
              rotateSpeed={0.01}
            ></PointRings>
            <PointRings
              key={"3"}
              size={[3, 7, 40]}
              position={[0, 0, 0]}
              rotation={[Math.PI / 10, 7, 6]}
              color="white"
              rotateSpeed={0.01}
            ></PointRings>
            <PointRings
              key={"2"}
              size={[2, 4, 40]}
              position={[0, 0, 0]}
              color="white"
              rotateSpeed={0.01}
            ></PointRings>
            <PointRings
              key={"12"}
              size={[10, 13, 40]}
              rotation={[Math.PI / 0.6, 4, 4]}
              position={[0, 0, 0]}
              color="white"
            ></PointRings>

            <ambientLight intensity={0.5} position={[-2, 0, 10]}></ambientLight>
            <BoxMesh place={[0, 0, 0]}></BoxMesh>
            <pointLight intensity={0.5} position={[-14, 2, 0]}></pointLight>
            <pointLight intensity={0.5} position={[-13, -10, -12]}></pointLight>
          </group>
        </Canvas>
      )}
    </div>
  );
}
