import React from "react";
import {
  Datagrid,
  SelectInput,
  ReferenceInput,
  NumberInput,
  Create,
  TextInput,
  BooleanInput,
  required,
  SimpleForm,
} from "react-admin";
export const ChallengeOptionCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="text" />
        <BooleanInput source="correct" label="Correct option" />

        <ReferenceInput source="challengeId" reference="challenges" />

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
    </Create>
  );
};
