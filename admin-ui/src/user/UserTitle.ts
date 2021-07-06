import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "username";

export const UserTitle = (record: TUser) => {
  return record.username;
};
