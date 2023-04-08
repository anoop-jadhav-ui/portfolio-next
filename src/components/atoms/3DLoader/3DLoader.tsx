import { useTheme } from "@mui/material";
import { Html, useProgress } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { useRef } from "react";
import { Mesh, Vector3 } from "three";

const loaderPosition = new Vector3(4, 0.5, 0);

export function Loader() {
  const theme = useTheme();
  const loaderMeshRef = useRef<Mesh>(null);
  const { progress } = useProgress();

  useFrame(({ clock }) => {
    if (loaderMeshRef.current?.rotation) {
      loaderMeshRef.current.rotation.x = clock.getElapsedTime();
      loaderMeshRef.current.rotation.y = clock.getElapsedTime();
    }
  });

  return (
    <mesh
      visible
      position={loaderPosition}
      ref={loaderMeshRef}
      rotation={[0, Math.PI / 2, 0]}
    >
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={theme.palette.grey[300]} transparent />
      <Html
        as="div"
        style={{
          position: "relative",
        }}
      >
        <p
          style={{
            fontSize: 16,
            color: theme.palette.grey[300],
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
