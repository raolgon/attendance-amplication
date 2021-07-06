import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AttendanceResolverBase } from "./base/attendance.resolver.base";
import { Attendance } from "./base/Attendance";
import { AttendanceService } from "./attendance.service";

@graphql.Resolver(() => Attendance)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class AttendanceResolver extends AttendanceResolverBase {
  constructor(
    protected readonly service: AttendanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
