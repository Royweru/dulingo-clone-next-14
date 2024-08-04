import React from "react";
import {
  Datagrid,
  SelectInput,
  ReferenceInput,
  NumberInput,
  Create,
  Edit,
  TextInput,
  SimpleForm,
} from "react-admin";
export const ChallengeEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="question" />
        <SelectInput
          source="type"
          choices={[
            {
              id: "SELECT",
              name: "SELECT",
            },
            {
              id: "ASSIST",
              name: "ASSIST",
            },
          ]}
        />
        <ReferenceInput source="lessonId" reference="lessons" />
        <NumberInput source="order" />
      </SimpleForm>
    </Edit>
  );
};
