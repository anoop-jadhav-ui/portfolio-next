import { useTheme } from "@mui/material";
import { Html, useProgress } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { useRef, useTransition } from "react";
import { Euler, Mesh, Vector3 } from "three";

const loaderPosition = new Vector3(4, 0.5, 0);

export function Loader() {
  const theme = useTheme();
  const [, startTransition] = useTransition();
  const loaderMeshRef = useRef<Mesh>(null);
  const { progress } = useProgress();

  useFrame(({ clock }) => {
    startTransition(() => {
      if (loaderMeshRef.current?.rotation) {
        const elapsedTime = clock.getElapsedTime();
        loaderMeshRef.current.rotation.x = elapsedTime;
        loaderMeshRef.current.rotation.y = elapsedTime;
      }
    });
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
