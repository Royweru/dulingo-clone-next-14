import React from "react";
import {
  Datagrid,
  List,
  TextField,
  ReferenceField,
  NumberField,
} from "react-admin";
export const LessonList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="title" />
        <TextField source="description" />
        <NumberField source="order" />
        <ReferenceField source="unitId" reference="units" />
      </Datagrid>
    </List>
  );
};
