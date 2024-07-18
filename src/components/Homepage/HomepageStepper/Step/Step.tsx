import "./Step.css";

import { Box, Button } from "@mui/material";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CheckIcon from "@mui/icons-material/Check";

import { Session } from "../../../../types/Session";

import { CalcStepPosition } from "../../../../helperFuncs/CalcStepPosition";

import Sparkle from "./Sparkle/Sparkle";
import CurrentSessionIdentifier from "./CurrentSessionIdentifier/CurrentSessionIdentifier";

type StepProps = {
  session: Session;
  sessionNum: number;
  amountOfSteps: number;
  currentSessionId: number | null;
};

function Step({
  session,
  sessionNum,
  amountOfSteps,
  currentSessionId,
}: StepProps) {
  return (
    <>
      {currentSessionId === session.id && (
        <CurrentSessionIdentifier
          sessionNum={sessionNum}
          amountOfSteps={amountOfSteps}
        />
      )}
      <Button
        key={session.id}
        className={!session.isGolden ? "Step" : "Step Golden"}
        sx={{
          top: CalcStepPosition("top", sessionNum, amountOfSteps),
          left: CalcStepPosition("left", sessionNum, amountOfSteps),
        }}
      >
        <Box className="StepContainer">
          {session.type}
          {session.isGolden && <Sparkle />}
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
