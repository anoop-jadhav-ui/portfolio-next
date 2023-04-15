import { useSpring, animated } from "@react-spring/three";
import { ReactNode, useTransition } from "react";

export const ScaleOnHover = ({ children }: { children: ReactNode }) => {
  const [, startTransition] = useTransition();
  const [springs, api] = useSpring(
    () => ({
      scale: 1,
      config: {
        mass: 1,
        friction: 50,
      },
    }),
    []
  );

  const handlePointerEnter = () => {
    startTransition(() => {
      api.start({
        scale: 1.1,
      });
    });
  };

  const handlePointerLeave = () => {
    startTransition(() => {
      api.start({
        scale: 1,
      });
    });
  };

  return (
    <animated.group
      scale={springs.scale}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </animated.group>
  );
};
