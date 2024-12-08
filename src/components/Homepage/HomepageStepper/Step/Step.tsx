import "./Step.css";

import { Box, Button } from "@mui/material";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CheckIcon from "@mui/icons-material/Check";

import { WorkoutType } from "../../../../types/Workout";

import { CalcStepPosition } from "../../../../helperFuncs/CalcStepPosition";

import Sparkle from "./Sparkle/Sparkle";
import CurrentWorkoutIdentifier from "./CurrentWorkoutIdentifier/CurrentWorkoutIdentifier";
import { WorkoutDialog } from "./WorkoutDialog";
import { useState } from "react";

type StepProps = {
  workout: WorkoutType;
  workoutNum: number;
  amountOfSteps: number;
  currentWorkoutId: number | null;
};

function Step({
  workout,
  workoutNum,
  amountOfSteps,
  currentWorkoutId,
}: StepProps) {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const workoutClicked = () => {
    setOpenDialog(true);
  };

  return (
    <>
      <WorkoutDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        workout={workout}
      />
      {currentWorkoutId === workout.id && (
        <CurrentWorkoutIdentifier
          workoutNum={workoutNum}
          amountOfSteps={amountOfSteps}
        />
      )}
      <Button
        key={workout.id}
        className={!workout.isGolden ? "Step" : "Step Golden"}
        sx={{
          top: CalcStepPosition("top", workoutNum, amountOfSteps),
          left: CalcStepPosition("left", workoutNum, amountOfSteps),
        }}
        onClick={workoutClicked}
      >
        <Box className="StepContainer">
          {workout.type}
          {workout.isGolden && <Sparkle />}
          {workout.isComplete ? (
            <CheckIcon className="StepIcon" fontSize="large" />
          ) : (
            <FitnessCenterIcon className="StepIcon" />
          )}
        </Box>
      </Button>
    </>
  );
}

export default Step;
