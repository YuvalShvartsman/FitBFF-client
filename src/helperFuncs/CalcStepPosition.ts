type Position = "left" | "top";

export const CalcStepPosition = (
  position: Position,
  sessionNum: number,
  amountOfSteps: number
) => {
  if (position === "left")
    return `${42 + 20 * Math.sin((2 * Math.PI * sessionNum) / amountOfSteps)}%`;
  else if (position === "top") return `${sessionNum * 14.7}%`;
};
