import { animated, useSpring } from "@react-spring/three";
import { Html, useProgress } from "@react-three/drei";
import { useControls } from "leva";

function Loader3D() {
  const { progress } = useProgress();

  const { position, color } = useControls("loader", {
    position: [0, 0, 0],
    color: "#f85a5a",
    ambientLightIntensity: 1,
  });

  const [springs, api] = useSpring(
    () => ({
      scale: 1,
      config: (key) => {
        switch (key) {
          case "scale":
            return {
              mass: 4,
              friction: 10,
            };
          default:
            return {};
        }
      },
    }),
    []
  );

  const handlePointerEnter = () => {
    api.start({
      scale: 2,
    });
  };

  const handlePointerLeave = () => {
    api.start({
      scale: 1,
    });
  };

  return (
    <animated.mesh
      position={position}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      scale={springs.scale}
    >
      <sphereGeometry args={[0.25, 32]} />
      <meshStandardMaterial color={color} />
      <Html
        as="div"
        role="progressbar"
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
    </animated.mesh>
  );
}

export default animated(Loader3D);
