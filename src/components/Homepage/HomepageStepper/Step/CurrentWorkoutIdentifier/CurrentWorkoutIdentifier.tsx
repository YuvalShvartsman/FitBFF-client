import "./CurrentWorkout.css";

import { Box, Button } from "@mui/material";

import { CalcStepPosition } from "../../../../../helperFuncs/CalcStepPosition";

type CurrentWorkoutIdentifierProps = {
  workoutNum: number;
  amountOfSteps: number;
};

function CurrentWorkoutIdentifier({
  amountOfSteps,
  workoutNum: workoutNum,
}: CurrentWorkoutIdentifierProps) {
  return (
    <Box
      className="StartContainer"
      sx={{
        top: `calc(${CalcStepPosition(
          "top",
          workoutNum,
          amountOfSteps
        )} - 95px)`, // Need to calculate the location of this div because it does'nt have the same size as the StopButton
        left: `calc(${CalcStepPosition(
          "left",
          workoutNum,
          amountOfSteps
        )} - 50px)`,
      }}
    >
      <Button className="StartContainerRectangle">Start</Button>
    </Box>
  );
}

export default CurrentWorkoutIdentifier;
