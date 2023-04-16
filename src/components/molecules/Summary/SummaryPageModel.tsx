import Loader3D from "@/components/atoms/Loader3D/Loader3D";
import { useDebugger } from "@/hooks/useDebugger";
import {
  OrbitControls,
  PerspectiveCamera as DreiPerspectiveCamera,
} from "@react-three/drei";
import { useControls } from "leva";
import { Suspense, useRef } from "react";
import { Color, PerspectiveCamera } from "three";
import { Model } from "./Model/Model";

export function SummaryPageModel() {
  const { cameraPosition } = useControls("cameraControls", {
    cameraPosition: [0, 0, 10],
  });

  const ambientLight = useControls("AmbientLight", {
    intensity: 0.1,
  });

  const areaLight = useControls("Area Light", {
    color: "#d1d1d1",
    width: 500,
    height: 500,
    position: [0, 0, 5],
    intensity: 1,
  });

  const isDebugMode = useDebugger();
  const cameraRef = useRef<PerspectiveCamera>(null);

  return (
    <>
      <rectAreaLight
        width={areaLight.width}
        height={areaLight.height}
        position={areaLight.position}
        intensity={areaLight.intensity}
        color={new Color(areaLight.color)}
      />
      <ambientLight intensity={ambientLight.intensity} />
      <Suspense fallback={<Loader3D />}>
        <Model />
        <DreiPerspectiveCamera
          makeDefault
          position={cameraPosition}
          ref={cameraRef}
        />
        {isDebugMode && (
          <>
            <axesHelper args={[5]} />
            <OrbitControls />
          </>
        )}
      </Suspense>
    </>
  );
}
