import React from "react";
import {
  SimpleForm,
  Create,
  TextField,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
} from "react-admin";
export const LessonCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" label="title" validate={[required()]} />
        <ReferenceInput source="unitId" reference="units" />
        <NumberInput source="order" validate={[required()]} label="order" />
      </SimpleForm>
    </Create>
  );
};
