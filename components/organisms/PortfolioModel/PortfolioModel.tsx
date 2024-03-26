"use client";
import { Globals } from "@react-spring/three";
import { OrbitControls, PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { LoadingCube } from "components/atoms/LoadingCube/LoadingCube";
import { Leva, useControls } from "leva";
import React, { Suspense } from "react";

const Model = React.lazy(() => import("./Model/Model"));

Globals.assign({
  frameLoop: "always",
});

export function PortfolioModel() {
  const canvasColor = useControls("Canvas Color", {
    color: "#fce3f3",
  });

  return (
    <>
      <Leva collapsed />
      <Canvas
        style={{
          height: "100%",
          position: "absolute",
          width: "100%",
          left: 0,
          top: 0,
          pointerEvents: "auto",
          zIndex: -1,
          background: "#fce3f3",
        }}
        frameloop="always"
        // dpr={window?.devicePixelRatio}
        camera={{ fov: 25, position: [0, 0, 24] }}
        flat
      >
        {/* eslint-disable-next-line react/no-unknown-property */}
        <color attach="background" args={[canvasColor.color]} />
        <Stage environment="park" shadows={false} adjustCamera={false}>
          <PresentationControls
            snap
            zoom={0.8}
            rotation={[0, -Math.PI / 6, 0]}
            polar={[0, Math.PI / 6]}
            azimuth={[-Math.PI / 6, Math.PI / 6]}
          >
            <Suspense fallback={<LoadingCube />}>
              <Model />
            </Suspense>
            <OrbitControls />
          </PresentationControls>
        </Stage>
      </Canvas>
    </>
  );
}
