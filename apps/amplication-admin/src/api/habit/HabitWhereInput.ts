import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type HabitWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  note?: StringNullableFilter;
  users?: UserListRelationFilter;
};
