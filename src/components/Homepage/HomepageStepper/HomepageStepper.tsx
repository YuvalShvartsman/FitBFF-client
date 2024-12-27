import React from "react";

import { steps } from "../../../dummyData";

import Step from "./Step/Step";
import WeekHeader from "./WeekHeader";

import { findCurrentSession } from "../../../helperFuncs/findCurrentSession";

function HomepageStepper() {
  const currentSessionId = findCurrentSession(steps);

  return (
    <div className="self-center flex flex-col items-center w-[650px] overflow-y-auto">
      {steps.map((week, weekIndex) => (
        <React.Fragment key={`week-${weekIndex}`}>
          <WeekHeader week={week} />

          <div className="relative h-[850px] w-full mt-12 mb-12">
            {week.sessions.map((session, sessionIndex) => (
              <Step
                session={session}
                key={session.id || `session-${weekIndex}-${sessionIndex}`}
                amountOfSteps={week.sessions.length}
                sessionNum={sessionIndex}
                currentSessionId={currentSessionId}
              />
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default HomepageStepper;
