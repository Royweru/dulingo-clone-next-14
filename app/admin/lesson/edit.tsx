import React from "react";
import {
  SimpleForm,
  Edit,
  TextField,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
} from "react-admin";
export const LessonEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" label="title" validate={[required()]} />
        <ReferenceInput source="unitId" reference="units" />
        <NumberInput source="order" validate={[required()]} label="order" />
      </SimpleForm>
    </Edit>
  );
};
