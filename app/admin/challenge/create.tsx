import React from "react";
import {
  Datagrid,
  SelectInput,
  ReferenceInput,
  NumberInput,
  SimpleForm,
  Create,
  TextInput,
} from "react-admin";
export const ChallengeCreate = () => {
  return (
    <Create>
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
    </Create>
  );
};
