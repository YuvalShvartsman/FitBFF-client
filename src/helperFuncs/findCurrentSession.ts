import { Step } from "../types/Step";

export const findCurrentSession = (steps: Step[]) => {
  for (const week of steps) {
    for (const session of week.sessions) {
      if (session.isComplete === undefined || session.isComplete === false) {
        return session.id;
      }
    }
  }
  return null;
};
