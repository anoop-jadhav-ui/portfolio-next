import { useDebugger } from "@/hooks/useDebugger";
import { useWindowObject } from "@/hooks/useWindowObject";
import { Grid } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { SummaryPageModel } from "./SummaryPageModel";

function Canvas3D() {
  const isDebugMode = useDebugger();
  const windowObj = useWindowObject();

  return (
    <Grid item xs={4}>
      <Leva hidden={!isDebugMode} flat />
      <Canvas
        style={{
          height: "100%",
          position: "absolute",
          width: "100%",
          left: 0,
          top: 0,
          zIndex: isDebugMode ? "1" : "-1",
          border: "1px solid yellowgreen",
        }}
        frameloop="demand"
        dpr={windowObj?.devicePixelRatio}
      >
        <SummaryPageModel />
      </Canvas>
    </Grid>
  );
}

export default Canvas3D;
