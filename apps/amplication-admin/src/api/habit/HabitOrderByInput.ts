import { SortOrder } from "../../util/SortOrder";

export type HabitOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  note?: SortOrder;
  updatedAt?: SortOrder;
};
