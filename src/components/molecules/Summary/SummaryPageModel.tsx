import Loader3D from "@/components/atoms/Loader3D/Loader3D";
import { useDebugger } from "@/hooks/useDebugger";
import { Center, OrbitControls, PresentationControls } from "@react-three/drei";
import { useControls } from "leva";
import { Suspense } from "react";
import { Model } from "./Model/Model";

export function SummaryPageModel() {
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

  const directionalLight = useControls("Directional Light", {
    color: "#6394de",
    intensity: 1,
  });

  const hemisphereLight = useControls("Hemisphere Light", {
    color1: "#ffeded",
    color2: "#a275ce",
  });

  const isDebugMode = useDebugger();

  return (
    <>
      <PresentationControls
        snap
        global
        zoom={0.8}
        rotation={[0, -Math.PI / 6, 0]}
        polar={[0, Math.PI / 6]}
        azimuth={[-Math.PI / 6, Math.PI / 6]}
      >
        <hemisphereLight
          args={[hemisphereLight.color1, hemisphereLight.color2, 1]}
        />
        <directionalLight {...directionalLight} />
        <ambientLight intensity={ambientLight.intensity} />
        <Suspense fallback={<Loader3D />}>
          <Center position={[2, -1.5, -1]}>
            <Model />
          </Center>
          {isDebugMode && (
            <>
              <axesHelper args={[5]} />
              <OrbitControls />
            </>
          )}
        </Suspense>
      </PresentationControls>
    </>
  );
}
