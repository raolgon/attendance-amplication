import { ArgsType, Field } from "@nestjs/graphql";
import { AttendanceWhereUniqueInput } from "./AttendanceWhereUniqueInput";
import { AttendanceUpdateInput } from "./AttendanceUpdateInput";

@ArgsType()
class UpdateAttendanceArgs {
  @Field(() => AttendanceWhereUniqueInput, { nullable: false })
  where!: AttendanceWhereUniqueInput;
  @Field(() => AttendanceUpdateInput, { nullable: false })
  data!: AttendanceUpdateInput;
}

export { UpdateAttendanceArgs };
