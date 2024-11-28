import "./CurrentSessionIdentifier.css";

import { Box, Button } from "@mui/material";

import { CalcStepPosition } from "../../../../../helperFuncs/CalcStepPosition";
import { useState } from "react";

type CurrentSessionIdentifierProps = {
  sessionNum: number;
  amountOfSteps: number;
};

function CurrentSessionIdentifier({
  amountOfSteps,
  sessionNum,
}: CurrentSessionIdentifierProps) {
  return (
    <Box
      className="StartContainer"
      sx={{
        top: `calc(${CalcStepPosition(
          "top",
          sessionNum,
          amountOfSteps
        )} - 95px)`, // Need to calculate the location of this div because it does'nt have the same size as the StopButton
        left: `calc(${CalcStepPosition(
          "left",
          sessionNum,
          amountOfSteps
        )} - 50px)`,
      }}
    >
      <Button className="StartContainerRectangle">Start</Button>
    </Box>
  );
}

export default CurrentSessionIdentifier;
