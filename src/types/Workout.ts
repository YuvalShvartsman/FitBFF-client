export type WorkoutType = {
  id: number;
  isComplete?: boolean;
  isGolden?: boolean;
  icon: string;

  exercises: ExcerciseType[];
  workoutName: string;
  type: GOAL_Type;
};

export type ExcerciseType = {
  exerciseName: string;
  numOfSets: number;
  numOfRepsPerSet: number;
  restTimePerSet: number;
  muscleGroup: MUSCLEGROUP_Type;
  isDone: boolean;
  type: DiFFICULTY_LEVEL_Type;
  exerciseDiscription: string;
};

export type GOAL_Type = "MuscleGain" | "Endurance" | "Health" | "PowerLifting";
export type MUSCLEGROUP_Type = "Legs" | "Chest" | "Arms";
export type DiFFICULTY_LEVEL_Type = "begginer" | "intermadiant";
