import React, { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { VIEWPORT_SIZE, getViewportSize } from "../utils/viewportSize";

function Word({ position, text }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += -0.0035;
  });

  return (
    <mesh position={position} ref={ref}>
      <Text color={"#EC2D2D"} dashed={true} scale={[2, 2, 2]}>
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
        return <Word key={idx} position={positions[idx]} text={word} />;
      })}
    </group>
  );
}

function Rotate({ className, words }) {
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
      <OrbitControls autoRotate={true} enableZoom={false} rotateSpeed={1} />
    </Canvas>
  );
}

export default Rotate;
