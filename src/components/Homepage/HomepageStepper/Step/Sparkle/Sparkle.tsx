import { useEffect, useState } from "react";

import "./Sparkle.css";

import { Box } from "@mui/material";

function Sparkle() {
  const [randomPos, setRandomPos] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomPos(`${Math.random() * 50}px`);
    }, 3000); // Every 3 second sets a random position for the sparkle

    return () => clearInterval(interval);
  }, []);
  return (
    <Box className="Sparkle" sx={{ top: randomPos, left: randomPos }}></Box>
  );
}

export default Sparkle;
