import { useEffect, useRef } from "react";

export const useWindowObject = () => {
  let windowObjRef = useRef<Window | undefined>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      windowObjRef.current = window;
    }
  }, []);

  return windowObjRef.current;
};
