import React from "react";
import { SimpleForm, Edit, required, TextInput } from "react-admin";
export const CourseEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" label="Id" validate={[required()]} />
        <TextInput source="title" label="title" validate={[required()]} />
        <TextInput source="imageSrc" label="ImageSrc" validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};
