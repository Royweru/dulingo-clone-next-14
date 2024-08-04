import React from "react";
import {
  Datagrid,
  SelectInput,
  ReferenceInput,
  NumberInput,
  Create,
  Edit,
  TextInput,
  BooleanInput,
  required,
  SimpleForm,
} from "react-admin";
export const ChallengeOptionEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" />
        <TextInput source="text" />
        <BooleanInput source="correct" label="Correct option" />

        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="imageSrc" validate={[required()]} />
        <TextInput
          source="imageSrc"
          validate={[required()]}
          label="Image URL"
        />
        <TextInput
          source="audioSrc"
          validate={[required()]}
          label="Audio URL"
        />
      </SimpleForm>
    </Edit>
  );
};
