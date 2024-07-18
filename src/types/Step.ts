import { Session } from "./Session";

export type Step = {
  week: number;
  title: string;
  desc: string;

  sessions: Session[];
};
