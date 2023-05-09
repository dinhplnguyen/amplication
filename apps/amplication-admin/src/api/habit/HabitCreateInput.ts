import { UserCreateNestedManyWithoutHabitsInput } from "./UserCreateNestedManyWithoutHabitsInput";

export type HabitCreateInput = {
  date?: Array<
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
  >;
  name: string;
  note?: string | null;
  users?: UserCreateNestedManyWithoutHabitsInput;
};
