import React from "react";
import {
  SimpleForm,
  Create,
  TextField,
  required,
  TextInput,
} from "react-admin";
export const CourseCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" label="title" validate={[required()]} />
        <TextInput source="imageSrc" label="ImageSrc" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};
