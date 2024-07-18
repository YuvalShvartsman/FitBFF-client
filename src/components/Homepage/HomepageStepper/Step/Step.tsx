import "./Step.css";

import { Box, Button } from "@mui/material";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CheckIcon from "@mui/icons-material/Check";
import { Session } from "../../../../types/Session";
import { useEffect, useState } from "react";

type StepProps = {
  session: Session;
  sessionNum: number;
  amountOfSteps: number;
  currentSessionId: number | null;
};

type Position = "left" | "top";

function Step({
  session,
  sessionNum,
  amountOfSteps,
  currentSessionId,
}: StepProps) {
  const [randomPos, setRandomPos] = useState("");

  const CalcPosition = (position: Position) => {
    if (position === "left")
      return `${
        42 + 20 * Math.sin((2 * Math.PI * sessionNum) / amountOfSteps)
      }%`;
    else if (position === "top") return `${sessionNum * 14.7}%`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomPos(`${Math.random() * 50}px`);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {currentSessionId === session.id && (
        <Box
          className="StartContainer"
          sx={{
            top: `calc(${CalcPosition("top")} - 115px)`,
            left: `calc(${CalcPosition("left")} - 65px)`,
          }}
        >
          <Button className="StartContainerRectangle">Start</Button>
        </Box>
      )}
      <Button
        key={session.id}
        className={!session.isGolden ? "Step" : "Step Golden"}
        sx={{
          top: CalcPosition("top"),
          left: CalcPosition("left"),
        }}
      >
        <Box className="StepContainer">
          {session.type}
          {session.isGolden && (
            <Box
              className="Sparkle"
              sx={{ top: randomPos, left: randomPos }}
            ></Box>
          )}
          {session.isComplete ? (
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
