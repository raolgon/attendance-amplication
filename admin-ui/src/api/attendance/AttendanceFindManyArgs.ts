import { AttendanceWhereInput } from "./AttendanceWhereInput";
import { AttendanceOrderByInput } from "./AttendanceOrderByInput";

export type AttendanceFindManyArgs = {
  where?: AttendanceWhereInput;
  orderBy?: AttendanceOrderByInput;
  skip?: number;
  take?: number;
};
