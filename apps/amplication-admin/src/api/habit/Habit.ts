import { User } from "../user/User";

export type Habit = {
  createdAt: Date;
  date?: Array<
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
  >;
  id: string;
  name: string;
  note: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
