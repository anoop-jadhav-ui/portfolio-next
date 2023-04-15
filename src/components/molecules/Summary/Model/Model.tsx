import { animated, useSpring } from "@react-spring/three";
import { useGLTF, useProgress } from "@react-three/drei";
import { GroupProps, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import {
  ReactNode,
  startTransition,
  useCallback,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { Material, Vector2, Vector3 } from "three";

interface SubModelProps {
  materials: {
    [key: string]: Material;
  };
  nodes: {
    [key: string]: {
      geometry: any;
    };
  };
}
const Monitor = ({ nodes, materials }: SubModelProps) => {
  return (
    <>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desktopWindow.geometry}
          material={materials.MONITOR_SCREEN_TEXTURE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desktopWindowTab.geometry}
          material={materials.MONITOR_SCREEN_TEXTURE}
        />
      </group>
      <group>
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
          material={materials.LIGHT_BLUE_EMISSIVE}
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.macStandBase.geometry}
          material={materials.GREY_METAL}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.macStandHinge.geometry}
          material={materials.GREY_METAL}
        />
      </group>
    </>
  );
};
const Dropper = ({ nodes, materials }: SubModelProps) => {
  return (
    <>
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
      />
    </>
  );
};
const Pen = ({ nodes, materials }: SubModelProps) => {
  return (
    <animated.group>
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
    </animated.group>
  );
};
const Cubes = ({ nodes, materials }: SubModelProps) => {
  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.randomCube0.geometry}
        material={materials.LIGHT_PURPLE}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.randomCube1.geometry}
        material={materials.LIGHT_PURPLE}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.randomCube2.geometry}
        material={materials.LIGHT_PURPLE}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.randomCube3.geometry}
        material={materials.LIGHT_PURPLE}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.randomCube4.geometry}
        material={materials.LIGHT_PURPLE}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.randomCube5.geometry}
        material={materials.LIGHT_PURPLE}
      />
    </>
  );
};
const Bulb = ({ nodes, materials }: SubModelProps) => {
  return (
    <>
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
    </>
  );
};
const TrackPad = ({ nodes, materials }: SubModelProps) => {
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.trackpad.geometry}
      material={materials.WHITE}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.trackpadBottom.geometry}
        material={materials.GREY_METAL}
      />
    </mesh>
  );
};
const TextBlock = ({ nodes, materials }: SubModelProps) => {
  return (
    <>
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.scaleBox.geometry}
        material={materials.BROWN_TEXTURE}
      />
    </>
  );
};
const LatteCup = ({ nodes, materials }: SubModelProps) => {
  return (
    <>
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
    </>
  );
};
const NoteBook = ({ nodes, materials }: SubModelProps) => {
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.notebook.geometry}
      material={materials.DARK_BLUE}
    >
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.notebookRubber.geometry}
        material={materials.LIGHT_BLUE}
      />
    </mesh>
  );
};
const ColorCards = ({ nodes, materials }: SubModelProps) => {
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.colorPalette.geometry}
      material={materials.COLOR_CARD_1}
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
  );
};
const Background = ({ nodes, materials }: SubModelProps) => {
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.background.geometry}
      material={materials.bgGRADIENT}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.background4.geometry}
        material={materials.bgGRADIENT}
      />
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
    </mesh>
  );
};

export const Model = (props: GroupProps) => {
  const isOver = useRef(false);

  const { width, height } = useThree((state) => state.size);

  const { modelPosition, modelRotation } = useControls("modelSettings", {
    modelPosition: [2, -0.74, 0],
    modelRotation: [0, -0.5, 0],
  });

  const [, startTransition] = useTransition();

  const { nodes, materials } = useGLTF(
    "/assets/3dmodels/portfolio.glb"
  ) as unknown as SubModelProps;

  const [vector3] = useState(() => new Vector3());

  const { progress } = useProgress();
  const [springs, api] = useSpring(() => ({
    scale: 0,
    rotation: modelRotation,
    onChange: ({ value }) => {
      vector3.set(value.rotation[0], value.rotation[1], value.rotation[2]);
    },
    config: (key) => {
      switch (key) {
        case "scale":
          return {
            mass: 4,
            friction: 35,
          };
        case "rotation":
          return { mass: 4, friction: 220 };
        default:
          return {};
      }
    },
  }));

  useEffect(() => {
    startTransition(() => {
      if (progress === 100) {
        api.start({
          scale: 1,
        });
      }
    });
  });

  const handleWindowPointerOver = useCallback(() => {
    isOver.current = true;
  }, []);

  const handleWindowPointerOut = useCallback(() => {
    isOver.current = false;
    api.start({
      rotation: modelRotation,
    });
  }, []);

  const handlePointerMove = useCallback(
    (e) => {
      if (isOver.current) {
        const y = (e.offsetX / width) * -1 + 1;

        api.start({
          rotation: [modelRotation[0], y * 2, modelRotation[2]],
        });
      }
    },
    [height, api, modelRotation]
  );

  useEffect(() => {
    window.addEventListener("pointerover", handleWindowPointerOver);
    window.addEventListener("pointerout", handleWindowPointerOut);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointerover", handleWindowPointerOver);
      window.removeEventListener("pointerout", handleWindowPointerOut);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [handleWindowPointerOver, handleWindowPointerOut, handlePointerMove]);

  return (
    <animated.group
      {...props}
      dispose={null}
      scale={springs.scale}
      position={modelPosition}
      rotation={springs.rotation.to((x, y, z) => [
        modelRotation[0],
        y,
        modelRotation[2],
      ])}
      onPointerOver={() => {
        console.log("pointer over");
      }}
    >
      <TrackPad nodes={nodes} materials={materials} />
      <TextBlock nodes={nodes} materials={materials} />
      <Bulb nodes={nodes} materials={materials} />
      <Cubes nodes={nodes} materials={materials} />
      <Monitor nodes={nodes} materials={materials} />

      <Dropper nodes={nodes} materials={materials} />

      <Pen nodes={nodes} materials={materials} />
      <LatteCup nodes={nodes} materials={materials} />
      <NoteBook nodes={nodes} materials={materials} />
      <ColorCards nodes={nodes} materials={materials} />
      <Background nodes={nodes} materials={materials} />
    </animated.group>
  );
};

useGLTF.preload("/assets/3dmodels/portfolio.glb");
