import { Habit } from "../habit/Habit";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  habit?: Array<Habit>;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
