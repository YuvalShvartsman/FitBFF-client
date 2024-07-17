import "./Step.css";

import { Box, Button } from "@mui/material";

type StepProps = {
  step: {
    id: number;
    num: number;
    type: string;
    icon: string;
  };
};

type Position = "left" | "top";

function Step({ step }: StepProps) {
  const CalcPosition = (position: Position) => {
    if (position === "left")
      return `${38 + 20 * Math.sin((2 * Math.PI * step.num) / 7)}%`;
    else if (position === "top") return `${step.num * 14}%`;
  };

  return (
    <Button
      key={step.id}
      className="Step"
      style={{
        top: CalcPosition("top"),
        left: CalcPosition("left"),
      }}
    >
      {step.type}
    </Button>
  );
}

export default Step;
