import "./HomePageStepper.css";

import { Box, Tooltip, Typography } from "@mui/material";

import { steps } from "../../../dummyData";
import Step from "./Step/Step";

import DescriptionIcon from "@mui/icons-material/Description";
import { findCurrentSession } from "../../../helperFuncs/findCurrentSession";

function HomepageStepper() {
  const currentSessionId = findCurrentSession(steps);

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
            <Tooltip
              title={week.desc}
              componentsProps={{
                tooltip: {
                  sx: {
                    fontSize: "18px",
                    padding: "10px",
                    bgcolor: "#09008882",
                    borderRadius: "20px",
                  },
                },
              }}
            >
              <Typography className="WeekDescription">
                <DescriptionIcon />
              </Typography>
            </Tooltip>
          </Box>

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
