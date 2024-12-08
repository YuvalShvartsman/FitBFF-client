import { Week } from "../types/Week";

export const findCurrentWorkout = (steps: Week[]) => {
  for (const week of steps) {
    for (const workout of week.workouts) {
      if (workout.isComplete === undefined || workout.isComplete === false) {
        return workout.id;
      }
    }
  }
  return null;
};
