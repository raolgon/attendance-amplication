import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AttendanceWhereInput } from "./AttendanceWhereInput";
import { Type } from "class-transformer";
import { AttendanceOrderByInput } from "./AttendanceOrderByInput";

@ArgsType()
class AttendanceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AttendanceWhereInput,
  })
  @Field(() => AttendanceWhereInput, { nullable: true })
  @Type(() => AttendanceWhereInput)
  where?: AttendanceWhereInput;

  @ApiProperty({
    required: false,
    type: AttendanceOrderByInput,
  })
  @Field(() => AttendanceOrderByInput, { nullable: true })
  @Type(() => AttendanceOrderByInput)
  orderBy?: AttendanceOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AttendanceFindManyArgs };
