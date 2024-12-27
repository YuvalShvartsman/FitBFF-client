import { steps } from "../../../dummyData";

import Step from "./Step/Step";
import WeekHeader from "./WeekHeader";

import { findCurrentSession } from "../../../helperFuncs/findCurrentSession";
import React from "react";

function HomepageStepper() {
  const currentSessionId = findCurrentSession(steps);

  return (
    <div className="flex flex-col items-center min-w-[35%] h-fit bg-dark overflow-y-auto overflow-x-hidden mt-5">
      {steps.map((week, weekIndex) => (
        <React.Fragment key={`week-${weekIndex}`}>
          <WeekHeader week={week} />

          <div className="relative min-h-[120vh] w-10/12 bg-none mt-2 p-8">
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
