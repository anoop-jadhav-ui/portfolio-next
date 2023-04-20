import { useDebugger } from "@/hooks/useDebugger";
import { useWindowObject } from "@/hooks/useWindowObject";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { CSSProperties, ReactNode } from "react";

function Canvas3D({
  children,
  style,
  frameloop = "demand",
}: {
  children: ReactNode;
  style?: CSSProperties;
  frameloop?: "always" | "never" | "demand";
}) {
  const isDebugMode = useDebugger();
  const windowObj = useWindowObject();

  return (
    <>
      <Leva hidden={!isDebugMode} flat />
      <Canvas
        style={{ ...style, zIndex: isDebugMode ? "1" : "-1" }}
        frameloop={frameloop}
        dpr={windowObj?.devicePixelRatio}
        flat
        camera={{ fov: 25, position: [0, 0, 20] }}
      >
        {/* <color attach="background" args={["#e0b7ff"]} /> */}
        {/* <color attach="background" args={["#ffd9d9"]} /> */}
        {children}
      </Canvas>
    </>
  );
}

export default Canvas3D;
