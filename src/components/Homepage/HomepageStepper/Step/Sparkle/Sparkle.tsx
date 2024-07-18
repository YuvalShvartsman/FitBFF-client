import "./Sparkle.css";

import { Box } from "@mui/material";
import useGetRandomPosition from "../../../../../customHooks/useGetRandomPosition";

function Sparkle() {
  const randomPos = useGetRandomPosition();
  return <Box className="Sparkle" sx={{ top: randomPos, left: randomPos }} />;
}

export default Sparkle;
