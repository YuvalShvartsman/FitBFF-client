import { Session } from "./Session";

export type Week = {
  weekNum: number;
  title: string;
  desc: string;

  sessions: Session[];
};
