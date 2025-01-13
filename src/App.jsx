import SchoolCatalog from "./SchoolCatalog";
import Header from "./Header";
import ClassSchedule from "./ClassSchedule";
import React from "react";

export default function App() {
  return (
    <div>
      <Header />
      <SchoolCatalog />
      <ClassSchedule />
    </div>
  );
}
