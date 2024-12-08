import "./HomePageStepper.css";

import { Box } from "@mui/material";

import { steps } from "../../../dummyData";

import Step from "./Step/Step";
import WeekHeader from "./WeekHeader/WeekHeader";

import { findCurrentWorkout } from "../../../helperFuncs/findCurrentWorkout";
import React from "react";

function HomepageStepper() {
  const currentWorkoutId = findCurrentWorkout(steps);

  return (
    <Box className="Stepper">
      {steps.map((week, key) => (
        <React.Fragment key={"Fragment" + key}>
          <WeekHeader key={"weekHeader" + key} week={week} />

          <Box className="Week" key={"week" + key}>
            {week.workouts.map((workout, key) => (
              <Step
                workout={workout}
                key={key}
                amountOfSteps={week.workouts.length}
                workoutNum={key}
                currentWorkoutId={currentWorkoutId}
              />
            ))}
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
}

export default HomepageStepper;
