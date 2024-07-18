import { Week } from "../types/Week";

export const findCurrentSession = (steps: Week[]) => {
  for (const week of steps) {
    for (const session of week.sessions) {
      if (session.isComplete === undefined || session.isComplete === false) {
        return session.id;
      }
    }
  }
  return null;
};
