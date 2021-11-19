import React, { Suspense, useRef, useEffect } from "react";
import gsap from "gsap";
import * as THREE from "three";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import "../styles/Wavey.scss";

const WaveShaderMaterial = shaderMaterial(
  // Uniforms
  {
    uTime: 0,
    uTexture: new THREE.Texture(),
  },
  // Vertex Shader
  glsl`
    precision mediump float;

    varying vec2 vUv;
    varying float vWave;

    uniform float uTime;

    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

    void main() {
      vUv = uv;

      vec3 pos = position;

      float noiseFreq = 1.5;
      float noiseAmp = 0.25;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
    }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;

    uniform float uTime;
    uniform sampler2D uTexture;

    varying vec2 vUv;
    varying float vWave;

    void main() {
      float wave = vWave * 0.1;
      vec3 texture = texture2D(uTexture, vUv + wave).rgb;
      gl_FragColor = vec4(texture, 0.8); 
    }
  `
);

extend({ WaveShaderMaterial });

const Wave = () => {
  const ref = useRef();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));
  const [image] = useLoader(THREE.TextureLoader, ["/images/evening-glow.jpg"]);

  return (
    <mesh>
      <planeBufferGeometry args={[0.4, 0.6, 16, 16]} />
      <waveShaderMaterial ref={ref} uTime={0} uTexture={image} />
    </mesh>
  );
};

const Scene = ({ className }) => {
  return (
    <Canvas className={className} camera={{ fov: 5, position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <Wave />
      </Suspense>
    </Canvas>
  );
};

function Wavey() {
  const startTriggerRef = useRef(null);
  const backText1Ref = useRef(null);
  const backText2Ref = useRef(null);
  const backText3Ref = useRef(null);
  const frontText1Ref = useRef(null);
  const frontText2Ref = useRef(null);
  const frontText3Ref = useRef(null);

  useEffect(() => {
    const config = {
      scrollTrigger: {
        trigger: startTriggerRef.current,
        start: "top top",
        toggleActions: "play play play play",
        scrub: 1,
      },
      x: 50,
      duration: 0.6,
    };

    gsap.to(backText1Ref.current, { ...config, x: 60, y: 10 });
    gsap.to(frontText1Ref.current, config);
    gsap.to(backText2Ref.current, {
      ...config,
      x: -40,
      y: 10,
    });
    gsap.to(frontText2Ref.current, {
      ...config,
      x: -50,
    });
    gsap.to(backText3Ref.current, { ...config, x: 60, y: 10 });
    gsap.to(frontText3Ref.current, config);
  }, []);

  return (
    <div className="wavey-wrapper" ref={startTriggerRef}>
      <div className="text-wrapper">
        <h2 className="back-name" ref={backText1Ref}>
          JAEYONG CHO
        </h2>
        <h2 className="back-name" ref={backText2Ref}>
          FRONTEND DEVELOPER
        </h2>
        <h2 className="back-name" ref={backText3Ref}>
          PASSIONATE TO DEVELOPMENT
        </h2>
      </div>

      <Scene className="wavey-scene"></Scene>

      <div className="text-wrapper">
        <h2 className="front-name" ref={frontText1Ref}>
          JAEYONG CHO
        </h2>
        <h2 className="front-name" ref={frontText2Ref}>
          FRONTEND DEVELOPER
        </h2>
        <h2 className="front-name" ref={frontText3Ref}>
          PASSIONATE TO DEVELOPMENT
        </h2>
      </div>
    </div>
  );
}

export default Wavey;