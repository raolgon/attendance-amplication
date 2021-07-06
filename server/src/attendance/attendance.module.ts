import { Module } from "@nestjs/common";
import { AttendanceModuleBase } from "./base/attendance.module.base";
import { AttendanceService } from "./attendance.service";
import { AttendanceController } from "./attendance.controller";
import { AttendanceResolver } from "./attendance.resolver";

@Module({
  imports: [AttendanceModuleBase],
  controllers: [AttendanceController],
  providers: [AttendanceService, AttendanceResolver],
  exports: [AttendanceService],
})
export class AttendanceModule {}
