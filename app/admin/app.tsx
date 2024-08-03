"use client";
import { Admin, Resource, ListGuesser } from "react-admin";
import SimpleRestProvider from "ra-data-simple-rest";
import { CourseList } from "./course/list";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";

const dataProvider = SimpleRestProvider("/api");
const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="courses"
        list={CourseList}
        create={CourseCreate}
        edit={CourseEdit}
        recordRepresentation={"title"}
      />
    </Admin>
  );
};

export default App;
