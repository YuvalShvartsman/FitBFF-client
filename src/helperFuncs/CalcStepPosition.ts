type Position = "left" | "top";

export const CalcStepPosition = (
  position: Position,
  workoutNum: number,
  amountOfSteps: number
) => {
  if (position === "left")
    return `${42 + 20 * Math.sin((2 * Math.PI * workoutNum) / amountOfSteps)}%`;
  else if (position === "top") return `${workoutNum * 14.7}%`;
};
