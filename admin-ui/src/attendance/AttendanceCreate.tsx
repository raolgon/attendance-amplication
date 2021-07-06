import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AttendanceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Attendance" source="attendance" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Tags" source="tags" />
      </SimpleForm>
    </Create>
  );
};
