import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const DampingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
