import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import SIZE from "../constants/size";

const positions = [
  [-1.5, 0, 0],
  [1.5, 0, 0],
  [0, 0, -1.5],
  [0, 0, 1.5],
  [0, 1.5, 0],
  [0, -1.5, 0],
  [1, 1, 0],
  [-1, -1, 0],
  [-1, 0, -1],
  [1, -1, 0],
  [-1, 0, 1],
  [1, 0, 1],
  [0, 1, -1],
  [1, 0, -1],
  [-1, 1, 0],
  [0.5, 0.5, 0.5],
];

function Word({ position, text }) {
  return (
    <mesh position={position}>
      <Text scale={[2, 2, 2]} color={"#EC2D2D"} dashed={true}>
        {text}
      </Text>
    </mesh>
  );
}

function Scene({ words }) {
  return (
    <group>
      {words.map((word, idx) => {
        return <Word position={positions[idx]} text={word} />;
      })}
    </group>
  );
}

function Rotate({ words, className }) {
  const defaultFov = 40;
  const [fov, setFov] = useState(defaultFov);
  useEffect(() => {
    window.innerWidth > SIZE.TABLET_SIZE && setFov(defaultFov);
    window.innerWidth <= SIZE.TABLET_SIZE && setFov(defaultFov + 5);
    window.innerWidth <= SIZE.MOBILE_SIZE && setFov(defaultFov + 10);
  }, []);

  return (
    <Canvas className={className} camera={{ fov, position: [0, 0, 5] }}>
      <Scene words={words} />
      <OrbitControls autoRotate={true} enableZoom={false} />
    </Canvas>
  );
}

export default Rotate;
