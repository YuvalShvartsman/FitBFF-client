import { WorkoutType } from "./Workout";

export type Week = {
  weekNum: number;
  title: string;
  desc: string;
  workouts: WorkoutType[];
};
