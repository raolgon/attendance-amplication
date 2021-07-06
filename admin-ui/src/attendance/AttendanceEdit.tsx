import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AttendanceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Attendance" source="attendance" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Tags" source="tags" />
      </SimpleForm>
    </Edit>
  );
};
