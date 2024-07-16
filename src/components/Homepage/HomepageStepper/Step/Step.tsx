import "./Step.css";

import { Box } from "@mui/material";

type StepProps = {
  step: {
    id: number;
    num: number;
    type: string;
    icon: string;
  };
};

function Step({ step }: StepProps) {
  console.log(Math.sin(step.num * 180));
  return (
    <Box
      key={step.id}
      className="Step"
      style={{
        top: `${step.num * 14}%`,
        left: `${38 + 20 * Math.sin((2 * Math.PI * step.num) / 7)}%`,
      }}
    >
      {step.type}
    </Box>
  );
}

export default Step;
