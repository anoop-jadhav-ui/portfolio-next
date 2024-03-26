import * as blobs2Animate from "blobs/v2/animate";
import { useLayoutEffect, useMemo, useRef } from "react";

interface AnimatedBlobProps {
  bgColor?: string;
  width: number;
  height: number;
  duration: number;
  classname: string;
}
export default function AnimatedBlob({
  bgColor,
  width,
  height,
  duration,
  classname,
}: AnimatedBlobProps) {
  const blobRef = useRef<HTMLCanvasElement>(null);
  const animation = blobs2Animate.canvasPath();

  const blobOptions = useMemo(() => {
    return {
      extraPoints: 8,
      randomness: 4,
      size: 300,
    };
  }, []);

  const canvasOptions = useMemo(() => {
    return {
      offsetX: 0,
      offsetY: 0,
    };
  }, []);

  useLayoutEffect(() => {
    const ctx = blobRef.current?.getContext("2d");

    const renderAnimation = () => {
      ctx?.clearRect(0, 0, width, height);
      if (ctx) ctx.fillStyle = bgColor as string;
      ctx?.fill(animation.renderFrame());

      requestAnimationFrame(renderAnimation);
    };

    requestAnimationFrame(renderAnimation);

    const loopAnimation = () => {
      animation.transition({
        duration: duration,
        timingFunction: "linear",
        callback: loopAnimation,
        blobOptions: {
          seed: Math.random(),
          ...blobOptions,
        },
        canvasOptions: {
          ...canvasOptions,
        },
      });
    };

    animation.transition({
      duration: 0,
      callback: loopAnimation,
      timingFunction: "linear",
      blobOptions: {
        seed: Math.random(),
        ...blobOptions,
      },
      canvasOptions: {
        ...canvasOptions,
      },
    });
  }, [animation, bgColor, blobOptions, canvasOptions, duration, height, width]);

  return (
    <canvas
      ref={blobRef}
      className={classname}
      style={{
        width: width,
        height: height,
      }}
    />
  );
}
