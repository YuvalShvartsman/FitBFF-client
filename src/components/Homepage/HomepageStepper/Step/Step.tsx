import { IoCheckmarkOutline } from "react-icons/io5";
import { FaDumbbell } from "react-icons/fa6";

import { Session } from "../../../../types/Session";

import { calcStepPosition } from "../../../../helperFuncs/CalcStepPosition";

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
      <button
        key={session.id}
        className={
          !session.isGolden
            ? `absolute flex items-center justify-center h-24 w-24 rounded-full blue-step-gradient blue-step-shadow-custom
            transition-transform ease-out duration-300 text-xs font-bold text-light
            hover:translate-y-1 hover:blue-step-shadow-custom-hover active:motion-scale-in-90 active:motion-duration-150
            `
            : `absolute flex items-center justify-center h-24 w-24 rounded-full gold-step-gradient gold-step-shadow-custom 
            transition-transform ease-out duration-300 text-xs font-bold text-light
            hover:translate-y-1 hover:gold-step-shadow-custom-hover active:motion-scale-in-90 active:motion-duration-150
            `
        }
        style={{
          top: calcStepPosition("top", sessionNum, amountOfSteps),
          left: calcStepPosition("left", sessionNum, amountOfSteps),
        }}
      >
        <div className="relative flex items-center justify-center flex-col h-[90%] w-[90%] rounded-full">
          {session.type}
          {session.isGolden && <Sparkle />}
          {session.isComplete ? (
            <IoCheckmarkOutline fontSize="large" />
          ) : (
            <FaDumbbell fontSize="large" />
          )}
        </div>
      </button>
    </>
  );
}

export default Step;
