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
export const UnitCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" label="title" validate={[required()]} />
        <TextInput
          source="description"
          label="Description"
          validate={[required()]}
        />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="order" validate={[required()]} label="order" />
      </SimpleForm>
    </Create>
  );
};
