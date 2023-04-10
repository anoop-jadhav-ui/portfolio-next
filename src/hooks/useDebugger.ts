import { useEffect, useLayoutEffect, useState } from "react";

export const useDebugger = () => {
  const [isDebugMode, setDebugMode] = useState(false);
  useLayoutEffect(() => {
    if (window.location.hash.search("debug") != -1) {
      console.log("🛠️ %cdebug mode is %cON", "color:yellow", "color:red");
      setDebugMode(true);
    } else {
      console.log("🛠️ %cdebug mode is %cOFF", "color:yellow", "color:green");
      setDebugMode(false);
    }
  }, []);

  useEffect(() => {
    const onHashChanged = (e: HashChangeEvent) => {
      if (e.newURL.search("debug") != -1) {
        console.log("🛠️ %cdebug mode is %cON", "color:yellow", "color:red");
        setDebugMode(true);
      } else {
        console.log("🛠️ %cdebug mode is %cOFF", "color:yellow", "color:green");
        setDebugMode(false);
      }
    };
    window.addEventListener("hashchange", onHashChanged);
    return () => {
      window.removeEventListener("hashchange", onHashChanged);
    };
  }, []);

  return isDebugMode;
};
