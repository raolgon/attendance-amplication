import { PrismaService } from "nestjs-prisma";
import { Prisma, Attendance } from "@prisma/client";

export class AttendanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AttendanceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendanceFindManyArgs>
  ): Promise<number> {
    return this.prisma.attendance.count(args);
  }

  async findMany<T extends Prisma.AttendanceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendanceFindManyArgs>
  ): Promise<Attendance[]> {
    return this.prisma.attendance.findMany(args);
  }
  async findOne<T extends Prisma.AttendanceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendanceFindUniqueArgs>
  ): Promise<Attendance | null> {
    return this.prisma.attendance.findUnique(args);
  }
  async create<T extends Prisma.AttendanceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendanceCreateArgs>
  ): Promise<Attendance> {
    return this.prisma.attendance.create<T>(args);
  }
  async update<T extends Prisma.AttendanceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendanceUpdateArgs>
  ): Promise<Attendance> {
    return this.prisma.attendance.update<T>(args);
  }
  async delete<T extends Prisma.AttendanceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendanceDeleteArgs>
  ): Promise<Attendance> {
    return this.prisma.attendance.delete(args);
  }
}
