import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BackSide } from "three";
import { random } from "lodash";
import "../styles/Planet.scss";

const COLOR = "#F36F63";
const DISTANCE = 100;

function Satellite() {
  const ref = useRef();

  const timeMod = useMemo(() => random(0.1, 4, true), []);
  const position = useMemo(() => {
    const posMax = DISTANCE * 0.8;
    const posMin = posMax * -1;
    return [
      random(posMin, posMax, true),
      random(posMin, posMax, true),
      random(posMin, posMax, true),
    ];
  }, []);

  useFrame(() => {
    ref.current.rotation.y += 0.01 * timeMod;
  });

  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={[1, 30, 30]} attach="geometry" />
      <meshStandardMaterial
        attach="material"
        color={COLOR}
        metalness={0.1}
        roughness={0.6}
      />
    </mesh>
  );
}

function Satellites() {
  const ref = useRef();

  const cnt = 300;

  useFrame(() => {
    ref.current.rotation.y += 0.005;
  });

  return (
    <group ref={ref}>
      {Array(cnt)
        .fill()
        .map((_, idx) => (
          <Satellite key={idx} />
        ))}
    </group>
  );
}

function FixedStar() {
  return (
    <group>
      <mesh>
        <sphereBufferGeometry args={[15, 30, 30]} attach="geometry" />
        <meshBasicMaterial attach="material" color={COLOR} />
      </mesh>
      <ambientLight intensity={1} />
      <spotLight intensity={1.5} position={[0, 0, 1000]} />
    </group>
  );
}

function Universe() {
  return (
    <mesh>
      <sphereBufferGeometry args={[DISTANCE, 32, 32]} attach="geometry" />
      <meshStandardMaterial
        attach="material"
        color={COLOR}
        metalness={0.4}
        side={BackSide}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <Satellites />
      <FixedStar />
      <Universe />
    </>
  );
}

function Planet({ className }) {
  return (
    <Canvas
      camera={{ fov: 75, position: [0, 0, DISTANCE] }}
      className={`planet ${className}`}
    >
      <Scene />
    </Canvas>
  );
}

export default Planet;
