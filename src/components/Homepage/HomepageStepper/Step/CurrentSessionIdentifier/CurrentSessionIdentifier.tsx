import "./CurrentSessionIdentifier.css";

import { Box, Button } from "@mui/material";

import { calcStepPosition } from "../../../../../helperFuncs/calcStepPosition";

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
        top: `calc(${calcStepPosition(
          "top",
          sessionNum,
          amountOfSteps
        )} - 95px)`, // Need to calculate the location of this div because it does'nt have the same size as the StopButton
        left: `calc(${calcStepPosition(
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
