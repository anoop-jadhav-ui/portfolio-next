import { useDebugger } from "@/hooks/useDebugger";
import { useWindowObject } from "@/hooks/useWindowObject";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
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
      >
        {children}
      </Canvas>
    </>
  );
}

export default Canvas3D;
