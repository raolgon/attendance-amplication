import { ArgsType, Field } from "@nestjs/graphql";
import { AttendanceCreateInput } from "./AttendanceCreateInput";

@ArgsType()
class CreateAttendanceArgs {
  @Field(() => AttendanceCreateInput, { nullable: false })
  data!: AttendanceCreateInput;
}

export { CreateAttendanceArgs };
