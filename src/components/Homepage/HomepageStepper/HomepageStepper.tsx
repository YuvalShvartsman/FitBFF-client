import "./HomePageStepper.css";

import { Box } from "@mui/material";

import { steps } from "../../../dummyData";
import Step from "./Step/Step";

function HomepageStepper() {
  return (
    <Box className="Stepper">
      {steps.map((week, key) => (
        <>
          <Box className="WeekHeader">{"week:" + week.week}</Box>

          <Box className="Week" key={key}>
            {week.sessions.map((step, key) => (
              <Step
                step={step}
                key={key}
                amountOfSteps={week.sessions.length}
                stepNum={key}
              />
            ))}
          </Box>
        </>
      ))}
    </Box>
  );
}

export default HomepageStepper;
