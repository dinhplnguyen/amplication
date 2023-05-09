import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HabitListRelationFilter } from "../habit/HabitListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  habit?: HabitListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
