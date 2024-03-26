import React, { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLInputElement>(null);

  function moveCursor(e: any) {
    if (cursorRef.current) {
      cursorRef.current.setAttribute(
        "style",
        `top:${e.clientY}px; left:${e.clientX}px;`,
      );
      if (e.target) {
        console.log(e.target.classList);
      }
    }
  }

  useEffect(() => {
    document.addEventListener("mousemove", (evt) => moveCursor(evt));
  }, []);

  return <div className="cursor" ref={cursorRef} />;
}
