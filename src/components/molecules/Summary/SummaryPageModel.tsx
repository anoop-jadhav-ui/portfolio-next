import { Loader } from "@/components/atoms/3DLoader/3DLoader";
import { useDebugger } from "@/hooks/useDebugger";
import {
  OrbitControls,
  PerspectiveCamera as DreiPerspectiveCamera,
  SoftShadows,
  useGLTF,
} from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";
import {
  ForwardedRef,
  forwardRef,
  Suspense,
  useRef,
  useTransition,
} from "react";
import { Color, Group, PerspectiveCamera } from "three";

// THREE.ColorManagement.legacyMode = false;

export function SummaryPageModel() {
  const { cameraPosition, modelPosition, modelRotation } = useControls(
    "modelSettings",
    {
      cameraPosition: [0, 0, 1],
      modelPosition: [4, -1.5, -10],
      modelRotation: [0, -Math.PI / 6, 0],
    }
  );

  const ambientLight = useControls("AmbientLight", {
    intensity: 1,
  });
  const areaLight = useControls("Area Light", {
    color: "#d1d1d1",
    width: 20,
    height: 50,
    position: [0, 0, 1],
    intensity: 1,
  });

  const isDebugMode = useDebugger();
  const modelRef = useRef<Group>(null);
  const cameraRef = useRef<PerspectiveCamera>(null);

  return (
    <>
      <SoftShadows />
      <rectAreaLight
        width={areaLight.width}
        height={areaLight.height}
        position={areaLight.position}
        intensity={areaLight.intensity}
        color={new Color(areaLight.color)}
      />
      <ambientLight intensity={ambientLight.intensity} />
      <Suspense fallback={<Loader />}>
        <Model
          position={modelPosition}
          ref={modelRef}
          rotation={modelRotation}
        />
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

const Model = forwardRef((props: GroupProps, ref: ForwardedRef<Group>) => {
  const [, startTransition] = useTransition();
  const { nodes, materials } = useGLTF("/assets/3dmodels/portfolio.glb") as any;

  // const { bgColor } = useControls({
  //   bgColor: "#fff",
  // });

  // materials.bgGRADIENT = new MeshBasicMaterial({ color: bgColor });

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.background.geometry}
        material={materials.bgGRADIENT}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.background2.geometry}
          material={materials.bgGRADIENT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.background3.geometry}
          material={materials.bgGRADIENT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.background4.geometry}
          material={materials.bgGRADIENT}
        />
      </mesh>
      <group rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.monitor_1.geometry}
          material={materials.GREY_METAL}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.monitor_2.geometry}
          material={materials.LIGHT_BLUE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.monitor_3.geometry}
          material={materials.BLACK}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.monitor_4.geometry}
          material={materials.MONITOR_TEXTURE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.monitor_5.geometry}
          material={materials.RED}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macStandBase.geometry}
        material={materials.GREY_METAL}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.macStandHinge.geometry}
        material={materials.GREY_METAL}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.trackpad.geometry}
        material={materials.WHITE}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.trackpadBottom.geometry}
          material={materials.GREY_METAL}
        />
      </mesh>
      <group
        position={[0.87, 3.75, -2.71]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.58}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bulb_1.geometry}
          material={materials.YELLOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bulb_2.geometry}
          material={materials.DARK_BLUE}
        />
      </group>
      <group
        position={[1.95, 3.56, -0.97]}
        rotation={[-1.3, -0.95, Math.PI / 2]}
        scale={-0.11}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pen_1.geometry}
          material={materials.BLACK}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pen_2.geometry}
          material={materials.RED}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pen_3.geometry}
          material={materials.WHITE}
        />
      </group>
      <group position={[0.18, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.textBlocks_1.geometry}
          material={materials.RED}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.textBlocks_2.geometry}
          material={materials.BLUE}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.notebook.geometry}
        material={materials.DARK_BLUE}
        position={[0.23, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.notebookRubber.geometry}
          material={materials.LIGHT_BLUE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.notebookPages_1.geometry}
          material={materials.CUP_TEXTURE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.notebookPages_2.geometry}
          material={materials.RED}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.notebookPages_3.geometry}
          material={materials.YELLOW}
        />
      </mesh>
      <group
        position={[-0.98, 2.54, -1.26]}
        rotation={[1.17, -0.97, Math.PI / 2]}
        scale={0.11}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dropper_1.geometry}
          material={materials.GLASS}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dropper_2.geometry}
          material={materials.ORANGE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dropperFluid.geometry}
          material={materials.RED}
          position={[0, 18.66, 0]}
          rotation={[Math.PI, 0, 0]}
          scale={4.58}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.randomCube0.geometry}
        material={materials.LIGHT_PURPLE}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.randomCube1.geometry}
        material={materials.LIGHT_PURPLE}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.randomCube2.geometry}
        material={materials.LIGHT_PURPLE}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.randomCube3.geometry}
        material={materials.LIGHT_PURPLE}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.randomCube4.geometry}
        material={materials.LIGHT_PURPLE}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.randomCube5.geometry}
        material={materials.LIGHT_PURPLE}
        position={[3.52, 1.68, -2.18]}
        rotation={[-1.75, -0.98, -1.54]}
      />
      <group
        position={[2.68, 0.58, -1.65]}
        rotation={[-Math.PI, 1.45, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.latteMug_1.geometry}
          material={materials.CUP_TEXTURE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.latteMug_2.geometry}
          material={materials.RED}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.scaleBox.geometry}
        material={materials.BROWN_TEXTURE}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.colorPalette.geometry}
        material={materials.COLOR_CARD_1}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.colorPaletteCard2.geometry}
          material={materials.COLOR_CARD_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.colorPaletteCard3.geometry}
          material={materials.COLOR_CARD_3}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desktopWindow.geometry}
        material={materials.MONITOR_SCREEN_TEXTURE}
        position={[0.12, 1.93, -1.49]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.87}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desktopWindowTab.geometry}
        material={materials.MONITOR_SCREEN_TEXTURE}
        position={[0.83, 1.68, -1.11]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.41}
      />
    </group>
  );
});

useGLTF.preload("/assets/3dmodels/portfolio.glb");
