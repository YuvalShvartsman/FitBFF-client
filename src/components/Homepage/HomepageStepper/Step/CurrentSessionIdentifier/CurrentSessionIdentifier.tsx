import "./CurrentSessionIdentifier.css";

import { Box, Button } from "@mui/material";

import { CalcStepPosition } from "../../../../../helperFuncs/CalcStepPosition";

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
        )} - 95px)`,
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
