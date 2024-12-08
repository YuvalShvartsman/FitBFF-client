import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./WorkoutDialogContent.css";
import { ExcerciseType, WorkoutType } from "../../../../types/Workout";

type WorkoutDialogProps = {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  workout: WorkoutType;
};

export const WorkoutDialog = ({
  openDialog,
  setOpenDialog,
  workout,
}: WorkoutDialogProps) => {
  const getNameOfNumber = (num: number) => {
    switch (num) {
      case 1:
        return "first";
      case 2:
        return "second";
      case 3:
        return "third";
      case 4:
        return "fourth";
      case 5:
        return "fifth";
    }
  };

  const displayExercise = (exercise: ExcerciseType) => {
    const setsDisplay = [];
    for (let index = 0; index < exercise.numOfSets; index++) {
      setsDisplay.push(
        <TextField
          key={index}
          variant="standard"
          label={`${getNameOfNumber(index + 1)} set`}
        />
      );
    }

    return (
      <>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              {exercise.exerciseName} - {exercise.muscleGroup}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{exercise.exerciseDiscription}</Typography>
            <Box className="SetsContainer">
              {setsDisplay.map((set) => (
                <Box className="SetWithLimit">
                  {set} / {exercise.numOfRepsPerSet}
                </Box>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };
  return (
    <>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle className="WorkoutDialogHeaders">
          {workout.type} - {workout.workoutName}
        </DialogTitle>
        <DialogContent className="WorkoutDialogContent">
          {workout.exercises.map((exercise) => {
            return displayExercise(exercise);
          })}
        </DialogContent>
      </Dialog>
    </>
  );
};
