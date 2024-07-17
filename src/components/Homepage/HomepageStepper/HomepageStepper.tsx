import "./HomePageStepper.css";

import { Box, Tooltip, Typography } from "@mui/material";

import { steps } from "../../../dummyData";
import Step from "./Step/Step";

import DescriptionIcon from "@mui/icons-material/Description";

function HomepageStepper() {
  return (
    <Box className="Stepper">
      {steps.map((week, key) => (
        <>
          <Box className="WeekHeader">
            <Typography className="WeekNumber">
              {"week - " + week.week}
            </Typography>
            <Typography className="WeekTitle">
              {"focus - " + week.title}
            </Typography>
            <Tooltip title={week.desc}>
              <Typography className="WeekDescription">
                <DescriptionIcon />
              </Typography>
            </Tooltip>
          </Box>

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
