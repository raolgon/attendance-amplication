import { Attendance as TAttendance } from "../api/attendance/Attendance";

export const ATTENDANCE_TITLE_FIELD = "tags";

export const AttendanceTitle = (record: TAttendance) => {
  return record.tags;
};
