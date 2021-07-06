import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringFilter;
  id?: StringFilter;
  username?: StringFilter;
};
