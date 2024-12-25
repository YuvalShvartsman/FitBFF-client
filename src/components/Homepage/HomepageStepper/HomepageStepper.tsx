import { Box } from "@mui/material";

import { steps } from "../../../dummyData";

import Step from "./Step/Step";
import WeekHeader from "./WeekHeader";

import { findCurrentSession } from "../../../helperFuncs/findCurrentSession";

function HomepageStepper() {
  const currentSessionId = findCurrentSession(steps);

  return (
    <Box className="flex flex-col items-center min-w-[35%] h-fit bg-dark overflow-y-auto overflow-x-hidden mt-5 ">
      {steps.map((week, key) => (
        <>
          <WeekHeader week={week} />

          <Box
            className="relative min-h-[120vh] w-10/12 bg-none mt-2 p-8"
            key={key}
          >
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
