import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AttendanceService } from "./attendance.service";
import { AttendanceControllerBase } from "./base/attendance.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("attendances")
@common.Controller("attendances")
export class AttendanceController extends AttendanceControllerBase {
  constructor(
    protected readonly service: AttendanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
