import { UserUpdateManyWithoutHabitsInput } from "./UserUpdateManyWithoutHabitsInput";

export type HabitUpdateInput = {
  date?: Array<
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
  >;
  name?: string;
  note?: string | null;
  users?: UserUpdateManyWithoutHabitsInput;
};
