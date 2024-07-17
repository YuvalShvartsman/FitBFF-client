import "./Step.css";

import { Button } from "@mui/material";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CheckIcon from "@mui/icons-material/Check";

type StepProps = {
  step: {
    id: number;
    type: string;
    icon: string;
    isComplete?: boolean;
    isGolden?: boolean;
  };
  stepNum: number;
  amountOfSteps: number;
};

type Position = "left" | "top";

function Step({ step, stepNum, amountOfSteps }: StepProps) {
  const CalcPosition = (position: Position) => {
    if (position === "left")
      return `${42 + 20 * Math.sin((2 * Math.PI * stepNum) / amountOfSteps)}%`;
    else if (position === "top") return `${stepNum * 14.7}%`;
  };

  return (
    <Button
      key={step.id}
      className={!step.isGolden ? "Step" : "Step Golden"}
      style={{
        top: CalcPosition("top"),
        left: CalcPosition("left"),
      }}
    >
      {step.type}
      {step.isComplete ? (
        <CheckIcon className="StepIcon" fontSize="large" />
      ) : (
        <FitnessCenterIcon className="StepIcon" />
      )}
    </Button>
  );
}

export default Step;
