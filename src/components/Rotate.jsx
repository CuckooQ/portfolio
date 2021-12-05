import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { VIEWPORT_SIZE, getViewportSize } from "../utils/viewportSize";

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

  return (
    <group>
      {words.map((word, idx) => {
        return <Word position={positions[idx]} text={word} key={idx} />;
      })}
    </group>
  );
}

function Rotate({ words, className }) {
  const defaultFov = 40;
  const [fov, setFov] = useState(defaultFov);
  useEffect(() => {
    getViewportSize() > VIEWPORT_SIZE.TABLET && setFov(defaultFov);
    getViewportSize() <= VIEWPORT_SIZE.TABLET && setFov(defaultFov + 5);
    getViewportSize() <= VIEWPORT_SIZE.MOBILE && setFov(defaultFov + 10);
  }, []);

  return (
    <Canvas className={className} camera={{ fov, position: [0, 0, 5] }}>
      <Scene words={words} />
      <OrbitControls autoRotate={true} enableZoom={false} />
    </Canvas>
  );
}

export default Rotate;
