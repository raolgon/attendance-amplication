import { ArgsType, Field } from "@nestjs/graphql";
import { AttendanceWhereUniqueInput } from "./AttendanceWhereUniqueInput";

@ArgsType()
class AttendanceFindUniqueArgs {
  @Field(() => AttendanceWhereUniqueInput, { nullable: false })
  where!: AttendanceWhereUniqueInput;
}

export { AttendanceFindUniqueArgs };
