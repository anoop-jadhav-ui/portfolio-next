import { Html, useProgress } from "@react-three/drei";
import { useControls } from "leva";

import { useRef } from "react";
import { Mesh } from "three";

export function Loader() {
  const loaderMeshRef = useRef<Mesh>(null);
  const { progress } = useProgress();

  const { position, color, rotation } = useControls("loader", {
    position: [4, 0.5, 0],
    color: "#ffa6a6",
    rotation: [0.9, 1.64, 0],
  });

  return (
    <mesh visible position={position} ref={loaderMeshRef} rotation={rotation}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={color} transparent />
      <Html
        as="div"
        style={{
          position: "relative",
        }}
      >
        <p
          style={{
            fontSize: 16,
            color,
            fontWeight: "bold",
            position: "absolute",
            left: "-0.75rem",
            top: "50px",
          }}
        >
          {progress.toFixed()}%
        </p>
      </Html>
    </mesh>
  );
}
