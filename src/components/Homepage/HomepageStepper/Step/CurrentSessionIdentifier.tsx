import { calcStepPosition } from "../../../../helperFuncs/calcStepPosition";

type CurrentSessionIdentifierProps = {
  sessionNum: number;
  amountOfSteps: number;
};

function CurrentSessionIdentifier({
  amountOfSteps,
  sessionNum,
}: CurrentSessionIdentifierProps) {
  return (
    <div
      className="absolute z-10 outline-none"
      style={{
        top: `calc(${calcStepPosition(
          "top",
          sessionNum,
          amountOfSteps
        )} - 95px)`,
        left: `calc(${calcStepPosition(
          "left",
          sessionNum,
          amountOfSteps
        )} - 50px)`,
      }}
    >
      <button
        className="flex justify-center items-center w-[100px] h-[50px] 
        relative top-[50px] left-[50px] text-light font-bold text-lg border border-white rounded-lg
        animate-float triangle-pointer blue-step-gradient
        "
      >
        Start
      </button>
    </div>
  );
}

export default CurrentSessionIdentifier;
