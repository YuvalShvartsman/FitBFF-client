import "./HomePageStepper.css";

import { Box } from "@mui/material";

import { steps } from "../../../dummyData";

import Step from "./Step/Step";
import WeekHeader from "./WeekHeader/WeekHeader";

import { findCurrentSession } from "../../../helperFuncs/findCurrentSession";

function HomepageStepper() {
  const currentSessionId = findCurrentSession(steps);

  return (
    <Box className="Stepper">
      {steps.map((week, key) => (
        <>
          <WeekHeader week={week} />

          <Box className="Week" key={key}>
            {week.sessions.map((session, key) => (
              <Step
                session={session}
                key={key}
                amountOfSteps={week.sessions.length}
                sessionNum={key}
                currentSessionId={currentSessionId}
              />
            ))}
          </Box>
        </>
      ))}
    </Box>
  );
}

export default HomepageStepper;
