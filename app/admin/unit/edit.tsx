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
export const UnitEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" label="Title" validate={[required()]} />
        <TextInput
          source="description"
          label="Description"
          validate={[required()]}
        />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="order" validate={[required()]} label="order" />
      </SimpleForm>
    </Edit>
  );
};
