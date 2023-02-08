import * as blobs2 from "blobs/v2";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import * as blobs2Animate from "blobs/v2/animate";

const Blob = (props: {
  class: string;
  bgColor?: string;
  strokeColor?: string;
  width: number;
  height: number;
}) => {
  const blobRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (blobRef.current) {
      const svgString = blobs2.svg(
        {
          seed: Math.random(),
          extraPoints: 8,
          randomness: 4,
          size: props.width,
        },
        {
          fill: props.bgColor,
          stroke: props.strokeColor,
          strokeWidth: 4,
        }
      );
      blobRef.current.innerHTML = svgString;
    }
  }, [props.bgColor, props.strokeColor, props.width]);

  const { scrollYProgress } = useScroll();

  return (
    <svg
      ref={blobRef}
      className={props.class}
      style={{
        width: props.width,
        height: props.height,
        top: scrollYProgress as unknown as number,
      }}
    />
  );
};

export default Blob;
