import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AttendanceWhereInput = {
  attendance?: IntFilter;
  date?: DateTimeFilter;
  id?: StringFilter;
  tags?: StringNullableFilter;
};
