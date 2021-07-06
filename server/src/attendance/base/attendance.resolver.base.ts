import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateAttendanceArgs } from "./CreateAttendanceArgs";
import { UpdateAttendanceArgs } from "./UpdateAttendanceArgs";
import { DeleteAttendanceArgs } from "./DeleteAttendanceArgs";
import { AttendanceFindManyArgs } from "./AttendanceFindManyArgs";
import { AttendanceFindUniqueArgs } from "./AttendanceFindUniqueArgs";
import { Attendance } from "./Attendance";
import { AttendanceService } from "../attendance.service";

@graphql.Resolver(() => Attendance)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class AttendanceResolverBase {
  constructor(
    protected readonly service: AttendanceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "read",
    possession: "any",
  })
  async _attendancesMeta(
    @graphql.Args() args: AttendanceFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Attendance])
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "read",
    possession: "any",
  })
  async attendances(
    @graphql.Args() args: AttendanceFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Attendance[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Attendance",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Attendance, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "read",
    possession: "own",
  })
  async attendance(
    @graphql.Args() args: AttendanceFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Attendance | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Attendance",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Attendance)
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "create",
    possession: "any",
  })
  async createAttendance(
    @graphql.Args() args: CreateAttendanceArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Attendance> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Attendance",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Attendance"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Attendance)
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "update",
    possession: "any",
  })
  async updateAttendance(
    @graphql.Args() args: UpdateAttendanceArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Attendance | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Attendance",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Attendance"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Attendance)
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "delete",
    possession: "any",
  })
  async deleteAttendance(
    @graphql.Args() args: DeleteAttendanceArgs
  ): Promise<Attendance | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
