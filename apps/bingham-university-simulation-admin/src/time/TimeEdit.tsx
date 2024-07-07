import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const TimeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
