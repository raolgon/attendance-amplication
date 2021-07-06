import { SortOrder } from "../../util/SortOrder";

export type AttendanceOrderByInput = {
  attendance?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  tags?: SortOrder;
  updatedAt?: SortOrder;
};
