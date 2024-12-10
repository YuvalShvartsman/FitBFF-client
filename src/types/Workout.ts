export type WorkoutType = {
  id: number;
  isComplete?: boolean;
  isGolden?: boolean;
  icon: string;

  exercises: ExcerciseType[];
  workoutName: string;
  type: GoalType;
};

export type ExcerciseType = {
  exerciseName: string;
  numOfSets: number;
  numOfRepsPerSet: number;
  repsPerSetLitrely: number[];
  restTimePerSet: number;
  muscleGroup: MuscleGroupType;
  isDone: boolean;
  type: DifficultyLevelType;
  exerciseDiscription: string;
};

export type GoalType = "MuscleGain" | "Endurance" | "Health" | "PowerLifting";
export type MuscleGroupType = "Legs" | "Chest" | "Arms";
export type DifficultyLevelType = "begginer" | "intermadiant";
