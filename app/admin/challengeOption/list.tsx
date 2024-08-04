import React from "react";
import {
  Datagrid,
  List,
  TextField,
  SelectField,
  ReferenceField,
  NumberField,
  BooleanField,
} from "react-admin";
export const ChallengeOptionList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="text" />
        <BooleanField source="correct" />
        <ReferenceField source="challengeId" reference="challenges" />
        <TextField source="audioSrc" />
        <TextField source="imageSrc" />
      </Datagrid>
    </List>
  );
};
