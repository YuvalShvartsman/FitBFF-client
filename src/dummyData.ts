import { Week } from "./types/Week";

export const steps: Week[] = [
  {
    weekNum: 1,
    title: "Power Building",
    desc: "In this week we are going to focus on both power and volume. We will start each workout with functional exercises and continue working on isolated exercises with greater volume",
    sessions: [
      {
        id: 0,
        isComplete: true,
        isGolden: true,
        type: "Back&Legs",
        icon: "randomAssIcon",
      },
      {
        id: 1,
        isComplete: true,
        isGolden: true,
        type: "Chest&Arms",
        icon: "randomAssIcon",
      },
      { id: 2, isComplete: true, type: "Core", icon: "randomAssIcon" },
      { id: 3, isComplete: true, type: "Cardio", icon: "randomAssIcon" },
      { id: 4, isComplete: true, type: "Back&Legs", icon: "randomAssIcon" },
      { id: 5, type: "Chest&Arms", icon: "randomAssIcon" },
      { id: 6, type: "Rest", icon: "randomAssIcon" },
    ],
  },
  {
    weekNum: 2,
    title: "Power",
    desc: "In this week we focus on power! We shall put all of our attention onto our functional exercises and we will try as hard as we can to push our weights to full RM",

    sessions: [
      { id: 7, type: "Core", icon: "randomAssIcon" },
      { id: 8, type: "Cardio", icon: "randomAssIcon" },
      { id: 9, type: "Back&Legs", icon: "randomAssIcon" },
      { id: 10, type: "Chest&Arms", icon: "randomAssIcon" },
      { id: 11, type: "Core", icon: "randomAssIcon" },
      { id: 12, type: "Cardio", icon: "randomAssIcon" },
      { id: 13, type: "Rest", icon: "randomAssIcon" },
    ],
  },
  {
    weekNum: 3,
    title: "Volume",
    desc: "In this week we focus volume! It is important to build the base amount of muscle to progress",

    sessions: [
      { id: 14, type: "Back&Legs", icon: "randomAssIcon" },
      { id: 15, type: "Chest&Arms", icon: "randomAssIcon" },
      { id: 16, type: "Core", icon: "randomAssIcon" },
      { id: 17, type: "Cardio", icon: "randomAssIcon" },
      { id: 18, type: "Back&Legs", icon: "randomAssIcon" },
      { id: 19, type: "Chest&Arms", icon: "randomAssIcon" },
      { id: 20, type: "Rest", icon: "randomAssIcon" },
    ],
  },
];
