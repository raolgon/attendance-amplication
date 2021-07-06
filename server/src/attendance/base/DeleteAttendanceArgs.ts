import { ArgsType, Field } from "@nestjs/graphql";
import { AttendanceWhereUniqueInput } from "./AttendanceWhereUniqueInput";

@ArgsType()
class DeleteAttendanceArgs {
  @Field(() => AttendanceWhereUniqueInput, { nullable: false })
  where!: AttendanceWhereUniqueInput;
}

export { DeleteAttendanceArgs };
